import { createRouter, createWebHistory } from 'vue-router'
import portal from '../App.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: portal
    }
  ]
})

export default router
