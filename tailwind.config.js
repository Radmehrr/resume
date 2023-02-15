/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        mygray: "#726d91",
        myDarkGray: "#606875",
      },
    },
    fontFamily: {
      yekanbakhthin: ["Yekan-Bakh-FaNum-Thi"],
      yekanbakhlight: ["Yekan-Bakh-FaNum-Lig"],
      yekanbakhregular: ["Yekan-Bakh-FaNum-Reg"],
      yekanbakhsemibold: ["Yekan-Bakh-FaNum-SemiBol"],
      yekanbakhbold: ["Yekan-Bakh-FaNum-Bol"],
      yekanbakhExtbold: ["Yekan-Bakh-FaNum-ExtBol"],
      yekanbakhblk: ["Yekan-Bakh-FaNum-Blk"],
      yekanbakhExtblk: ["Yekan-Bakh-FaNum-ExtBlk"],
    },
  },
  plugins: [],
};
