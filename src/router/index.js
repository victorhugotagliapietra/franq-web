import { createRouter, createWebHistory } from 'vue-router'
import UserLogin from '../modules/User/pages/UserLogin.vue'
import UserRegister from '../modules/User/pages/UserRegister.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: UserLogin
    },
    {
      path: '/login',
      name: 'login',
      component: UserLogin
    },
    {
      path: '/register',
      name: 'register',
      component: UserRegister
    },
  ]
})

export default router
