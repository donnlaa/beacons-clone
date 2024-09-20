// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      keyframes: {
        jump: {
          "0%, 100%": { transform: "translateY(0)" }, // Start and end at the original position
          "10%": { transform: "translateY(-15px)" }, // Jump up
          "30%": { transform: "translateY(0)" }, // Fall back down
          "50%": { transform: "translateY(-8px)" }, // Slight bounce up again
          "70%": { transform: "translateY(0)" }, // Fall back down
        },
      },
      animation: {
        jump: "bounce 1s ease-in-out infinite", // 1-second interval with a bounce effect
      },
    },
  },
  plugins: [],
};
