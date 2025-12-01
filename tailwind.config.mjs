/**
 * Tailwind configuration — central brand tokens
 * Added brand colors derived from the provided logo.
 *
 * Tokens:
 *  - --brand-deep  : #062C56 (deep/navy)
 *  - --brand-primary: #0E57B8 (primary indigo/brand)
 *  - --brand-bright: #2196FF (bright blue used in gradients)
 *  - --brand-highlight: #7BE1FF (accent highlight)
 *
 * Use in templates as `text-brand-primary`, `bg-brand-bright`, etc.
 */
import defaultTheme from 'tailwindcss/defaultTheme';

const config = {
  content: [
    './src/**/*.{js,jsx,ts,tsx,mdx}',
    './app/**/*.{js,jsx,ts,tsx,mdx}',
    './components/**/*.{js,jsx,ts,tsx,mdx}',
    './pages/**/*.{js,jsx,ts,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-deep': '#062C56',
        'brand-primary': '#0E57B8',
        'brand-bright': '#2196FF',
        'brand-highlight': '#7BE1FF',
        // convenience aliases
        brand: {
          deep: '#062C56',
          DEFAULT: '#0E57B8',
          bright: '#2196FF',
          highlight: '#7BE1FF',
        },
      },
      boxShadow: {
        'brand-glow': '0 6px 20px rgba(14,87,184,0.18)',
      },
    },
    fontFamily: {
      sans: [...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [],
};

export default config;
