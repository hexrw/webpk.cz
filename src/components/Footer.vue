<template>
<svg class="bg-gray-900 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 140">
    <path d="M0,96L80,90.7C160,85,320,75,480,80C640,85,800,107,960,106.7C1120,107,1280,85,1360,74.7L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
</svg>
<div class="bg-gray-900 text-white px-5 lg:px-10 py-12 md:py-20 lg:py-28">
    <div class="w-full flex flex-wrap gap-10">
        <div class="grow">
            <p class="text-lg text-gray-300 font-semibold">Kontakt</p>
            <p>E-mail: <a href="mailto:info@webpk.cz">info@webpk.cz</a></p>
        </div>
        <div class="grow">
            <p>Petr Kolonicz</p>
            <p>Špičák 118, 381 01 Český Krumlov</p>
            <p>IČO: <b class="font-bold">17503400</b></p>
        </div>
    </div>
    <div class="mt-6 md:mt-10 lg:mt-16 text-center justify-center flex flex-wrap">
        <router-link to="/obchodni-podminky" class="mr-4 lg:md-8">Obchodní&nbsp;podmínky</router-link>
        <router-link to="/zasady-zpracovani-osobnich-udaju">Zásady&nbsp;zpracování&nbsp;osobních&nbsp;údajů</router-link>
    </div>
    <div class="mt-4 lg:mt-8 text-center text-slate-200">
        <p>Copyright &copy; 2022 Petr Kolonicz</p>
    </div>
</div>
</template>

<style scoped>
a { @apply underline text-blue-300 }
</style>
