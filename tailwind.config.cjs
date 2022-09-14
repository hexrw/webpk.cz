/** @type {import("tailwindcss").Config} */
const defaultTheme = require("tailwindcss/defaultTheme")
const formKitTailwind = require("@formkit/themes/tailwindcss")


module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js}",
    ],
    theme: {
        extend: {
            fontFamily: {
                "sans": ["Roboto", ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [
        formKitTailwind,
    ],
}
