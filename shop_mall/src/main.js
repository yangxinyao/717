import Vue from 'vue'
import App from './App.vue'
import router from "./router" 
import "./icon/iconfont.css"
import "./icon/demo.css"
// import axios from "axios"
// import Axiosvue from "vue-axios"
// Vue.use(Axiosvue, axios)
//axios拦截请求
import http from "../src/tool/http.js"
Vue.use(http)
//懒加载
import LazyLoad from "vue-lazyload"
Vue.use(LazyLoad,{
  loading:"/src/assets/loading.png"
})
//vuex
import vuex from "vuex"
Vue.use(vuex)
import store from "./store/store.js"
//自定义消息弹框
import Tooltip from "../src/plugins/tooltip/tooltip.js"
Vue.use(Tooltip,{
  name:"tooltip",
  timeout:2000
})
//自定义dialog
import Dialog from "../src/plugins/dialog/dialog.js"
Vue.use(Dialog,{
  title:"是否确认删除改地址",
  ok:"确定",
  off:"取消",
  // component:`<div>
  // queding
  // </div>`
})

new Vue({
  el: '#app',
  router,
  store, 
  render: h => h(App)
})
