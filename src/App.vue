<script setup>
import Nav from "./components/Nav.vue"
import Footer from "./components/Footer.vue"
</script>

<template>
<Nav />
<router-view v-slot="{ Component }">
    <transition name="fade">
        <component :is="Component" />
    </transition>
</router-view>
<Footer />
</template>
