<script setup>
import {
    Dialog,
    DialogOverlay,
    TransitionChild,
    TransitionRoot
} from "@headlessui/vue"
import {
    QuestionMarkCircleIcon,
    InformationCircleIcon,
    CheckCircleIcon,
} from "@heroicons/vue/24/solid"
import { ExclamationTriangleIcon } from "@heroicons/vue/24/outline"

import { modal } from "../store.js"


const confirm = _ => {
    modal.callback()
    modal.open = false
    modal.callback = _ => {}
}
</script>

<template>
    <TransitionRoot as="template" :show="modal.open">
        <Dialog as="div" class="fixed z-10 inset-0 overflow-y-auto" @close="modal.open = false">
        <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
            <DialogOverlay class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </TransitionChild>

            <!-- This element is to trick the browser into centering the modal contents. -->
            <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
            <div class="relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div class="sm:flex sm:items-start">
                    <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full sm:mx-0 sm:h-10 sm:w-10"
                        :class="{ 'bg-red-100': modal.type === 'alert' }">
                    <ExclamationTriangleIcon v-if="modal.type === 'alert'" class="h-6 w-6 text-red-600" aria-hidden="true" />
                    <QuestionMarkCircleIcon v-if="modal.type === 'confirm'" class="h-12 w-12 text-blue-600" aria-hidden="true" />
                    <InformationCircleIcon v-if="modal.type === 'info'" class="h-12 w-12 text-blue-600" aria-hidden="true" />
                    <CheckCircleIcon v-if="modal.type === 'success'" class="h-12 w-12 text-green-500" aria-hidden="true" />
                    </div>
                    <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                        <pre class="text-lg">{{ modal.msg }}</pre>
                    </div>
                </div>
                </div>
                <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                    <button v-if="modal.type === 'confirm'" type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm" @click="confirm()">Pokračovat</button>
                    <button v-if="modal.type === 'confirm'" type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" @click="modal.open = false" ref="cancelButtonRef">Zpět</button>
                    <button v-else type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" @click="modal.open = false" ref="okButtonRef">Ok</button>
                </div>
            </div>
            </TransitionChild>
        </div>
        </Dialog>
    </TransitionRoot>
</template>
