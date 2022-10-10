<script setup>
import { ref } from "vue"
import { useRoute } from "vue-router"
import { camel2title } from "../helpers/utils.js"
import useSteps from "../helpers/useSteps.js"


const { query } = useRoute()
const webBundle = ref(query.c ? `Web ${query.c.toUpperCase()}` : null)
const hostingBundle = ref(query.c ? `Hosting ${query.c.toUpperCase()}` : null)
const budget = ref(10000)
const osoba = ref("Fyzická osoba podnikatel")

const { steps, visitedSteps, activeStep, setStep, stepPlugin } = useSteps()

const submitApp = async (formData, node) => {
    try {
        const res = await fetch("/api/saveForm", {
            method: "POST",
                body: formData
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

</script>

<template>
<div class="min-h-screen flex flex-col justify-center pt-20 p-5">
<div class="mx-auto max-w-4xl border border-slate-200 p-10 rounded-lg">

<h1 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">Kontaktní Formulář</h1>
<p class="mb-4 text-gray-500">Přijímám zakázky pouze z České Republiky.</p>

<FormKit
    type="form"
    #default="{ value, state: { valid } }"
    :plugins="[stepPlugin]"
    @submit="submitApp"
    :actions="false"
>
    <ul class="steps">
        <li
            v-for="(step, stepName) in steps"
            :class="['step', { 'has-errors': checkStepValidity(stepName) }]"
            @click="activeStep = stepName"
            :data-step-valid="step.valid && step.errorCount === 0"
            :data-step-active="activeStep === stepName"
        >
            <span
                v-if="checkStepValidity(stepName)"
                class="step--errors"
                v-text="step.errorCount + step.blockingCount"
            />
            {{ stepName === "vaseUdaje" ? "Vaše Údaje" : camel2title(stepName) }}
        </li>
    </ul>

    <div class="">
        <section v-show="activeStep === 'webAHosting'">
            <FormKit
                id="webAHosting"
                type="group"
                name="webAHosting"
            >
                <FormKit
                    type="radio"
                    name="webBundle"
                    label="*Web"
                    v-model="webBundle"
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
                    v-model="hostingBundle"
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

        <section v-show="activeStep === 'oProjektu'">
            <FormKit
                id="oProjektu"
                type="group"
                name="oProjektu"
            >
                <FormKit
                    type="range"
                    name="budget"
                    :label="'*Rozpočet: ' + budget"
                    v-model="budget"
                    min="5000"
                    max="75000"
                    step="5000"
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

        <section v-show="activeStep === 'vaseUdaje'">
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
                    v-model="osoba"
                    validation="required"
                />

                <div v-if="osoba.startsWith('Fyzická osoba')" class="block md:inline-flex gap-2">
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
                    v-if="osoba !== 'Fyzická osoba nepodnikatel'"
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

        <!-- NEW: Adds Next / Previous navigation buttons. -->
        <div class="step-nav">
            <FormKit type="button" :disabled="activeStep == 'webAHosting'" @click="setStep(-1)" v-text="'Zpět'" />
            <FormKit type="button" class="next" :disabled="activeStep == 'vaseUdaje' " @click="setStep(1)" v-text="'Další'"/>
        </div>

        <details>
            <summary>Form data</summary>
            <pre>{{ value }}</pre>
        </details>
    </div>

    <FormKit type="submit" label="Odeslat" :disabled="!valid" />
</FormKit>

</div>
</div>
</template>

<style scoped>
:root {
    --gray: #ccccd7;
    --gray-l: #eeeef4;
}

#app .source-content {
    padding: 2em;
    background: transparent;
}

.steps {
    display: flex;
    padding-left: 0;
    background: var(--gray-l);
    border-radius: 0.4em 0.4em 0 0;
    overflow: hidden;
    border-bottom: 1px solid var(--gray);
}

.step {
    font-size: 14px;
    display: flex;
    align-items: center;
    padding: 16px 20px;
    background: var(--gray-l);
    border-right: 1px solid var(--gray);
    color: gray;
    flex-grow: 0;
    flex-shrink: 0;
    position: relative;
}

.step:last-child {
    box-shadow: 0.1em -0.1 0.1em 0 rgba(0,0,0,0.33)
}

.step:hover { @apply cursor-pointer }

[data-step-active="true"] {
    @apply text-black bg-white border-b-0 relative;
}

.step--errors,
[data-step-valid="true"]:after {
    @apply content-['\2713'] /* The check symbol */
        text-white bg-green-600 absolute rounded-full text-center
        justify-center flex flex-col text-xs z-10 top-1 right-1 h-4 w-4;
}

.step--errors {
    @apply text-white bg-red-500 z-50
}

.step-nav {
    display: flex;
    margin-top: 2em;
    margin-bottom: 1em;
    justify-content: space-between;
}

.next { margin-left: auto;}

details {
    border: 1px solid var(--gray);
    background: var(--gray-l);
    border-radius: .15em;
    padding: 1em;
}

button:hover, summary { @apply cursor-pointer }
p { max-width: 600px;}
p small { color: #999; }
h1 { margin: .25em 0; max-width: 600px;}

@media (max-width: 438px) {
        h1 { font-size: 1.15em; }
        #app .source-content {
                padding: 0.5em;
        }
        .steps {
                flex-direction: column;
        }
        .step {
                border-bottom: 1px solid var(--gray);
                border-right: none;
        }
        .step:last-child {
                border-bottom: none;
        }
        .form-body {
                padding: 1em;
        }
        .formkit-outer[data-type="submit"] .formkit-wrapper {
                padding: 0 1em 1em 1em;
                display: flex;
        }
        .formkit-form > .formkit-messages {
                padding: 0 1em 0em 1em;
        }
        .formkit-form > .formkit-messages:last-child {
                padding: 0 1em 1em 1em;
        }
}
</style>
