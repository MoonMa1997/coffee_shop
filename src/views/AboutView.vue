<template>
  <div class="about">
    <h1>This is an about page</h1>
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
/* @media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
} */
</style>
