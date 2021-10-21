import Vue from 'vue'
import Router from 'vue-router'

import homeComponent from '@/components/homeComponent'
import aboutComponent from '@/components/aboutComponent'
import detalleComponent from '@/components/detalleComponent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/:code',
      name: 'home',
      component: homeComponent
    },

    {
      path: '/:code/details',
      name: 'detalle',
      component: detalleComponent
    },

    {
      path: '/about',
      name: 'about',
      component: aboutComponent
    }
  ]
})
