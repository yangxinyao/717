<template>
    <dl class="list_dl" @click="togoDetail(data)">
     <dt><img v-lazy="data.imageurl" alt=""></dt>
     <dd>
         <span class="list_text">{{data.wname}}</span>
         <b>{{data.jdPrice}}</b>
         <span class="iconfont icon-gouwuche1"></span>
     </dd>
    </dl>
</template>
<script>
export default {
    props:{
        data:{
            required:true,
            type:Object
        }
    },
    methods: {
        togoDetail(data){
       
         this.$router.push({
             name:"detail",
             query:{
              data:data
             }
         })
         console.log(this.$route)

        }
    }
}
</script>

<style scoped>
.list_dl{
    width:100%;
}
.list_dl>dt{
    width:100%;
    height:3rem; 
}
.list_dl>dt>img{
    width:100%;
    height:100%;
    font-size: 0; 
}
.list_text{
    overflow : hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
</style>
