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
                <chat-others :user-get-message="receivedMessage"></chat-others>
                <chat-myself :user-send-message="sendMessage"></chat-myself>
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
    export default {
        components:{
            ChatOthers,
            ChatMyself
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
                }
            }
        },
        methods:{
            adjustHeight:function () {
                document.querySelector('.testId2').style.height =
                    15 + document.querySelector('#textTest1').offsetHeight +'px'
                document.querySelector('.testId3').style.height =
                    25 + document.querySelector('#textTest2').offsetHeight +'px'
            },
            wsConnect:function () {
                if (this.ws == null){
                    this.ws = new WebSocket('ws://127.0.0.1:8082/ws')
                    let ws = this.ws
                    ws.onopen = function () {
                        let msg = {
                            type: "connect",
                            dataMap: {
                                userid: "1",
                            },
                            extand: "",
                            sendtime:""
                        };
                         let msgJson =  JSON.stringify(msg);
                        ws.send(msgJson)

                        // console.log(ws.readyState)
                    }
                    ws.onmessage = function (event) {
                        let received_msg = event.data;
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
                ws.send(JSON.stringify(this.sendMessageToWS))

                //测试
                $('.chatContext').append('<chat-myself ></chat-myself>')

                //本地聊天框渲染
                this.sendMessage.context = this.sendMessageToWS.dataMap.context

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
                        //获取群组列表
                        this.groupMessage = this.groupMessage.concat(dataJson.data.group)
                        this.groupMessage.shift()
                    }
                })
            },
            changeChat:function (event) {
                //  更新发送的用户信息
                let id = event.currentTarget.id
                for (let item of this.userMessage){
                    if (item.id == id){
                        this.toUserMessage = item
                    }
                }
                //  更新发送信息的配置
                this.sendMessage.dataMap.toid = id

                this.sendMessage.dataMap.fromid = sessionStorage.getItem('userId')
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
            // this.adjustHeight();
            this.wsConnect();
            this.getUserMessage()
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
