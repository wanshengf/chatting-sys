<template>
    <!--                自己发信息过去的块级元素-->
    <div name="user2" style="position: relative;" class="div1">
        <img src="../..//assets/imgs/test1.jpg" alt="无法显示" width="30" style="float:right;margin-right: 10px;margin-top: 10px;">
        <span style="position: absolute;
                        color: #cccccc;
                        top: 5px;
                        right: 45px;">userName</span>
        <span  class="textTest2"
               style="float: right;
                          background-color: white;
                          padding: 5px;
                          text-align: left;
                          border-radius: 2px;
                          word-wrap: break-word;
                          max-width: 200px;
                          margin-right: 5px;
                          margin-top: 25px;">卧槽，各位大佬带带我，我是垃圾，谢谢啦，一下但事实上所所所所所所所</span>
        <span style="
                        position: absolute;
                        width: 8px;
                        height: 8px;
                        transform: rotate(45deg);
                        right: 43px;
                        top: 28px;
                        background-color: white;
                        "></span>
        <div class="clear"></div>
    </div>
</template>
<script>
    export default {
        props:{
            userSendMessage:Object
        },
        data(){
            return{
                mgs:{
                    username:this.userSendMessage.username,
                    avatar:this.userSendMessage.avatar,
                    context:this.userSendMessage.context
                }
            }
        },
        methods:{
            adjustHeight:function () {
                document.querySelector('.div1').style.height =
                    18 + document.querySelector('.textTest1').offsetHeight +'px'
            }
        },
        computed:{

        },
        mounted() {

        },
        created() {

        }
    }
</script>
<style>
    .clear{
        clear: both;
    }
</style>
