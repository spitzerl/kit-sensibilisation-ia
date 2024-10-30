// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },

  css: [
      "bootstrap/dist/css/bootstrap.css",
      "bootstrap-vue-next/dist/bootstrap-vue-next.css",
  ],

  build: {
      transpile: ["bootstrap-vue-next"],
  },

  modules: ["@nuxt/icon", "nuxt-bootstrap-icons"],
});