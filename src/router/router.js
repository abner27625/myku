import App from '../App'
import Vue from 'vue'
import Router from 'vue-router'

//const banner = r => require.ensure([], () => r(require('../page/banner')), 'banner')
//const firstpage = r => require.ensure([], () => r(require('../page/firstpage')), 'firstpage')

Vue.use(Router)

const route = new Router({
  mode:'history',
  routes: [
    /*{
     path: '/',
     name: 'accountpage',
     component: accountpage
     },*/
    {
      path:'*',redirect:'/firstpage'
    },{
      path: '/firstpage', component: require('../page/firstpage.vue')
    },{
      path: '/accountpage', component: require('../page/accountpage.vue')
    },{
      path: '/about', component: require('../page/about.vue')
    },{
      path: '/question', component: require('../page/question/question.vue'),
      children:[
        {
          path: '/reimbursement', component: require('../page/question/children/reimbursement.vue')
        },{
          path: '/relateborrowing', component: require('../page/question/children/relateborrowing.vue')
        },{
          path: '/reviewloan', component: require('../page/question/children/reviewloan.vue')
        }
      ]
    },{
      path: '/completeinfo', component: require('../page/completeinfo.vue')
    },{
      path: '/repaymentplan', component: require('../page/repaymentplan.vue')
    },{
      path: '/loandetail', component: require('../page/loandetail.vue')
    },{
      path: '/setting', component: require('../page/setting.vue')
    },{
      path: '/modifyphone', component: require('../page/modifyphone.vue')
    },{
      path: '/modifypassword', component: require('../page/modifypassword.vue')
    },{
      path: '/loanDetailInfo', component: require('../page/loanDetailInfo.vue')
    },{
      path: '/zhimaauthorized', component: require('../page/authorized/zhimaauthorized.vue')
    },{
      path: '/normalauthorized', component: require('../page/authorized/normalauthorized.vue')
    },{
      path:'/login',component:require('../page/login.vue')
    }
  ]
})
export default route;
/*
export default new Router[{
  routes: [
    /!*{
      path: '/',
      name: 'accountpage',
      component: accountpage
    },*!/
    {
      path:'*',redirect:'/firstpage'
    },{
      path: '/firstpage', component: require('../page/firstpage.vue')
    },{
      path: '/accountpage', component: require('../page/accountpage.vue')
    },{
      path: '/about', component: require('../page/about.vue')
    },{
      path: '/question', component: require('../page/question.vue')
    },{
      path: '/completeinfo', component: require('../page/completeinfo.vue')
    },{
      path: '/repaymentplan', component: require('../page/repaymentplan.vue')
    },{
      path: '/loandetail', component: require('../page/loandetail.vue')
    }
  ]
  /!*path: '/',
  component: App, //顶层路由，对应index.html
  children: [
    {
      path: '',
      component: r => require.ensure([], () => r(require('../page/firstpage')), 'firstpage')
    },{
      path: '/firstpage',
      component: r => require.ensure([], () => r(require('../page/firstpage')), 'firstpage')
    },{
      path: '/banner',
      component: r => require.ensure([], () => r(require('../page/banner')), 'banner')
    }
  ]*!/
}]
*/
