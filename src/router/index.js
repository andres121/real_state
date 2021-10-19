import Vue from 'vue'
import Router from 'vue-router'

import homeComponent from '@/components/homeComponent'
import aboutComponent from '@/components/aboutComponent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/:code',
      name: 'home',
      component: homeComponent
    },

    {
      path: '/about',
      name: 'about',
      component: aboutComponent
    }
  ]
})
