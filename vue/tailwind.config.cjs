/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./pages/**/*.{html,js}", "./components/**/*.{html,js}"],
    // content: ["./src/**/*.{html,js}"],
     purge:[ 
        "./src/**/*.html",
        "./src/**/*.vue",
        "./src/**/*.jsx",
      ],
    theme: {
        extend: {},
    },
    plugins: [require("@tailwindcss/forms")],
};
