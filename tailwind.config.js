module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      transitionProperty: {
        width: "width",
        spacing: "margin",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    //   require('tailwindcss-animatecss')({
    //   settings: {
    //     animatedSpeed: 1000,
    //     heartBeatSpeed: 1000,
    //     hingeSpeed: 2000,
    //     bounceInSpeed: 750,
    //     bounceOutSpeed: 750,
    //     animationDelaySpeed: 1000,
    //   },
    //   variants: ['responsive'],
    // }
    // ),
  ],
};
