
/**
 * @actionName tooltip
 * 功能：消息提示条，可以自动隐藏
 * @param msg string
 * 
 */

import Toolitem from "./tooltip.vue"
import "./tooltip.css"
let tooltip = {
    install(Vue, options) {
        //  console.log(options)
        const toolBus = new Vue({});

        Object.defineProperty(Vue.prototype, "$toolBus", {
            value: toolBus
        })
        //vue全局组件
        Vue.component("tooltip", {
            template: `
            <div class="tooltip">
            <transition-group name="toast"> 
               <Toolitem v-for="(item,index) in msg" :key="index" :timeout="options.timeout">
               {{item}}</Toolitem>
            </transition-group>
            </div>`,
            components: {
                Toolitem
            },
            data() {
                return {
                    msg: [],
                    options,
                    // timeout:options.timeout
                }
            },
            methods:{
                active(msg,options){
                    if (options){
                        this.timeout = options.timeout
                    }
                    this.msg.push(msg);
                }
            },
            mounted () {
                toolBus.$on('tooltip', (msg) => {
                    this.active(msg)
                })
            }
        })
    }
}
export default tooltip