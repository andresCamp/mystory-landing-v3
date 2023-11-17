import type { Config } from 'tailwindcss'


const {nextui} = require("@nextui-org/theme")

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
        'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-begin': 'linear-gradient(91deg, #25BA00 0.94%, #167100 99.59%)',
        'begin-gradient': 'linear-gradient(128deg, #90DEFF 26%, #63C6F0 45.95%, #1EA0D8 75.11%)',
      },
      boxShadow: {
        'white': '0px 0px 30px 0px #FFF',
        'begin-shadow': '0px 5px 5px 0px rgba(74, 190, 240, .5)',
        'begin-shadow-hover': '0px 10px 15px 0px rgba(74, 190, 240, 0.50)',
      },
      colors: {
        primary: '#A9A987',
        tan: '#DEDFCD',
        navy: '#12375A',
        blue: '#26ABE4',
      },
      fontFamily: {
        primary: ['var(--font-caudex)'],
        secondary: ['var(--font-inter)'],
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}
export default config
