/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6.25rem",
      },
    },
    screens: {
      xxs: "300px",
      xms: "383px",
      xs: "475px",
      sm: "639px",
      md: "770px",
      td: "992px" /*tabdisplay */,
      lg: "1025px",
      xl: "1279px",
      "2xl": "1439px",
      "3xl": "1919px",
    },
    fontFamily: {
      poppins : ['Poppins', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}

