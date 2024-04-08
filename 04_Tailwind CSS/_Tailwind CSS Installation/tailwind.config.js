// /** @type {import('tailwindcss').Config} */
/*module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}*/

// Deleting above

/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: ["./src/**/*.{html,js}"],
  content: ["*"], 
  // *so that it can get content from whole folder
  theme: {
    extend: {},
  },
  plugins: [],
};
