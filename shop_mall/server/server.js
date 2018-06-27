const express = require("express")
const listapi=require("./listapi.js")
const bodyParser = require("body-parser")
const path=require("path")
let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const ejs=require("ejs")
app.engine('html', ejs.__express);
app.set('view engine', 'html')
app.use(express.static(path.resolve(process.cwd()+"/../server/dist")))

app.all("*",function(req,res,next){
    res.header({
        // "Access-Control-Allow-Origin": "*"//cors
        "Access-Control-Allow-Origin":"*",
        "Accept-Content":"application/json,plain/text",
        "Access-Control-Allow-Headers":"Content-Type" //post
    })
    // res.header("Access-Control-Allow-Headers","Content-Type,Token")
    // res.header("Content-Type","application/json;charset=utf-8")
    next()
})

listapi(app)
app.listen("3000",function(){

    console.log("server start at 3000")
})