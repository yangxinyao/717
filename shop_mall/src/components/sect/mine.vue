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
        <div class="mine_content">
          <div class="mystore">
            <h3>我的店铺</h3><span class="iconfont icon-xiangyou"></span>
          </div>
          <div class="list_state">
            <dl @click="toOrder('obligation')">
              <dt><i class="iconfont icon-daifukuan"></i></dt>
              <dd>待付款</dd>
            </dl>
            <dl @click="toOrder('wait')">
              <dt><i class="iconfont icon-daifahuo"></i></dt>
              <dd>待发货</dd>
            </dl>
            <dl @click="toOrder('payment')">
              <dt><i class="iconfont icon-daishouhuo"></i></dt>
              <dd>待收货</dd>
            </dl>
            <dl @click="toOrder('aftersale')">
              <dt><i class="iconfont icon-shouhoubaozhang"></i></dt>
              <dd>售后</dd>
            </dl>
            <dl class="mine_order" @click="toOrder('myorder')">
              <dt><i class="iconfont icon-aiguifanfile"></i></dt>
              <dd>我的订单<span class="iconfont icon-xiangyou"></span></dd>
            </dl>
          </div>
          <div class="zhanghu">
           <router-link to="/account">
              <div class="togo">
                <span class="iconfont icon-yue"></span>
                <p><b>账户余额</b><span class="iconfont icon-xiangyou"></span></p>
              </div>
           </router-link>
           <router-link to="/address">
              <div class="togo">
                <span class="iconfont icon-dizhi"></span>
                <p><b>地址管理</b><span class="iconfont icon-xiangyou"></span></p>
              </div>
           </router-link>
           <router-link to="/customer">
            <div class="togo">
              <span class="iconfont icon-kefu"></span>
               <p><b>我的客服</b><span class="iconfont icon-xiangyou"></span></p>
            </div>
           </router-link>
          </div>
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
    tosetup() {
      this.$router.push("/setup");
    },
    toOrder(type){
      // console.log(type)
      this.$router.push({
        name:"order",
        params:{
          type:type
        }
      })
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
  width: 65%;
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
.mine_content {
  background: #f5f4f4;
}
.mystore {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.3rem 0.2rem;
  box-sizing: border-box;
  margin-top: 0.2rem;
  border-bottom: 1px solid #eee;
  background: #fff;
}
.list_state {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0.1rem 0;
  background: #fff;
}
.list_state > dl {
  width: 20%;
  text-align: center;
}
.list_state > dl > dt {
  font-size: 0.24rem;
}
.list_state > dl > dd {
  font-size: 0.16rem;
}
.mine_order {
  border-left: 1px solid #ccc;
}
.zhanghu {
  margin-top: 0.3rem;
  background: #fff;
}
.zhanghu .togo {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.zhanghu .togo > span {
  width: 0.5rem;
  margin-left: 0.2rem;
}
.zhanghu .togo > p {
  flex: 1;
  display: flex;
  padding: 0.2rem;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
}
a {
  color:#000;
}
</style>


