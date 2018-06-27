<template>
    <div class="order">
        <div class="order_title">
          <span class="iconfont icon-xiangzuo"></span>
          <h3>我的订单</h3>
          <span class="iconfont icon-xiaoxi"></span>
        </div>
        <div class="order_list">
          <ul class="order_nav">
              <li><router-link replace :to="{name:'order',params:{type:'all'}}">全部</router-link></li>
              <li><router-link replace :to="{name:'order',params:{type:'obligation'}}">待付款</router-link></li>
              <li><router-link replace :to="{name:'order',params:{type:'wait'}}">待发货</router-link></li>
              <li><router-link replace :to="{name:'order',params:{type:'payment'}}">待收货</router-link></li>
              <li><router-link replace :to="{name:'order',params:{type:'aftersale'}}">售后</router-link></li> 
          </ul>
              
            {{this.$route.params.type}}


        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{}
    },
    watch:{
        $route(n,o){
         console.log(n)
        }
    }
};
</script>
<style scoped>
.order {
  width: 100%;
  height: 100%;
}
.order_title {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0.2rem 0;
  font-size: 0.4rem;
  background: #eee;
}
.order_title h3 {
  font-weight: normal;
}
.order_list {
}
.order_nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.order_nav > li {
  flex: 1;
  text-align: center;
  padding:0.2rem 0;
  border-bottom: 1px solid #eee;
  border-top: 1px solid #eee;
}

.router-link-active{
    /* border-bottom: 2px solid red; */
    color:red;
}
</style>
