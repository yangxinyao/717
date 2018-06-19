<template>
    <div>
      <div class="exit_box">
          <div class="exit_login">
            <button  @click="exitLogin">退出登录</button>
          </div>
       
      </div>
    </div>
</template>
<script>
import {delCookie } from "../../../tool/cookie.js";
export default {
  data() {
    return {};
  },
  methods: {
    exitLogin() {
      delCookie("token");
      this.$router.push("/index/mine");
    }
  }
};
</script>
<style scoped>
.exit_login {
  width: 4rem;
  margin: 0 auto;
  margin-top: 0.5rem;
}
.exit_login>button{
  width: 100%;
  height: 100%;
  border: none;
  padding: 0.3rem 0;
  border-radius: 0.5rem;
  background: rgb(255, 18, 78);
  color: #fff;
  font-size: 0.3rem;
}
</style>


