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
      },
      boxShadow: {
        'white': '0px 0px 30px 0px #FFF',
      },
      colors: {
        primary: '#A9A987'
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}
export default config
