<script setup>
import Modal from "./components/Modal.vue"
import Nav from "./components/Nav.vue"
import Footer from "./components/Footer.vue"
import { useRoute } from "vue-router"


const route = useRoute()
</script>

<template>
<Modal />
<Nav />
<router-view v-slot="{ Component }">
    <Transition
        enter-active-class="duration-300 ease-out"
        enter-from-class="transform opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="duration-200 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="transform opacity-0"
    >
        <div
            :key="route.path"
            class="min-h-screen"
        > <!-- Force re-render to trigger transition -->
            <component :is="Component" />
        </div>
    </Transition>
</router-view>
<Footer />
</template>
