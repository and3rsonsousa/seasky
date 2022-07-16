/** @type {import('tailwindcss').Config} */

var colors = require("tailwindcss/colors");

module.exports = {
	content: ["./app/**/*.{js,ts,jsx,tsx}"],
	theme: {
		colors: {
			white: "#fff",
			black: "#000",
			transparent: "transparent",
			primary: "#0974AA",
			accent: "#26A19E",
			gray: colors.slate,
		},
		extend: {},
	},
	plugins: [],
};
