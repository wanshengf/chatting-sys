<template>
    <div>
        <!--        中间栏-->
        <div class="fl wp35 hInherit" style="background-color: rgb(233,233,233)">
            <!--            搜索栏-->
            <div id="search"
                 style="position: relative;height: 100px;width: 100%;">
                <el-input type="text"
                          style="width: 200px;
                          position: absolute;
                          left: 45%;top: 50%;
                          background-color: rgb(219,219,219);
                          transform: translate(-50%,-50%);"
                          placeholder="未开发"></el-input>
                <span   @click=""
                        style="position: absolute;right: 5%;top: 30%;font-size: 40px;
                        padding: 5px;
                        background-color: rgb(219,219,219);">+</span>
            </div>
            <!--            聊天各种对话信息栏-->
            <div id="chatSlider" style="height: 400px;width: 100%;overflow: scroll;">
                <!--                聊天对话单元-->
                <div @click="changeChat($event)" :id="item.id" style="width: 100%;height: 75px;position: relative;" v-for="item of userMessage" :key="item.id">
                    <img :src="'http://localhost:8080'+item.avatar" width="60"
                         style="position: absolute;left: 10px;top: 10px;"
                         alt="加载失败">
                    <span
                            style="position: absolute;
                          background-color: red;
                          border-radius: 6px;
                          top: 8px;
                          left: 66px;
                          width: 12px;height: 12px;"></span>
                    <span style="position: absolute;top: 10px;left: 75px;color: black">{{item.username}}</span>
                    <span style="position: absolute;bottom: 10px;left: 75px;color: #cccccc">{{item.sign}}</span>
                    <span style="position: absolute;color: #cccccc;top: 10px;right: 30px">11:22</span>
                </div>
            </div>
        </div>
        <!--        聊天框-->
        <div class="fl wp50 hInherit">
            <!--            聊天框头-->
            <div style="width: 100%;height: 100px;position: relative;">
                <h1 style="position: absolute;left: 20px;top:40px">{{toUserMessage.username}}</h1>
                <span style="position: absolute;right: 50px;top:40px;font-size: 40px">···</span>
            </div>
            <!--            聊天对话框-->
            <div class="chatContext"
                 style="width: 100%;
                height: 300px;
                background-color: rgb(245,245,245);
                overflow: scroll;
                border-top: #cccccc;">
<!--                <chat-others :user-get-message="receivedMessage"></chat-others>-->
<!--                <chat-myself :user-send-message="sendMessage"></chat-myself>-->
                <chat-module v-for="item in sendAndReceivedMessage" :id-label="idLabel" :chat-message="item" :key="item.id"></chat-module>
            </div>
            <!--            聊天发送框-->
            <div style="width: 100%;height: 100px;background-color: rgb(255,255,255);border-top: #cccccc;" >
                <textarea placeholder="输入要发送的信息" v-model="sendMessageToWS.dataMap.context" id="txt1" cols="30" rows="10" style="width: 100%;height: 70%;border: none;outline: none"></textarea>
                <button @click="sendMsg" style="background-color: rgb(245,245,245);position: absolute;right: 20px;bottom: 3px;padding:0px 10px 0px 10px;height: 20px">发送(S)</button>
            </div>
        </div>
    </div>
</template>
<script>
    import ChatMyself from "./ChatComponents/ChatMyself";
    import ChatOthers from "./ChatComponents/ChatOthers";
    import Test from "./ChatComponents/Test";
    import ChatModule from "./ChatComponents/ChatModule";
    export default {
        components:{
            ChatOthers,
            ChatMyself,
            Test,
            ChatModule
        },
        props:{

        },
        data(){
            return{
                ws:null,
                sendMessageToWS:{
                    type:'singleChat',
                    dataMap:{
                        fromid:'',
                        toid:'',
                        context:''
                    },
                    extand:'',
                    sendtime:''
                },
                sendMessage:{
                    avatar:'',
                    username:'',
                    context:''
                },
                receivedMessage:{
                    type:'',
                    id:'',
                    context:'',
                    avatar:'',
                    username:'',
                    sendtime:''
                },
                userMessage:[       //存储所有的用户对话信息
                    {
                        id:'',
                        username: '',
                        sign:'',
                        avatar:''
                    }
                ],
                toUserMessage:{     //要发送信息的用户
                    id:'',
                    username: '',
                    sign:'',
                    avatar:''
                },
                groupMessage:[      //存储所有的群组对话信息
                    {
                        id:0,
                        groupname:'',
                        notice:'',
                        avatar:'',
                        user_id:32,
                    }
                ],
                toGroupMessage:{
                    id:0,
                    groupname:'',
                    notice:'',
                    avatar:'',
                    user_id:32,
                },
                myMessage:{
                    id: Number,
                    username:String,
                    sign:String,
                    status:String,
                    avatar:String,
                    sex:Number
                },
                sendAndReceivedMessage:[
                    // {
                    //     messageType:Boolean,
                    //     id:Number,
                    //     username:String,
                    //     context:String
                    //      avatar:String
                    //      toId:String
                    // }
                ],
                idLabel:"2",

            }
        },
        methods:{
            wsConnect:function () {
                if (this.ws == null){
                    this.ws = new WebSocket('ws://127.0.0.1:8082/ws')
                    let ws = this.ws
                    ws.onopen = function () {
                        let msg = {
                            type: "connect",
                            dataMap: {
                                userid: "1",
                            }
                        };
                        msg.dataMap.userid = sessionStorage.getItem('userId')
                         let msgJson =  JSON.stringify(msg);
                        ws.send(msgJson)
                    }
                    ws.onmessage = (event) => {
                        //接收的数据处理
                        let msg = JSON.parse(event.data)
                        console.log(msg)
                        let received_msg = {}
                        received_msg.id = msg.dataMap.fromid
                        for (let item of this.userMessage){
                            if (item.id == received_msg.id){
                                received_msg.username = item.username
                                received_msg.context = msg.dataMap.context
                                received_msg.messageType = false
                                received_msg.avatar = item.avatar
                            }
                        }
                        console.log('received_msg')
                        console.log(received_msg)
                        this.sendAndReceivedMessage = this.sendAndReceivedMessage.concat(received_msg)
                        // console.log(received_msg)
                    }
                    ws.onclose = function () {
                        console.log('连接已关闭')
                    }
                }
            },
            sendMsg:function () {
                //发送到服务端
                let ws = this.ws;
                this.sendMessageToWS.extand = '1'
                let time = new Date()
                let timeArr =  time.toString().split(' ')
                //字符串存储格式  Sat Jul 18 2020 13:35:45 GMT+0800 (中国标准时间)
                //时间格式  Wed Jul 15 15:13:23 CST 2020
                this.sendMessageToWS.sendtime = timeArr[0]+' '+timeArr[1]+' '+timeArr[2]
                    +' '+timeArr[4]+' CST '+timeArr[3]
                this.sendMessageToWS.sendtime = 'Jul 18, 2020 1:45:47 PM'
                // this.sendMessageToWS.sendtime = new Date().toString().replace('+',' ').replace(' (中国标准时间)','')
                ws.send(JSON.stringify(this.sendMessageToWS))

                //本地聊天框渲染
                let message = new Object()
                message.messageType = true
                message.id = sessionStorage.getItem('userId')
                message.username = this.myMessage.username
                message.context = this.sendMessageToWS.dataMap.context
                message.avatar = this.myMessage.avatar
                message.toId = this.sendMessageToWS.dataMap.toid
                this.sendAndReceivedMessage =  this.sendAndReceivedMessage.concat(message)

                this.sendMessageToWS.dataMap.context = ''
            },
            getUserMessage:function () {
                let url = 'http://localhost:8080/user/mine?userid='+sessionStorage.getItem('userId')
                $.get(url,(data,status) => {
                    // console.log(url)
                    let dataJson = JSON.parse(data)
                    // console.log(dataJson)
                    if (dataJson.code == 0){
                        for (let item of dataJson.data.friend){
                            this.userMessage =  this.userMessage.concat(item.list)
                        }
                        //删除第一个模板元素
                        this.userMessage.shift()
                        // console.log('好有对象'+this.userMessage)
                        //获取本人信息
                        this.myMessage = dataJson.data.mine
                        //获取群组列表
                        this.groupMessage = this.groupMessage.concat(dataJson.data.group)
                        this.groupMessage.shift()
                    }
                })
            },
            changeChat:function (event) {
                //  更新发送的用户信息
                let id = event.currentTarget.id         //好友列表的用户id
                for (let item of this.userMessage){
                    //初始化receivedMessage
                    if (item.id == id){
                        this.toUserMessage = item
                        this.receivedMessage.avatar = item.avatar
                        this.receivedMessage.id = item.id
                        this.receivedMessage.username = item.username
                    }

                }
                //存储本人信息
                this.sendMessage.username = this.myMessage.username
                this.sendMessage.avatar = this.myMessage.avatar
                //  更新发送信息的配置
                this.sendMessageToWS.dataMap.toid = id
                this.sendMessageToWS.dataMap.fromid = sessionStorage.getItem('userId')

                //读取并渲染存储在sendAndReceivedMessage的信息
                this.idLabel = id

                // console.log('fromId'+this.sendMessage.dataMap.fromid)
            }
        },
        watch:{
            receiveMessage:function (nval,oval) {

            },
            sendMessage:function (nval,oval) {

            },

        },
        mounted() {
            this.wsConnect();
            this.getUserMessage();
        }
    }
</script>
<style>
    .test1{
        font-size: 14px;
        max-width: 50px;
    }
    .wp15{
        width: 15%;
    }
    .wp35{
        width: 35%;
    }
    .wp50{
        width: 50%;
    }
    .hInherit{
        height: inherit;
    }
    .w800{
        width: 800px;
    }
    .h500{
        height: 500px;
    }
    .border{
        border: 1px solid red;
    }
    .fl{
        float: left;
    }
    .relative{
        position: relative;
    }
    .absolute{
        position: absolute;
    }
    .homePage{
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
    }
    ul li{
        cursor: pointer;
    }
    #chatSlider div:hover{
        background-color: rgb(220,220,220);
        cursor: pointer;
    }
</style>
