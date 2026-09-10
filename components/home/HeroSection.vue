<template>
    <section class="relative h-[80vh] min-h-[600px] w-full overflow-hidden bg-slate-900 text-white">
      <!-- Vídeo de Fundo: Momentos reais da igreja (comunhão, louvor, ação social) [1, 2] -->
      <div class="absolute inset-0 z-0">
        <video 
          autoplay 
          muted 
          loop 
          playsinline 
          class="h-full w-full object-cover opacity-50 transition-opacity duration-1000"
          poster="/images/hero-fallback.png"
        >
          <source src="/videos/pib-sp-intro.mp4" type="video/mp4" />
        </video>
        <!-- Overlay Gradiente para garantir legibilidade [5, 6] -->
        <div class="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-transparent"></div>
      </div>
  
      <!-- Conteúdo Centralizado [2, 5] -->
      <div class="container relative z-10 mx-auto flex h-full flex-col justify-center px-6 lg:px-12">
        <div class="max-w-3xl space-y-6">
          <!-- Tag de Identidade Histórica -->
          <span class="inline-block rounded-full bg-amber-500/20 px-4 py-1 text-sm font-semibold tracking-wider text-amber-400 uppercase">
            Desde 1899 no Coração de SP
          </span>
  
          <!-- Título Impactante conforme a proposta estratégica [1, 5] -->
          <h1 class="text-4xl font-bold leading-tight md:text-6xl lg:text-7xl">
            Uma igreja <span class="text-amber-500 font-serif italic">histórica</span> no coração de São Paulo, 
            <span class="block">viva para a cidade.</span>
          </h1>
  
          <!-- Descrição de Apoio -->
          <p class="text-lg text-slate-300 md:text-xl lg:max-w-xl">
            Um lugar de acolhimento, fé e transformação urbana. Seja bem-vindo à nossa comunidade presencial e digital.
          </p>
  
          <!-- Botões de Ação Primários (CTAs) [2, 7, 8] -->
          <div class="flex flex-col gap-4 sm:flex-row sm:items-center">
            <NuxtLink 
              to="/sou-novo" 
              class="inline-flex items-center justify-center rounded-lg bg-amber-500 px-8 py-4 text-center font-bold text-slate-900 transition-all hover:bg-amber-400 active:scale-95"
            >
              Planeje sua Visita
            </NuxtLink>
            
            <NuxtLink 
              to="/cultos" 
              class="inline-flex items-center justify-center rounded-lg border-2 border-white/30 bg-white/10 px-8 py-4 text-center font-bold text-white backdrop-blur-sm transition-all hover:bg-white/20 active:scale-95"
            >
              <Icon name="ph:play-circle-bold" class="mr-2 h-6 w-6" />
              Culto Ao Vivo
            </NuxtLink>
          </div>
        </div>
      </div>
  
      <!-- Indicador de Scroll (Acessibilidade Visual) -->
      <div class="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <Icon name="ph:caret-double-down-light" class="h-8 w-8 text-white" />
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  /**
   * Componente: HeroSection
   * Descrição: Seção de impacto inicial do Campus Digital da PIB SP.
   * Requisitos: Mobile-First, Carregamento Ultra-rápido, Acolhimento. [9, 10]
   */
  
  // Define as animações de entrada ou lógica de controle de vídeo aqui, se necessário.
  </script>
  
  <style scoped>
  /* Ajustes finos para tipografia serifada que remete à história da igreja [11, 12] */
  h1 span.font-serif {
    font-family: 'Playfair Display', serif; /* Exemplo de fonte que deve ser importada no layout */
  }
  </style>