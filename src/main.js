import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import "./style.css"

import Particles from "particles.vue3"
import { plugin, defaultConfig } from "@formkit/vue"
import { generateClasses } from "@formkit/themes"
import { cs } from "@formkit/i18n"
import formKitTheme from "./formKitTheme.js"


createApp(App)
    .use(router)
    .use(Particles)
    .use(plugin, defaultConfig({
        locales: { cs },
        locale: "cs",
        config: {
            classes: generateClasses(formKitTheme)
        }
    }))
    .mount("#app")
