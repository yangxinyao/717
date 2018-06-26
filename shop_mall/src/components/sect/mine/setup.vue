<template>
    <div class="set_box">
      <div class="exit_box">
        <div class="set_title">
          <span class="iconfont icon-xiangzuo"></span><h3>设置</h3>
        </div>
        <div class="set_list">
            <div class="set_tou" @click="touFn">
              <span>我的头像</span>
              <div class="tou_box">
                <p class="tou_img"><img src="../../../assets/login/tou.png" alt=""></p><span class="iconfont icon-xiangyou"></span>
              </div>
            </div>
            <div class="set_username">
              <span>用户名</span>
              <div class="tou_box">
                <span>路飞</span><span class="iconfont icon-xiangyou"></span>
              </div>
            </div>
            <div class="set_username">
              <span>我的二维码名片</span>
              <div class="tou_box">
                <span>路飞</span><span class="iconfont icon-xiangyou"></span>
              </div>
            </div>
        </div>
 
        <div class="exit_login">
          <button  @click="exitLogin">退出登录</button>
        </div>
      </div>
      <Dialog></Dialog>
    </div>
</template>
<script>
import { delCookie } from "../../../tool/cookie.js";
export default {
  data() {
    return {};
  },
  methods: {
    exitLogin() {
      delCookie("token");
      this.$router.push("/index/mine");
    },
    touFn(){//改头像
      this.$diaBus.$emit("dialog",{
        title:"拍照",
        ok:"取消",
        off:"从相册选择",
      })
    }
  }
};
</script>
<style scoped>
.set_box {
  width: 100%;
  height: 100%;
  background: #f0f0f0;
}
.set_title {
  width: 100%;
  height: 1rem;
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: rgb(250, 249, 249);
}
.set_title > span {
  width: 0.4rem;
}
.set_title > h3 {
  flex: 1;
  text-align: center;
  font-size: 0.34rem;
}
.set_list {
  width: 100%;
  padding-left: 0.2rem;
  background: #fff;
  margin-top: 0.2rem;
  box-sizing: border-box; 
}
.set_tou {
  width: 100%;
  height: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #f0f0f0;
}
.tou_box {
  display: flex;
  align-items: center;
}
.tou_img {
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 50%;
  border: 1px solid #ccc;
}
.tou_img > img {
  width: 100%;
  height: 100%;
  display: block;
}
.set_username{
  width: 100%;
  height: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #f0f0f0; 
}
.exit_login {
  width: 4rem;
  margin: 0 auto;
  margin-top: 0.5rem;
}
.exit_login > button {
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


