export default defineNuxtConfig({
  compatibilityDate: '2024-08-18', 

  typescript: {
    strict: true,
    typeCheck: false
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/icon'
  ],

  app: {
    head: {
      title: 'PIB de São Paulo — Primeira Igreja Batista de São Paulo',
      meta: [
        { 
          name: 'description', 
          content: 'Uma igreja histórica no coração de São Paulo, viva para a cidade.' 
        }
      ],
      htmlAttrs: {
        lang: 'pt-BR'
      }
    }
  },

  nitro: {
    prerender: {
      routes: ['/']
    },
    externals: {
      external: ['@prisma/client',
      '@prisma/adapter-neon', 
      '@neondatabase/serverless'
      ]
    }
  },

  devtools: { enabled: true }
})
