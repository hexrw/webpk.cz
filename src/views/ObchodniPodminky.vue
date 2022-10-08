<script setup>
import content from "../assets/obchodni_podminky.txt?raw"
</script>

<template>
<div class="pt-28 p-5">
    <h1 class="font-extrabold tracking-tight text-4xl">Obchodní podmínky</h1>
    <pre class="whitespace-pre-wrap font-sans" v-html="content" />
</div>
</template>
