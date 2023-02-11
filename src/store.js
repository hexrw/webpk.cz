import { reactive } from "vue"


export const modal = reactive({
    open: false,
    type: "",
    msg: "",
    callback: _ => {}
})
