import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      'big-stone': {
        '50': '#f5f7fa',
        '100': '#eaeef4',
        '200': '#cfd9e8',
        '300': '#a5bad4',
        '400': '#7596bb',
        '500': '#5378a4',
        '600': '#405f89',
        '700': '#354d6f',
        '800': '#2f425d',
        '900': '#243042',
        '950': '#1d2634',
      },    
    }
  },
  plugins: [],
}
export default config
