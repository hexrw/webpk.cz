<script setup>
import { reactive, ref, toRef } from "vue"


const budget = ref(10000)

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

const sendForm = _ => {
    alert("Formulář byl odeslán")
}
</script>

<template>
<div class="min-h-screen flex flex-col justify-center pt-20 p-5">
    <div class="mx-auto">
        <h1 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">Kontaktní Formulář</h1>
        <p class="mb-4 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.</p>

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
                        </FormKit>
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
                                type="textarea"
                                maxlength="300"
                                label="Krátce popište svůj projekt"
                                validation="required|length:10,3000"
                            />
                        </FormKit>
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
                                validation="required"
                            />

                            <div class="block md:inline-flex gap-2">
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
                                validation="accepted"
                            />
                        </FormKit>
                    </section>

                    <FormKit
                        type="submit"
                        label="Odeslat"
                        @click="sendForm()"
                    />

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
