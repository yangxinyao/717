import Vue from 'vue'
import Router from 'vue-router'
//
import index from "../components/index.vue"
import Search from "../components/search/search.vue"
import Login from "../components/login/login.vue"
import regirest from "../components/login/regirest.vue"
import Detail from "../components/com/detail.vue"
import Setup from "../components/sect/mine/setup.vue"
import Account from "../components/sect/mine/account.vue"
import Address from "../components/sect/mine/address.vue"
import Customer from "../components/sect/mine/customer.vue"
import Addadr from "../components/sect/mine/addadr.vue"
import Order from "../components/sect/mine/order.vue"
//
import shou from "../components/sect/shou.vue"
// import fen from "../components/sect/fen.vue"
const fen = () =>import("../components/sect/fen.vue")
import shopCar from "../components/sect/shopCar.vue"
import mine from "../components/sect/mine.vue"

Vue.use(Router)
//
import { getCookie } from "../tool/cookie.js"

let router = new Router({
  mode: "history",//路由模式
  routes: [
    {
      path: "/",
      redirect: "/index/shou",//重定向
    },
    {
      path: "/index",
      name: "index",
      component: index,
      children: [
        {
          path: "shou",
          name: "shou",
          component: shou,
        },
        {
          path: "fen",
          name: "fen",
          component: fen
        },
        {
          path: "shopCar",
          name: "shopCar",
          component: shopCar
        },
        {
          path: "mine",
          name: "mine",
          component: mine
        }]
    },
    {//搜索
      path: "/search",
      name: "search",
      component: Search
    },
    {//登录
      path: "/login",
      name: "login",
      component: Login
    },
    {//注册
      path: "/regirest",
      name: "regirest",
      component: regirest
    },
    {//详情
      path: "/detail",
      name: "detail",
      component: Detail
    },
    {//设置
      path: "/setup",
      name: "setup",
      component: Setup
    },
    {//账户余额
      path: "/account",
      name: "account",
      component: Account
    },
    {//地址管理
      path: "/address",
      name: "address",
      component: Address
    },
    {//我的客服
      path: "/customer",
      name: "customer",
      component: Customer
    },
    {//新增地址
      path: "/addadr",
      name: "addadr",
      component: Addadr
    },
    {//待收发货
      path: "/order:type",
      name: "order",
      component: Order 
    },

  ]

})
router.beforeEach((to, from, next) => {
  // console.log(to)
  if (to.name == "mine" || to.name == "shopCar") {
    let token = getCookie("token")
    if (!token) {
      next({
        name: "login",
        query: { froms: to.name }//login时判断是去首页还是进入的页面
      })
    } else {
      next()
    }
  } else {
    next()
  }


})
export default router

