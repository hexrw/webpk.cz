<script setup>
import { ref } from "vue"
import {
    BoltIcon,
    WrenchScrewdriverIcon,
    ScaleIcon,
    DeviceTabletIcon,
    ArrowDownIcon,
    CodeBracketIcon,
    ServerStackIcon,
    PaintBrushIcon,
    MagnifyingGlassIcon,
    ArrowRightIcon,
} from "@heroicons/vue/24/outline"
import { loadFull } from "tsparticles"


const particlesInit = async (engine) => {
    await loadFull(engine)
}

const particlesLoaded = async (container) => {
    //console.debug("Particles container loaded", container)
}

const blueBlobText = ref(null)

const procSiVybratZrovnaMe = {
    "Komunikace": "Nestane se, že bych Vám přestal odpovídat. Věci Vám řeknu na rovinu, termíny, která Vám dám, dodržím.",
    "Rozumné ceny": "Nikdo přece nechce platit desítky tisíc za obyčejné webové stránky. Moje ceny jsou fér a úměrné rozsáhlosti projektu.",
    "Rychlost": "Dle statistik od společnosti Google <a class='text-blue-700 underline hover:no-underline' href='https://www.thinkwithgoogle.com/consumer-insights/consumer-trends/mobile-site-load-time-statistics/' target='_blank'>53% návštěvníků z telefonu opustí webovou stránku, která se načítá déle než 3 vteřiny</a>. Rychlost je pro mne prioritou.",
    "Inviduální přístup": "Každý projekt je jiný a každý klient má jiné požadavky. Proto ke každému projektu přistupuji individuálně.",
    "Spolehlivost": "Co řeknu, dodržím.",
}
</script>

<template>
<div class="min-h-screen flex flex-col justify-center py-28 lg:py-0">
    <div class="px-5 md:px-10 lg:px-16">
        <h1 class="text-4xl lg:text-6xl p-5 drop-shadow">Webové stránky na míru</h1>
        <p class="text-xl md:text-2xl lg:text-3xl font-medium p-5 drop-shadow">Moderní webové stránky, které budou přesně odpovídat Vašim potřebám.</p>

        <div class="mt-10">
            <dl class="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">
                <div class="p-5 relative drop-shadow bg-white bg-opacity-20 rounded-lg">
                <dt>
                    <div class="absolute flex h-12 w-12 items-center justify-center rounded-md bg-blue-500 text-white hover:text-yellow-300">
                    <BoltIcon class="h-6 w-6" />
                    </div>
                    <p class="ml-16 text-lg font-medium leading-6">Rychlé</p>
                </dt>
                <dd class="mt-2 ml-16 text-base text-gray-800">Díky mému přístupu a výběru technologií bude Váš web bleskově rychlý. Součástí finálního produktu je jen to, co je opravdu třeba.</dd>
                </div>

                <div class="p-5 relative drop-shadow bg-white bg-opacity-20 rounded-lg">
                <dt>
                    <div class="absolute flex h-12 w-12 items-center justify-center rounded-md bg-blue-500 text-white hover:text-gray-300">
                    <WrenchScrewdriverIcon class="h-6 w-6" />
                    </div>
                    <p class="ml-16 text-lg font-medium leading-6">Moderní</p>
                </dt>
                <dd class="mt-2 ml-16 text-base text-gray-800">Sleduji vývoj a neustále se přizpůsobuji moderním trendům.</dd>
                </div>

                <div class="p-5 relative drop-shadow bg-white bg-opacity-20 rounded-lg">
                <dt>
                    <div class="absolute flex h-12 w-12 items-center justify-center rounded-md bg-blue-500 text-white hover:text-amber-400">
                    <ScaleIcon class="h-6 w-6" />
                    </div>
                    <p class="ml-16 text-lg font-medium leading-6">Stabilní</p>
                </dt>
                <dd class="mt-2 ml-16 text-base text-gray-800">Používám spolehlivé ověřené technologie. Píši kvalitní kód.</dd>
                </div>            

                <div class="p-5 relative drop-shadow bg-white bg-opacity-20 rounded-lg">
                <dt>
                    <div class="absolute flex h-12 w-12 items-center justify-center rounded-md bg-blue-500 text-white hover:text-cyan-400">
                    <DeviceTabletIcon class="h-6 w-6" />
                    </div>
                    <p class="ml-16 text-lg font-medium leading-6">Responzivní</p>
                </dt>
                <dd class="mt-2 ml-16 text-base text-gray-800">Váš web bude vypadat skvěle na obrazovkách zařízení všech velikostí.</dd>
                </div>
            </dl>
        </div>
    </div>
    <div class="bottom-14 text-center hidden md:block absolute w-full">
        <button class="bg-slate-100 rounded-full p-2" @click="blueBlobText.scrollIntoView({ behavior: 'smooth', block: 'center' })">
            <ArrowDownIcon class="h-12 w-12" />
        </button>
    </div>
    <Particles
        class="h-screen absolute -z-10"
        id="tsparticles"
        :particlesInit="particlesInit"
        :particlesLoaded="particlesLoaded"
        :options="{
            fullScreen: {
                enable: false,
                zIndex: -1
            },
            fpsLimit: 120,
            interactivity: {
                events: {
                    onClick: {
                        enable: true,
                        mode: 'repulse'
                    },
                    resize: true
                },
                modes: {
                    bubble: {
                        distance: 400,
                        duration: 2,
                        opacity: 0.8,
                        size: 40
                    },
                    repulse: {
                        distance: 200,
                        duration: 2
                    }
                }
            },
            particles: {
                color: {
                    value: '#83aff7'
                },
                links: {
                    color: '#9dbef5',
                    distance: 200,
                    enable: true,
                    opacity: 0.5,
                    width: 1
                },
                collisions: {
                    enable: true
                },
                move: {
                    direction: 'none',
                    enable: true,
                    outModes: {
                        default: 'bounce'
                    },
                    random: false,
                    speed: 0.5,
                    straight: false
                },
                number: {
                    density: {
                        enable: true,
                        area: 800
                    },
                    value: 50
                },
                opacity: {
                    value: 0.5
                },
                shape: {
                    type: 'circle'
                },
                size: {
                    value: { min: 1, max: 5 },
                }
            },
            detectRetina: true
        }"
    />
</div>

<!-- Do not fill other than the default background color to prevent a 1px wide horizontal gap in Firefox -->
<svg class="bg-blue-500 fill-white pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
    <path d="M0,128L60,144C120,160,240,192,360,197.3C480,203,600,181,720,170.7C840,160,960,160,1080,165.3C1200,171,1320,181,1380,186.7L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
</svg>
<div class="bg-blue-500 text-white px-5 pt-0 md:pt-4 lg:pt-6">
    <h2 class="text-3xl font-bold tracking-tight text-center pb-8">Nabízené služby</h2>
    <dl ref="blueBlobText" class="grid grid-cols-1 md:grid-cols-2 mx-auto max-w-6xl gap-6 lg:gap-12">
        <div class="bg-white p-8 text-black rounded-md">
            <dt class="pb-2 flex flex-col md:flex-row gap-4">
                <CodeBracketIcon class="w-12 mx-auto md:mx-0" />
                <p class="text-xl font-bold my-auto text-center md:text-left">Tvorba webových stránek/aplikací</p>
            </dt>
            <dd class="text-center md:text-left">Tvorba moderních reaktivních webových stránek či dynamických webových aplikací na míru dle vašich potřeb.</dd>
        </div>
        <div class="bg-white p-8 text-black rounded-md">
            <dt class="pb-2 flex flex-col md:flex-row gap-4">
                <ServerStackIcon class="w-12 mx-auto md:mx-0" />
                <p class="text-xl font-bold my-auto text-center md:text-left">Hosting</p>
            </dt>
            <dd class="text-center md:text-left">Hosting webových stránek či aplikací společně s případnou databází a případnými APIs.</dd>
        </div>
        <div class="bg-white p-8 text-black rounded-md">
            <dt class="pb-2 flex flex-col md:flex-row gap-4">
                <PaintBrushIcon class="w-12 mx-auto md:mx-0" />
                <p class="text-xl font-bold my-auto text-center md:text-left">Přepsání/redesign starých webových stránek</p>
            </dt>
            <dd class="text-center md:text-left">Vaše stránky už Vám nevyhovují? Jsou zastaralé a vypadají špatně na menších obrazovkách? Za rozumnou cenu Vám udělám kompletní redesign a přepsání/aktualizaci kódu.</dd>
        </div>
        <div class="bg-white p-8 text-black rounded-md">
            <dt class="pb-2 flex flex-col md:flex-row gap-4">
                <MagnifyingGlassIcon class="w-12 mx-auto md:mx-0" />
                <p class="text-xl font-bold my-auto text-center md:text-left">Optimalizace pro vyhledávače</p>
            </dt>
            <dd class="text-center md:text-left">Chcete být vidět? Vaše stránky optimalizuji pro vyhledávače. To Vás dostane mezi první výsledky ve vyhledávání a tím zvýší návštěvnost.</dd>
        </div>
    </dl>
    <router-link
        to="/cenik"
        class="w-fit bg-gray-800 text-lg shadow-lg text-white font-bold py-2 px-10 rounded-md mx-auto block mt-12"
    >Přejít na ceník</router-link>
</div>
<svg class="bg-blue-500 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 240">
    <path d="M0,192L48,197.3C96,203,192,213,288,218.7C384,224,480,224,576,213.3C672,203,768,181,864,181.3C960,181,1056,203,1152,213.3C1248,224,1344,224,1392,224L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
</svg>

<div class="py-16 md:py-24 lg:py-32 px-5">
    <h2 class="font-semibold text-3xl">Proč si vybrat zrovna mě?</h2>
    <div class="flex flex-col gap-4">
    <div
        v-for="(val, key) in procSiVybratZrovnaMe"
        :key="key"
        class="pt-5 flex flex-col lg:flex-row lg:items-center gap-2"
    >
        <div class="inline-flex gap-2 items-center">
            <ArrowRightIcon class="w-8 h-8 text-white bg-blue-500 stroke-2 rounded-full p-1" />
            <p class="text-2xl my-auto tracking-wide" v-html="key" />
        </div>
        <span class="hidden lg:block">-</span>
        <p class="text-lg my-auto grow-0" v-html="val" />
    </div>
    </div>
</div>

<div class="p-5">
    <h2 class="font-semibold text-3xl">Přesvědčil jsem Vás?</h2>
    <p class="text-xl pt-2">Kontaktujte mne prosím prostřednictvím <router-link to="/kontaktni-formular" class="underline hover:no-underline text-blue-500">kontaktního formuláře</router-link>.</p>
</div>

</template>
