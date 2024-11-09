// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: ["@nuxt/ui", "@nuxt/icon"],
	compatibilityDate: "2024-11-05",
	runtimeConfig: {
		// Définir des variables d'environnement publiques ou privées
		public: {
			huggingFaceApiKey: process.env.HUGGING_FACE_API_KEY,
		},
	},
});
