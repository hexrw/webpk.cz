import { modal } from "../store.js"


export const alertModal = msg => {
    modal.type = "alert"
    modal.msg = msg
    modal.open = true
}

export const infoModal = msg => {
    modal.type = "info"
    modal.msg = msg
    modal.open = true
}

export const confirmModal = (msg, callback) => {
    modal.type = "confirm"
    modal.msg = msg
    modal.callback = callback
    modal.open = true
}

export const successModal = (msg) => {
    modal.type = "success"
    modal.msg = msg
    modal.open = true
}
