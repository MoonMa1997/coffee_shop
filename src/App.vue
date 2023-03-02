<script>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
export default{
  data(){
    return{
      navClick: "",
      classtype: "",
    }
  },
  methods:{
    changeHeader(item) {
      this.navClick = item
      //FIXME:此处进行判断进行一个 路由跳转
    }
  }
}
</script>

<template>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header> -->
    <!-- nav -->
    <div class="height100 bgc-609 col-fe">
      <div class="route-div">
        <div class="mrgr-10 col-fe strong">壹杯咖啡</div>
        <RouterLink to="/" class="mrgr-10 col-fe" :class="'home' == navClick ? 'focusOn' : '' " @click="changeHeader('home')">首页</RouterLink>
        <RouterLink to="/about" class="mrgr-10 col-fe" :class="'production' == navClick ? 'focusOn' : '' " @click="changeHeader('production')">产品系列</RouterLink>
        <RouterLink to="/specialCustom" class="mrgr-10 col-fe" :class="'special' == navClick ? 'focusOn' : '' " @click="changeHeader('special')">专属定制</RouterLink>
        <RouterLink to="/myAccount" class="mrgr-10 col-fe" :class="'account' == navClick ? 'focusOn' : '' " @click="changeHeader('account')">我的账户</RouterLink>
        <RouterLink to="/contactUs" class="mrgr-10 col-fe" :class="'contact' == navClick ? 'focusOn' : '' " @click="changeHeader('contact')">联系我们</RouterLink>
        <RouterLink to="/about" class="mrgr-10 col-fe" :class="'goodcar' == navClick ? 'focusOn' : '' " @click="changeHeader('goodcar')">购物车</RouterLink>
      </div>
    </div>
    <!-- content -->
    <RouterView />
    <!-- footer -->
    <div class="footer pd-30-0">
      <div>壹杯咖啡</div>
      <div class="flex jst-c">
        <div>微博</div>
        <div class="mrgl-20">微信</div>
        <div class="mrgl-20">抖音</div>
      </div>
      <div>
        官方邮箱：yibei12345@163.com
      </div>
      <div>Copytight @ 2023 壹杯咖啡 ICP12365478</div>
    </div>

</template>

<style scoped>
a:hover{
  font-weight: 800;
  font-size: 17px;
}
.focusOn{
  font-weight: 800;
  font-size: 17px;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 1rem;
  text-align: center;
  /* margin-top: 2rem; */
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1920px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    /* text-align: left; */
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    /* margin-top: 1rem; */
  }
}

.height100{
    height: 100px;
}
.route-div {
  text-align: center;
  height: 100px;
  line-height: 100px;
  display: flex;
  justify-content: center;
}
.bgc-609 {
  background: #60955f;
}
.col-fe{
  color: #fef6f1;
}
.bg-fe{
  background: #fef6f1;
}
.mrgr-10{
  margin-right: 60px;
  margin-left: 60px;
}
.strong{
  font-weight: bolder;
}
.footer{
  width: 100%;
  text-align: center;
  color: #fef6f1;
  background: #60955f;
}
.flex{
  display: flex;
}
.jst-c{
  justify-content: center;
}
.mrgl-20{
  margin-left: 20px;
}
.pd-30-0{
  padding: 30px 0;
}
</style>
