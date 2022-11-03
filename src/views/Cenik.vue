<script setup>
import {
    CheckIcon,
    XMarkIcon,
} from "@heroicons/vue/24/outline"
</script>

<template>
<div class="min-h-screen flex flex-col justify-center pt-20 lg:pt-0">
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div class="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
            <h1 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">Ceník</h1>
            <p class="mb-5 font-light text-gray-500 sm:text-xl">Ceník je pouze <b class="font-bold">orientační</b>. Ke každému klientovi přistupuji inviduálně, proto se konečná cena může lišit v závislosti na obtížnosti projektu a Vašem rozpočtu. Balíčky je možno kombinovat.</p>
            <p class="mb-5 font-light text-gray-500 sm:text-xl">Následné menší úpravy jsou zpravidla v cenně balíčku, za větší úpravy si účtuji hodinovou sazbu 400 Kč.</p>
        </div>
        <div class="mx-auto max-w-screen-md lg:max-w-screen-xl text-center lg:text-left mb-8 lg:mb-12">
            <h2 class="text-3xl font-extrabold text-gray-900 tracking-tight">Webové stránky</h2>
        </div>
        <div class="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
            <!-- Pricing Card -->
            <div class="flex flex-col w-full p-6 md:hover:scale-105 transition duration-300 ease-in-out mx-auto max-w-lg text-center text-gray-900 bg-white rounded-2xl border border-emerald-200 shadow shadow-emerald-200">
                <h3 class="mb-4 text-2xl font-semibold">Web&nbsp;<span class="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-green-600">STATIC</span></h3>
                <p class="font-light text-gray-500 sm:text-lg">Nejlepší volba pro malé podniky či jednotlivce. Vaše online vizitka.</p>
                <div class="flex justify-center items-baseline my-8">
                    <span class="text-gray-500 text-2xl">od</span>
                    <span class="ml-2 text-5xl font-extrabold">5 000 Kč</span>
                </div>
                <!-- List -->
                <ul role="list" class="mb-8 space-y-4 text-left">
                    <li class="flex items-center space-x-3">
                        <CheckIcon class="flex-shrink-0 w-5 h-5 text-green-500" />
                        <span>Nízká cena</span>
                    </li>
                    <li class="flex items-center space-x-3">
                        <CheckIcon class="flex-shrink-0 w-5 h-5 text-green-500" />
                        <span>Měsíční statistiky</span>
                    </li>
                    <li class="flex items-center space-x-3">
                        <XMarkIcon class="flex-shrink-0 w-5 h-5 text-red-500" />
                        <span>Administrátorské rozhraní</span>
                    </li>
                </ul>
                <span class="grow"></span> <!-- This is a spacer -->
                <router-link to="/kontaktni-formular?c=static" class="select-none p-5 rounded-lg bg-gradient-to-r from-teal-400 to-emerald-300 hover:from-teal-500 hover:to-emerald-400 focus:ring-4 focus:ring-emerald-500 font-medium text-sm px-5 py-2.5 text-center">Mám zájem</router-link>
            </div>
            <!-- Pricing Card -->
            <div class="flex flex-col w-full p-6 md:hover:scale-105 transition duration-300 ease-in-out mx-auto max-w-lg text-center text-gray-900 bg-white rounded-2xl border border-amber-200 shadow shadow-amber-200">
                <h3 class="mb-4 text-2xl font-semibold">Web&nbsp;<span class="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-600">PLUS</span></h3>
                <p class="font-light text-gray-500 sm:text-lg">Web s databází a případnými APIs.</p>
                <div class="flex justify-center items-baseline my-8">
                    <span class="text-gray-500 text-2xl">od</span>
                    <span class="ml-2 text-5xl font-extrabold">10 000 Kč</span>
                </div>
                <!-- List -->
                <ul role="list" class="mb-8 space-y-4 text-left">
                    <li class="flex items-center space-x-3">
                        <CheckIcon class="flex-shrink-0 w-5 h-5 text-green-500" />
                        <span>Databáze</span>
                    </li>
                    <li class="flex items-center space-x-3">
                        <CheckIcon class="flex-shrink-0 w-5 h-5 text-green-500" />
                        <span>Měsíční statistiky</span>
                    </li>
                    <li class="flex items-center space-x-3">
                        <CheckIcon class="flex-shrink-0 w-5 h-5 text-green-500" />
                        <span>Administrátorské rozhraní</span>
                    </li>
                </ul>
                <span class="grow"></span> <!-- This is a spacer -->
                <router-link to="/kontaktni-formular?c=plus" class="select-none p-5 rounded-lg bg-gradient-to-r from-amber-500 to-yellow-300 hover:from-amber-600 hover:to-yellow-400 focus:ring-4 focus:ring-amber-500 font-medium text-sm px-5 py-2.5 text-center">Mám zájem</router-link>
            </div>
            <!-- Pricing Card -->
            <div class="flex flex-col w-full p-6 md:hover:scale-105 transition duration-300 ease-in-out mx-auto max-w-lg text-center text-gray-900 bg-white rounded-2xl border border-violet-400 shadow shadow-violet-200">
                <h3 class="mb-4 text-2xl font-semibold">Web&nbsp;<span class="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-600">PRO</span></h3>
                <p class="font-light text-gray-500 sm:text-lg">Nevyhovuje vám ani jeden z předcházejících balíčků?</p>
                <div class="flex justify-center items-baseline my-8">
                    <span class="text-5xl font-extrabold">Individuální</span>
                </div>
                <!-- List -->
                <ul role="list" class="mb-8 space-y-4 text-left">
                    <li class="flex items-center space-x-3">
                        <CheckIcon class="flex-shrink-0 w-5 h-5 text-green-500" />
                        <span>Cena na míru dle Vašeho rozpočtu</span>
                    </li>
                    <li class="flex items-center space-x-3">
                        <CheckIcon class="flex-shrink-0 w-5 h-5 text-green-500" />
                        <span>Měsíční statistiky</span>
                    </li>
                    <li class="flex items-center space-x-3">
                        <CheckIcon class="flex-shrink-0 w-5 h-5 text-green-500" />
                        <span>Individuální přístup</span>
                    </li>
                    
                    <li class="flex items-center space-x-3">
                        <CheckIcon class="flex-shrink-0 w-5 h-5 text-green-500" />
                        <span>Možnost administrátorského rozhraní</span>
                    </li>
                    <li class="flex items-center space-x-3">
                        <CheckIcon class="flex-shrink-0 w-5 h-5 text-green-500" />
                        <span>Možnost databáze</span>
                    </li>
                </ul>
                <span class="grow"></span> <!-- This is a spacer -->
                <router-link to="/kontaktni-formular?c=pro" class="select-none p-5 rounded-lg bg-gradient-to-r from-purple-500 to-violet-300 hover:from-purple-600 hover:to-violet-400 focus:ring-4 focus:ring-violet-500 font-medium text-sm px-5 py-2.5 text-center">Mám zájem</router-link>
            </div>
        </div>



        <div class="mx-auto max-w-screen-md lg:max-w-screen-xl text-center lg:text-left my-8 lg:my-12">
            <h2 class="text-3xl font-extrabold text-gray-900 tracking-tight">Hosting</h2>
        </div>
        <div class="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
            <!-- Pricing Card -->
            <div class="flex w-full flex-col p-6 md:hover:scale-105 transition duration-300 ease-in-out mx-auto max-w-lg text-center text-gray-900 bg-white rounded-2xl border border-emerald-200 shadow shadow-emerald-200">
                <h3 class="mb-4 text-2xl font-semibold">Hosting <span class="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-green-600">STATIC</span></h3>
                <p class="font-light text-gray-500 sm:text-lg">Hosting pro jednoduché statické stránky se střední návštěvností.</p>
                <div class="flex justify-center items-baseline my-8">
                    <span class="text-gray-500 text-2xl">od</span>
                    <span class="mx-2 text-5xl font-extrabold">50 Kč</span>
                    <span class="text-gray-500 text-2xl">/měsíc</span>
                </div>
                <!-- List -->
                <ul role="list" class="space-y-4 text-left">
                    <li class="flex items-center space-x-3">
                        <CheckIcon class="flex-shrink-0 w-5 h-5 text-green-500" />
                        <span>SSL certifikát (HTTPS)</span>
                    </li>
                    <li class="flex items-center space-x-3">
                        <CheckIcon class="flex-shrink-0 w-5 h-5 text-green-500" />
                        <span>Ochrana proti DDoS útokům</span>
                    </li>
                    <li class="flex items-center space-x-3">
                        <XMarkIcon class="flex-shrink-0 w-5 h-5 text-red-500" />
                        <span>Databáze</span>
                    </li>
                    <li class="flex items-center space-x-3">
                        <XMarkIcon class="flex-shrink-0 w-5 h-5 text-red-500" />
                        <span>Případná APIs</span>
                    </li>
                </ul>
            </div>
            <!-- Pricing Card -->
            <div class="flex w-full flex-col p-6 md:hover:scale-105 transition duration-300 ease-in-out mx-auto max-w-lg text-center text-gray-900 bg-white rounded-2xl border border-amber-200 shadow shadow-amber-200">
                <h3 class="mb-4 text-2xl font-semibold">Hosting <span class="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-600">PLUS</span></h3>
                <p class="font-light text-gray-500 sm:text-lg">Hosting pro web s větší návštěvností, databázi a případná APIs.</p>
                <div class="flex justify-center items-baseline my-8">
                    <span class="text-gray-500 text-2xl">od</span>
                    <span class="mx-2 text-5xl font-extrabold">150 Kč</span>
                    <span class="text-gray-500 text-2xl">/měsíc</span>
                </div>
                <!-- List -->
                <ul role="list" class="space-y-4 text-left">
                    <li class="flex items-center space-x-3">
                        <CheckIcon class="flex-shrink-0 w-5 h-5 text-green-500" />
                        <span>SSL certifikát (HTTPS)</span>
                    </li>
                    <li class="flex items-center space-x-3">
                        <CheckIcon class="flex-shrink-0 w-5 h-5 text-green-500" />
                        <span>Ochrana proti DDoS útokům</span>
                    </li>
                    <li class="flex items-center space-x-3">
                        <CheckIcon class="flex-shrink-0 w-5 h-5 text-green-500" />
                        <span>Databáze</span>
                    </li>
                    <li class="flex items-center space-x-3">
                        <CheckIcon class="flex-shrink-0 w-5 h-5 text-green-500" />
                        <span>Případná APIs</span>
                    </li>
                </ul>
            </div>
            <!-- Pricing Card -->
            <div class="flex w-full flex-col p-6 md:hover:scale-105 transition duration-300 ease-in-out mx-auto max-w-lg text-center text-gray-900 bg-white rounded-2xl border border-violet-400 shadow shadow-violet-200">
                <h3 class="mb-4 text-2xl font-semibold">Hosting <span class="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-600">PRO</span></h3>
                <p class="font-light text-gray-500 sm:text-lg">Hosting pro náročnejší projekty s velkou návštěvností.</p>
                <div class="flex justify-center items-baseline my-8">
                    <span class="text-gray-500 text-2xl">od</span>
                    <span class="mx-2 text-5xl font-extrabold">250 Kč</span>
                    <span class="text-gray-500 text-2xl">/měsíc</span>
                </div>
                <!-- List -->
                <ul role="list" class="space-y-4 text-left">
                    <li class="flex items-center space-x-3">
                        <CheckIcon class="flex-shrink-0 w-5 h-5 text-green-500" />
                        <span>SSL certifikát (HTTPS)</span>
                    </li>
                    <li class="flex items-center space-x-3">
                        <CheckIcon class="flex-shrink-0 w-5 h-5 text-green-500" />
                        <span>Ochrana proti DDoS útokům</span>
                    </li>
                    <li class="flex items-center space-x-3">
                        <CheckIcon class="flex-shrink-0 w-5 h-5 text-green-500" />
                        <span>Databáze</span>
                    </li>
                    <li class="flex items-center space-x-3">
                        <CheckIcon class="flex-shrink-0 w-5 h-5 text-green-500" />
                        <span>Případná APIs</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
</template>