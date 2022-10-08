<script setup>
import { ref, computed, onMounted } from "vue"
import {
    MagnifyingGlassIcon,
    ChevronDownIcon,
    ChevronUpIcon,
} from "@heroicons/vue/24/outline"
import search from "../helpers/search.js"


const faq = ref([])
const loading = ref(true)
const query = ref("")
const open = ref({})

const data = computed(_ => {
    if (query.value === "" || faq.value === []) {
        return faq.value
    } else {
        const scope = faq.value.map(i => i.title)
        const res = search(scope, query.value)
        return res.length > 0 ? res.map(i => faq.value[i]) : []
    }
})

onMounted(async _ => {
    const faqCache = JSON.parse(sessionStorage.getItem("faqCache"))

    if (Array.isArray(faqCache)) {
        faq.value = faqCache
        loading.value = false
    } else {
        fetch("/api/getFaq")
            .then(res => res.json())
            .then(json => {
                faq.value = json
                loading.value = false
                sessionStorage.setItem("faqCache", JSON.stringify(json)) // cache | use `JSON.stringify() just to be safe
            })
    }
})
</script>

<template>
<div class="min-h-screen flex flex-col align-center pt-28 px-5">

<h1 class="mb-8 text-3xl tracking-tight font-bold text-center">Často kladené otázky</h1>

<form class="mb-8" @submit.prevent>
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only">Hledat</label>
    <div class="relative">
        <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <MagnifyingGlassIcon aria-hidden="true" class="w-5 h-5 text-gray-500" />
        </div>
        <!-- Not using v-model because of it's behavior on clients with soft input (phones) -->
        <input type="search" id="default-search" @input="e => query = e.target.value" class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Začněte psát pro vyhledávání v otázkách..." required>
    </div>
</form>

<div v-if="!loading">
    <ul v-if="data.length > 0">
        <li
            v-for="document in data" :key="document._id"
            class="border-b last:border-b-0 border-gray-300 hover:bg-slate-50 transition-all ease-in-out duration-500"
        >
            <div @click="open[document._id] = !open[document._id]"
                class="inline-flex items-center justify-start gap-3 w-full px-4 py-6 cursor-pointer"
            >
                <Component :is="open[document._id] ? ChevronUpIcon : ChevronDownIcon" class="w-6" />
                <h3 class="text-2xl font-bold">{{ document.title }}</h3>
            </div>
            <p
                v-show="open[document._id]"
                class="px-5 pb-6 text-xl tracking-tight font-light transition-opacity"
                v-html="document.content"
            />
        </li>
    </ul>
    <div v-else>
        <p class="text-xl text-gray-600 text-center">Nebyl nalezen žádný výsledek.</p>
    </div>
</div>

<p v-else class="text-xl text-gray-600 text-center">Načítání...</p>

</div>
</template>
