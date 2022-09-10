import { createApp } from "vue"
import "./style.css"
import App from "./App.vue"
import router from "./router"

import Particles from "particles.vue3"


createApp(App)
    .use(router)
    .use(Particles)
    .mount("#app")
