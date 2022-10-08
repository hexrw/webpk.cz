/** @type {import("tailwindcss").Config} */
const defaultTheme = require("tailwindcss/defaultTheme")


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
        require("@formkit/themes/tailwindcss"),
        require("tailwind-scrollbar")({ nocompatible: true }),
    ],
}
