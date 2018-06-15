import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex);
import { instance as http } from "../tool/http.js"
let store = new Vuex.Store({
    state: {
        listArr: {}
    },
    mutations: {
        updatedFn(state, payload) {
            let o = {...state.listArr}
            o[payload.id] = payload.data.secondLevelCategories
            state.listArr=o
            console.log(state.listArr)
        }
    },
    actions: {
        getDataFn({ state,commit }, id) {
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

        }
    },
    getters: {

    },
    modules: {

    }


})
export default store