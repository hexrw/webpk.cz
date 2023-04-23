<script setup>
import { useRoute } from "vue-router"


const { query } = useRoute()

function submit () {
    void(0)
}
</script>

<template>
<div class="w-full flex mx-auto">

<div v-if="query.id" class="mt-24 p-5 rounded-md border border-gray-800 w-full max-w-6xl mx-5 lg:mx-auto">

<FormKit
    type="form"
    #default="{ value }"
    @submit="submit"
    :actions="false"
>
    <FormKit type="text" name="id" id="id" label="ID" :value="query.id" disabled="true" />
    <FormKit type="submit" label="Odeslat" />
    
    <pre class="p-5">{{ value }}</pre>
</FormKit>

</div>

<div v-else class="min-h-screen w-full flex">
    <p class="w-full text-2xl text-center my-auto">
        Neplatný odkaz.
    </p>
</div>

</div>
</template>
