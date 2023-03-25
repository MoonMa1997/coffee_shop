<template>
  <div class="bg-fe flex pd-0-15">
    <div class="wd-per-100 flex">
      <!-- 左侧图片 -->
      <div class="wid-per-20">
        <div></div>
      </div>
      <!-- 右侧定制 -->
      <div class="wid-per-80 pd-5 ov-y">
        <div class="mrgb-15">● 咖啡豆</div>
        <div class="flex ov-y fts-13">
          <div class="cp-div" v-for="img in imgList" :key="img.num">
            <div class="img-box">
              <img class="wid-per-100 wid-het" :src="img.productPicture" />
            </div>
            <div class="flex jst-c">
              <div>{{ img.productName }}</div>
              <div v-if="img.show" class="plus-item" @click="selectCoffeeBean(img)">＋</div>
              <div v-else class="plus-item-hide" @click="selectCoffeeBean(img)">－</div>
            </div>
          </div>
        </div>

        <div class="mrgb-15">● 制作手法</div>
        <div class="flex ov-y fts-13">
          <!-- 1 -->
          <div class="cp-div" v-for="item in makeList" :key="item.num">
            <div class="img-box">
              <img class="wid-per-100 wid-het" :src="item.productPicture" />
            </div>
            <div class="flex jst-c">
              <div>{{ item.productName }}</div>
              <div v-if="item.show" class="plus-item" @click="selectCoffeeMake(item)">＋</div>
              <div v-else class="plus-item-hide" @click="selectCoffeeMake(item)">－</div>
            </div>
          </div>
        </div>

        <div class="mrgb-15">● 小料</div>
        <div class="flex ov-y fts-13">
          <!-- 1 -->
          <div class="cp-div" v-for="item in addList" :key="item.num">
            <div class="img-box">
              <img class="wid-per-100 wid-het" :src="item.productPicture" />
            </div>
            <div class="flex jst-c">
              <div>{{ item.productName }}</div>
              <div v-if="item.show" class="plus-item" @click="selectCoffeeItem(item)">＋</div>
              <div v-else class="plus-item-hide" @click="selectCoffeeItem(item)">－</div>
            </div>
          </div>
        </div>
        <!-- button -->
        <div class="pdt-22">
          <div class="btn-shop" @click="addShopCar">添加至购物车 ￥ {{ priceTotal }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { alldata, addOrderInfo, getProductInfo } from "@/http/api/homeapi.js"

export default {
  name: 'special',
  data(){
    return{
      imgList: [
        {
          num: 1,
          productName: "哥伦比亚咖啡豆",
          productPicture: '../src/assets/images/sepacial/beag.jpg',
          show: true,
          price: 5,
        },
        {
          num: 2,
          productName: "埃塞俄比亚咖啡豆",
          productPicture: '../src/assets/images/sepacial/beaa.png',
          show: true,
          price: 5,
        },
        {
          num: 3,
          productName: "肯尼亚咖啡豆",
          productPicture: './src/assets/images/sepacial/beak.png',
          show: true,
          price: 5,
        },
        {
          num: 4,
          productName: "苏门答腊咖啡豆",
          productPicture: '../src/assets/images/sepacial/beas.png',
          show: true,
          price: 5,
        },
        {
          num: 5,
          productName: "意式烘焙咖啡豆",
          productPicture: '../src/assets/images/sepacial/beay.png',
          show: true,
          price: 5,
        },
      ],
      makeList: [
        {
          num: 1,
          productName: "滴滤",
          productPicture: '../src/assets/images/sepacial/dlv.png',
          show: true,
          price: 5,
        },
        {
          num: 2,
          productName: "冷萃",
          productPicture: '../src/assets/images/sepacial/lc.png',
          show: true,
          price: 5,
        },
        {
          num: 3,
          productName: "深度烘焙",
          productPicture: './src/assets/images/sepacial/sd.png',
          show: true,
          price: 5,
        },
        {
          num: 4,
          productName: "手工调制",
          productPicture: '../src/assets/images/sepacial/sg.png',
          show: true,
          price: 5,
        },
        {
          num: 5,
          productName: "中度烘焙",
          productPicture: '../src/assets/images/sepacial/zd.png',
          show: true,
          price: 5,
        },
      ],
      addList: [
        {
          num: 1,
          productName: "抹茶",
          productPicture: '../src/assets/images/sepacial/mocha.png',
          show: true,
          price: 5,
        },
        {
          num: 2,
          productName: "奶盖",
          productPicture: '../src/assets/images/sepacial/naigai.png',
          show: true,
          price: 5,
        },
        {
          num: 3,
          productName: "奶油",
          productPicture: './src/assets/images/sepacial/naiyou.png',
          show: true,
          price: 5,
        },
        {
          num: 4,
          productName: "牛奶",
          productPicture: '../src/assets/images/sepacial/niunai.png',
          show: true,
          price: 5,
        },
        {
          num: 5,
          productName: "椰汁",
          productPicture: '../src/assets/images/sepacial/yezhi.png',
          show: true,
          price: 5,
        },
      ],
      coffeeBeanValue: [],
      makeCOFValue: [],
      addItemValue: [],
      priceTotal: 0,
    }
  },
  methods:{
    selectCoffeeBean(item){
      item.show = !item.show
      if(this.coffeeBeanValue.indexOf(item.productName)<0){
        this.coffeeBeanValue.push(item.productName);
        this.priceTotal = this.priceTotal+item.price;
      }else{
        let a = this.coffeeBeanValue.indexOf(item.productName);
        this.coffeeBeanValue.splice(a,1);
        this.priceTotal = this.priceTotal-item.price;
      }
      console.log(this.coffeeBeanValue)
    },
    selectCoffeeMake(item){
      item.show = !item.show
      if(this.makeCOFValue.indexOf(item.productName)<0){
        this.makeCOFValue.push(item.productName);
        this.priceTotal = this.priceTotal+item.price;
      }else{
        let a = this.makeCOFValue.indexOf(item.productName);
        this.makeCOFValue.splice(a,1);
        this.priceTotal = this.priceTotal-item.price;
      }
      console.log(this.makeCOFValue)
    },
    selectCoffeeItem(item){
      item.show = !item.show
      if(this.addItemValue.indexOf(item.productName)<0){
        this.addItemValue.push(item.productName);
        this.priceTotal = this.priceTotal+item.price;
      }else{
        let a = this.addItemValue.indexOf(item.productName);
        this.addItemValue.splice(a,1);
        this.priceTotal = this.priceTotal-item.price;
      }
      console.log(this.addItemValue)
    },
    addShopCar(){
      let value = "";
      value = this.coffeeBeanValue.join(";")+";"+this.makeCOFValue.join(";")+";"+this.addItemValue.join(";")
      let form={
        orderId: null,
        productId: null,
        productName: value,
        productType: 6,
        productPrice: this.priceTotal,
        address: null,
        productPicture: null,
        orderStatus: null,
        describe: null,
        shopType: 2,
        buyerId: null,
        buyerName: null,
        type: null,
        status: "0",
        createBy: null,
        createTime: null,
        updateBy: null,
        updateTime: null,
        remark: null,
        productNum: 1
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
    }
  }
}
</script>>

<style scoped>
.flex{
  display: flex;
}
.ht-650{
  height: 650px;
}
.pd-0-15{
    padding: 0 15%
}
.wd-per-100{
  width: 100%;
}
.mrgb-15{
  margin-bottom: 15px;
}
.wrap{
  flex-wrap: wrap;
}
.cf-pic{
  width: 85px;
  height: 106px;
  position: absolute;
  left: 29%;
  z-index: 3;
}
.cf-font{
  position: absolute;
  top: 56%;
  text-align: center;
  width: 100%;
  left: 0;
  font-weight: 800;
}
.cp-div{
  width: 150px;
  height: 190px;
  margin: 0px 30px;
}
.wid-het{
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.img-box{
  width: 150px;
  height: 150px;
  background: darkgray;
  display: flex;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  margin: auto;
}
.jst-c{
  justify-content: center;
}
.plus-item{
  height: 19px;
  width: 24px;
  background: #60955f;
  border-radius: 50%;
  color: white;
  text-align: center;
  line-height: 17px;
  margin: auto 5px;
}
.plus-item-hide{
  height: 19px;
  width: 24px;
  background: white;
  border-radius: 50%;
  color: #60955f;
  text-align: center;
  line-height: 17px;
  margin: auto 5px;
}
.wid-per-20{
  width: 20%;
}
.wid-per-80{
  width: 80%;
}
.hg-per-100{
  height: 100%;
}
.pd-5{
  padding: 3% 5%;
}
.ov-y{
  overflow-y: auto;
}
.ov-y::-webkit-scrollbar{
    width: 4px;
    height: 4px;
    background-color: #fef6f1;
}
/*定义滚动条的轨道，内阴影及圆角*/
.ov-y::-webkit-scrollbar-track{
    border-radius: 1px;
    background-color: #fef6f1;
}
/*定义滑块，内阴影及圆角*/
.ov-y::-webkit-scrollbar-thumb{
    width: 4px;
    height: 4px;
    border-radius: 1px;
    background-color: #997e61;
}
.fts-13{
  font-size: 13px;
}
.btn-shop{
  width: 160px;
  height: 50px;
  background: #60955f;
  color: white;
  font-weight: 800;
  text-align: center;
  line-height: 50px;
  border-radius: 40px;
  float: right;
}
.pdt-22{
  padding-top: 22px;
}
</style>>