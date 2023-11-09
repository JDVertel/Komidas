import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MenuView from '../components/MenuView.vue'
import aboutView from '../components/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
   
    {
      path: '/menu',
      name: 'menu',
      component: MenuView

    },
    {
      path: '/about',
      name: 'about',
      component: aboutView

    }
    //importacion de componente
 /*    {
      path: '/about',
      name: 'about',

      component: () => import('../views/AboutView.vue')
    }, */
  ]
})

export default router
