/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      images: {
        formats: ["public/png", "public/jpeg"],
      },
      animation: {
        scroll: "scroll 20s linear infinite",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      // screens: {
      //   sm: "260px",
      //   md: "480px",
      //   lg: "705px", //768
      //   xl: "976px",
      //   "2xl": "1440px",
      // },
      screens: {
        sm: { min: "0px", max: "479px" },
        // => @media (min-width: 640px and max-width: 767px) { ... }

        md: { min: "480px", max: "704px" },
        // => @media (min-width: 768px and max-width: 1023px) { ... }

        lg: { min: "705px", max: "975px" },
        // => @media (min-width: 1024px and max-width: 1279px) { ... }

        xl: { min: "976px", max: "1439px" },
        // => @media (min-width: 1280px and max-width: 1535px) { ... }

        "2xl": { min: "1440px" },
        // => @media (min-width: 1536px) { ... }
      },
      colors: {
        maincolor: "#8453F9",
      },
      fontFamily: {
        sans: ["Graphik", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
      // margin: {
      //   "10px": "36px",
      // },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize: {
        "1logo": [
          "1.75rem",
          {
            lineHeight: "2.2rem",
            // letterSpacing: "-0.01em",
            fontWeight: "700",
            fontFamily: "Sora",
          },
        ],
        "1header": [
          "1rem",
          {
            lineHeight: "1.1rem",
            // letterSpacing: "-0.01em",
            fontWeight: "500",
            fontFamily: "Poppins",
          },
        ],
      },
    },
  },
  plugins: [],
};
