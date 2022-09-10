<script setup>
import { reactive, toRef, ref, watch } from 'vue'
import { getNode, createMessage } from '@formkit/core'


function useSteps () {
    const activeStep = ref('')
    const steps = reactive({})
    const visitedSteps = ref([]) // track visited steps

    // NEW: watch our activeStep and store visited steps
    // to know when to show errors
    watch(activeStep, (newStep, oldStep) => {
        if (oldStep && !visitedSteps.value.includes(oldStep)) {
        visitedSteps.value.push(oldStep)
        }
        // NEW: trigger showing validation on fields
        // within all visited steps
        visitedSteps.value.forEach((step) => {
        const node = getNode(step)
        node.walk((n) => {
            n.store.set(
            createMessage({
                key: 'submitted',
                value: true,
                visible: false,
            })
            )
        })
        })
    })

    const setStep = (delta) => {
        const stepNames = Object.keys(steps)
        const currentIndex = stepNames.indexOf(activeStep.value)
        activeStep.value = stepNames[currentIndex + delta]
    }

    const stepPlugin = (node) => {
        if (node.props.type == "group") {
        // builds an object of the top-level groups
        steps[node.name] = steps[node.name] || {}

        node.on('created', () => {
            // use 'on created' to ensure context object is available
            steps[node.name].valid = toRef(node.context.state, 'valid')
        })

        // listen for changes in error count and store it
        node.on('count:errors', ({ payload: count }) => {
            steps[node.name].errorCount = count
        })

        // listen for changes in count of blocking validations messages
        node.on('count:blocking', ({ payload: count }) => {
            steps[node.name].blockingCount = count
        })

        // set the active tab to the 1st tab
        if (activeStep.value === '') {
            activeStep.value = node.name
        }

        // Stop plugin inheritance to descendant nodes
        return false
        }
  }

  // NEW: include visitedSteps in our return
  return { activeStep, visitedSteps, steps, stepPlugin, setStep }
}

const { steps, visitedSteps, activeStep, setStep, stepPlugin } = useSteps()

// NEW: submit handler, which posts to our fake backend.
const submitApp = async (formData, node) => {
    try {
    const res = await axios.post(formData)
    node.clearErrors()
    alert('Your application was submitted successfully!')
    } catch (err) {
    node.setErrors(err.formErrors, err.fieldErrors)
    }
}

const checkStepValidity = (stepName) => {
    return (steps[stepName].errorCount > 0 || steps[stepName].blockingCount > 0) && visitedSteps.value.includes(stepName)
}

const camel2title = str => str
    .replace(/([A-Z])/g, match => ` ${match}`)
    .replace(/^./, match => match.toUpperCase())
    .trim()
</script>

<template>
<h1>Carbon Sequestration Grant</h1>

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
        {{ camel2title(stepName) }}
    </li>
    </ul>

    <!-- .form-body solely for styling -->
    <div class="form-body">
    <section v-show="activeStep === 'contactInfo'">
        <FormKit
        type="group"
        id="contactInfo"
        name="contactInfo"
        >
        <FormKit
            type="text"
            label="*Full name"
            name="full_name"
            placeholder="First Last"
            validation="required"
        />

        <FormKit
            type="email"
            name="email"
            label="*Email address"
            placeholder="email@domain.com"
            validation="required|email"
        />

        <FormKit
            type="tel"
            name="tel"
            label="*Telephone"
            placeholder="xxx-xxx-xxxx"
            help="Phone number must be in the xxx-xxx-xxxx format."
            validation="required|matches:/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/"
        />
        </FormKit>
    </section>

    <section v-show="activeStep === 'organizationInfo'">
        <FormKit
        id="organizationInfo"
        type="group"
        name="organizationInfo"
        >
        <FormKit
            type="text"
            label="*Organization name"
            name="org_name"
            placeholder="MyOrg, Inc."
            help="Enter your official organization name."
            validation="required|length:3"
        />

        <FormKit
            type="date"
            label="Date of incorporation"
            :validation="[['before_date', new Date(Date.now())]]"
            name="date_inc"
        />
        </FormKit>
    </section>

    <section v-show="activeStep === 'application'">
        <FormKit
        id="application"
        type="group"
        name="application"
        >
        <FormKit
            type="checkbox"
            label="*I'm not a previous grant recipient"
            help="Have you received a grant from us before?"
            name="not_previous_recipient"
            validation="required|accepted"
            :validation-messages="{
            accepted: 'We can only give one grant per organization.'
            }"
        />
        <FormKit
            type="textarea"
            label="*How will you use the money?"
            name="how_money"
            help="Must be between 20 and 500 characters."
            placeholder="Describe how the grant will accelerate your efforts."
            validation="required|length:20,500"
        />
        </FormKit>
    </section>

    <!-- NEW: Adds Next / Previous navigation buttons. -->
    <div class="step-nav">
        <FormKit type="button" :disabled="activeStep == 'contactInfo'" @click="setStep(-1)" v-text="'Previous step'" />
        <FormKit type="button" class="next" :disabled="activeStep == 'application' " @click="setStep(1)" v-text="'Next step'"/>
    </div>

    <details>
        <summary>Form data</summary>
        <pre>{{ value }}</pre>
    </details>
    </div>

    <!-- NEW: Adds submit button. -->
    <FormKit type="submit" label="Submit Application" :disabled="!valid" />
</FormKit>

<p><small><em>*All the contents of this form are fictional (the company, grant, and form)
    for the purposes of demonstrating the capabilities of FormKit.</em></small></p>
</template>
    