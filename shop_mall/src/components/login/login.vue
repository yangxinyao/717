<template>
    <div class="login_box">
        <div class="login_title">
            <span class="iconfont icon-xiangzuo"></span>
            <h3>登录717</h3>
            <router-link to="/regirest">注册</router-link>
        </div>
        <div class="login_test" >
            <div class="login_input">
                <div>
                    <span class="iconfont icon-wode"></span>
                    <p class="line">
                      <input type="text" placeholder="请输入手机号" v-model="phone">
                    </p> 
                </div>
                <div>
                    <span class="iconfont icon-mima"></span>
                    <input type="password" placeholder="请输入密码" v-model="pwd">
                </div>
            </div>
            <span class="err_msg" v-show="flag">{{errMsg}}</span>
            <div class="login_btn">
                <button @click="subLogin">立即登录</button>
            </div>
            <div class="pasword"><a href="##">忘记密码?</a></div>
            <!-- 第三方登录 -->
            <div class="other_way">
                <h2 class="three">使用第三方登录</h2>
            </div>
        </div>

    </div>
</template>
<script>
export default {
  data() {
    return {
      phone: "",
      pwd: "",
      errMsg: "",
      flag: false
    };
  },
  methods: {
    subLogin() {
      let phoneReg = /^1[3578]\d{9}$/;
      if (!phoneReg.test(this.phone)) {
        this.errMsg = "请输入正确的手机号";
        this.flag = true;
        return;
      }
      let pwdReg = /^\d{6,}/;
      if (!pwdReg.test(this.pwd)) {
        this.errMsg = "请输入正确格式的密码";
        this.flag = true;
        return;
      }
      this.$http.post("/api/user", {
            phone:this.phone,
            pwd:this.pwd
        }).then(data => {
            console.log(data)
        if (data.data.code == "1003") {
        //   this.$router.history.push("/index/shou");
        // console.log(data.data.token)
        document.cookie=`token=${data.data.token}`
        this.$router.push({
            name:this.$route.query.from||"shouye"
        })
        } else {
          this.flag = true;
          this.errMsg = data.data.msg;
          return false;
        }
      });
    },
   
  }
};
</script>
<style scoped>
.login_box {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.login_title {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0.2rem 0;
  font-size: 0.4rem;
  background: #fcfcfc;
}
.login_title h3 {
  font-weight: normal;
}
.login_test {
  flex: 1;
  background: #eee;
}
.login_input {
  margin-top: 0.2rem;
  width: 100%;
  background: #fff;
}
.login_input input {
  outline: none;
  border: none;
}
.login_input > div {
  height: 1rem;
  line-height: 1rem;
  padding: 0 0.2rem;
  box-sizing: border-box;
}
.login_input > div > span {
  display: inline-block;
  width: 0.5rem;
}
.line {
  display: inline-block;
  width: 90%;
  height: 100%;
  border-bottom: 1px solid #ccc;
}
.login_input p:nth-child(9) input::-webkit-input-placeholder {
  color: #fcfcfc;
}
.err_msg {
  display: block;
  width: 4.2rem;
  margin: 0 auto;
  margin-top: 0.2rem;
  padding: 0.1rem 0;
  background: rgba(0, 0, 0, 0.8);
  color: #fff;
  text-align: center;
  border-radius: 0.5rem;
}
.login_btn {
  width: 4rem;
  margin: 0 auto;
  margin-top: 0.5rem;
}
.login_btn > button {
  width: 100%;
  height: 100%;
  border: none;
  padding: 0.3rem 0;
  border-radius: 0.5rem;
  background: rgb(255, 18, 78);
  color: #fff;
  font-size: 0.3rem;
}
.pasword {
  text-align: end;
  padding-right: 0.2rem;
  box-sizing: border-box;
}
.other_way {
  margin-top: 2rem;
  position: relative;
}
.three {
  text-align: center;
}
.three::after {
  width: 32%;
  height: 1px;
  background: #999;
  position: absolute;
  left: 10px;
  top: 7px;
  content: "";
}
.three::before {
  width: 32%;
  height: 1px;
  background: #999;
  position: absolute;
  right: 10px;
  top: 7px;
  content: "";
}
</style>

