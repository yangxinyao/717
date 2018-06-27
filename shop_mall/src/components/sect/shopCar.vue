<template>
    <div class="box">
        <div class='head'>
			<span> </span> 
			<span></span>
			<div class="shop">
				<span>购物车</span>
			</div>
			<div>
				<span class="bianji" @click="changeEdit">{{edit}}</span>
				<span>✉</span>
			</div>
		</div>
        <div class='mains'>
          <div class="list" v-show="shopCarlist.length==0">
            你的购物车啥也没有！
          </div>
            <goodsitem v-for="(item,index) in shopCarlist" :key="index" v-bind:data="{item,index}"></goodsitem>
        </div>
        
       <div class="bottom">
			<div class="bottomLeft">
				<input type="checkbox" @click="allCheck" :checked="flag">
				<span>全选</span>
			</div>
			<div class="bottomRight">
				<div class="allPrice" >
					<span>合计<b>￥{{allPrice}}</b></span>
					<span>(运费：￥0)</span>
				</div>
				<div>
					<button>{{account}}</button>
				</div>
			</div>
		</div>
    </div>
</template>
<script>
import { getCookie } from "../../tool/cookie.js";
import goodsitem from "../com/goodsitem.vue";
import { mapState } from "vuex";
export default {
  data() {
    return {
      edit:"编辑",
      account:"结算"
    };
  },
  components: {
    goodsitem
  },
  created() {},
  mounted() {
    this.$store.dispatch("shopCarData");
  },
  methods: {
    allCheck() {
      this.$store.dispatch("allcheck");
    },
    changeEdit() {
      this.edit="完成"
      this.account="删除"
      this.$http.post("/api/edit", { 
        token: getCookie("token"),
        data:this.$store.state.shopCarlist
         }).then(res => {
           console.log(res.data)
      });
     
    }
  },
  computed: {
    //获取购物车数据
    ...mapState(["shopCarlist"]),
    ...mapState(["allPrice"]),
    ...mapState(["flag"])
  }
};
</script>
<style scoped>
.box {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: #eeeeee;
}
.head {
  width: 100%;
  height: 0.97rem;
  display: flex;
  border-bottom: 0.01rem solid #ccc;
  align-items: center;
  justify-content: space-around;
  position: relative;
  background-color: #fafafb;
}
.head div {
  display: flex;
}
.mains {
  width: 100%;
  flex: 1;
  overflow-y: scroll;
}
.list {
  width: 100%;
  height: 2.65rem;
  display: flex;
  margin-bottom: 0.2rem;
  background-color: #fff;
  align-items: center;
  justify-content: space-around;
  padding: 0 0.2rem;
  box-sizing: border-box;
}
.bottom {
  width: 100%;
  height: 0.97rem;
  position: fixed;
  bottom: 1.1rem;
  left: 0;
  background-color: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.allPrice {
  display: flex;
  flex-direction: column;
  margin-right: 0.3rem;
}
.bottomRight {
  display: flex;
  align-items: center;
}
button {
  width: 2.55rem;
  height: 0.9rem;
  border: none;
  outline: none;
  background-color: #fc4141;
  color: #fff;
  text-align: center;
  line-height: 0.9rem;
}
.text {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>


