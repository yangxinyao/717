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
import store from "./store/store.js"
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
