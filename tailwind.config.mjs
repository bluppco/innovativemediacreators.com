/** @type {import('tailwindcss').Config} */
module.exports = {

	darkMode: ["class"],
  	content: [

    	"./pages/**/*.{js,jsx}",
    	"./components/**/*.{js,jsx}",
    	"./app/**/*.{js,jsx}",
    	"./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",

  	],
  	prefix: "",
  	theme: {

		container: {

			center: true,
      		padding: "2rem",
      		screens: {
        		"2xl": "1400px",
      		},

		},
    	extend: {

			keyframes: {

				"accordion-down": {

					from: { height: "0" },
          			to: { height: "var(--radix-accordion-content-height)" },

				},
        		"accordion-up": {

					from: { height: "var(--radix-accordion-content-height)" },
          			to: { height: "0" },

				},
      		},
      		animation: {

				"accordion-down": "accordion-down 0.2s ease-out",
        		"accordion-up": "accordion-up 0.2s ease-out",

			},
			colors: {

				"red-light":"#fe5b49"
			},
			fontFamily: {

				"acumin_pro": [ "acumin-pro", "sans-serif" ],
				"brutal": [ "Brutal", "sans-serif" ],
				"helvetica": [ "Helvetica", "sans-serif" ],
				"jaapokki": [ "Jaapokki", "sans-serif" ],

			}

		}

	},
  	plugins: [require("tailwindcss-animate")],

}
