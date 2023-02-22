<template>
  <div class="about hit-700 pd-15 flex">
    <div class="wid-per-20 hg-per-100">
      <div class="xl-list">
        <div class="ft-cp">产品系列</div>
        <div class="ft-xl mrgt-30">全部</div>
        <div class="ft-xl">咖啡系列</div>
        <div class="ft-xl">茶系列</div>
        <div class="ft-xl">甜品系列</div>
        <div class="ft-xl">咖啡产品</div>
        <div class="ft-xl">周边产品</div>
      </div>
    </div>
    <div class="wid-per-80 hg-per-100 pd-5-2">
      <div>
        <div>● 咖啡系列</div>
        <div>
          <div class="cp-div">
            <div>图</div>
            <div class="kf-bg">冷萃冰咖啡</div>
            <div>+</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive,onMounted} from "vue";
import {alldata} from "@/http/api/homeapi.js"

export default {
  name: "about",
  setup(){
    const datas = reactive({
      value:[],
    })
    const methods = {
      requestall(){
        // const data={
        //   card: "1",
        //   code: "",
        //   confirmPassword: "123456Ma",
        //   nickname: "2",
        //   password: "123456Ma",
        //   phone: "3",
        //   roleId: "102",
        //   username: "44",
        //   uuid: "",
        // };
        const data={
          pageNum: 1,
          pageSize: 10
        };
        alldata(data).then(res => {
          datas.value=res
          console.log(res);
        }).catch(err => {
          console.log(err)
        })
      }
    }
    onMounted(()=>{
      methods.requestall()
    })
    return{
      ...methods
    }
  }
}
</script>

<style>
.wid-per-20{
  width: 20%;
}
.wid-per-80{
  width: 80%;
}
.hit-700{
  height: 680px;
}
.pd-15{
  padding: 0 15%;
}
.hg-per-100{
  height: 100%;
}
.pd-5{
  padding: 6% 5%;
}
.flex{
  display: flex;
}
.ft-cp{
  color: #966612;
  font-size: x-large;
  font-weight: 600;
}
.ft-xl{
  color: #bd8422;
  font-size: larger;
  font-weight: 700;
  padding: 3px;
}
.mrgt-30{
  margin-top: 30px;
}
.xl-list{
  border-right: 1px solid #ccc;
  height: 70%;
  margin-top: 30%;
  padding-top: 30%;
  padding-left: 28%;
}
.pd-5-2{
  padding: 5% 2%;
}
.cp-div{
  width: 200px;
  height: 220px;
}
.kf-bg{
  width: 160px;
  height: 145px;
  background: #a1d0a0;
  border-radius: 20%;
  margin: auto;
}
</style>
