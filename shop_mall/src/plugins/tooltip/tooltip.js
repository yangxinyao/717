
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
        console.log(options)
        //vue全局组件
        Vue.component("tooltip", {
            template: `
            <div class="tooltip">
            <transition-group name="toast"> 
               <Toolitem v-for="(item,index) in msg" :key="index">{{item}}</Toolitem>
            </transition-group>
            </div>`,
            components: {
                Toolitem
            },
            data() {
                return {
                    msg: [],
                    timeout:options.timeout
                }
            },
            methods:{
                active(msg,options){
                    if (options){
                        this.timeout = options.timeout
                    }
                    this.msg.push(msg);
                }
            }
        })
    }
}
export default tooltip