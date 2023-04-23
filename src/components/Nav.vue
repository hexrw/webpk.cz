<script setup>
import { ref } from "vue"
import { useRouter } from "vue-router"
import logo from "../assets/logo.svg"


const exceptions = [
    "404",
    "Zásady zpracování osobních údajů",
    "Obchodní podmínky",
    "Projektový formulář",
    "Kontaktní formulář",
]

const router = useRouter()
const routes = router.getRoutes().filter(route => !exceptions.includes(route.name))

const isMenuOpen = ref(false)
</script>

<template>
<nav class="select-none border-gray-200 absolute w-full px-2 sm:px-4 py-2.5 rounded z-10">
    <div class="container flex flex-wrap justify-between items-center mx-auto">
        <button @click="router.push('/')" class="flex items-center">
            <img :src="logo" class="mr-3 h-6 sm:h-9" alt="Logo" />
            <span class="self-center text-xl font-semibold whitespace-nowrap select-none">WebPK.cz</span>
        </button>
        <button @click="isMenuOpen = !isMenuOpen" type="button" class="inline-flex items-center p-2 ml-3 text-gray-500 rounded-lg md:hidden bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
        <span class="sr-only">Otevřít hlavní menu</span>
        <svg class="w-6 h-6 fill-current" aria-hidden="true" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
        </button>
        <div :class="[{ hidden: !isMenuOpen }, 'w-full md:block md:w-auto']" id="navbar-default">
        <ul class="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:font-medium md:border-0 md:bg-slate-50 md:bg-opacity-30">
            <li v-for="route in routes">
            <router-link :to="route.path" @click="isMenuOpen ? isMenuOpen = !isMenuOpen : null"
                class="block py-2 pr-4 pl-3 text-gray-700 rounded md:bg-transparent md:p-0"
            >{{ route.name }}</router-link>
            </li>
        </ul>
        </div>
    </div>
</nav>
</template>

<style scoped>
.router-link-active { @apply text-blue-700 }
</style>
