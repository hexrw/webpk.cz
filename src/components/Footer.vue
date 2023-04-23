<template>
<svg class="bg-gray-900 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 140">
    <path d="M0,96L80,90.7C160,85,320,75,480,80C640,85,800,107,960,106.7C1120,107,1280,85,1360,74.7L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
</svg>

<footer class="px-4 sm:px-6 bg-gray-900 pt-20 md:pt-28 pb-4">
    <div class="md:flex md:justify-between pb-8">
        <div class="grid grid-cols-1 gap-8 sm:gap-6 sm:grid-cols-4">
            <div>
                <h2 class="mb-6 text-sm font-semibold uppercase text-white">Kontakt</h2>
                <ul class="text-gray-400">
                    <li class="mb-4">
                        <p>E-mail: <a href="mailto:info@webpk.cz" class="underline hover:no-underline">info@webpk.cz</a></p>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/messages/t/107317268808297" target="_blank" class="underline hover:no-underline">
                            <div class="inline-flex gap-1 underline align-middle">
                                <!-- Messenger icon -->
                                <svg class="fill-gray-400 h-5 w-5 my-auto" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 0c-6.627 0-12 4.975-12 11.111 0 3.497 1.745 6.616 4.472 8.652v4.237l4.086-2.242c1.09.301 2.246.464 3.442.464 6.627 0 12-4.974 12-11.111 0-6.136-5.373-11.111-12-11.111zm1.193 14.963l-3.056-3.259-5.963 3.259 6.559-6.963 3.13 3.259 5.889-3.259-6.559 6.963z"/></svg>
                                <p class="my-auto">Messenger</p>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
            <div>
                <h2 class="mb-6 text-sm font-semibold uppercase text-white">Dokumenty</h2>
                <ul class="text-gray-400">
                    <li class="mb-4">
                        <router-link to="/obchodni-podminky" class="underline hover:no-underline">Obchodní&nbsp;podmínky</router-link>
                    </li>
                    <li>
                        <router-link to="/zasady-zpracovani-osobnich-udaju" class="underline hover:no-underline">Zásady&nbsp;zpracování osobních&nbsp;údajů</router-link>
                    </li>
                </ul>
            </div>
            <div>
                <ul class="text-gray-400">
                    <li>
                        <p>Petr Kolonicz</p>
                    </li>
                    <li>
                        <p>Špičák 118, 381 01 Český Krumlov</p>
                    </li>
                    <li>
                        <p>IČO: <b class="font-bold">17503400</b></p>
                    </li>
                    <li class="pt-4 italic">
                        Nejsem plátcem DPH.
                    </li>
                </ul>
            </div>
            <div>
                <ul class="text-gray-400">
                    <li>
                        <p>Číslo bankovního účtu:</p>
                    </li>
                    <li>
                        <p><b class="font-bold">245550684/0300</b></p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <hr class="my-6 sm:mx-auto border-gray-700 lg:my-8">
    <div class="sm:flex sm:items-center sm:justify-between">
        <span class="text-sm sm:text-center text-gray-400">Copyright &copy; 2022 - {{ new Date().getFullYear() }} Petr Kolonicz
        </span>
        <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            <a href="https://www.facebook.com/profile.php?id=100085930249730" target="_blank" class="text-gray-500 hover:text-white">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd"></path></svg>
                <span class="sr-only">Facebook</span>
            </a>
            <a href="https://www.instagram.com/webpk.cz/" target="_blank" class="text-gray-500 hover:text-white">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd"></path></svg>
                <span class="sr-only">Instagram</span>
            </a>
            <a href="https://github.com/hex2w" target="_blank" class="text-gray-500 hover:text-white">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path></svg>
                <span class="sr-only">GitHub</span>
            </a>
        </div>
    </div>
</footer>

</template>
