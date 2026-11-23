/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f5fa',
          100: '#e1ecf6',
          200: '#c3d8ec',
          300: '#95bee0',
          400: '#609fd0',
          500: '#3c82bd',
          600: '#2b68a3',
          700: '#235384',
          800: '#1e3a5f',
          900: '#08284d',
          950: '#051830',
        },
        royal: {
          DEFAULT: '#00458b',
          dark: '#003366',
          light: '#1e68b5',
        },
        orange: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f37021',
          600: '#ea580c',
          700: '#c2410c',
        },
        sky: {
          DEFAULT: '#74b9ff',
          light: '#eaf4ff',
        },
        mint: {
          DEFAULT: '#7ed6a6',
          light: '#eaf7ef',
        },
        brand: {
          navy: '#08284d',
          royal: '#00458b',
          orange: '#f37021',
          bg: '#f8fafc',
        }
      },
      fontFamily: {
        sans: ['Manrope', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
        serif: ['Lora', 'serif'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(8, 40, 77, 0.08)',
        'dropdown': '0 20px 40px -15px rgba(8, 40, 77, 0.15)',
        'sticker': '0 4px 12px rgba(8, 40, 77, 0.08)',
      }
    },
  },
  plugins: [],
}
