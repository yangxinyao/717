<template>
<div>
    <div class="search">
        <p><input type="text" placeholder="请输入商品名" v-model="keystr" @input="searchFn"></p>
       <button>搜索</button>
    </div>
    <ul class="search_list" v-html="this.htmls">

    </ul>
</div>
   
</template>
<script>
export default {
    data(){
        return{
           keystr:"",
           htmls:""
        }
    },
    methods: {
        searchFn(){
           this.$http.get(`https://m.gome.com.cn/index.php?ctl=index&act=keywordsPromptNew&keystr=${this.keystr}&dotime=1528960286000`).then(res=>{
              this.htmls=res.data
           }) 
        }
    },
    mounted(){
        // https://m.gome.com.cn/index.php?ctl=index&act=keywordsPromptNew&keystr=pij&dotime=1528960286000
    }
}
</script>
<style  scoped>
.search{
width: 100%;
text-align: center;
margin-top:0.2rem;
}
p{
    display: inline-block;
    background:#eee;
    padding:0.1rem 0.08rem;
    border-radius: 0.08rem;
}
input{
    border:none;
    outline: none;
    background:none;
}
button{
    border:none;
    background:blue;
    color:#fff;
    padding:0.1rem;
    border-radius: 0.1rem;
}
.search_list>li{
   width:100%;
   height:1rem;
   border-bottom:1px solid #ccc;
   padding:0.2rem 0;
}
</style>



