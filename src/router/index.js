import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

// index
import index from '@/components/index/index'
// login
import login from '@/components/login/index'
// introduce
import introduce from '@/components/introduce/index'
import addIntroduce from '@/components/introduce/addIntroduce'

// notFound
import notFound from '@/components/notFound/index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {path: '/HelloWorld', name: 'HelloWorld', component: HelloWorld},
    // index
    {path: '/', name: 'index', component: index},
    {path: '/index', component: index},
    // login
    {path: '/login', component: login},
    // introduce
    {path: '/introduce', component: introduce},
    {path: '/addIntroduce', component: addIntroduce},
    /* notFound */
    { path: '*', component: notFound }
  ]
})
