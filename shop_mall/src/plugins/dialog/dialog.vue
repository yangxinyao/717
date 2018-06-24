<template>
    <!-- <div class="msg_box" v-html="com.component||temp">
    </div> -->
     <div>
         
     </div>
</template>
<script>
export default {
props:{
    com:{
       type:Object
    },
   
},
data(){
    return{
        temp:`
        <div class="title">${this.com.title}</div>
        <div class="off" @click="a">${this.com.off}</div>
        <div class="ok" @click="this.isActive=false">${this.com.ok}</div>`,
        isShow:false
    }
},
methods:{
   a(){
       
   }
},
mounted(){
//    diaBus.$emit("dialog") 
}
 
};
</script>
<style scoped>
@import "./dialog.css";
</style>
