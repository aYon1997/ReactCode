/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{tsx,ts,jsx,js}'],
    theme: {
        extend: {
            spacing: {
                13: '3.25rem',
            },
            minWidth: {
                '6xl': '72rem',
            },
            height: {
                'full-vh': '100vh',
                'home-card': '16rem',
            },
        },
    },
    plugins: [],
};
