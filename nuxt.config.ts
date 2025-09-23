// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: '2025-07-15',
  devtools: {
    enabled: false,
  },
  modules: [
    '@nuxt/test-utils/module',
    '@pinia/nuxt',
    '@nuxt/ui',
    '@nuxt/icon',
    '@nuxt/fonts'
  ],
  css: ['~/assets/css/main.css'],
  vite: {
    optimizeDeps: {
      include: [
        'zod',
      ]
    }
  }
})
