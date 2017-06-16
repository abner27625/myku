import Vue from 'vue'
import Router from 'vue-router'
import accountpage from '@/page/accountpage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'accountpage',
      component: accountpage
    }
  ]
})
