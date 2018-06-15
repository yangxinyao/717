<template>
<div class="classify">
<Head></Head>
<!-- 列表内容 -->
<div class="fen_box">
    <!-- 左侧导航 -->
    <div class="class_scroll">
         <ul class="fen_left">
            <li v-for="(item,index) in classArr" :key="index" :id="item.id" @click="getIndex(item.id)" :class="code===item.id?'active':''">
               <a href="javascript:;">{{item.title}}</a>
            </li>
        </ul>
    </div>
    <!-- 右侧列表 -->
    <div class="fen_right">
       <div>
          <!-- <div class="top_img"><img :src="listArr.imageUrl" alt=""></div>  -->
         <div class="list_box" >
            <div class="ever_h" v-for="(item ,index) in shoplist" :key="index">
               <span class="title">{{item.goodsTypeName}}</span>
               <dl class="ever_dl" v-for="(v,i) in item.goodsTypeList" :key="i">
                 <dt><img :src="v.goodsTypeImgUrl" alt=""></dt>
                 <dd>{{v.goodsTypeName}}</dd>
               </dl>
            </div>
         </div>
      </div>
    </div>
       
    </div>
 </div>  
</template>
<script>
import Head from "../com/head.vue";
import {mapState} from "vuex"
export default {
  data() {
    return {
      classArr: [
        {
          title: "热门分类",
          id: "17951827"
        },
        {
          title: "手机数码",
          id: "17951828"
        },
        {
          title: "电脑办公",
          id: "17951829"
        },
        {
          title: "电视影音",
          id: "17951830"
        },
        {
          title: "空调冰洗",
          id: "17951831"
        },
        {
          title: "厨房卫浴",
          id: "17951832"
        },
        {
          title: "生活电器",
          id: "17951833"
        },
        {
          title: "食品酒水",
          id: "17951834"
        },
        {
          title: "美妆个护",
          id: "17951835"
        },
        {
          title: "母婴玩具",
          id: "17951836"
        },
        {
          title: "医疗保健",
          id: "17951837"
        },
        {
          title: "服饰鞋帽",
          id: "17951838"
        },
        {
          title: "运动户外",
          id: "17951839"
        }
      ],
      list:[],
      code:"17951827",
    };
  },
  components: {
    Head
  },
  methods: {
    getIndex(cid) {
      console.log(cid);
      this.$store.dispatch("getDataFn",cid)
      this.code=cid
    },
  
  },
  mounted() {
    this.$http.get(`/class/list?cid=17951827`).then(res => {
      console.log(res.data);
      this.list = res.data.secondLevelCategories;
    });
    
  },
  computed: {
    //  ...mapState(["listArr"])
    shoplist(){
      return this.$store.state.listArr[this.code]?this.$store.state.listArr[this.code]:this.list
    }
  }
};
</script>
<style scoped>
.classify {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.fen_box {
  flex: 1;
  overflow: hidden;
  display: flex;
  border-top: 1px solid #ccc;
}
.class_scroll {
  width: 30%;
  overflow: hidden;
  overflow-y: auto;
}
.fen_left {
  width: 100%;
  text-align: center;
}
.fen_left > li {
  width: 100%;
  height: 1rem;
  line-height: 1rem;
  background: #ccc;
}
.fen_left > li > a {
  text-decoration: none;
  color: #000;
  -webkit-tap-highlight-color: rgba(255,255,255,0)
}

.fen_right {
  width: 70%;
  overflow: auto;
}
.fen_right > div {
  width: 100%;
}
.top_img {
  width: 100%;
  height: 2rem;
}
.top_img > img {
  width: 100%;
  height: 100%;
  font-size: 0;
}
.list_box {
  width: 100%;
}

.title {
  display: block;
}
.ever_h{
  margin-left:0.2rem;
}
.ever_dl {
  width: 1.5rem;
  height: 2rem;
  background: #ccc;
  display: inline-block;
  text-align: center;
  margin: 0.1rem 0 0 0.1rem;
}
.ever_dl > dt {
  width: 1.2rem;
  height: 1rem;
  margin: 0 auto;
  padding: 0.1rem 0;
}
.ever_dl > dt > img {
  width: 100%;
  height: 100%;
  font-size: 0;
}
.ever_dl > dd {
  width:100%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}
.fen_left > li.active {
  border-left: 2px solid #d60924;
  background:#fff;
}
</style>


