<template>
    <div class="list"> 
			 <input type="checkbox" :checked="data.item.checked" 
       @click="changeState(data.index)"/> 
				<dl class="listRight">
					<dt><img :src="data.item.imageurl" /></dt>
					<dd>
             <p class="text">{{data.item.wname}}</p>
					   <p>￥{{data.item.jdPrice}}</p> 
					   <p>
						   <span @click="changeNum({type:-1,index:data.index})">-</span>
						   <b>{{data.item.count}}</b>
						   <span @click="changeNum({type:+1,index:data.index})">+</span>
					   </p>
					</dd>
				</dl>
			</div>
</template>
<script>
import { mapState } from "vuex";
export default {
  props: {
    data: {
      required: true,
      type: Object
    },
   
  },
  data() {
    return {
     
    };
  },
  methods: {
    //加加减减
    changeNum(type) {
      console.log(type);
      this.$store.dispatch("changeCount", type);
    },
    //选中状态
    changeState(ind) {
      this.$store.dispatch("Single",ind);
    }
  },
  computed: {
   
  }
};
</script>

<style scoped>
.listRight input {
	width: 1rem;
	height: .6rem;
	outline: none;
	border: .01rem solid #ccc;
	text-align: center;
}
.check_box {
  width: 0.5rem;
  margin-right: 0.1rem;
}
.listRight {
  flex: 1;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.listRight > dt {
  width: 4rem;
  height: 100%;
}
.listRight > dt > img {
  width: 100%;
  height: 100%;
  display: block;
}
.listRight > dd {
  margin-left: 0.2rem;
}
.listRight > dd > p:nth-child(2) {
  display: inline-block;
  width: 1rem;
  margin: 0.1rem 0.2rem 0 0.2rem;
}
.listRight > dd > p:nth-child(3) {
  display: inline-block;
}
.listRight > dd > p:nth-child(3) > span,
.listRight > dd > p:nth-child(3) > b {
  display: inline-block;
  width: 0.5rem;
  height: 0.5rem;

  text-align: center;
  line-height: 0.5rem;
}
.listRight > dd > p:nth-child(3) > span {
  border: 1px solid #ccc;
}
.text {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>

