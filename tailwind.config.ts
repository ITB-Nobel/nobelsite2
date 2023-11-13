import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      // fontFamily:{
      //   "font-condensed" : "r"
      // },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
            'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-black': 'linear-gradient(to bottom,rgba(1,8,21,0) 0%,rgba(1,8,21,.9) 100%)'
      },
      colors:{
        primary: '#B91C1C',
        white: '#FFFFFF',
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [ require('@tailwindcss/aspect-ratio')],
}
export default config
