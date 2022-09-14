<script setup>
import { useRouter } from "vue-router"


const router = useRouter()
</script>

<template>
<div class="min-h-screen bg-white px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
    <div class="mx-auto max-w-max">
        <main class="sm:flex">
        <p class="text-4xl font-extrabold font-mono text-blue-600 sm:text-5xl">404</p>
        <div class="sm:ml-6">
            <div class="font-mono sm:border-l sm:border-gray-200 sm:pl-6">
            <h1 class="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">Stránka nenalezena</h1>
            <p class="mt-1 text-base text-gray-500">Zkontrolujte prosím adresový řádek a zkuste to znovu.</p>
            </div>
            <div class="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
            <router-link to="/" class="inline-flex items-center rounded-md border border-transparent bg-blue-600 px-8 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Domů</router-link>
            <button @click="router.back()" class="inline-flex items-center rounded-md border border-transparent bg-blue-100 px-8 py-2 text-sm font-medium text-blue-700 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Zpět</button>
            </div>
        </div>
        </main>
    </div>
</div>
</template>