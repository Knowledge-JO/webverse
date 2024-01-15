import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'heroImage': "url('/heroImage.svg')"
      },
      fontFamily: {
        monumentRegular: ["MonumentExtended-Regular", "sans-serif"],
        monumentbold: ["MonumentExtended-Ultrabold", "sans-serif"]
      },
      keyframes: {

        typing: {
          "40%, 60%": {
            left: "100%",
          },
          "100%": {
            left: "0%",
          },
        },
      },

      animation: {
        typing_anim: "typing 4s infinite",
      },
    },
  },
  plugins: [],
}
export default config
