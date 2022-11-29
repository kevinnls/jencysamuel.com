module.exports = {
  content: [
    "./src/**/*.html",
    "./src/**/*.liquid",
    "./src/**/*.md",
    "./src/_tailwind/style.css",
  ],
  theme: {
    extend: {
      colors: {
        "theme-green": "rgb(0, 128, 55)",
      },
    },
  },
};
