<template>
    <div>
       shopcar
    </div>
</template>
<script>
import {getCookie} from "../../tool/cookie.js"
export default {
    data(){
        return{

        }
    },
    mounted () {
        this.$http.post("/api/goodslist",{
           token:getCookie("token")
        }).then((res)=>{
         console.log(res)
         if(res.data.code=="1006"){
            this.$router.push({
                name:"login",
                query:{
                    from:"shopCar"
                }
            })
         }else{
             
         }
        })
    }
}
</script>
<style scoped>

</style>


