<template>
    <div>
        <div class="register">
            <span class="iconfont icon-xiangzuo"></span>
            <h3>注册717</h3>
        </div>
        <div class="login_input">
            <div>
                <span class="iconfont icon-wode"></span>
                <p class="line">
                    <input type="text" placeholder="请输入手机号" v-model="phone">
                </p> 
            </div>
            <div>
                <span class="iconfont icon-mima"></span>
                <p class="line">
                    <input type="password" placeholder="请输入密码" v-model="pwd">
                </p> 
            </div>
            <div>
                <span class="iconfont icon-mima"></span>
                 <p class="line">
                    <input type="password" placeholder="请输入密码" v-model="pwdr">
                </p> 
            </div>
            <!-- 错误提示 -->
            <span class="err_msg" v-show="flag">{{errMsg}}</span>
        </div>
        <button @click="gotoreg">注册</button>
    </div>
</template>
<script>
export default {
    data(){
        return{
            phone:"",
            pwd:"",
            pwdr:"",
            errMsg:"",
            flag:false
        }
    },
    methods: {
      gotoreg(){
        // this.flag=this.flag?false:true;
        let phoneReg=/^1[3578]\d{9}$/
        if(!phoneReg.test(this.phone)){
          this.errMsg="请输入正确的手机号";
          this.flag=true
          return
        }
        let pwdReg=/^\d{6,}/
        if(!pwdReg.test(this.pwd)){
          this.errMsg="请输入正确格式的密码";
          this.flag=true
          return
        }
        if(this.pwd!=this.pwdr){
          this.errMsg="密码不一致";
          this.flag=true
          return
        }
        if(!this.phone&&!this.pwd&&!this.pwer){
            this. errMsg="请填写所有信息"
            this.flag=true
        }
        this.$http.post("/api/regirest",{
            phone:this.phone,
            pwd:this.pwd
        }).then((res)=>{
          console.log(res.data)
          if(res.data.code==1001||res.data.code==1002){
                this.$router.push({
                    name:"login"
                })
          }
        })
      }  
    }
}
</script>
<style scoped>
.register{
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding:.2rem 0;
    font-size: .4rem;
    background: #b90707;
    text-align: center;
    color:#fff;
}
.register>span{
    width:1rem;
}
.register h3{
    width:80%;
   font-weight: normal;  
}
.login_input{
    margin-top:0.2rem;
}
.login_input input{
    outline: none;
    border:none;
 } 
.login_input>div{
    height:1rem;
    line-height: 1rem;
    padding:0 0.2rem;
    box-sizing: border-box;
}
.login_input>div>span{
    display: inline-block;
    width:0.5rem;
}
.login_input>div>p{
    display: inline-block;
    width:90%;
    height:100%;
    border-bottom:1px solid #ccc;
}
button{
    width:4rem;
    padding:0.4rem 0;
    display: block;
    margin: 0.5rem auto;
    border:none;
    padding:0.3rem 0;
    border-radius: 0.5rem;
    background:rgb(255, 18, 78);
    color:#fff;
    font-size: 0.3rem;
 }
.err_msg{
    display: block;
    width:4.2rem;
    margin:0 auto;
    margin-top:0.2rem;
    padding:0.1rem 0;
    background: rgba(0,0,0,0.8);
    color:#fff;
    text-align: center;
    border-radius: 0.5rem;
}
</style>

