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
                <div style="width: 100%;height: 75px;position: relative;">
                    <img src="../assets/imgs/test1.jpg" width="60"
                         style="position: absolute;left: 10px;top: 10px;"
                         alt="加载失败">
                    <span
                            style="position: absolute;
                          background-color: red;
                          border-radius: 6px;
                          top: 8px;
                          left: 66px;
                          width: 12px;height: 12px;"></span>
                    <span style="position: absolute;top: 10px;left: 75px;color: black">chatName</span>
                    <span style="position: absolute;bottom: 10px;left: 75px;color: #cccccc">chatMessage</span>
                    <span style="position: absolute;color: #cccccc;top: 10px;right: 30px">time</span>
                </div>
                <div style="width: 100%;height: 75px;position: relative;" >
                    <img src="../assets/imgs/test1.jpg" width="60"
                         style="position: absolute;left: 10px;top: 10px;"
                         alt="加载失败">
                    <span style="position: absolute;top: 10px;left: 75px;color: black">chatName</span>
                    <span style="position: absolute;bottom: 10px;left: 75px;color: #cccccc">chatMessage</span>
                    <span style="position: absolute;color: #cccccc;top: 10px;right: 30px">time</span>
                </div>
                <div style="width: 100%;height: 75px;position: relative;">
                    <img src="../assets/imgs/test1.jpg" width="60"
                         style="position: absolute;left: 10px;top: 10px;"
                         alt="加载失败">
                    <span style="position: absolute;top: 10px;left: 75px;color: black">chatName</span>
                    <span style="position: absolute;bottom: 10px;left: 75px;color: #cccccc">chatMessage</span>
                    <span style="position: absolute;color: #cccccc;top: 10px;right: 30px">time</span>
                </div>
                <div style="width: 100%;height: 75px;position: relative;">
                    <img src="../assets/imgs/test1.jpg" width="60"
                         style="position: absolute;left: 10px;top: 10px;"
                         alt="加载失败">
                    <span style="position: absolute;top: 10px;left: 75px;color: black">chatName</span>
                    <span style="position: absolute;bottom: 10px;left: 75px;color: #cccccc">chatMessage</span>
                    <span style="position: absolute;color: #cccccc;top: 10px;right: 30px">time</span>
                </div>
                <div style="width: 100%;height: 75px;position: relative;">
                    <img src="../assets/imgs/test1.jpg" width="60"
                         style="position: absolute;left: 10px;top: 10px;"
                         alt="加载失败">
                    <span style="position: absolute;top: 10px;left: 75px;color: black">chatName</span>
                    <span style="position: absolute;bottom: 10px;left: 75px;color: #cccccc">chatMessage</span>
                    <span style="position: absolute;color: #cccccc;top: 10px;right: 30px">time</span>
                </div>
                <div style="width: 100%;height: 75px;position: relative;">
                    <img src="../assets/imgs/test1.jpg" width="60"
                         style="position: absolute;left: 10px;top: 10px;"
                         alt="加载失败">
                    <span style="position: absolute;top: 10px;left: 75px;color: black">chatName</span>
                    <span style="position: absolute;bottom: 10px;left: 75px;color: #cccccc">chatMessage</span>
                    <span style="position: absolute;color: #cccccc;top: 10px;right: 30px">time</span>
                </div>
            </div>
        </div>
        <!--        聊天框-->
        <div class="fl wp50 hInherit">
            <!--            聊天框头-->
            <div style="width: 100%;height: 100px;position: relative;">
                <h1 style="position: absolute;left: 20px;top:40px">userName</h1>
                <span style="position: absolute;right: 50px;top:40px;font-size: 40px">···</span>
            </div>
            <!--            聊天对话框-->
            <div style="width: 100%;height: 300px;background-color: rgb(245,245,245);border-top: #cccccc;">
                <!--                别人发信息过来的块级元素-->
                <div name="user1" style="position: relative;width: 100%;" id="testId2">
                    <img style="display: inline-block;position: absolute;left: 0;top: 5px" src="../assets/imgs/test1.jpg" alt="无法显示" width="30">
                    <span style="position: absolute;left: 40px;top: 1px;color: #cccccc">userName</span>
                    <span id="textTest1"
                          style="font-size: 14px;
                           position: absolute;
                           left: 40px;
                           top: 20px;
                           background-color: white;
                           padding: 5px;
                           max-width: 200px;
                           text-align: left;
                           border-radius: 2px;
                           word-wrap: break-word;">卧槽，各位大佬带带我，我是垃圾，谢谢啦，一下但事实上所所所所所所所</span>
                    <span style="display: inline-block;
                    width: 8px;
                    height: 8px;
                    transform: rotate(45deg);
                    position: absolute;
                    left: 35px;
                    top: 25px;
                    background-color: white"></span>
                </div>
                <!--                自己发信息过去的块级元素-->
                <div name="user2" style="position: relative;" id="testId3">
                    <img src="../assets/imgs/test1.jpg" alt="无法显示" width="30" style="position: absolute;right: 10px;top: 10px;">
                    <span style="position: absolute;
                        color: #cccccc;
                        top: 5px;
                        right: 45px;">userName</span>
                    <span  id="textTest2"
                           style="position: absolute;
                          background-color: white;
                          padding: 5px;
                          text-align: left;
                          border-radius: 2px;
                          word-wrap: break-word;
                          max-width: 200px;
                          right: 45px;
                          top: 25px;">卧槽，各位大佬带带我，我是垃圾，谢谢啦，一下但事实上所所所所所所所</span>
                    <span style="
                        position: absolute;
                        width: 8px;
                        height: 8px;
                        transform: rotate(45deg);
                        right: 43px;
                        top: 28px;
                        background-color: white;
                        "></span>
                </div>
            </div>
            <!--            聊天发送框-->
            <div style="width: 100%;height: 100px;background-color: rgb(255,255,255);border-top: #cccccc;" >
                <textarea name="txtarea" id="txt1" cols="30" rows="10" style="width: 100%;height: 70%;border: none;outline: none">发送框哦</textarea>
                <button @click="ttt" style="background-color: rgb(245,245,245);position: absolute;right: 20px;bottom: 3px;padding:0px 10px 0px 10px;height: 20px">发送(S)</button>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return{

            }
        },
        methods:{
            ttt:function () {
                document.querySelector('#testId2').style.height =
                    15 + document.querySelector('#textTest1').offsetHeight +'px'
                document.querySelector('#testId3').style.height =
                    25 + document.querySelector('#textTest2').offsetHeight +'px'
            },
            beforeEnter:function () {
                this.ttt()
            }
        },
        mounted() {
            this.ttt()
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
