<template>
    <div style="width: inherit;height: inherit;">
        <div style="width: 100%;height:100%;width: 300px;height: 400px;border: 1px solid #cccccc">
            <el-input type="input" placeholder="输入账号" style="width: 200px;">

            </el-input>
            <el-input type="password" placeholder="输入密码" style="width: 200px"></el-input>
            <button @click="test">
                test
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                d:''
            }
        },
        methods:{
            test:function () {
                $.get("/index" , (data,status) => {
                    this.d = data;
                    console.log(data)
                    console.log(status)
                })
            }
        }
    }
</script>
