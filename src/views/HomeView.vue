<script setup>
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <div class="bg-fe ht-650 flex pd-0-300">
    <div class="wd-per-100">
      <el-carousel :interval="4000" type="card" height="200px">
        <el-carousel-item v-for="item in 6" :key="item">
          <h3 text="2xl" justify="center">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<style scoped>
.ht-650{
  height: 650px;
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
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

</style>>