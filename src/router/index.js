import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MenuView from '../components/MenuView.vue'
import aboutView from '../components/AboutView.vue'

import cajaView  from '../components/cajaView.vue'
import contabilidadView from '../components/contabilidadView.vue'
import domiciliosView from '../components/domiciliosView.vue'
import empresaView from '../components/empresaView.vue'
import mesasView from '../components/mesasView.vue'
import productosView from '../components/productosView.vue'
import usuariosView from '../components/usuariosView.vue'
import ventasensitioView from '../components/ventasensitioView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
   
    {
      path: '/productos',
      name: 'productos',
      component: productosView

    },
    {
      path: '/about',
      name: 'about',
      component: aboutView

    }

    /* ------------------ */
    ,
    {
      path: '/caja',
      name: 'caja',
      component: cajaView

    },
    {
      path: '/contabilidad',
      name: 'contabilidad',
      component: contabilidadView

    },
    {
      path: '/domicilios',
      name: 'domicilios',
      component: domiciliosView

    },
    {
      path: '/empresa',
      name: 'empresa',
      component: empresaView

    },
    {
      path: '/mesas',
      name: 'mesas',
      component: mesasView

    },
    {
      path: '/productos',
      name: 'productos',
      component: productosView

    },
    {
      path: '/usuarios',
      name: 'usuarios',
      component: usuariosView

    },
    {
      path: '/ventasensitio',
      name: 'ventasensitio',
      component: ventasensitioView

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
