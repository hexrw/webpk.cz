import { reactive } from "vue"


export const modal = reactive({
    open: false,
    type: "alert",
    msg: "",
    callback: _ => {}
})
