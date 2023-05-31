/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', ...fontFamily.sans],
            },
            colors: {
                textBody: '#121212',
                textLight: '#777777',
                textLink: '#6D6C69',
                paletteRed: '#FF4E43',
                palettePurple: '#9D34DA',
                paletteBlue: '#0A85D1',
                paletteYellow: '#FAA700',
                paletteGreen: '#2A9D99',
                surfaceSecondary: '#F4F3F2',
                surfacePrimary: '#FFFFFF',
            },
        },
    },
    plugins: [],
};
