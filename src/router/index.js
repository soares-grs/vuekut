import { createRouter, createWebHistory } from 'vue-router'
import Perfil from '../view/Perfil.vue';
import Login from '../view/Login.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'profile-page',
      component: Perfil
    },
    {
      path: '/login',
      name: 'login-page',
      component: Login
    }
  ]
})

export default router
