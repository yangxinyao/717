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
                    <div class="off" @click="offBtn">{{options.off}}</div>
                    <div class="ok" @click="successBtn">{{options.ok}}</div>
                </div>
            </div>`,
            components: {
                DialogBox
            },
            data() {
                return {
                    isActive: false,
                    options
                }
            },
            methods: {
                show(msg) {
                    this.options = msg;
                    this.isActive = true;
                },
                successBtn(cb) {
                    this.isActive = false;
                    cb()
                },
                offBtn() {
                    this.isActive = false;
                }
            },
            mounted() {
                diaBus.$on("dialog", (msg) => {
                    this.show(msg)
                })
                diaBus.$on("success", (cb) => {
                   this.successBtn(cb)
                    
                })
               
            }
        })
    }
}
export default Dialog
