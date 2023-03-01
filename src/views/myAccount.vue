<template>
    <!-- 背景 -->
    <div class="hit-680 flex">
        <!-- 登录 -->
        <div class="lg-re">
            <div class="cl-fe lg-titl fw-800">{{ isLogin? '账号密码登录':'注册' }}</div>
            <div class="flex mb-10">
                <div class="w-p20 cl-fe">账号</div>
                <el-input class="w-p60" v-model="account" placeholder="请输入账号" />
            </div>
            <div class="flex mb-10">
                <div class="w-p20 cl-fe">密码</div>
                <el-input class="w-p60" v-model="password" type="password" show-password placeholder="请输入密码" />
            </div>
            <div class="flex mb-10" v-show="!isLogin">
                <div class="w-p20 cl-fe">确认密码</div>
                <el-input class="w-p60" v-model="repassword" type="password" show-password placeholder="请输入确认密码" />
            </div>
            <div>
                <div class="btn-log fw-800">{{ isLogin? '登录':'注册' }}</div>
                <div class="fw-800 cl-fe w-30" @click="changeRegiter">{{ isLogin? '注册':'登录' }}</div>
            </div>
        </div>
    </div>
</template>

<script>
import { method } from 'lodash';

export default {
    name:'myaccount',
    data(){
        return{
            logintitle:"",
            isLogin: true,
            account: "",
            password: "",
            repassword: "",
        }
    },
    methods: {
        changeRegiter(){
            this.isLogin = !this.isLogin;
        }
    }
}
</script>

<style scoped>
.w-30{
    width: 30px;
}
.hit-680{
  height: 680px;
}
.flex{
    display: flex;
}
.lg-re{
    width: 28%;
    margin: auto;
    background: #997e61;
    border-radius: 10px;
    padding: 50px 90px 80px 90px;
}
.mb-10{
    margin-bottom: 10px;
}
.w-p20{
    width: 20%;
}
.w-p60{
    width: 70%;
}
.cl-fe{
    color: #fef6f1;
}
.lg-titl{
    text-align: center;
    margin-bottom: 20px;
}
.btn-log{
    width: 60%;
    background: #fef6f1;
    border-radius: 20px;
    margin: auto;
    text-align: center;
    color: #997e61;
    height: 30px;
    line-height: 30px;
    margin-top: 30px;
}
.fw-800{
    font-weight: 800;
}
</style>