const http = require('http');
// https://m.gome.com.cn/index.php?ctl=goods_class&act=ajaxGetClassList&cid=17951828
function Classhttp(url) {
    return new Promise((resolve, reject) => {
        const options = {
            hostname: 'm.gome.com.cn',
            port: 80,
            path: url,
            method: "GET"
        };

        let data = ""
        // 发送请求
        const req = http.request(options, (res) => {
            //设置编码格式
            res.setEncoding("utf-8");
            //以流的方式读数据
            res.on("data", (chunk) => {
                data += chunk
            })
            res.on("end", () => {
                resolve(data)
            })
        });

        req.on('err', (e) => {
            reject(`在主响应之前获得信息: ${e.msg}`);
        });
        req.end();

    })
}
module.exports= Classhttp
