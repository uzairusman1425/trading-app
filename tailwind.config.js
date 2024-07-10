/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}"
	],
	theme: {
		screens:{
			'sm': '640px',
      		'md': '768px',
      		'lg': '1024px',
      		'xl': '1280px',
    		'2xl': '1536px',
      
		},
		extend: {
			colors: {
				primary: "#2a293b",
				secondary: "#ca2a5c"
			}
		}
	},
	plugins: [require("tailwind-scrollbar")]
}
