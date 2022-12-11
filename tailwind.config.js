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
        theme: {
	  DEFAULT: "rgb(0, 140, 35)",
	  dark: "rgb(0, 140, 35)",
	  light: "rgb(0, 180, 80)",
	}
      },
    },
  },
};
