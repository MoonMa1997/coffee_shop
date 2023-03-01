<script>
import TheWelcome from '../components/TheWelcome.vue'
export default{
  name: 'home',
  data(){
    return{
      imagList: [
        {
          srcValue: '../src/assets/images/cur1.jpg',
        },
        {
          srcValue: '../src/assets/images/cur2.jpg',
        },{
          srcValue: '../src/assets/images/cur3.jpg',
        },{
          srcValue: './src/assets/images/cur4.jpg',
        },{
          srcValue: '../src/assets/images/cur5.jpg',
        }
      ]
    }
  }
}
</script>

<template>
  <div class="bg-fe ht-650 flex">
    <div class="wd-per-100">
      <el-carousel :interval="4000" type="card" height="470px" style="margin:auto;">
        <el-carousel-item v-for="item in imagList" :key="item">
          <img style="height:470px;" :src="item.srcValue" />
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<style scoped>
.ht-650{
  height: 700px;
}
.pd-0-300{
  padding: 0 300px;
}
.wd-per-100{
  width: 100%;
}
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 384px;
  margin: 0;
  text-align: center;
}

</style>>