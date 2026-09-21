// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: '2024-08-18',

  runtimeConfig: {
    prismaDatabaseUrl: process.env.PRISMA_DATABASE_URL,
    databaseUrl: process.env.DATABASE_URL
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/icon'
  ],

  devtools: { enabled: true }
})