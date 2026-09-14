/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#fdfdfc',
          100: '#f9f9f6',
          200: '#f3f2ed',
          300: '#e8e6dc',
          400: '#d7d4c5',
        },
        forest: {
          800: '#163324',
          900: '#0f2419',
          950: '#0a1912',
        },
        sage: {
          50: '#f4f7f4',
          100: '#e6ede6',
          200: '#cfddcf',
          300: '#abc4ab',
          500: '#4d7c5f',
          600: '#3d644c',
          700: '#31513d',
        },
        moss: {
          500: '#476852',
          600: '#375240',
        }
      },
      fontFamily: {
        serif: ['Newsreader', 'Fraunces', 'Playfair Display', 'Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        'elevated': '0 20px 40px -15px rgba(0, 0, 0, 0.08)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.06)',
      },
    },
  },
  plugins: [],
}
