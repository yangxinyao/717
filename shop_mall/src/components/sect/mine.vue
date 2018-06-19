<template>
    <div class="bg-box">
       <div class="box_top">
           <span class="iconfont icon-shezhi t_s" @click="tosetup"></span>
           <h3 class="box-h3">我的717商城</h3>
           <span @click="toLogin">注册</span>
        </div>
        <div class="box_login" >
            <div><img src="../../assets/login/tou.png" alt=""></div>
            <span>yxy_taobao</span>
        </div>
        <div class="mystore">
          <h3>我的店铺</h3><span class="iconfont icon-xiangyou"></span>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    toLogin() {
      this.$router.push("/regirest");
    },
    tosetup(){
       this.$router.push("/setup");
    }
   
  },
  mounted() {}
};
</script>
<style scoped>
.bg-box {
  width: 100%;
  height: 3.55rem;
  background: url("../../assets/bg/mineBg.png") no-repeat;
  font-size: 0.4rem;
}
.box_top {
  padding: 0.2rem 0;
}
.box_top > span {
  width: 0.5rem;
}
.t_s {
  padding-left: 0.2rem;
  font-size: 0.2rem;
}
.box-h3 {
  width: 55%;
  display: inline-block;
  text-align: center;
  font-weight: normal;
}
.t_login {
  width: 1rem;
  padding-right: 0.2rem;
  font-size: 0.16rem;
}
.box_login {
  width: 1.8rem;
  height: 2.2rem;
  margin: 0 auto;
}
.box_login > div {
  width: 100%;
  height: 1.8rem;
}
.box_login > div > img {
  width: 100%;
  height: 100%;
}
.mystore{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.3rem 0.2rem;
  box-sizing: border-box; 
  margin-top:0.2rem;
  border-bottom:1px solid #eee;
}
</style>


