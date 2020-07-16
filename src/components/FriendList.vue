<template>
    <div>
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
<!--            用户列表-->
            <div style="height: 400px">
<!--&lt;!&ndash;                添加好友&ndash;&gt;-->
<!--                <friend></friend>-->
<!--&lt;!&ndash;                公众号&ndash;&gt;-->
<!--                <friend></friend>-->
<!--&lt;!&ndash;                群聊&ndash;&gt;-->
<!--                <friend></friend>-->
<!--                好友组-->
                <friend v-for="friend in friends" :friend-group="friend" :key="friend.id"></friend>
            </div>
        </div>

    </div>
</template>
<script>
    import Friend from './FriendComponents/Friend'
    export default {
        components:{
            Friend
        },
        data(){
            return{
                friends:[]
            }
        },
        methods:{
            getFriendMessage:function () {
                let url = 'http://localhost:8080/user/mine?userid=1'
                $.get(url,(data,status) => {
                    console.log(url)
                    let dataJson = JSON.parse(data)
                    console.log(dataJson)
                    if (dataJson.code == 0){
                        this.friends = dataJson.data.friend
                        console.log(this.friends)
                        console.log('获取用户信息成功');
                    }
                })
            }
        },
        mounted() {
            this.getFriendMessage();
        }
    }
</script>
<style>

</style>
