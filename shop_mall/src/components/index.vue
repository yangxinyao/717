<template>
    <div class="wrapper">
      <router-view></router-view> 
     
      <!-- 底部 -->
    <Foot class="footer"></Foot>
    </div>
    
</template>
<script>
import Foot from "./com/foot.vue"
export default {
  data() {
    return {
      footArr: [
        {
          img: "http://localhost:8080/src/assets/iconImg/123.png",
          name: "首页",
          type: "shou"
        },
        {
          img: "http://localhost:8080/src/assets/iconImg/f.png",
          name: "分类",
          type: "fen"
        },
        {
          img: "http://localhost:8080/src/assets/iconImg/g.png",
          name: "购物车",
          type: "shopCar"
        },
        {
          img: "http://localhost:8080/src/assets/iconImg/w.png",
          name: "我的",
          type: "mine"
        }
      ]
    };
  },
  components: {
    Foot
    //  Sec
  },
  methods: {}
};
</script>
<style scoped>
.wrapper{
    width:100%;
    height:100%;
    display: flex;
    flex-direction: column;
}
.footer{
position: fixed;
left:0;
bottom:0;
background:#fff;
}
  
</style>


