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
          <div class="cp-div" v-for="item in coffeeList" :key="item.num">
            <div class="cf-pic">
              <img class="wid-per-100 h-per100" :src="'http://localhost/dev-api'+item.productPicture" />
            </div>
            <div class="kf-bg">
              <div class="cf-font">{{item.productName}}</div>
            </div>
            <div class="plus" @click="showItemDialog(item)">＋</div>
          </div>

        </div>

        <div class="mrgb-15">● 茶系列</div>
        <div class="flex wrap">
          <!-- one coffee -->
          <div class="cp-div" v-for="item in teaList" :key="item.num">
            <div class="cf-pic">
              <img class="wid-per-100 het-per-100" :src="'http://localhost/dev-api'+item.productPicture" />
            </div>
            <div class="kf-bg">
              <div class="cf-font">{{item.productName}}</div>
            </div>
            <div class="plus" @click="showItemDialog(item)">＋</div>
          </div>

        </div>

        <div class="mrgb-15">● 甜品系列</div>
        <div class="flex wrap">
          <!-- one coffee -->
          <div class="cp-div" v-for="item in sweetList" :key="item.num">
            <div class="cf-pic">
              <img class="wid-per-100" :src="'http://localhost/dev-api'+item.productPicture" />
            </div>
            <div class="kf-bg">
              <div class="cf-font">{{item.productName}}</div>
            </div>
            <div class="plus" @click="showItemDialog(item)">＋</div>
          </div>

        </div>

        <div class="mrgb-15">● 咖啡产品</div>
        <div class="flex wrap">
          <!-- one coffee -->
          <div class="cp-div" v-for="item in prodList" :key="item.num">
            <div class="cf-pic">
              <img class="wid-per-100" :src="'http://localhost/dev-api'+item.productPicture" />
            </div>
            <div class="kf-bg">
              <div class="cf-font">{{item.productName}}</div>
            </div>
            <div class="plus" @click="showItemDialog(item)">＋</div>
          </div>
        </div>

        <div class="mrgb-15">● 周边产品</div>
        <div class="flex wrap">
          <!-- one coffee -->
          <div class="cp-div" v-for="item in itemList" :key="item.num">
            <div class="cf-pic">
              <img class="wid-per-100 bord-r-p50" :src="'http://localhost/dev-api'+item.productPicture" />
            </div>
            <div class="kf-bg">
              <div class="cf-font">{{item.productName}}</div>
            </div>
            <div class="plus" @click="showItemDialog(item)">＋</div>
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
            <img style="width: 100%;height: 100%;" :src="'http://localhost/dev-api'+ tempForm.productPicture"/>
          </div>
          <div>
            <div class="cl-61">{{ tempForm.productName }}</div>
            <div class="cl-61">{{tempForm.description}}</div>
          </div>
        </div>
        <!-- 类型 -->
        <div>
          <div class="flex line-type">
            <div class="wid-per-5 cl-61">杯型</div>
            <div class="flex jtf-bt wid-per-95">
              <div class="bottle-type" :class="isSize==1?'bottle-type-select':''" @click="selectSize(1)">小杯 320ml</div>
              <div class="bottle-type" :class="isSize==2?'bottle-type-select':''" @click="selectSize(2)">中杯 480ml</div>
              <div class="bottle-type" :class="isSize==3?'bottle-type-select':''" @click="selectSize(3)">大杯 600ml</div>
            </div>
          </div>
          <div class="flex line-type">
            <div class="wid-per-5 cl-61">甜度</div>
            <div class="flex jtf-bt wid-per-95">
              <div class="sweet-type" :class="isSweet==1?'sweet-type-select':''" @click="selectSweet(1)">无糖</div>
              <div class="sweet-type" :class="isSweet==2?'sweet-type-select':''" @click="selectSweet(2)">三分糖</div>
              <div class="sweet-type" :class="isSweet==3?'sweet-type-select':''" @click="selectSweet(3)">五分糖</div>
              <div class="sweet-type" :class="isSweet==4?'sweet-type-select':''" @click="selectSweet(4)">七分糖</div>
              <div class="sweet-type" :class="isSweet==5?'sweet-type-select':''" @click="selectSweet(5)">全糖</div>
            </div>
          </div>
          <div class="flex line-type">
            <div class="wid-per-5 cl-61">温度</div>
            <div class="flex jtf-bt wid-per-95">
              <div class="ice-type" :class="isIce==1?'ice-type-select':''" @click="selectIce(1)">正常冰</div>
              <div class="ice-type" :class="isIce==2?'ice-type-select':''" @click="selectIce(2)">少冰</div>
              <div class="ice-type" :class="isIce==3?'ice-type-select':''" @click="selectIce(3)">去冰</div>
              <div class="ice-type" :class="isIce==4?'ice-type-select':''" @click="selectIce(4)">常温</div>
              <div class="ice-type" :class="isIce==5?'ice-type-select':''" @click="selectIce(5)">热</div>
            </div>
          </div>
          <div class="flex line-type">
            <div class="wid-per-15 cl-61">添加或更换牛奶</div>
            <div class="flex jtf-bt wid-per-85">
              <div class="mulk-type" :class="isMulk==1?'mulk-type-select':''" @click="selectmulk(1)">脱脂牛奶</div>
              <div class="mulk-type" :class="isMulk==2?'mulk-type-select':''" @click="selectmulk(2)">全脂牛奶</div>
              <div class="mulk-type" :class="isMulk==3?'mulk-type-select':''" @click="selectmulk(3)">燕麦奶</div>
            </div>
          </div>
        </div>
      </div>
      <template #footer>
        <span class="dialog-footer footer-dig">
          <div>数量 <span @click="subtractOne">-</span>{{ getNumber }}<span @click="addOne">+</span></div>
          <!-- <el-button @click="dialogVisible = false">Cancel</el-button> -->
          <div>
            <el-button type="primary" style="background-color: #d2b261;" @click="setStar">
              收藏
            </el-button>
            <el-button type="primary" @click="addShopCar">
              添加至购物车 ￥{{ carPay }}
            </el-button>
          </div>
          
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import { reactive,onMounted} from "vue";
import { alldata, addOrderInfo, getProductInfo,addCollectInfo } from "@/http/api/homeapi.js"
import { getInfo } from "@/http/api/login.js"

export default {
  name: "about",
  data(){
    return{
      dialogVisible : false,
      coffeeList: [
        // {
        //   num: 1,
        //   productName: "焦糖玛奇朵",
        //   productPicture: '../src/assets/images/production/coffee1.png',
        //   productType: 1,
        //   remark: '20'
        // },
        // {
        //   num: 2,
        //   productName: "冷萃冰咖啡",
        //   productPicture: '../src/assets/images/production/coffee2.png',
        //   productType: 1,
        //   remark: '20'
        // },
        // {
        //   num: 3,
        //   productName: "美式咖啡",
        //   productPicture: './src/assets/images/production/coffee3.png',
        //   productType: 1,
        //   remark: '20'
        // },
        // {
        //   num: 4,
        //   productName: "绵云冷萃",
        //   productPicture: '../src/assets/images/production/coffee4.png',
        //   productType: 1,
        //   remark: '20'
        // },
        // {
        //   num: 5,
        //   productName: "摩卡",
        //   productPicture: '../src/assets/images/production/coffee5.png',
        //   productType: 1,
        //   remark: '20'
        // },
      ],
      teaList: [
        // {
        //   num: 1,
        //   productName: "冰摇红茶",
        //   productPicture: '../src/assets/images/production/tea1.png',
        //   productType: 2,
        //   remark: '20'
        // },
        // {
        //   num: 2,
        //   productName: "红茶拿铁",
        //   productPicture: '../src/assets/images/production/tea2.png',
        //   productType: 2,
        //   remark: '20'
        // },
        // {
        //   num: 3,
        //   productName: "橘香花茶",
        //   productPicture: './src/assets/images/production/tea3.png',
        //   productType: 2,
        //   remark: '20'
        // },
        // {
        //   num: 4,
        //   productName: "梨子清茶",
        //   productPicture: '../src/assets/images/production/tea4.png',
        //   productType: 2,
        //   remark: '20'
        // },
        // {
        //   num: 5,
        //   productName: "抹茶拿铁",
        //   productPicture: '../src/assets/images/production/tea5.png',
        //   productType: 2,
        //   remark: '20'
        // },
      ],
      sweetList: [
        // {
        //   num: 1,
        //   productName: "经典瑞士卷",
        //   productPicture: '../src/assets/images/production/sweet1.png',
        //   productType: 3,
        //   remark: '20'
        // },
        // {
        //   num: 2,
        //   productName: "蓝莓麦芬",
        //   productPicture: '../src/assets/images/production/sweet2.png',
        //   productType: 3,
        //   remark: '20'
        // },
        // {
        //   num: 3,
        //   productName: "巧克力蛋糕",
        //   productPicture: './src/assets/images/production/sweet3.png',
        //   productType: 3,
        //   remark: '20'
        // },
        // {
        //   num: 4,
        //   productName: "全麦核桃麦芬",
        //   productPicture: '../src/assets/images/production/sweet4.png',
        //   productType: 3,
        //   remark: '20'
        // },
        // {
        //   num: 5,
        //   productName: "提拉米苏",
        //   productPicture: '../src/assets/images/production/sweet5.png',
        //   productType: 3,
        //   remark: '20'
        // },
      ],
      prodList: [
        // {
        //   num: 1,
        //   productName: "哥伦比亚咖啡豆",
        //   productPicture: '../src/assets/images/production/bea1.png',
        //   productType: 4,
        //   remark: '20'
        // },
        // {
        //   num: 2,
        //   productName: "埃塞俄比亚咖啡豆",
        //   productPicture: '../src/assets/images/production/bea2.png',
        //   productType: 4,
        //   remark: '20'
        // },
        // {
        //   num: 3,
        //   productName: "肯尼亚咖啡豆",
        //   productPicture: './src/assets/images/production/bea3.png',
        //   productType: 4,
        //   remark: '20'
        // },
        // {
        //   num: 4,
        //   productName: "苏门答腊咖啡豆",
        //   productPicture: '../src/assets/images/production/bea4.png',
        //   productType: 4,
        //   remark: '20'
        // },
        // {
        //   num: 5,
        //   productName: "意式烘焙咖啡豆",
        //   productPicture: '../src/assets/images/production/bea5.png',
        //   productType: 4,
        //   remark: '20'
        // },
      ],
      itemList: [
        // {
        //   num: 1,
        //   productName: "白瓷杯",
        //   productPicture: '../src/assets/images/production/item1.png',
        //   productType: 5,
        //   remark: '20'
        // },
        // {
        //   num: 2,
        //   productName: "橙色随手杯",
        //   productPicture: '../src/assets/images/production/item2.png',
        //   productType: 5,
        //   remark: '20'
        // },
        // {
        //   num: 3,
        //   productName: "粉色随手杯",
        //   productPicture: './src/assets/images/production/item3.png',
        //   productType: 5,
        //   remark: '20'
        // },
        // {
        //   num: 4,
        //   productName: "黑色随手杯",
        //   productPicture: '../src/assets/images/production/item4.png',
        //   productType: 5,
        //   remark: '20'
        // },
        // {
        //   num: 5,
        //   productName: "蓝色随手杯",
        //   productPicture: '../src/assets/images/production/item5.png',
        //   productType: 5,
        //   remark: '20'
        // },
      ],
      isSize: 1,
      isSweet:1,
      isIce: 1,
      isMulk: 1,
      selectSizeValue: '小杯 320ml',
      selectSweetValue: '无糖',
      selectIceValue: '正常冰',
      selectMulkValue: '脱脂牛奶',
      getNumber: 1,
      tempForm:{},
      bottlePrice: 0,
      milkPrice: 6,
      carPay: 0,
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
      // methods.requestall()
    })
    return{
      ...methods
    }
  },
  mounted() {
    
    getInfo().then(res => {
      const user = res.user
      localStorage.setItem('roleId', res.user.roles[0].roleId);
      localStorage.setItem('roleName', res.user.nickName);
      localStorage.setItem('userId', res.user.userId);
    }).catch(error => {
    });
    this.getList();
  },
  methods: {
    increment() {
      this.count++
    },
    selectSize(num){
      this.isSize = num;
      switch(num){
        case 1:
          this.selectSizeValue="小杯 320ml";
          this.bottlePrice = 0;
          this.carPay = parseInt(this.tempForm.remark)+this.bottlePrice+this.milkPrice;
          break;
        case 2:
          this.selectSizeValue="中杯 480ml";
          this.bottlePrice = 3;
          this.carPay = parseInt(this.tempForm.remark)+this.bottlePrice+this.milkPrice;
          break;
        case 3:
          this.selectSizeValue="大杯 600ml";
          this.bottlePrice = 5;
          this.carPay = parseInt(this.tempForm.remark)+this.bottlePrice+this.milkPrice;
          break;
      }
      console.log(this.selectSizeValue)
    },
    selectSweet(num){
      let that = this;
      that.isSweet = num;
      switch(num){
        case 1:
          that.selectSweetValue="无糖";
          break;
        case 2:
          this.selectSweetValue="三分糖";
          break;
        case 3:
          this.selectSweetValue="五分糖";
          break;
        case 4:
          this.selectSweetValue="七分糖";
          break;
        case 5:
          this.selectSweetValue="全糖";
          break;
      }
    },
    selectIce(num){
      let that = this;
      that.isIce = num;
      switch(num){
        case 1:
          that.selectIceValue="正常冰";
          break;
        case 2:
          this.selectIceValue="少冰";
          break;
        case 3:
          this.selectIceValue="去冰";
          break;
        case 4:
          this.selectIceValue="常温";
          break;
        case 5:
          this.selectIceValue="热";
          break;
      }
    },
    selectmulk(num){
      this.isMulk = num;
      switch(num){
        case 1:
          this.selectMulkValue="脱脂牛奶";
          this.milkPrice = 6;
          this.carPay = parseInt(this.tempForm.remark)+this.bottlePrice+this.milkPrice;
          break;
        case 2:
          this.selectMulkValue="全脂牛奶";
          this.milkPrice = 0;
          this.carPay = parseInt(this.tempForm.remark)+this.bottlePrice+this.milkPrice;
          break;
        case 3:
          this.selectMulkValue="燕麦奶";
          this.milkPrice = 10;
          this.carPay = parseInt(this.tempForm.remark)+this.bottlePrice+this.milkPrice;
          break;
      }
    },
    showItemDialog(item){
      this.dialogVisible = true;
      this.isSize = 1;
      this.isSweet = 1;
      this.isIce = 1;
      this.isMulk = 1;
      this.selectSizeValue = '小杯 320ml'
      this.selectSweetValue = '无糖'
      this.selectIceValue = '正常冰'
      this.selectMulkValue = '脱脂牛奶'
      this.getNumber = 1;
      this.tempForm = item;
      this.carPay = parseInt(this.tempForm.remark) +6;
    },
    addShopCar(){
      let value = "";
      value = this.tempForm.productName + " | " + this.selectSizeValue + ";" +this.selectSweetValue + ";"+this.selectIceValue + ";"+this.selectMulkValue + ";";
      let form={
        orderId: null,
        productId: this.tempForm.productId,
        productName: value,
        productType: this.tempForm.productType,
        productPrice: this.carPay,
        address: null,
        productPicture: this.tempForm.productPicture,
        orderStatus: null,
        description: this.tempForm.description,
        shopType: 1,
        buyerId: localStorage.getItem('userId'),
        buyerName: localStorage.getItem('roleName'),
        type: null,
        status: "0",
        createBy: null,
        createTime: null,
        updateBy: null,
        updateTime: null,
        remark: this.tempForm.remark,
        productNum: this.getNumber
      }
      addOrderInfo(form).then(response => {
        console.log('order',response)
        if(response.code==200){
          this.$message({
            message: '已添加到购物车',
            type: 'success'
          });
          this.tempForm = {}
        }else{
          this.$message({
            message: '请先登录',
            type: 'warning'
          });
          // window.location.href="http://localhost:8080/myAccount"
        }
        
        this.dialogVisible = false;
      }).catch(error => {
        console.log('error',error)
      })
      console.log(value)
    },
    addOne(){
      this.getNumber+=1;
    },
    subtractOne(){
      this.getNumber-=1;
      if(this.getNumber<=0){
        this.getNumber = 1
      }
    },
    getList(){
      let form={
        pageNum: 1,
        pageSize: 10
      }
      getProductInfo(form).then(response => {
        if(response.code==200){
          let apidata = response.rows;
          apidata.forEach(element => {
            if(element.productType==1){
              this.coffeeList.push(element)
            }
            if(element.productType==2){
              this.teaList.push(element)
            }
            if(element.productType==3){
              this.sweetList.push(element)
            }
            if(element.productType==4){
              this.prodList.push(element)
            }
            if(element.productType==5){
              this.itemList.push(element)
            }
          });
          this.$message({
            message: '查找成功',
            type: 'success'
          });
        }else{
          this.$message({
            message: '请先登录',
            type: 'warning'
          });
        }
      }).catch(error => {
        console.log('error',error)
      })
    },
    // 收藏
    setStar(){
      let value = "";
      value = this.tempForm.productName + " | " + this.selectSizeValue + ";" +this.selectSweetValue + ";"+this.selectIceValue + ";"+this.selectMulkValue + ";";
      let form={
        collectId: null,
        productId: this.tempForm.productId,
        productName: value,
        productType: this.tempForm.productType,
        productPrice:  this.carPay,
        productPicture: this.tempForm.productPicture,
        description: this.tempForm.description,
        shopType: null,
        collecterId: localStorage.getItem('userId'),
        collecterName: localStorage.getItem('roleName'),
        type: null,
        status: "0",
        createBy: null,
        createTime: null,
        updateBy: null,
        updateTime: null,
        remark: this.tempForm.remark
      }
      addCollectInfo(form).then(response =>{
        if(response.code==200){
          this.$message({
            message: '已添加收藏',
            type: 'success'
          });
          this.tempForm = {}
        }else{
          this.$message({
            message: '请先登录',
            type: 'warning'
          });
          this.$router.push("/myAccount");
          // window.location.href="http://localhost:8080/myAccount"
        }
        this.dialogVisible = false;
      }).catch()
    },
  },
}
</script>

<style scoped>
.about >>> .el-dialog{
  background: #997e61; 
  border-radius: 30px;
  color: #fef6f1;
}
.about >>> .el-button{
  color: #997e61;
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
  color: #997e61;
  font-size: larger;
  font-weight: 700;
  padding: 3px;
  /* cursor: pointer; */
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
  background: #60955f;
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
  background: #997e61;
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
    background-color: #997e61;
}
.het-per-100{
  height: 100%;
}
.intro-img{
  /* background-image: url(../assets/images/coffee.png); */
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
  color: #997e61;
  text-align: center;
  cursor: pointer;
}

.bottle-type-select{
  width: 100px;
  height: 35px;
  line-height: 35px;
  border-radius: 10px;
  background: #765b3f;
  color: #fef6f1;
  text-align: center;
  cursor: pointer;
}
.sweet-type{
  width: 60px;
  height: 35px;
  line-height: 35px;
  border-radius: 10px;
  background: #fef6f1;
  color: #997e61;
  text-align: center;
  cursor: pointer;
}
.sweet-type-select{
  width: 60px;
  height: 35px;
  line-height: 35px;
  border-radius: 10px;
  background: #765b3f;
  color: #fef6f1;
  text-align: center;
  cursor: pointer;
}
.ice-type{
  width: 60px;
  height: 35px;
  line-height: 35px;
  border-radius: 10px;
  background: #fef6f1;
  color: #997e61;
  text-align: center;
  cursor: pointer;
}
.ice-type-select{
  width: 60px;
  height: 35px;
  line-height: 35px;
  border-radius: 10px;
  background: #765b3f;
  color: #fef6f1;
  text-align: center;
  cursor: pointer;
}
.mulk-type{
  width: 75px;
  height: 35px;
  line-height: 35px;
  border-radius: 10px;
  background: #fef6f1;
  color: #997e61;
  text-align: center;
  cursor: pointer;
}
.mulk-type-select{
  width: 75px;
  height: 35px;
  line-height: 35px;
  border-radius: 10px;
  background: #765b3f;
  color: #fef6f1;
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
.cl-61{
  color: #fef6f1;
}
.h-per100{
  height: 100%;
}
.bord-r-p50{
  border-radius: 50%;
}
</style>
