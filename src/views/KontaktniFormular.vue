<script setup>
import { reactive, ref, toRef } from "vue"
import { useRoute } from "vue-router"


const { query } = useRoute()
const webBundle = ref(query.c ? `Web ${query.c.toUpperCase()}` : null)
const hostingBundle = ref(query.c ? `Hosting ${query.c.toUpperCase()}` : null)
const budget = ref(10000)
const osoba = ref("Fyzická osoba podnikatel")

const currentStep = ref("webAHosting")
const steps = reactive([
    {
        name: "Web a hosting",
        slug: "webAHosting",
        valid: true,
    },
    {
        name: "O projektu",
        slug: "oProjektu",
        valid: true,
    },
    {
        name: "Vaše údaje",
        slug: "vaseUdaje",
        valid: true
    },
])

const stepPlugin = (node) => {
    // only runs for <FormKit type="group" />
    if (node.props.type == "group") {
        // build up our steps object
        steps[node.name] = steps[node.name] || {}

        // add the current group's reactive validity
        node.on('created', () => {
            steps[node.name].valid = toRef(node.context.state, 'valid')
        })

        // Stop plugin inheritance to descendant nodes.
        // We only care about the the top-level groups
        // that represent the steps.
        return false
    }
}

const sendForm = async (formData, node) => {
    console.log(formData, node)

    try {
        const res = await fetch("/api/sendForm", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ formData })
        })
        node.clearErrors()
        alert("Formulář byl odeslán")
    } catch (err) {
        node.setErrors(err.formErrors, err.fieldErrors)
    }
}
</script>

<template>
<div class="min-h-screen flex flex-col justify-center pt-20 p-5">
    <div class="mx-auto">
        <h1 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">Kontaktní Formulář</h1>
        <p class="mb-4 text-gray-500">Přijímám zakázky pouze z České Republiky.</p>

        <div class="p-5 border border-blue-500 rounded-lg shadow shadow-sky-200">
            <ul class="w-full inline-flex mb-8">
                <li
                    v-for="step in steps"
                    class="border-slate-400 grow border-b-2 text-sm font-semibold tracking-wide uppercase px-6 py-2 cursor-pointer transition duration-200 ease-in-out' ]"
                    :class="{
                        'border-blue-500 text-blue-500': currentStep === step.slug,
                        'hover:text-blue-500 hover:border-blue-500': currentStep !== step.slug,
                        'border-red-500 text-red-500': !step.valid,
                    }"
                    :key="step.slug"
                    @click="currentStep = step.slug"
                >
                    {{ step.name }}
                </li>
            </ul>

            <FormKit
                type="form"
                :plugins="[stepPlugin]"
                :actions="false"
                #default="{ value }"
            >
                <div>
                    <section v-show="currentStep === 'webAHosting'">
                        <FormKit
                            id="webAHosting"
                            type="group"
                            name="webAHosting"
                        >
                            <FormKit
                                type="radio"
                                label="Web"
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
                                label="Hosting"
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
                        <button class="w-full mt-4 bg-blue-500 hover:bg-blue-600 text-white text-sm font-normal py-3 px-5 rounded-lg mb-1" @click="currentStep = 'oProjektu'">Další</button>
                    </section>

                    <section v-show="currentStep === 'oProjektu'">
                        <FormKit
                            id="oProjektu"
                            type="group"
                            name="oProjektu"
                        >
                            <FormKit
                                type="range"
                                :label="'Rozpočet: ' + budget"
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
                                maxlength="300"
                                label="Krátce popište svůj projekt"
                                validation="required|length:10,3000"
                            />
                        </FormKit>
                        <button class="w-full mt-4 bg-blue-500 hover:bg-blue-600 text-white text-sm font-normal py-3 px-5 rounded-lg mb-1" @click="currentStep = 'vaseUdaje'">Další</button>
                    </section>

                    <section v-show="currentStep === 'vaseUdaje'">
                        <FormKit
                            id="vaseUdaje"
                            type="group"
                            name="vaseUdaje"
                        >
                            <FormKit
                                type="radio"
                                label="Vyberte"
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
                                    label="Jméno"
                                    validation="required|length:2,50"
                                />
                                <FormKit
                                    type="text"
                                    label="Příjmení"
                                    validation="required|length:2,50"
                                />
                            </div>

                            <div v-else>
                                <FormKit
                                    type="text"
                                    label="Název subjektu"
                                />
                            </div>

                            <FormKit
                                v-if="osoba !== 'Fyzická osoba nepodnikatel'"
                                type="text"
                                label="IČO"
                                validation="required|number|length:8,8"
                            />

                            <FormKit 
                                type="email"
                                label="E-mail"
                                validation="required|email"
                            />

                            <FormKit
                                type="tel"
                                label="Telefon"
                                validation="required|matches:|length:6,15"
                            />

                            <FormKit
                                type="checkbox"
                                label="Souhlasím se zpracováním osobních údajů"
                                validation="accepted"
                            />
                        </FormKit>
                        <FormKit
                            type="submit"
                            label="Odeslat"
                            @click="sendForm(value)"
                        />
                    </section>

                    <details>
                        <summary>Form data</summary>
                        <pre>{{ value }}</pre>
                    </details>
                </div>
            </FormKit>
        </div>
    </div>

</div>
</template>
