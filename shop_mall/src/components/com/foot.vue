<template>
    <div class="foot">
        <router-link v-for="(item,index) in footArr" :key="index" :to ="item.type">
            <dl>
                <dt>
                <img :src="item.img" />
                </dt>
                <dd>{{item.name}}</dd>
            </dl>
        </router-link>
    </div>
</template>
<script>
export default {
    data(){
        return{
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
        }
    }
}
</script>
<style scoped>
.foot{
    width:100%;
    height:1rem;
    padding:0.1rem 0;
    display:flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;  
}
.foot dl>dt{
    width:0.6rem;
    height:0.6rem;
}
.foot dl>dt>img{
    width:100%;
    height:100%;
    display: block
}
</style>


