// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: {
    enabled: false,
  },
  modules: [
    'nuxt-mcp',
    '@pinia/nuxt',
    '@nuxt/ui'
  ],
  css: ['~/assets/css/main.css']
})
