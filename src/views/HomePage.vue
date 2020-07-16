<template>
    <div class="w800 h500 fl relative homePage" style="background-color: #ffffff;border: 1px solid #cccccc">
<!--        左侧栏-->
        <div class="fl wp15 hInherit relative" style="background-color: rgb(42,42,42);" >
            <ul>
                <li style="margin-top:20px"><a  @click="toImgMessage"><span class="iconfont" style="font-size: 30px">&#xe635;</span></a></li>
                <li style="margin-top:20px"><a  @click="toChatList"><span class="iconfont" style="font-size: 30px">&#xe635;</span></a></li>
                <li style="marin-top:20px"><a  @click="toFriendList"><span class="iconfont" style="font-size: 30px">&#xe635;</span></a></li>
                <li style="margin-top:20px"><a  @click="toOther"><span class="iconfont" style="font-size: 30px">&#xe635;</span></a></li>
                <li style="margin-top:20px"><span class="iconfont" style="font-size: 30px">&#xe64e;</span></li>
                <li style="margin-top:20px"><span class="iconfont" style="font-size: 30px">&#xe64e;</span></li>
            </ul>
            <ul style="margin-top:40px">
                <li style="margin-top:20px">
                    <a href="#" @click="chat">
                        <span class="iconfont" style="font-size: 30px">&#xe63f;</span>
                    </a>
                </li>
                <li style="margin-top:20px">
                    <a href="#" @click="chat">
                        <span class="iconfont" style="font-size: 30px">&#xe63f;</span>
                    </a>
                </li>
                <li style="margin-top:20px">
                    <a href="#" @click="chat">
                        <span class="iconfont" style="font-size: 30px">&#xe63f;</span>
                    </a>
                </li>
            </ul>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
    export default {
        data(){
            return{

            }
        },
        methods:{
            chat:function(){

            },
            toImgMessage:function(){

            },
            toChatList:function () {
                console.log('hello')
                this.$router.push('/homePage/ChatList')
            },
            toFriendList:function () {
                this.$router.push({path:'/homePage/FriendList'})
            },
            toOther:function(){

            },
            ttt:function () {
                document.querySelector('#testId2').height =
                    15 + document.querySelector('#textTest1').offsetHeight +'px'
                document.querySelector('#testId3').height =
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
