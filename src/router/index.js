import { createRouter, createWebHistory } from "vue-router"
import routes from "./routes.js"


routes.map(route => {
    const componentName = route.name.normalize("NFD")
        .replace(/\p{Diacritic}/gu, "")
        .replace(/\s/g, "")
    route.component = _ => import(`../views/${componentName}.vue`)
    return route
})


const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        return { // always scroll to top
            top: 0,
            behavior: "smooth",
        }
    }
})

export default router
