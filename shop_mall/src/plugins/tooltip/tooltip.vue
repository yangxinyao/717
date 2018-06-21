<template>
  <div class="tips" v-show="isActive">
    <!-- 子组件的内容由父组件控制 slot -->
    <slot ></slot>
  </div>
</template>
<script>
export default {
  data(){
    return{
      isActive:false,
      timeout:2000
    }
  },
  mounted(){
    this.isActive=true;
    setTimeout(() => {
      this.isActive=false;
    }, this.timeout);
  },
  methods: {
    active(){
      
    }
  }

    

};
</script>
<style scoped>
</style>


