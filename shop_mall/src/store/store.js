import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex);
import { instance as http } from "../tool/http.js"
import router from "../router/index.js"
import { getCookie } from "../tool/cookie.js"
let store = new Vuex.Store({
    state: {
        listArr: {},
        shopCarlist: [],//购物车
        allPrice: 0,//总价
        flag: false
    },
    mutations: {
        updatedFn(state, payload) {
            let o = { ...state.listArr }
            o[payload.id] = payload.data.secondLevelCategories
            state.listArr = o
            // console.log(state.listArr)
        },
        //购物车
        shopCarFn(state, payload) {
            state.shopCarlist = payload
            console.log(state.shopCarlist)
        },
        //     
        //加 、减
        updetaCount(state, payload) {
            let counts = state.shopCarlist[payload.index]
            if (payload.type == -1) {
                if (counts.count <= 1) {
                    return
                }
                counts.count = counts.count - 1
            } else {
                if (counts.count > 10) {
                    return
                }
                counts.count = counts.count + 1
            }
            let sumCount = 0;
            let sumPrice = 0;
            state.shopCarlist.forEach((v, i) => {
                if (v.checked) {
                    sumCount += v.count;
                    sumPrice += v.count * v.jdPrice
                }
            })
            state.allPrice = sumPrice
        },
        //单选
        SingleFn(state, payload) {
            state.shopCarlist[payload].checked = !state.shopCarlist[payload].checked
            let sumCount = 0;
            let sumPrice = 0;
            let num = 0;
            state.shopCarlist.forEach((v, i) => {
                if (v.checked) {
                    num++;
                    sumCount += v.count;
                    sumPrice += v.count * v.jdPrice
                }
            })
            if (num == state.shopCarlist.length) {
                state.flag = !state.flag
            }
            state.allPrice = sumPrice
        },
        //全选
        allCheck(state) {
            state.flag = !state.flag;
            let sumCount = 0;
            let sumPrice = 0;
            state.shopCarlist.forEach((v, i) => {
                v.checked = state.flag;
                if (v.checked) {
                    sumCount += v.count;
                    sumPrice += v.count * v.jdPrice
                }  
            })
            state.allPrice = sumPrice
        }

    },
    actions: {
        getDataFn({ state, commit }, id) {
            if (!state.listArr[id]) {
                http.get(`/class/list?cid=${id}`).then(res => {
                    // console.log(res.data);
                    // this.list = res.data;
                    console.log(res.data)
                    commit("updatedFn", {
                        id,
                        data: res.data
                    })
                });
            }
        },
        //购物车
        shopCarData({ commit }) {
            if (getCookie("token")) {
                router.push({
                    name: "shopCar"
                });
            }
            http.post("/api/goodslist", {
                token: getCookie("token")
            }).then(res => {
                console.log(res);
                if (res.data.code == "1006") {
                    commit("shopCarFn", res.data.data)
                }
            });
        },
        // 加/减
        changeCount({ commit }, payload) {
            commit("updetaCount", payload)
        },
        //单选
        Single({ commit }, index) {
            commit("SingleFn", index)
        },
        //全选
        allcheck({ commit }) {
            commit("allCheck")
        }
    },
    getters: {

    },
    modules: {

    }
})
export default store