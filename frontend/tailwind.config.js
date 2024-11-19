import daisyui from "daisyui";
import daisyUIThemes from "daisyui/src/theming/themes";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        shine: {
          '0%': {
            color: 'white',
            textShadow: '0 0 5px #fff, 0 0 10px #fff, 0 0 15px #ff00ff',
          },
          '50%': {
            color: '#ff00ff',
            textShadow: '0 0 10px #ff00ff, 0 0 15px #ff00ff, 0 0 20px #ff00ff',
          },
          '100%': {
            color: 'white',
            textShadow: '0 0 5px #fff, 0 0 10px #fff, 0 0 15px #ff00ff',
          },
        },
      },
      animation: {
        shine: 'shine 2s infinite', // Applying the shine animation
      },
    },
  },
  plugins: [daisyui],

  daisyui: {
    themes: [
      "light",
      {
        black: {
          ...daisyUIThemes["black"],
          primary: "rgb(29, 155, 240)", // Customize primary color
          secondary: "rgb(24, 24, 24)", // Customize secondary color
        },
      },
    ],
  },
};
