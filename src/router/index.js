import { createRouter, createWebHistory } from 'vue-router'
import UserLogin from '../modules/User/pages/UserLogin.vue'
import UserRegister from '../modules/User/pages/UserRegister.vue'
import FinancialInfo from '../modules/Quote/pages/FinancialInfo.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
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
    {
      path: '/financial',
      name: 'financial',
      component: FinancialInfo,
      meta: { requiresAuth: true }
    },
  ]
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const isAuthenticated = localStorage.getItem('userToken');

  if (requiresAuth && !isAuthenticated) {
    next('/login');
  } else {
    next();
  }
});

export default router;
