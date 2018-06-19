<template>
    <dl class="list_dl" @click="togoDetail(data)">
     <dt><img v-lazy="data.imageurl" alt=""></dt>
     <dd>
         <span class="list_text">{{data.wname}}</span>
         <b>{{data.jdPrice}}</b>
         <span class="iconfont icon-gouwuche1" @click.stop="addShopcar"></span>
     </dd>
    </dl>
</template>
<script>
import { getCookie } from "../../tool/cookie.js";
export default {
  props: {
    data: {
      required: true,
      type: Object
    }
  },
  methods: {
    togoDetail(data) {
      this.$router.push({
        name: "detail",
        query: {
          data: data
        }
      });
      //  console.log(this.$route)
    },
    addShopcar() {
      if (!getCookie("token")) {
        this.$router.push({
          name: "login"
        });
        return 
      }
      this.$http
        .post("/api/shopCar", {
          token: getCookie("token"),
          data: this.data
        })
        .then(res => {
          if (res.data.code == "1009") {
          } else {
            console.log(res);
          }
        });
    }
  }
};
</script>

<style scoped>
.list_dl {
  width: 100%;
}
.list_dl > dt {
  width: 100%;
  height: 3rem;
}
.list_dl > dt > img {
  width: 100%;
  height: 100%;
  font-size: 0;
}
.list_text {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>
