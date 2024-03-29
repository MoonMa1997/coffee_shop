import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import * as Vue from 'vue' // Vue 3
import axios from 'axios'
import VueAxios from 'vue-axios'
import './assets/main.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)

// const app = Vue.createApp(App)
app.use(VueAxios, axios)
// app.config.globalProperties.$http=axios;
app.use(ElementPlus)
app.use(router)

app.mount('#app')
