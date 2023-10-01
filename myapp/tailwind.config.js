/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        inter: ['Inter', 'sans'],
      },
      colors: {
        primary: {
          background: '#edede9',
          text: '#edede9',
          hover: '#edede9',
        },
        secondary: {
          background: '#d6ccc2',
          text: '#d6ccc2',
          hover: '#d6ccc2',
        },
        tan: {
          primary: '#d5bdaf',
          secondary: '#e3d5ca',
          lite: '#f5ebe0',
        }
      },
      lineHeight: {
        '6': '1.5',
      },
      fontSize: {
        '2xl': ['1.5rem', '2rem'],
        'xl': ['1.25rem', '1.5rem'],
        'base': ['1rem', '1.25rem'],
        '3xl': ['2rem', '2.5rem'],
        'lg': ['1.125rem', '1.375rem'],
      },
    },
  },
  plugins: [],
}
