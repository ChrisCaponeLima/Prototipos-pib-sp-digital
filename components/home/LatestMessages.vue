<template>
    <section class="bg-slate-50 py-16 px-6 lg:px-12 text-slate-800">
      <div class="container mx-auto max-w-6xl">
        
        <!-- Cabeçalho da Seção -->
        <div class="mb-12 text-center md:text-left flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <span class="text-xs font-bold uppercase tracking-widest text-amber-600">
              Assista ou Ouça
            </span>
            <h2 class="mt-2 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              Últimas Mensagens
            </h2>
            <p class="mt-4 max-w-xl text-lg text-slate-600">
              Acompanhe as pregações de domingo, séries de estudos e mensagens pastorais onde quer que você esteja.
            </p>
          </div>
          <div class="shrink-0">
            <NuxtLink 
              to="/cultos" 
              class="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-700 transition-colors hover:bg-slate-50 active:scale-95"
            >
              Ver Acervo Completo
            </NuxtLink>
          </div>
        </div>
  
        <!-- Layout: Destaque à Esquerda, Lista à Direita -->
        <div class="grid gap-8 lg:grid-cols-12">
          
          <!-- COLUNA DESTAQUE: Último Culto/Pregação (7 colunas) -->
          <div class="lg:col-span-7 flex flex-col rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <!-- Thumbnail simulando Player de Vídeo -->
            <div class="relative aspect-video w-full bg-slate-950 flex items-center justify-center group cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=1000" 
                alt="Capa do Último Culto - PIB SP" 
                class="absolute inset-0 h-full w-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-500"
              />
              <!-- Overlay escuro de proteção de contraste -->
              <div class="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/30 transition-colors"></div>
              
              <!-- Botão de Play Central (SVG Nativo) -->
              <div class="relative z-10 h-16 w-16 flex items-center justify-center rounded-full bg-amber-500 text-slate-950 shadow-lg group-hover:bg-amber-400 group-hover:scale-110 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 fill-current translate-x-0.5" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              
              <!-- Badge "Último Domingo" -->
              <span class="absolute top-4 left-4 z-10 rounded bg-slate-950/80 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-400 backdrop-blur-sm">
                Último Domingo
              </span>
            </div>
  
            <!-- Informações da Pregação -->
            <div class="p-8 flex-1 flex flex-col justify-between">
              <div>
                <div class="flex flex-wrap items-center gap-4 text-xs text-slate-500 mb-3">
                  <span class="flex items-center gap-1.5">
                    <!-- SVG Calendário -->
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    16 de Agosto, 2026
                  </span>
                  <span class="flex items-center gap-1.5">
                    <!-- SVG Pregador/Pastor -->
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    Pr. Paulo Eduardo
                  </span>
                </div>
                
                <span class="text-xs font-bold uppercase tracking-wider text-amber-600 block mb-1">
                  Série: Vivendo em Graça
                </span>
                <h3 class="text-2xl font-bold text-slate-900 leading-snug">
                  O Poder da Reconciliação e do Cuidado Mútuo no Centro de SP
                </h3>
                <p class="mt-3 text-slate-600 leading-relaxed text-sm">
                  Neste domingo, fomos desafiados a viver a verdadeira graça prática. Como uma igreja histórica estabelecida na Praça Princesa Isabel, nossa missão é transbordar o amor de Deus através do acolhimento e do apoio integral à nossa comunidade urbana [1].
                </p>
              </div>
  
              <!-- Botões de Acesso Rápido -->
              <div class="mt-8 border-t border-slate-100 pt-6 flex flex-col sm:flex-row items-center gap-4 justify-between">
                <span class="text-xs text-slate-400 font-medium sm:text-left text-center">Disponível também em:</span>
                <div class="flex items-center gap-3 w-full sm:w-auto">
                  <a 
                    href="https://youtube.com" 
                    target="_blank" 
                    class="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 rounded-lg bg-red-600 px-4 py-2.5 text-xs font-bold text-white transition-colors hover:bg-red-700 active:scale-95"
                  >
                    <!-- SVG YouTube -->
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 fill-current" viewBox="0 0 24 24">
                      <path d="M23.498 6.163a3.003 3.003 0 00-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.517 0-9.388.507a3.003 3.003 0 00-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 002.11 2.11c1.871.507 9.388.507 9.388.507s7.517 0 9.388-.507a3.003 3.003 0 002.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                    Assistir no YouTube
                  </a>
                  <a 
                    href="https://spotify.com" 
                    target="_blank" 
                    class="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-600 px-4 py-2.5 text-xs font-bold text-white transition-colors hover:bg-emerald-700 active:scale-95"
                  >
                    <!-- SVG Spotify -->
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm5.494 17.306c-.217.356-.684.472-1.04.254-2.884-1.762-6.513-2.162-10.787-1.185-.407.094-.82-.163-.914-.572-.094-.41.163-.82.572-.914 4.69-1.07 8.704-.616 11.916 1.35.357.217.473.684.253 1.041zm1.465-3.26c-.274.446-.856.592-1.302.318-3.3-2.028-8.332-2.617-12.23-1.432-.502.152-1.03-.137-1.183-.64-.153-.502.137-1.03.64-1.183 4.455-1.353 10.02-.7 13.8 1.62.445.275.592.857.318 1.302.002.001.002.001.002.001zm.126-3.41c-.328.536-1.03.712-1.567.384C15.53 8.99 8.924 8.772 5.093 9.935c-.6.182-1.23-.153-1.413-.754-.182-.6.153-1.23.754-1.412 4.56-1.385 11.83-1.134 16.29 1.517.538.322.715 1.025.385 1.562l.006.012z"/>
                    </svg>
                    Ouvir no Spotify
                  </a>
                </div>
              </div>
            </div>
          </div>
  
          <!-- COLUNA LISTA: Mensagens Anteriores (5 colunas) -->
          <div class="lg:col-span-5 flex flex-col gap-6">
            <h4 class="text-sm font-bold uppercase tracking-wider text-slate-400">
              Séries Anteriores
            </h4>
  
            <!-- Item 2 -->
            <div class="group flex gap-4 rounded-xl border border-slate-150 bg-white p-4 hover:shadow-sm transition-shadow">
              <div class="relative h-24 w-24 shrink-0 overflow-hidden rounded-lg bg-slate-900">
                <img 
                  src="https://images.unsplash.com/photo-1455849318743-b2233052fcff?auto=format&fit=crop&q=80&w=300" 
                  alt="História e Cidade" 
                  class="h-full w-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-300"
                />
                <div class="absolute inset-0 flex items-center justify-center">
                  <!-- Mini Play -->
                  <div class="h-8 w-8 flex items-center justify-center rounded-full bg-white/90 text-slate-950 shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 fill-current translate-x-0.5" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div class="flex flex-col justify-between py-1">
                <div>
                  <span class="text-[10px] font-bold uppercase tracking-wider text-amber-600">
                    Série: Fé e Ação Urbana
                  </span>
                  <h5 class="font-bold text-slate-900 leading-snug group-hover:text-amber-600 transition-colors line-clamp-2">
                    O Sal da Terra no Centro de São Paulo
                  </h5>
                </div>
                <span class="text-xs text-slate-400 block">
                  09 de Agosto, 2026
                </span>
              </div>
            </div>
  
            <!-- Item 3 -->
            <div class="group flex gap-4 rounded-xl border border-slate-150 bg-white p-4 hover:shadow-sm transition-shadow">
              <div class="relative h-24 w-24 shrink-0 overflow-hidden rounded-lg bg-slate-900">
                <img 
                  src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=300" 
                  alt="Cuidado Mútuo" 
                  class="h-full w-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-300"
                />
                <div class="absolute inset-0 flex items-center justify-center">
                  <!-- Mini Play -->
                  <div class="h-8 w-8 flex items-center justify-center rounded-full bg-white/90 text-slate-950 shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 fill-current translate-x-0.5" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div class="flex flex-col justify-between py-1">
                <div>
                  <span class="text-[10px] font-bold uppercase tracking-wider text-amber-600">
                    Série: Família e Comunidade
                  </span>
                  <h5 class="font-bold text-slate-900 leading-snug group-hover:text-amber-600 transition-colors line-clamp-2">
                    Construindo Pontes de Aconchego e Cuidado Mútuo
                  </h5>
                </div>
                <span class="text-xs text-slate-400 block">
                  02 de Agosto, 2026
                </span>
              </div>
            </div>
  
            <!-- Item 4 -->
            <div class="group flex gap-4 rounded-xl border border-slate-150 bg-white p-4 hover:shadow-sm transition-shadow">
              <div class="relative h-24 w-24 shrink-0 overflow-hidden rounded-lg bg-slate-900">
                <img 
                  src="https://images.unsplash.com/photo-1490124411525-241598274d53?auto=format&fit=crop&q=80&w=300" 
                  alt="História da Igreja" 
                  class="h-full w-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-300"
                />
                <div class="absolute inset-0 flex items-center justify-center">
                  <!-- Mini Play -->
                  <div class="h-8 w-8 flex items-center justify-center rounded-full bg-white/90 text-slate-950 shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 fill-current translate-x-0.5" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div class="flex flex-col justify-between py-1">
                <div>
                  <span class="text-[10px] font-bold uppercase tracking-wider text-amber-600">
                    Avulsas: Tradição e Futuro
                  </span>
                  <h5 class="font-bold text-slate-900 leading-snug group-hover:text-amber-600 transition-colors line-clamp-2">
                    127 Anos de História Viva no Centro
                  </h5>
                </div>
                <span class="text-xs text-slate-400 block">
                  26 de Julho, 2026
                </span>
              </div>
            </div>
  
          </div>
  
        </div>
  
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  /**
   * Componente: LatestMessages
   * Descrição: Exibição do acervo de pregações e mídias integradas (YouTube e Spotify) [3].
   * Alinhamento: Conceito de "Membro Ativo" & "Comunidade Diária" [7].
   */
  </script>