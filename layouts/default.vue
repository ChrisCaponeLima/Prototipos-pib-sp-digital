<template>
    <div class="min-h-screen flex flex-col bg-slate-50">
      <!-- Header Fixo Institucional (Navegação Principal) [9] -->
      <header class="sticky top-0 z-50 bg-slate-900 text-white shadow-md px-6 py-4">
        <div class="container mx-auto max-w-6xl flex items-center justify-between">
          <NuxtLink to="/" class="flex items-center gap-3">
            <div class="h-8 w-8 flex items-center justify-center rounded bg-amber-500 text-slate-950 font-bold">P</div>
            <span class="font-bold tracking-wide">PIB SP</span>
          </NuxtLink>
          <nav class="hidden md:flex items-center gap-6 text-sm font-medium">
            <NuxtLink to="/sobre" class="hover:text-amber-400 transition-colors">Sobre Nós</NuxtLink>
            <NuxtLink to="/cultos" class="hover:text-amber-400 transition-colors">Cultos</NuxtLink>
            <NuxtLink to="/pgs" class="hover:text-amber-400 transition-colors">Pequenos Grupos</NuxtLink>
            <NuxtLink to="/social" class="hover:text-amber-400 transition-colors">Ação Social</NuxtLink>
          </nav>
          <NuxtLink to="/sou-novo" class="bg-amber-500 hover:bg-amber-400 text-slate-950 px-4 py-2 rounded-lg text-xs font-bold transition-all">
            Sou Novo
          </NuxtLink>
        </div>
      </header>
  
      <!-- Área de Conteúdo das Páginas (Coração da Aplicação) -->
      <main class="flex-grow">
        <slot />
      </main>

      <!-- Componente Flutuante de Acessibilidade (Auto-imported) -->
    <InteractiveAcessibilidadeFloat />
  
      <!-- Rodapé Completo da Igreja [2] -->
      <LayoutFooter />
    </div>
  </template>
  
  <script setup lang="ts">
  /**
   * Layout: Default
   * Descrição: Moldura global do site que unifica o Header, o Conteúdo Dinâmico e o Footer.
   */
  </script>