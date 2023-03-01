import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import specialCustom from '../views/specialCustom.vue'
import myAccount from '../views/myAccount.vue'
import contactUs from '../views/contactUs.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/specialCustom',
      name: 'specialCustom',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: specialCustom
    },
    {
      path: '/myAccount',
      name: 'myaccount',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: myAccount
    },
    {
      path: '/contactUs',
      name: 'contactUs',
      component: contactUs
    },
  ]
})

export default router
