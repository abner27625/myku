// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import router from './router/router'
//import '@/assets/reset.styl'

//import Router from 'vue-router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

/*const routers = new Router({
  router,
})

Vue.use(Router,MintUI)
new Vue({
  routers,
}).$mount('#app')*/
