module.exports = {
  mode: 'jit',
  corePlugins: {
    // preflight: false,
  },
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {},
    extend: {
      maxWidth: {},
      fontSize: {},
      colors: {},
      boxShadow: {},
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
