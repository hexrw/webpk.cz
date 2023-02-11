<script setup>
import { ref } from "vue"
import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from "@headlessui/vue"
import { ArrowSmallRightIcon } from "@heroicons/vue/24/outline"


const modalOpen = ref(false)
const currentReference = ref("")

const openModal = (reference) => {
    modalOpen.value = true
    currentReference.value = reference
}


const references = [
    {
        title: "Bagruj S Kočkou",
        address: "bagrujskockou.cz",
    },
    {
        title: "PRECIS BUILDING SE",
        address: "cbprecis.cz",
    },
    {
        title: "Statek Hašlovice",
        address: "haslovice.cz",
    }
].map(reference => {
    reference.img = new URL(`../assets/references/${reference.address.replace(".", "-")}.png`, import.meta.url).href
    return reference
})
</script>

<template>

<TransitionRoot as="template" :show="modalOpen">

<Dialog as="div" class="relative z-10" @close="modalOpen = false">
    <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
    </TransitionChild>

    <div class="fixed inset-0 z-10 overflow-y-auto">
        <div class="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
        <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
            <DialogPanel class="relative transform overflow-hidden rounded-xl bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-4xl">
            <div class="bg-white">
                <button @click="modalOpen = false" class="absolute mix-blend-difference outline-none right-2 top-2 text-gray-400 bg-transparent rounded-lg text-sm p-1.5 ml-auto inline-flex items-center">
                    <svg aria-hidden="true" class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    <span class="sr-only">Zavřít</span>
                </button>
                <div class="sm:flex sm:items-start">
                    <div class="text-center sm:text-left">
                        <img class="object-scale-down" :src="currentReference.img" alt="Náhled">
                    </div>
                </div>
                <div class="p-5 bg-slate-200">
                    <a class="inline-flex gap-2 text-white rounded-md py-2 px-5 bg-blue-500" :href="`https://${currentReference.address}/`" target="_blank">
                        <span>Navštívit</span>
                        <ArrowSmallRightIcon class="w-5 h-5 my-auto" />
                    </a>
                </div>
            </div>
            </DialogPanel>
        </TransitionChild>
        </div>
    </div>
</Dialog>

</TransitionRoot>

<div class="pt-28 p-5">

<ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
    <li v-for="reference in references" class="rounded-md m-5 bg-slate-50 shadow-md transition-all hover:scale-105 cursor-pointer" @click="openModal(reference)">
        <div class="p-5">
            <h3 class="text-xl text-blue-700 font-semibold">{{ reference.title }}</h3>
            <p class="text-gray-800">{{ reference.address }}</p>
        </div>
        <img :src="reference.img" alt="Náhled">
    </li>
</ul>

</div>

</template>
