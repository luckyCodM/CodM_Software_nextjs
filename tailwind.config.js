/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    prefix: "tw-",
    corePlugins: {
        preflight: false,
    },
    theme: {
        extend: {
            colors: {
                codm: {
                    blue: "#00A1E1",
                    navy: "#081120",
                    orange: "#b7533a",
                    ink: "#19326a",
                    soft: "#ecf3f6",
                },
            },
        },
    },
    plugins: [],
};
