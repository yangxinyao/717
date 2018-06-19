# shop_mall

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
 
 #知识点

  * iframe 可以在文档中嵌套别的文档

  *编译 encodeURI(),encodeURIComponent()

  *解码 decodeURI() decodeURIComponent()

  (带Component 包括域名; 不加,只对路径编译)

  * jsonwebtoken  对数据进行加密

  const jwt=require("jsonwebtoken")

  三个方法：
  jwt.sign(payload, secretOrPrivateKey, [options, callback])

  eg:let token = jwt.sign(req.body, "userMsg", { expiresIn: 60 * 60 }) 第一个参数是要加密的数据，第二个参数是密钥，第三个参数是设置的失效时间

  jwt.verify(token, secretOrPublicKey, [options, callback])

  eg: jwt.verify(req.body, "userMsg"，function(err,decoded){

    err 错误信息 decoded解码后的用户信息
  })
  
  jwt.decode(token [, options])

  cookie 获取,删除,设置

  导航守卫设置路由权限

 ##跨域请求 
    jsonp 仅限于get方式
    cors
    代理 porxy
   ### cors 
     * 请求头 
       http请求头信息：
       Accept
       Accept-Language
       Content-Language
       Content-Type:值属于下列之一:
            "Content-Type:application/x-www-from-urlencoded"(路径参数)
            "multipart/form-data"(from表单)
            "text/plain"(普通文本)
     *响应头
       "Access-Contorl-Allow-Orign:"http://localhost:8080"",
       "Access-Contorl-Allow-Headers:Content-type"
        (ps: 多个headers中间加空格 eg:Content-type token)

         (
           这个配置支持post
           "Access-Control-Allow-Origin":"*",
        "Accept-Content":"application/json,plain/text",
        "Access-Control-Allow-Headers":"Content-Type" //post)