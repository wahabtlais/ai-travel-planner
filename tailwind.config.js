/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				obold: ["Outfit-Bold", "sans-serif"],
				oblack: ["Outfit-Black", "sans-serif"],
				omedium: ["Outfit-Medium", "sans-serif"],
				oregular: ["Outfit-Regular", "sans-serif"],
				osemibold: ["Outfit-SemiBold", "sans-serif"],
				othin: ["Outfit-Thin", "sans-serif"],
			},
		},
	},
	plugins: [],
};
