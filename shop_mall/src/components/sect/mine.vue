<template>
    <div class="bg-box">
       <div class="box_top">
           <span class="iconfont icon-shezhi"></span>
           <h3 class="box-h3">我的717商城</h3>
           <span @click="toLogin">注册</span>
        </div>
        <div class="box_login" >
           <div><img src="../../assets/login/tou.png" alt=""></div>
           <span>yxy_taobao</span>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        toLogin(){
            this.$router.push("/regirest")
        }
    },
    mounted () {
        
    }

}
</script>
<style scoped>
.bg-box{
    width:100%;
    height: 3.55rem;
    background:url("../../assets/bg/mineBg.png") no-repeat;
    font-size: 0.4rem
}
.box_top{
    padding:0.2rem 0;
}
.box_top>span{
    width:1rem;
    padding-left:0.5rem;
}
.box-h3{
    width:65%;
    display: inline-block;
    text-align: center;
    font-weight: normal;   
}
.box_login{
    width:1.8rem;
    height:2.2rem;
    margin:0 auto;
}
.box_login>div{
width:100%;
height:1.8rem;
}
.box_login>div>img{
    width:100%;
    height:100%;
}
</style>


