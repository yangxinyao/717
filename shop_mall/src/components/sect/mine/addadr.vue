<template>
    <div class="adr_shop">
       <div class="adr_title">
         <span class="iconfont icon-xiangzuo" @click="togoMine"></span><h3>收货人</h3>
       </div>
       <p class="p_inp"><input type="text" placeholder="收件人姓名" v-model="name"></p>
       <p class="p_inp"><input type="text" placeholder="手机号" v-model="phone"></p>
      <div class="adr_btn">
         <button @click="saveFn">保存</button>
      </div>
      <tooltip></tooltip>
    </div>
</template>
<script>
import { getCookie } from "../../../tool/cookie.js";
export default {
  data() {
    return {
      name: "",
      phone: ""
    };
  },
  created(){
    this.$http.post("/api/address",{token: getCookie("token")})
    .then((res)=>{
console.log(res)
    })
  },
  methods: {
    saveFn() {
      this.$http
        .post("/api/addadr", {
          token: getCookie("token"),
          data:{
            name: this.name,
            phone: this.phone
          }
        })
        .then(res => {
          if (res.data.code == "1") {
            this.$toolBus.$emit("tooltip", "添加成功");
          }
        });
    },
    togoMine(){
      this.$router.push({
        name:"address"
      })
    }
  },
  mounted() {}
};
</script>
<style scoped>
.adr_shop {
  width: 100%;
  height: 100%;
  background: #eee;
}
.adr_title {
  width: 100%;
  height: 1rem;
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #fff;
}
.adr_title > span {
  width: 0.4rem;
}
.adr_title > h3 {
  flex: 1;
  text-align: center;
  font-size: 0.34rem;
}
.adr_btn {
  width: 4rem;
  margin: 0 auto;
  margin-top: 0.5rem;
  position: fixed;
  left: 50%;
  bottom: 0.5rem;
  transform: translate3d(-50%, 0, 0);
}
.adr_btn > button {
  width: 100%;
  height: 100%;
  border: none;
  padding: 0.3rem 0;
  border-radius: 0.5rem;
  background: rgb(255, 18, 78);
  color: #fff;
  font-size: 0.3rem;
}
.p_inp {
  margin: 0.2rem auto;
  width: 90%;
  height: 0.8rem;
  line-height: 0.8rem;
  background: #fff;
  padding: 0 0.2rem;
  box-sizing: border-box;
}
.p_inp > input {
  border: none;
  outline: none;
  background: none;
}
input::-webkit-input-placeholder {
  color: #ccc;
}
</style>

