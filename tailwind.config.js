/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        app: {
          bg: "#F7F8F5", // overall background
          surface: "#FFFFFF", // cards / panels
          muted: "#DDE2DB", // subtle surfaces / borders
        },
        text: {
          primary: "#3F4E4F", // main text
          secondary: "#6B7280", // captions, helper text
        },
        accent: {
          DEFAULT: "#6D8F72", // main sage accent
          soft: "#A5B9A8", // softer accent (hover, badges)
          strong: "#3F4E4F", // darker accent if needed
        },
      },
    },
  },
  plugins: [],
};
