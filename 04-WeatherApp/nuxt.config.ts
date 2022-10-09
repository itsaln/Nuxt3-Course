export default defineNuxtConfig({
	publicRuntimeConfig: {
		WEATHER_API_KEY: process.env.WEATHER_API_KEY
	},
	privateRuntimeConfig: {
		HELLO: 'world in the server not the client'
	},
	css: [
		'~/assets/css/tailwind.css'
	],
	build: {
		postcss: {
			postcssOptions: {
				plugins: {
					tailwindcss: {},
					autoprefixer: {}
				}
			}
		}
	}
})
