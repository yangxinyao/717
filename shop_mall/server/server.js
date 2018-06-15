const express = require("express")
const listapi=require("./listapi.js")
const bodyParser = require("body-parser")
let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
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