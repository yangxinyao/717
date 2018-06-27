<template>
 <div class="wrap" ref="wrap" @scroll="scrollFn">
    <!-- 头部搜索 -->
    <Head></Head>
    <!-- 内容 -->
    <div class="scroll" ref="scroll">     
   <!-- 轮播 -->
    <div class="swiper-container banner" ref="swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in imgArr" :key="index">
           <img :src="item.img"/>
        </div>
       </div> 
        <!-- 如果需要分页器 -->
      <div class="swiper-pagination" ref="pag"></div>   
    </div>
   <!-- 分类列表 -->
     <div class="fen_list">
        <dl>
            <dt><i class="iconfont icon-jinkoushipin"></i></dt>
            <dd>家乡味道</dd>
        </dl>
        <dl>
            <dt><i class="iconfont icon-iconfontjinkoushipin"></i></dt>
            <dd>进口食品</dd>
        </dl>
        <dl>
            <dt><i class="iconfont icon-mimianliangyou"></i></dt>
            <dd>米面粮油</dd>
        </dl>
        <dl>
            <dt><i class="iconfont icon-lingshi"></i></dt>
            <dd>休闲零食</dd>
        </dl>
        <dl>
            <dt><i class="iconfont icon-tiaowei"></i></dt>
            <dd>调味调料</dd>
        </dl>
        <dl>
            <dt><i class="iconfont icon-jinkoushipin1"></i></dt>
            <dd>牛奶乳品</dd>
        </dl>
        <dl>
            <dt><i class="iconfont icon-mimianliangyou1"></i></dt>
            <dd>酒水饮料</dd>
        </dl>
        <dl>
            <dt><i class="iconfont icon-CombinedShape"></i></dt>
            <dd>茶果冲饮</dd>
        </dl>
       <div class="shop-mall">
          <span class="dontai">商城动态</span>
          <div>
          <div class="swiper-container shopMsg" ref="shopMsg">
            <div class="swiper-wrapper">
                <div class="swiper-slide"><span>绿色无公害，无污染，纯天然 绿色无公害，无污染，纯天然</span></div>
                <div class="swiper-slide"><span>纯天然无公害</span></div>
                <div class="swiper-slide"><span>无污染，纯天然 绿色无公害，无污染，纯天</span></div>
            </div> 
          </div>
        </div>
    </div>
    <!-- 商品列表 -->
    <ul class="list_box">
      <li v-for="(item,index) in list" :key="index">
          <listItem v-bind:data="item" :parent="$refs.tool"></listItem>
      </li>
    </ul>
    <div class="dowMsg">{{dowMsg}}</div>
   </div>
   </div>
  <tooltip ref="tool"></tooltip>
 </div>
</template>
<script>
import Head from "../com/head.vue";
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
import listItem from "../com/listItem.vue";
export default {
  data() {
    return {
      imgArr: [
        {
          img: " http://localhost:8080/src/assets/banner/1.png"
        },
        {
          img: " http://localhost:8080/src/assets/banner/a.png"
        },
        {
          img: " http://localhost:8080/src/assets/banner/j.png"
        },
        {
          img: " http://localhost:8080/src/assets/banner/s.png"
        }
      ],
      list: [],
      shock:true,
      page:1,
      dowMsg:"正在加载更多..."
    };
  },
  components: {
    Head,
    listItem
  },
  mounted() {
    //banner
    new Swiper(this.$refs.swiper, {
      loop: true,
      autoplay: 2000,
      effect: "fade",
      fade: {
        crossFade: false
      },
      pagination: this.$refs.pag,
      paginationType: "bullets"
    }),
      //商场动态
      new Swiper(this.$refs.shopMsg, {
        direction: "vertical",
        loop: true,
        autoplay: 3000,
        height: 100,
        effect: "flip",
        flip: {
          slideShadows: true,
          limitRotation: true
        }
      });
    //  jsonp(this.url,"mtopjsonp4")
    this.$http("/index/recommend?page=1").then(res => {
      let listArr = JSON.parse(JSON.parse(res.data).recommend).wareInfoList;
         this.list = listArr;
        //  console.log(this.list)
      });
  },
  methods: {
    scrollFn() {
      let wH = this.$refs.wrap.offsetHeight;
      let docH=this.$refs.scroll.offsetHeight;
      let scrH=this.$refs.wrap.scrollTop
    if(docH-wH-scrH<40&&this.shock){
      this.shock=false
      this.page++;
      if(this.page<5){
        this.$http(`/index/recommend?page=${this.page}`).then(res => {
          if(res.code==1000){
            this.dowMsg="到底了..."
          }
          this.list=[
            ...this.list,
            ...JSON.parse(JSON.parse(res.data).recommend).wareInfoList
          ] ;
          this.shock=true      
        });
      }else{

      }
      
    }
    }
  }
};
</script>
<style scoped>
.wrap {
/* flex: 1; */
 overflow: hidden;
 overflow-y: scroll; 
}


.banner {
  width: 100%;
  height: 3.55rem;
}
img {
  width: 100%;
  height: 100%;
}
.fen_list {
  width: 100%;
  /* height:1rem; */
  display: flex;
  flex-wrap: wrap;
}
.fen_list > dl {
  width: 25%;
  text-align: center;
   padding: 0.2rem 0; 
}
.fen_list > dl > dt > i {
  display: inline-block;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background: cadetblue;
  line-height: 1rem;
}
.iconfont {
  font-size: 0.5rem;
}
.shop-mall {
  width: 100%;
  display: flex;
}
.shopMsg {
  display: inline-block;
  height: 1rem;
  border: 1px solid #ccc;
  border-radius: 0.2rem;
  overflow: hidden;
}
.shopMsg .swiper-slide {
  line-height: 1rem;
  height: 100%;
}
.dontai {
  width: 1rem;
  color: coral;
  padding: 0 0.02rem;
  box-sizing: border-box;
}
.list_box {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.list_box > li {
  width: 50%;
  height: 4.5rem;
  box-sizing: border-box;
  padding: 0.1rem 0.1rem;
}
.list_box > li {
  border-top: 1px solid #ccc;
}

.list_box > li:nth-child(even) {
  border-left: 1px solid #ccc;
}
.dowMsg{
  width:100%;
  text-align: center;
  padding: 3px 0;
}
.footer{
position: fixed;
left:0;
bottom:0;
background:#fff;
}
</style>


