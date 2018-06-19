<template>
    <div class="box">
        <div class='head'>
			<span> </span> 
			<span></span>
			<div class="shop">
				<span>购物车</span>
			</div>
			<div>
				<span class="bianji">编辑</span>
				<span>✉</span>
			</div>
		</div>
        <div class='mains'>
			<div class="list">
				你的购物车啥也没有！
			</div>
            <div class="list">
               <goodsitem></goodsitem>
            </div>
        </div>
       <div class="bottom">
			<div class="bottomLeft">
				<input type="checkbox">
				<span>全选</span>
			</div>
			<div class="bottomRight">
				<div class="allPrice">
					<span>合计<b>￥0</b></span>
					<span>(运费：￥0)</span>
				</div>
				<div>
					<button>结算</button>
				</div>
			</div>
		</div>
    </div>
</template>
<script>
import { getCookie } from "../../tool/cookie.js";
import goodsitem from "../com/goodsitem.vue";
export default {
  data() {
    return {};
  },
  components: {
    goodsitem
  },
  mounted() {
    this.$http
      .post("/api/goodslist", {
        token: getCookie("token")
      })
      .then(res => {
        if (res.data.code == "1006") {
          this.$router.push({
            name: "shopCar"
          });
        } else {
        }
      });
  }
};
</script>
<style scoped>
.box{
	display: flex;
	flex-direction: column;
	width: 100%;
	height:100%;
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
.mains{
	width: 100%;
	flex: 1;
	overflow-y: scroll;
}
.list{
	width: 100%;
	height:2.65rem;
	display:flex;
	margin-bottom:.2rem;
	background-color:#fff;
	align-items:center;
	justify-content:space-around;
}
.bottom {
  width: 100%;
  height: 0.97rem;
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


