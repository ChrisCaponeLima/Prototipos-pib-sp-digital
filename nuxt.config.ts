// nuxt.config.ts - Versão 1.2 (Modo Seguro/Gradual)
export default defineNuxtConfig({
  compatibilityDate: '2024-08-18', 

  typescript: {
    strict: true,
    typeCheck: false // Agora funciona, pois instalamos o vue-tsc e o typescript!
  },

  modules: [
    '@nuxtjs/tailwindcss',
    // Comente estes até rodar o comando de instalação:
    // '@nuxtjs/i18n',
    // '@pinia/nuxt',
     '@nuxt/icon'
  ],

  // Comente a configuração do i18n temporariamente
  /* i18n: {
    locales: [
      { code: 'pt', name: 'Português', iso: 'pt-BR' },
      { code: 'en', name: 'English', iso: 'en-US' },
      { code: 'es', name: 'Español', iso: 'es-ES' }
    ],
    defaultLocale: 'pt',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root'
    }
  }, */

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
    }
  },

  devtools: { enabled: true }
})