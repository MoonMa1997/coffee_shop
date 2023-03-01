<template>
    <div class="hit-680 flex">
        <div class="w-p50 ht-per100"></div>
        <div class="w-p50 ht-per100 pdt-40">
            <p>Contact Us <br> 联系我们</p>
            <div>●客服电话：000-123456 (工作时间： 8:00-18:00)</div>
            <div>●售后电话：000-654321 (工作时间： 10:00-17:00)</div>
            <div>●邮箱：123456@qq.com</div>
            <p>
                欢迎通过此联系窗口<br>
                将您遇到的问题或反馈填写完毕后<br>
                我们收到将尽快处理
            </p>
            <div>
                <div class="mgb-8">购买区域：
                    <el-select-v2
                        v-model="value"
                        :options="options"
                        placeholder="请选择"
                    />
                </div>
                <div class="mgb-8">
                    消费日期：
                    <el-date-picker
                        v-model="value1"
                        type="date"
                        placeholder="请选择"
                        size="default"
                    />
                    消费时间： 
                    <el-time-picker
                        v-model="value2"
                        arrow-control
                        placeholder="请选择"
                    />
                </div>
                <div class="mgb-8">
                    姓名：
                    <el-input class="w-220" v-model="input" placeholder="请输入" />
                    性别：
                    <el-radio-group v-model="radio2" class="ml-4">
                        <el-radio label="1">男</el-radio>
                        <el-radio label="2">女</el-radio>
                    </el-radio-group>
                </div>
                <div class="mgb-8">
                    联系电话：
                    <el-input class="w-220" v-model="input" placeholder="请输入" />
                    联系邮箱：
                    <el-input class="w-220" v-model="input" placeholder="请输入" />
                </div>
                <div>
                    相关说明：
                    <el-input
                        class="w-600"
                        v-model="textarea"
                        maxlength="30"
                        placeholder="请输入"
                        show-word-limit
                        type="textarea"
                    />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "contactUs",
    data(){
        return{
            textarea: "",
            radio2: "1",
            input: '',
            value2: null,
            value1: null,
            value: null,
            options: [
                {
                    value: 1,
                    label: 'a'
                },
                {
                    value: 2,
                    label: 'b'
                },
                {
                    value: 3,
                    label: 'c'
                },{
                    value: 4,
                    label: 'd'
                },
                {
                    value: 5,
                    label: 'e'
                },
            ]
        }
    }
}
</script>
<style scoped>
.w-p50{
    width: 50%;
}
.hit-680{
  height: 680px;
}
.flex{
    display: flex;
}
.ht-per100{
    height: 100%;
}
.w-220{
    width: 220px;
}
.w-600{
    width: 520px;
}
.mgb-8{
    margin-bottom: 8px;
}
.pdt-40{
    padding-top: 40px;
}
</style>