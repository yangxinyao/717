const fs = require("fs")
const path = require("path")
const jwt=require("jsonwebtoken")

//定义接口
module.exports = function (app) {
    //商品列表接口
    const listPath = path.join(__dirname, "/shopList")

    app.get("/index/recommend", (req, res, next) => {
        // console.log(listPath + `/list${req.query.page}.json`)
        if (req.query.page > 5) {
            res.json({
                code: 1000,
                msg: "没有更多数据了"
            })
        } else {
            let list = fs.readFileSync(listPath + `/list${req.query.page}.json`, "utf-8")
            //  let list = fs.readFileSync('./shopList/list1.json', "utf-8")
            // console.log(list)
            setTimeout(() => {
                res.json(list)
            }, 2000);

        }
    })
    //分类接口
    const classHttp = require("./classHttp.js")
    app.get("/class/list", (req, res) => {
        // console.log(req.query.cid)
        classHttp(`/index.php?ctl=goods_class&act=ajaxGetClassList&cid=${req.query.cid}`).then((data) => {
            res.send(data)
        })
    })
    //登录
    app.post("/api/user", function (req, res) {
        let { phone, pwd } = req.body;
        let token = jwt.sign(req.body, "userMsg", { expiresIn: 60 }) //加密
    //    console.log(token)
        let userPath = path.resolve(__dirname + "/user");
        let user = JSON.parse(fs.readFileSync(userPath + "/user.json", "utf-8"));
        user.forEach((i) => {//遍历数据查看用户是否已注册
            if (i.phone == phone && i.pwd == pwd) {
                ind = i
            }
        })
        if (ind){
            res.json({
                  code:"1003",
                  msg:"登陆成功",
                  token
            })
        }else{
            res.json({
                code: "1004",
                msg: "用户名或密码错误",
            })
        }
       
    });
    //注册
    app.post("/api/regirest", function (req, res) {
        console.log(req.body)
        let { phone, pwd } = req.body
        let userPath = path.resolve(__dirname + "/user");
        let user = JSON.parse(fs.readFileSync(userPath + "/user.json", "utf-8"));
        let ind = null
        user.forEach((i) => {//遍历数据查看用户是否已注册
            if (i.phone == phone && i.pwd == pwd) {
                ind = i
            }
        })
        if (ind) {
            res.json({ code: "1001", msg: "该用户已存在"})
            return
        } 
        user.push(req.body)
        fs.writeFile(userPath + "/user.json", JSON.stringify(user), function (err) {
            if (err) {
                throw err
            }
        })
        res.json({ code: "1002", msg: "注册成功" })
    });
    //商品列表
    app.post("/api/goodslist",(req,res)=>{
        jwt.verify(req.body.token, "userMsg",function(err,decoded){
            if(err){
                res.json({
                    code: "1005",
                    msg: err
                })
            }else{
                //decoded { phone: '13552567473', pwd: '123456', iat: 1529054061 }
                console.log(decoded)
                res.json({
                    code: "1006",
                    msg: "请求成功"
                })
            }
        })
       

    })

}