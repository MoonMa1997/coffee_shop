<template>
  <div class="bg-fe flex pd-0-15">
    <div class="wd-per-100 flex">
      <!-- 左侧图片 -->
      <div class="wid-per-20">
        <div>111</div>
      </div>
      <!-- 右侧定制 -->
      <div class="wid-per-80 pd-5 ov-y">
        <div class="mrgb-15">● 咖啡豆</div>
        <div class="flex ov-y fts-13">
          <div class="cp-div" v-for="img in imgList" :key="img.num">
            <div class="img-box">
              <img class="wid-per-100 wid-het" :src="img.path" />
            </div>
            <div class="flex jst-c">
              <div>{{ img.name }}</div>
              <div class="plus-item">＋</div>
            </div>
          </div>
        </div>

        <div class="mrgb-15">● 制作手法</div>
        <div class="flex ov-y fts-13">
          <!-- 1 -->
          <div class="cp-div" v-for="item in makeList" :key="item.num">
            <div class="img-box">
              <img class="wid-per-100 wid-het" :src="item.path" />
            </div>
            <div class="flex jst-c">
              <div>{{ item.name }}</div>
              <div class="plus-item">＋</div>
            </div>
          </div>
        </div>

        <div class="mrgb-15">● 小料</div>
        <div class="flex ov-y fts-13">
          <!-- 1 -->
          <div class="cp-div" v-for="item in addList" :key="item.num">
            <div class="img-box">
              <img class="wid-per-100 wid-het" :src="item.path" />
            </div>
            <div class="flex jst-c">
              <div>{{ item.name }}</div>
              <div class="plus-item">＋</div>
            </div>
          </div>
        </div>
        <!-- button -->
        <div class="pdt-22">
          <div class="btn-shop">添加至购物车</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'special',
  data(){
    return{
      imgList: [
        {
          num: 1,
          name: "哥伦比亚咖啡豆",
          path: '../src/assets/images/sepacial/beag.jpg',
        },
        {
          num: 2,
          name: "埃塞俄比亚咖啡豆",
          path: '../src/assets/images/sepacial/beaa.png',
        },
        {
          num: 3,
          name: "肯尼亚咖啡豆",
          path: './src/assets/images/sepacial/beak.png',
        },
        {
          num: 4,
          name: "苏门答腊咖啡豆",
          path: '../src/assets/images/sepacial/beas.png',
        },
        {
          num: 5,
          name: "意式烘焙咖啡豆",
          path: '../src/assets/images/sepacial/beay.png',
        },
      ],
      makeList: [
        {
          num: 1,
          name: "滴滤",
          path: '../src/assets/images/sepacial/dlv.png',
        },
        {
          num: 2,
          name: "冷萃",
          path: '../src/assets/images/sepacial/lc.png',
        },
        {
          num: 3,
          name: "深度烘焙",
          path: './src/assets/images/sepacial/sd.png',
        },
        {
          num: 4,
          name: "手工调制",
          path: '../src/assets/images/sepacial/sg.png',
        },
        {
          num: 5,
          name: "中度烘焙",
          path: '../src/assets/images/sepacial/zd.png',
        },
      ],
      addList: [
        {
          num: 1,
          name: "抹茶",
          path: '../src/assets/images/sepacial/mocha.png',
        },
        {
          num: 2,
          name: "奶盖",
          path: '../src/assets/images/sepacial/naigai.png',
        },
        {
          num: 3,
          name: "奶油",
          path: './src/assets/images/sepacial/naiyou.png',
        },
        {
          num: 4,
          name: "牛奶",
          path: '../src/assets/images/sepacial/niunai.png',
        },
        {
          num: 5,
          name: "椰汁",
          path: '../src/assets/images/sepacial/yezhi.png',
        },
      ],
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