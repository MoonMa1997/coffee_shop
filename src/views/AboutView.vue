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
    <div class="wid-per-80 hg-per-100 pd-5-2 scl-at">
      <div>
        <div class="mrgb-15">● 咖啡系列</div>
        <div class="flex wrap">
          <!-- one coffee -->
          <div class="cp-div">
            <div class="cf-pic">
              <img class="wid-per-100" src="../assets/images/coffee.png" />
            </div>
            <div class="kf-bg">
              <div class="cf-font">冷萃冰咖啡</div>
            </div>
            <div class="plus" @click="dialogVisible = true">＋</div>
          </div>

          <div class="cp-div">
            <div class="cf-pic">
              <img class="wid-per-100" src="../assets/images/coffee.png" />
            </div>
            <div class="kf-bg">
              <div class="cf-font">冷萃冰咖啡</div>
            </div>
            <div class="plus" @click="dialogVisible = true">＋</div>
          </div>

          <div class="cp-div">
            <div class="cf-pic">
              <img class="wid-per-100" src="../assets/images/coffee.png" />
            </div>
            <div class="kf-bg">
              <div class="cf-font">冷萃冰咖啡</div>
            </div>
            <div class="plus" @click="dialogVisible = true">＋</div>
          </div>

          <div class="cp-div">
            <div class="cf-pic">
              <img class="wid-per-100" src="../assets/images/coffee.png" />
            </div>
            <div class="kf-bg">
              <div class="cf-font">冷萃冰咖啡</div>
            </div>
            <div class="plus" @click="dialogVisible = true">＋</div>
          </div>

          <div class="cp-div">
            <div class="cf-pic">
              <img class="wid-per-100" src="../assets/images/coffee.png" />
            </div>
            <div class="kf-bg">
              <div class="cf-font">冷萃冰咖啡</div>
            </div>
            <div class="plus" @click="dialogVisible = true">＋</div>
          </div>

        </div>

        <div class="mrgb-15">● 茶系列</div>
        <div class="flex wrap">
          <!-- one coffee -->
          <div class="cp-div">
            <div class="cf-pic">
              <img class="wid-per-100 het-per-100" src="../assets/images/tea1.png" />
            </div>
            <div class="kf-bg">
              <div class="cf-font">柠檬茶</div>
            </div>
            <div class="plus" @click="dialogVisible = true">＋</div>
          </div>

          <div class="cp-div">
            <div class="cf-pic">
              <img class="wid-per-100 het-per-100" src="../assets/images/tea1.png" />
            </div>
            <div class="kf-bg">
              <div class="cf-font">薄荷红茶</div>
            </div>
            <div class="plus" @click="dialogVisible = true">＋</div>
          </div>

          <div class="cp-div">
            <div class="cf-pic">
              <img class="wid-per-100 het-per-100" src="../assets/images/tea1.png" />
            </div>
            <div class="kf-bg">
              <div class="cf-font">冻柠茶</div>
            </div>
            <div class="plus" @click="dialogVisible = true">＋</div>
          </div>

          <div class="cp-div">
            <div class="cf-pic">
              <img class="wid-per-100 het-per-100" src="../assets/images/tea1.png" />
            </div>
            <div class="kf-bg">
              <div class="cf-font">橙汁</div>
            </div>
            <div class="plus" @click="dialogVisible = true">＋</div>
          </div>

          <div class="cp-div">
            <div class="cf-pic">
              <img class="wid-per-100 het-per-100" src="../assets/images/tea1.png" />
            </div>
            <div class="kf-bg">
              <div class="cf-font">冰柠檬</div>
            </div>
            <div class="plus" @click="dialogVisible = true">＋</div>
          </div>

        </div>

        <div class="mrgb-15">● 甜品系列</div>
        <div class="flex wrap">
          <!-- one coffee -->
          <div class="cp-div">
            <div class="cf-pic">
              <img class="wid-per-100" src="../assets/images/dessert.png" />
            </div>
            <div class="kf-bg">
              <div class="cf-font">草莓蛋糕</div>
            </div>
            <div class="plus" @click="dialogVisible = true">＋</div>
          </div>

          <div class="cp-div">
            <div class="cf-pic">
              <img class="wid-per-100" src="../assets/images/dessert.png" />
            </div>
            <div class="kf-bg">
              <div class="cf-font">草莓蛋糕</div>
            </div>
            <div class="plus" @click="dialogVisible = true">＋</div>
          </div>

          <div class="cp-div">
            <div class="cf-pic">
              <img class="wid-per-100" src="../assets/images/dessert.png" />
            </div>
            <div class="kf-bg">
              <div class="cf-font">草莓蛋糕</div>
            </div>
            <div class="plus" @click="dialogVisible = true">＋</div>
          </div>

          <div class="cp-div">
            <div class="cf-pic">
              <img class="wid-per-100" src="../assets/images/dessert.png" />
            </div>
            <div class="kf-bg">
              <div class="cf-font">草莓蛋糕</div>
            </div>
            <div class="plus" @click="dialogVisible = true">＋</div>
          </div>

        </div>
      </div>
    </div>
    <!-- 弹框 -->
    <el-dialog
      v-model="dialogVisible"
      title=""
      width="45%"
    >
      <div>
        <!-- 介绍 -->
        <div class="flex bdt-1">
          <div class="intro-img">
          </div>
          <div>
            <div>美式咖啡</div>
            <div>简单即是美味，萃取经典浓缩咖啡，以水调和，香气浓郁漫溢，毫升数仅供参考，饮品量以实际为准。</div>
          </div>
        </div>
        <!-- 类型 -->
        <div>
          <div class="flex line-type">
            <div class="wid-per-5">杯型</div>
            <div class="flex jtf-bt wid-per-95">
              <div class="bottle-type">小杯 320ml</div>
              <div class="bottle-type">中杯 480ml</div>
              <div class="bottle-type">大杯 600ml</div>
            </div>
          </div>
          <div class="flex line-type">
            <div class="wid-per-5">甜度</div>
            <div class="flex jtf-bt wid-per-95">
              <div class="ice-type">无糖</div>
              <div class="ice-type">三分糖</div>
              <div class="ice-type">五分糖</div>
              <div class="ice-type">七分糖</div>
              <div class="ice-type">全糖</div>
            </div>
          </div>
          <div class="flex line-type">
            <div class="wid-per-5">温度</div>
            <div class="flex jtf-bt wid-per-95">
              <div class="ice-type">正常冰</div>
              <div class="ice-type">少冰</div>
              <div class="ice-type">去冰</div>
              <div class="ice-type">常温</div>
              <div class="ice-type">热</div>
            </div>
          </div>
          <div class="flex line-type">
            <div class="wid-per-15">添加或更换牛奶</div>
            <div class="flex jtf-bt wid-per-85">
              <div class="mulk-type">脱脂牛奶</div>
              <div class="mulk-type">全脂牛奶</div>
              <div class="mulk-type">燕麦奶</div>
            </div>
          </div>
        </div>
      </div>
      <template #footer>
        <span class="dialog-footer footer-dig">
          <div>数量 - 1 +</div>
          <!-- <el-button @click="dialogVisible = false">Cancel</el-button> -->
          <el-button type="primary" @click="dialogVisible = false">
            添加至购物车 ￥36
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import { reactive,onMounted} from "vue";
import {alldata} from "@/http/api/homeapi.js"

export default {
  name: "about",
  data(){
    return{
      dialogVisible : false,
    }
  },
  setup(){
    const datas = reactive({
      value:[],
    })
    const methods = {
      requestall(){
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
  },
  mounted() {
    console.log(`the component is now mounted.`)
  },
  methods: {
    increment() {
      this.count++
    }
  },
}
</script>

<style scoped>
.about >>> .el-dialog{
  background: #caa56a; 
  border-radius: 30px;
}
.about >>> .el-button{
  color: #d69d39;
  background-color:white;
  border: none;
  border-color: white;
  border-radius: 20%;
}
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
  cursor: pointer;
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
  position: absolute;
  left: 11%;
  top: 14%;
}
.cf-pic{
  width: 85px;
  height: 106px;
  position: absolute;
  left: 29%;
  z-index: 3;
}
.wid-per-100{
  width: 100%;
}
.cf-font{
  position: absolute;
  top: 56%;
  text-align: center;
  width: 100%;
  left: 0;
  font-weight: 800;
}
.plus{
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: #e5b35e;
  position: absolute;
  bottom: 12%;
  left: 40%;
  color: white;
  font-size: xxx-large;
  line-height: 37px;
}
.mrgb-15{
  margin-bottom: 15px;
}
.wrap{
  flex-wrap: wrap;
}
.scl-at{
  overflow-y: auto;
}

/*定义滚动条宽高及背景，宽高分别对应横竖滚动条的尺寸*/
.scl-at::-webkit-scrollbar{
    height: 4px;
    background-color: #fef6f1;
}
/*定义滚动条的轨道，内阴影及圆角*/
.scl-at::-webkit-scrollbar-track{
    -webkit-box-shadow: inset 0 0 0px rgba(0,0,0,.3);
    border-radius: 1px;
    background-color: #fef6f1;
}
/*定义滑块，内阴影及圆角*/
.scl-at::-webkit-scrollbar-thumb{
    height: 4px;
    border-radius: 1px;
    -webkit-box-shadow: inset 0 0 0px rgba(0,0,0,.3);
    background-color: rgb(240 219 175);
}
.het-per-100{
  height: 100%;
}
.intro-img{
  background-image: url(../assets/images/coffee.png);
  background-size: 70px 70px;
  border-radius: 50%;
  background-repeat: no-repeat;
  width: 70px;
  height: 70px;
  margin: 0 30px 10px 30px;
}
.bdt-1{
  border-bottom: 1px solid white;
}
.bottle-type{
  width: 100px;
  height: 35px;
  line-height: 35px;
  border-radius: 10px;
  background: #fef6f1;
  color: #d69d39;
  text-align: center;
  cursor: pointer;
}
.sweet-type{
  width: 60px;
  height: 30px;
  background: #fef6f1;
  color: #d69d39;
  text-align: center;
}
.ice-type{
  width: 60px;
  height: 35px;
  line-height: 35px;
  border-radius: 10px;
  background: #fef6f1;
  color: #d69d39;
  text-align: center;
  cursor: pointer;
}
.mulk-type{
  width: 75px;
  height: 35px;
  line-height: 35px;
  border-radius: 10px;
  background: #fef6f1;
  color: #d69d39;
  text-align: center;
  cursor: pointer;
}
.jtf-bt{
  justify-content: space-between;
}
.line-type{
  line-height: 35px;
  margin: 15px 100px 15px 15px;
}
.wid-per-5{
  width: 5%;
}
.wid-per-95{
  width: 95%;
}
.wid-per-15{
  width: 15%;
}
.wid-per-85{
  width: 85%;
}
.footer-dig{
  display: flex;
  justify-content: space-between;
}
</style>
