<script setup>
import { ref, computed } from "vue"
import {
    MagnifyingGlassIcon,
} from "@heroicons/vue/24/outline"


const questions = {
"Co je to hosting?": /*html*/`
Hosting je služba. Za poplatek je vám propůjčen výpočetní výkon a úložný prostor serveru, který je připojen k internetu. Na tento server pak můžete umístit svoje stránky a přesměrovat na něj svou doménu. Tím se váš web stane dostupným.
`,

"Co je to IP adresa?": /*html*/`
<p>IP adresa neboli adresa <span class="font-bold underline tracking-wide">I</span>nternetového <span class="font-bold underline">P</span>rotokolu je označení odkazující na určité síťové rozhraní v počítačové síti, která tento protokol používá ke komunikaci. Díky IP adrese je váš web identifikovatelný na internetu.</p>
<p class="pt-5">Dnes se používají dvě verze: starší IPv4 (např. 192.168.1.64) a novější IPv6 (např. 2001:0db8:85a3:0000:0000:8a2e:0370:7334). V současné době je rozšířenější verzí IPv4, z důvodu nedostatku adres je však postupně nahrázována verzí IPv6.</p>
<p class="pt-5">Protože by se IP adresa špatně pamatovala, existuje doménové jméno.</p>
`,

"Co je to doména?": /*html*/`
Doména (např. google.com) je vlastně takový alias pro IP adresu serveru, na kterém se váš web nachází.
`,

"Co je to responzivní web design?": /*html*/`Responzivní web design je takový design, který se v reálném čase automaticky přizpůsobuje velikosti obrazovky zařízení, na kterém je zobrazen. Díky tomu bude váš web vypadat dobře na všech zařízeních (telefonech, počitačích, tabletech, ...), a to i když se velikost obrazovky náhle změní.
`,

"Co jsou to vlastně webové stránky?": /*html*/`
<p>Webové stránky byly původně pouze soubor nejdříve jen HTML, později i CSS a JavaScript souborů uložených někde na nějakém serveru, který byl dostupný přes nějaké doménové jméno. Dnes je to ovšem složitější. S rozvojem technologie přibývají i možnosti. Také neexistuje žádný jednotný postup, a tak jsou webové stránky vyvýjeny za pomoci desítek různých programovacích jazyků a tisíců různých technologií.</p>
<p class="pt-5">Webové stránky jsou vymezeny pouze doménou, pod kterou spadají.</p>
`,

"Co za technologie používám a proč? (pro pokročilé)": /*html*/`
<p>Frontend webu píši v moderním reaktivním JavaScript frameworku Vue.js. Proč právě Vue? Tento framework jsem si vybral především pro jeho rychlost a reaktivitu. Je to progresivní, výkonný framework, který se především v posledních letech těší velké popularitě. V některých případech používám také nadstavbu JavaScriptu, TypeScript.</p>
<p class="pt-5">Pro vývoj Backendu používám JavaScript (Node.js) a jako databázi používám MongoDB či PostgreSQL. Přestože znám programovacích jazyků několik, preferuji JavaScript pro jeho rychlost a oblíbenost.</p>
`,
}

const searchInput = ref("")
const questionsFiltered = computed(_ => {
    const filtered = {}

    Object.keys(questions)
        .filter(question => question.toLowerCase().includes(searchInput.value.toLowerCase()))
        .forEach(key => filtered[key] = questions[key])
    
    return filtered
})
const data = computed(_ => searchInput.value === "" ? questions : questionsFiltered.value)
</script>

<template>
<div class="min-h-screen flex flex-col align-center pt-28 px-5">

<h1 class="mb-8 text-3xl tracking-tight font-bold text-center">Často kladené otázky</h1>

<form class="mb-8">   
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only">Hledat</label>
    <div class="relative">
        <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <MagnifyingGlassIcon aria-hidden="true" class="w-5 h-5 text-gray-500" />
        </div>
        <input type="search" id="default-search" v-model="searchInput" class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Začněte psát pro vyhledávání v otázkách..." required>
    </div>
</form>

<ul>
<li
    v-if="Object.keys(data).length > 0"
    v-for="(content, title) in data" :key="title"
    class="border-b last:border-b-0 border-gray-300"
>
    <details class="py-6 hover:bg-slate-50">
        <summary class="pl-2 cursor-pointer text-2xl font-bold">{{ title }}</summary>
        <p class="p-5 text-xl tracking-tight font-light" v-html="content" />
    </details>
</li>
<li v-else>
    <p class="text-xl text-gray-600 text-center">Nebyl naleze žádný výsledek.</p>
</li>
</ul>

</div>
</template>
