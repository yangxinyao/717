<template>
    <div class="header"> 
      <span><img src="../../assets/iconImg/123.png"/></span>
      <p><input type="text" placeholder="请输入商品" @click="togoSearch"></p>
      <span><i class="icon iconfont icon-store"></i></span>
      <span><i class="icon iconfont icon-xiaoxi"></i></span>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    methods: {
        togoSearch() {
            this.$router.push({
                name:"search"
            })
        }
    }
}
</script>
<style scoped>
.header{
    width:100%;
    height:1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
p{
    background:#eee;
    padding:0.1rem 0.08rem;
    border-radius: 0.08rem;
}
input{
    border:none;
    outline: none;
    background:none;
}
img{
     width:0.6rem;
    height:0.6rem;
}
</style>



