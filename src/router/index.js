import { createRouter, createWebHistory } from "vue-router"


const routes = [
    {
        path: "/",
        name: "Domů",
        component: _ => import("../views/Home.vue")
    },
    {
        path: "/cenik",
        name: "Ceník",
        component: _ => import("../views/Cenik.vue")
    },
    {
        path: "/kontaktni-formular",
        name: "Kontaktní formulář",
        component: _ => import("../views/KontaktniFormular.vue")
    },
    {
        path: "/faq",
        name: "FAQ",
        component: _ => import("../views/FAQ.vue")
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
