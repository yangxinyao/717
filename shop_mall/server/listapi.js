const fs = require("fs")
const path = require("path")
const jwt = require("jsonwebtoken")
const multer = require('multer')
// const upload = multer({
//     dest: path.resolve(__dirname + "/upload")
// })
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.resolve(__dirname+"/dist"))
    },
    filename: function (req, file, cb) {
        let str = file.originalname.split(".")
        cb(null, str[0] + '-' + Date.now()+"."+ str[1])
    }
})
var upload = multer({ storage: storage })
//定义接口
module.exports = function (app) {
    app.get('/index/', function (req, res, next) {
        res.render('index', { title: 'HTML' });
    });

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
        let token = jwt.sign(req.body, "userMsg", { expiresIn: 60 * 60 }) //加密
        //    console.log(token)
        let userPath = path.resolve(__dirname + "/user");
        let user = JSON.parse(fs.readFileSync(userPath + "/user.json", "utf-8"));
        user.forEach((i) => {//遍历数据查看用户是否已注册
            if (i.phone == phone && i.pwd == pwd) {
                ind = i
            }
        })
        if (ind) {
            res.json({
                code: "1003",
                msg: "登陆成功",
                token
            })
        } else {
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
            res.json({ code: "1001", msg: "该用户已存在" })
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
    //添加购物车 
    app.post("/api/shopCar", function (req, res) {
        // console.log(req.body)
        if (!req.body.token) {
            res.status(304)
            res.json({
                code: "1020",
                msg: "token不存在"
            })
        }
        jwt.verify(req.body.token, "userMsg", function (err, decoded) {
            if (err) {
                res.json({
                    code: "1007",
                    msg: "登录超时，请重新登录"
                })
            } else {
                const cartPath = __dirname + "/cart/cartlist.json"
                let cartlist = JSON.parse(fs.readFileSync(cartPath, "utf-8"));
                if (cartlist[decoded.phone]) {
                    cartlist[decoded.phone].push(req.body.data)
                } else {
                    cartlist[decoded.phone] = [req.body.data];
                }
                fs.writeFile(cartPath, JSON.stringify(cartlist), (err) => {
                    if (err) {
                        res.json({
                            code: "1008",
                            msg: "写入错误"
                        })
                    } else {
                        res.json({
                            code: "1009",
                            msg: "添加成功"
                        })
                    }
                })
            }
        })

    });
    //购物车商品列表
    app.post("/api/goodslist", (req, res) => {
        jwt.verify(req.body.token, "userMsg", function (err, decoded) {
            if (err) {
                res.json({
                    code: "1005",
                    msg: err
                })
            } else {
                //decoded { phone: '13552567473', pwd: '123456', iat: 1529054061 }
                let goods = JSON.parse(fs.readFileSync(__dirname + "/cart/cartlist.json", "utf-8"))
                // console.log(goods[decoded.phone])
                res.json({
                    code: "1006",
                    msg: "请求成功",
                    data: goods[decoded.phone] || []
                })
            }
        })
    });
    //购物车编辑商品
    app.post("/api/edit", function (req, res) {
        if (req.body.token) {
            jwt.verify(req.body.token, "userMsg", function (err, decoded) {
                if (err) {
                    res.json({
                        code: 0,
                        msg: err
                    })
                } else {
                    //decoded { phone: '13552567473', pwd: '123456', iat: 1529054061 }
                    let goods = JSON.parse(fs.readFileSync(__dirname + "/cart/cartlist.json", "utf-8"))
                    // console.log(goods[decoded.phone])
                    //wareId
                    let arr = []
                    req.body.data.forEach((v, i) => {
                        if (v.checked) {
                            arr.push(i)
                        }
                        console.log(req.body.data.splice(req.body.data[arr[0]], 1))
                    })
                    goods[decoded.phone] = req.body.data
                    fs.writeFileSync(__dirname + "/cart/cartlist.json", JSON.stringify(goods))
                    console.log(req.body.data)
                    res.json({
                        code: 1,
                        msg: "请求成功",
                        data: goods[decoded.phone] || []
                    })
                }
            })
        }
    });
    //新增地址
    app.post("/api/addadr", function (req, res) {
        console.log(req.body)
        if (req.body.token) {
            jwt.verify(req.body.token,"userMsg", function (err, decoded) {
                console.log(decoded)
                if (err) {
                    res.json({
                        code: 0,
                        msg:"登录超时，请重新登陆"
                    })
                } else {
                    let addPath = __dirname + "/address/address.json";
                    let add = JSON.parse(fs.readFileSync(addPath, "utf-8"))
                    if (add[decoded.name]) {
                        add[decoded.name].push(req.body.data)
                    } else {
                        add[decoded.name] = [req.body.data];
                    }
                    fs.writeFile(addPath, JSON.stringify(add), (err) => {
                        if (err) {
                            throw err
                        } else {
                            res.json({
                                code: 1,
                                msg: "添加成功"
                            })
                        }
                    })
                }
            })
        }
    });
    // 地址管理
    app.post("/api/address", function (req, res) {
        jwt.verify(req.body.token, "userMsg", function (err, decoded) {
            if (err) {
                res.json({
                    code: 0,
                    msg: "登录超时，请重新登录"
                })
            } else {
                let addList = JSON.parse(fs.readFileSync(__dirname + "/address/address.json", "utf-8"))
                res.json({
                    code: "1006",
                    msg: "请求成功",
                    data: addList[decoded.phone]
                })
            }
        })
    });
    //上传图片
    app.post("/api/upload", upload.single('img'),function (req,res) {
        console.log(req.file)
        res.json({
            code: 1,
            msg:"上传成功",
            url:"http://localhost:3000/"+req.file.filename
        })
    })


}