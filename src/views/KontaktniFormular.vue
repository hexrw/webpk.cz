<script setup>
import { ref, watch, onMounted } from "vue"
import { useRoute } from "vue-router"
import { camel2title } from "../helpers/utils.js"
import useSteps from "../helpers/useSteps.js"


const { query } = useRoute()

const formData = ref({
    data: {
        "webAHosting": {
            "webBundle": query.c ? `Web ${query.c.toUpperCase()}` : null,
            "hostingBundle": query.c ? `Hosting ${query.c.toUpperCase()}` : null,
        },
        "oProjektu": {
            "budget": 10000,
        },
        "vaseUdaje": {
            "type": "Fyzická osoba podnikatel",
        },
    },
    state: { valid: false }
})

watch(formData, async (newVal, oldVal) => {
    localStorage.setItem("formData", JSON.stringify(newVal))
}, { deep: true })

const { steps, visitedSteps, activeStep, setStep, stepPlugin } = useSteps()

const submitApp = async (data, node) => {
    try {
        await fetch("/api/saveForm", {
            method: "POST",
                body: data
            })
        node.clearErrors()
        alert("Formulář odeslán!")
    } catch (err) {
        node.setErrors(err.formErrors, err.fieldErrors)
        alert("Chyba!")
    }
}

const checkStepValidity = (stepName) => {
    return (steps[stepName].errorCount > 0 || steps[stepName].blockingCount > 0) && visitedSteps.value.includes(stepName)
}

onMounted(async _ => {
    console.log(localStorage.getItem("formData") !== null)
    console.log(formData.value.data)
    console.log(JSON.parse(localStorage.getItem("formData")))
    if (localStorage.getItem("formData") !== null) formData.value.data = JSON.parse(localStorage.getItem("formData"))
})
</script>

<template>
<div class="min-h-screen flex flex-col justify-center pt-20 p-0 md:p-5">
<div class="mx-auto w-full max-w-2xl border-0 md:border border-slate-20+0 p-10 rounded-none md:rounded-lg">

<h1 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">Kontaktní Formulář</h1>
<p class="mb-4 text-gray-500">Přijímám zakázky pouze z České Republiky.</p>

<FormKit
    type="form"
    v-model="formData.data"
    :plugins="[ stepPlugin ]"
    @submit="submitApp"
    :actions="false"
>
    <ul class="mb-6 flex flex-col md:flex-row pl-0 bg-slate-50 rounded-t-md overflow-hidden border-b border-gray-500">
        <li
            v-for="(step, stepName) in steps"
            :class="[
                'flex hover:cursor-pointer text-xs relative grow justify-center text-gray-400 border-r border-gray-300 bg-gray-300 p-5 items-center',
                { 'has-errors': checkStepValidity(stepName) }
            ]"
            @click="activeStep = stepName"
            :data-step-valid="step.valid && step.errorCount === 0"
            :data-step-active="activeStep === stepName"
        >
            <span
                v-if="checkStepValidity(stepName)"
                class="step--errors text-white bg-red-500 z-50"
                v-text="step.errorCount + step.blockingCount"
            />
            {{ stepName === "vaseUdaje" ? "Vaše Údaje" : camel2title(stepName) }}
        </li>
    </ul>

    <TransitionGroup
        enter-active-class="duration-300 ease-out"
        enter-from-class="transform opacity-0"
        enter-to-class="opacity-100"
    >
        <section key="webAHosting" v-show="activeStep === 'webAHosting'">
            <FormKit
                id="webAHosting"
                type="group"
                name="webAHosting"
            >
                <FormKit
                    type="radio"
                    name="webBundle"
                    label="*Web"
                    :options="[
                        'Web STATIC',
                        'Web PLUS',
                        'Web PRO',
                    ]"
                    validation="required"
                />

                <FormKit
                    type="radio"
                    name="hostingBundle"
                    label="*Hosting"
                    :options="[
                        'Hosting STATIC',
                        'Hosting PLUS',
                        'Hosting PRO',
                        'Vlastní',
                    ]"
                    validation="required"
                />
            </FormKit>
        </section>

        <section key="oProjektu" v-show="activeStep === 'oProjektu'">
            <FormKit
                id="oProjektu"
                type="group"
                name="oProjektu"
            >
                <FormKit
                    type="range"
                    name="budget"
                    :label="'*Rozpočet: ' + ['budget']"
                    min="5000"
                    max="75000"
                    step="2500"
                    help="Zadejte přibližnou výši Vašeho rozpočtu v Kč"
                    validation="required"
                />

                <FormKit
                    wrapper-class="w-full"
                    type="textarea"
                    name="description"
                    maxlength="300"
                    label="*Krátce popište svůj projekt"
                    validation="required|length:10,3000"
                />
            </FormKit>
        </section>

        <section key="vaseUdaje" v-show="activeStep === 'vaseUdaje'">
            <FormKit
                id="vaseUdaje"
                type="group"
                name="vaseUdaje"
            >
                <FormKit
                    type="radio"
                    name="type"
                    label="*Vyberte"
                    :options="[
                        'Fyzická osoba nepodnikatel',
                        'Fyzická osoba podnikatel',
                        'Právnická osoba (společnost)',
                    ]"
                    validation="required"
                />

                <div v-if="'osoba'.startsWith('Fyzická osoba')" class="block md:inline-flex gap-2">
                    <FormKit
                        type="text"
                        name="firstName"
                        label="*Jméno"
                        validation="required|length:2,50"
                    />
                    <FormKit
                        type="text"
                        name="lastName"
                        label="*Příjmení"
                        validation="required|length:2,50"
                    />
                </div>

                <div v-else>
                    <FormKit
                        type="text"
                        name="companyName"
                        label="*Název subjektu"
                    />
                </div>

                <FormKit
                    v-if="'osoba' !== 'Fyzická osoba nepodnikatel'"
                    type="text"
                    name="ico"
                    label="*IČO"
                    validation="required|number|length:8,8"
                />

                <FormKit 
                    type="email"
                    name="email"
                    label="*E-mail"
                    validation="required|email"
                />

                <FormKit
                    type="tel"
                    name="phone"
                    label="Telefon"
                    validation="length:6,24"
                />

                <FormKit
                    type="checkbox"
                    name="consent"
                    label="*Souhlasím se zpracováním osobních údajů"
                    validation="accepted"
                />
            </FormKit>
        </section>
    </TransitionGroup>

    <!-- Adds Next / Previous navigation buttons. -->
    <div class="flex my-4 justify-between">
        <FormKit type="button" :disabled="activeStep == 'webAHosting'" @click="setStep(-1)" v-text="'Zpět'" />
        <FormKit type="button" class="ml-auto" :disabled="activeStep == 'vaseUdaje' " @click="setStep(1)" v-text="'Další'"/>
    </div>

    <details>
        <summary>Form data</summary>
        <pre>{{ formData.data }}</pre>
    </details>

    <FormKit type="submit" label="Odeslat" :disabled="!formData.state.valid" />
</FormKit>

</div>
</div>
</template>

<style scoped>
[data-step-active="true"] {
    @apply text-black bg-white border-b-0 relative;
}

.step--errors,
[data-step-valid="true"]:after {
    @apply content-['\2713'] /* The check symbol */
        text-white absolute rounded-full text-center
        justify-center flex flex-col text-xs z-10 top-1 right-1 h-4 w-4;
}

[data-step-valid="true"]:after { @apply bg-green-600 }
</style>
