let userList=[{
    id:"1",
    phone:"13552567473",
    pwd:"123"
}]

var bodyParser=require("body-parser")
module.exports=function(app){
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.post("/api/user",function(req,res,next){
        let { phone, pwd } = req.body.params
        let user = null
        userList.forEach((i) => {
            if (i.phone == phone && i.pwd == pwd) {
                user = i
            }
        })
        if (user) {
            res.send({ code: "1001", msg: "登录成功", data: user })
        } else {
            res.send({ code: "1002", msg: "登录失败" })
        }
    })
}