<script setup>
import { ref } from "vue"


const budget = ref(5000)
</script>

<template>
<div class="min-h-screen flex flex-col justify-center pt-20 p-5">
    <h1 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">Kontaktní Formulář</h1>

    <FormKit
        type="form"
        #default="{ value }"
    >
        <div class="form-body">
            <FormKit
                type="radio"
                label="Web"
                :options="[
                    'Web STATIC',
                    'Web PLUS',
                    'Web PRO',
                ]"
                validation="required"
            />

            <FormKit
                type="radio"
                label="Hosting"
                :options="[
                    'Hosting STATIC',
                    'Hosting PLUS',
                    'Hosting PRO',
                    'Vlastní',
                ]"
                validation="required"
            />

            <FormKit
                type="range"
                label="Rozpočet"
                min="5000"
                max="100000"
                step="1000"
                help="Zadejte Váš rozpočet v Kč"
                validation="required"
            />

            <FormKit
                type="textarea"
                label="Krátce popište svůj projekt"
                validation="required|length:10,3000"
            />

            <FormKit 
                type="radio"
                label="Vyberte"
                :options="[
                    'Fyzická osoba nepodnikatel',
                    'Fyzická osoba podnikatel',
                    'Právnická osoba (společnost)',
                ]"
                validation="required"
            />

            
            <FormKit
                type="text"
                label="Jméno"
                validation="required|length:2,50"
            />
            <FormKit
                type="text"
                label="Příjmení"
                validation="required|length:2,50"
            />

            <FormKit 
                type="email"
                label="E-mail"
                validation="required|email"
            />

            <FormKit
                type="tel"
                label="Telefon"
                validation="required|number|length:6,15"
            />

            <FormKit
                type="checkbox"
                label="Souhlasím se zpracováním osobních údajů"
                validation="required"
            />

            <details>
                <summary>Form data</summary>
                <pre>{{ value }}</pre>
            </details>
        </div>
    </FormKit>
</div>
</template>
