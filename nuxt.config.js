// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	target: "static",
	compatibilityDate: "2024-04-03",
	devtools: { enabled: true },

	// css: ["bootstrap/dist/css/bootstrap.css"],

	// build: {
	// 	transpile: ["bootstrap-vue-next"],
	// },

	modules: ["@nuxt/ui", "@nuxt/icon"],
});
