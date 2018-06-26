
import axios from "axios"
//测试服务器
const testUrl="http://localhost:3000"
//线上服务器
const onlineUrl=""
let instance=axios.create({
    baseURL: process.env.NODE_ENV === "production" ? onlineUrl:testUrl,
    // headers
}); 
instance.interceptors.request.use((config)=>{
    // if (process.env.NODE_ENV === "production") {
    //     // development
    // } else {
    //     config.baseURL = 'http://localhost:8080'
    // }
      return config
   }, (err) => {
      return Promise.reject(err)

})
//添加响应拦截器
instance.interceptors.response.use((response) => {
    return response
}, (err) => {
    return Promise.reject(err)
})
let anotherInstance=axios.create({

})
//vue 插件
let httpPlugin = {
    install(Vue) {
        Object.defineProperty(Vue.prototype, '$http', {
            value: instance
        })
    }
}
export { anotherInstance}
export { instance }
export default httpPlugin