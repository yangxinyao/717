/**
 * @actionName dialog
 * 
 * 
 */
import "./dialog.css"
import DialogBox from "./dialog.vue"
let Dialog = {
    install(Vue, options) {
        // console.log(options)
        const diaBus = new Vue({});
        Object.defineProperty(Vue.prototype, "$diaBus", {
            value: diaBus 
        })
        Vue.component("Dialog", {
            template: `<div class="dialog" v-show="isActive">
                <div class="msg_box">
                    <div class="title">{{options.title}}</div>
                    <div class="off" @click="isActive=false">{{options.off}}</div>
                    <div class="ok" @click="isActive=false">{{options.ok}}</div>
                </div>
            </div>`,
            components:{
                DialogBox 
            },
            data(){
                return {
                    isActive:false,
                    options,  
                }
            },
            methods:{
                show(){
                  this.isActive=true; 
                }
            },
            mounted(){
              

            }
          
        })
    }
}
export default Dialog
