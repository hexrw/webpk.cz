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
    {
        path: "/obchodni-podminky",
        name: "Obchodní podmínky",
        component: _ => import("../views/ObchodniPodminky.vue")
    },
    {
        path: "/zasady-zpracovani-osobnich-udaju",
        name: "Zásady zpracování osobních údajů",
        component: _ => import("../views/ZasadyZpracovaniOsobnichUdaju.vue")
    },
    {
        path: "/:pathMatch(.*)*",
        name: "404",
        component: _ => import("../components/404.vue")
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
