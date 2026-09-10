<template>
    <div class="fixed bottom-6 left-6 z-50 font-sans">
      <!-- BOTÃO FLUTUANTE DE ACESSIBILIDADE -->
      <button 
        @click="togglePanel"
        class="flex h-14 w-14 items-center justify-center rounded-full bg-slate-900 text-white shadow-xl hover:bg-slate-800 hover:scale-105 active:scale-95 transition-all duration-300 border-2 border-amber-500/30"
        aria-label="Abrir Menu de Acessibilidade"
        :aria-expanded="isOpen"
      >
        <!-- Ícone de Acessibilidade (SVG Humano Vitruviano / Acessibilidade) -->
        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5" stroke-dasharray="3 3" />
        </svg>
      </button>
  
      <!-- PAINEL DE CONTROLE DE ACESSIBILIDADE -->
      <transition name="panel-fade">
        <div 
          v-if="isOpen" 
          class="absolute bottom-16 left-0 w-72 rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl text-slate-800 space-y-6"
        >
          <!-- Título e Fechar -->
          <div class="flex items-center justify-between border-b border-slate-100 pb-3">
            <div class="flex items-center gap-2">
              <span class="text-lg">♿</span>
              <h3 class="font-bold text-slate-900 text-sm">Opções de Acessibilidade</h3>
            </div>
            <button 
              @click="closePanel"
              class="text-slate-400 hover:text-slate-600 p-1 rounded-lg hover:bg-slate-50 transition-colors"
            >
              <!-- SVG Fechar -->
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
  
          <!-- SEÇÃO 1: TAMANHO DO TEXTO -->
          <div class="space-y-3">
            <div class="flex items-center justify-between">
              <span class="text-xs font-bold uppercase text-slate-500 tracking-wider">Tamanho da Fonte</span>
              <span class="text-xs font-semibold text-amber-600 bg-amber-500/10 px-2 py-0.5 rounded-full">
                {{ textScaleLabel }}
              </span>
            </div>
            <div class="grid grid-cols-3 gap-2">
              <!-- Diminuir Fonte -->
              <button 
                @click="changeTextScale(-1)"
                :disabled="textScale === 1"
                class="flex items-center justify-center gap-1 py-2 px-3 rounded-lg border border-slate-200 hover:border-amber-500/50 hover:bg-slate-50 font-bold text-xs disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                title="Diminuir fonte"
              >
                A-
              </button>
              <!-- Resetar Fonte -->
              <button 
                @click="resetTextScale"
                class="flex items-center justify-center py-2 px-3 rounded-lg border border-slate-300 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition-all"
                title="Restaurar tamanho padrão"
              >
                Padrão
              </button>
              <!-- Aumentar Fonte -->
              <button 
                @click="changeTextScale(1)"
                :disabled="textScale === 4"
                class="flex items-center justify-center gap-1 py-2 px-3 rounded-lg border border-slate-200 hover:border-amber-500/50 hover:bg-slate-50 font-bold text-xs disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                title="Aumentar fonte"
              >
                A+
              </button>
            </div>
          </div>
  
          <!-- SEÇÃO 2: SKINS / TEMAS VISUAIS -->
          <div class="space-y-3">
            <span class="block text-xs font-bold uppercase text-slate-500 tracking-wider">Skins / Contrastes</span>
            <div class="space-y-2">
              <!-- Modo Claro (Light) -->
              <button 
                @click="setTheme('light')"
                class="w-full flex items-center gap-3 p-2.5 rounded-xl border transition-all text-left text-xs font-semibold"
                :class="theme === 'light' 
                  ? 'bg-amber-500/5 border-amber-500 text-amber-700' 
                  : 'bg-white border-slate-200 hover:border-slate-300 text-slate-700'"
              >
                <span class="flex h-6 w-6 items-center justify-center rounded-full bg-slate-100 text-amber-500">
                  ☀️
                </span>
                <span>Modo Claro (Padrão)</span>
              </button>
  
              <!-- Modo Escuro (Dark) -->
              <button 
                @click="setTheme('dark')"
                class="w-full flex items-center gap-3 p-2.5 rounded-xl border transition-all text-left text-xs font-semibold"
                :class="theme === 'dark' 
                  ? 'bg-amber-500/5 border-amber-500 text-amber-400 bg-slate-900' 
                  : 'bg-white border-slate-200 hover:border-slate-300 text-slate-700'"
              >
                <span class="flex h-6 w-6 items-center justify-center rounded-full bg-slate-800 text-yellow-300">
                  🌙
                </span>
                <span>Modo Escuro</span>
              </button>
  
              <!-- Alto Contraste (High Contrast) -->
              <button 
                @click="setTheme('high-contrast')"
                class="w-full flex items-center gap-3 p-2.5 rounded-xl border transition-all text-left text-xs font-semibold"
                :class="theme === 'high-contrast' 
                  ? 'bg-yellow-400/10 border-yellow-400 text-yellow-400 bg-black' 
                  : 'bg-white border-slate-200 hover:border-slate-300 text-slate-700'"
              >
                <span class="flex h-6 w-6 items-center justify-center rounded-full bg-black border border-yellow-400 text-yellow-400 text-[10px] font-bold">
                  HC
                </span>
                <span>Alto Contraste</span>
              </button>
            </div>
          </div>
  
          <!-- SEÇÃO 3: MODO FOCUS / LEITURA -->
          <div class="pt-4 border-t border-slate-100 flex items-center justify-between">
            <div class="space-y-0.5">
              <span class="block text-xs font-bold text-slate-800">Modo de Foco</span>
              <span class="block text-[10px] text-slate-400">Ocultar distrações visuais</span>
            </div>
            <button 
              @click="toggleFocusMode"
              class="relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
              :class="focusMode ? 'bg-amber-500' : 'bg-slate-200'"
            >
              <span 
                class="pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
                :class="focusMode ? 'translate-x-5' : 'translate-x-0'"
              ></span>
            </button>
          </div>
  
          <div class="text-[10px] text-slate-400 text-center leading-tight">
            Suas preferências serão salvas para suas próximas visitas à PIB SP.
          </div>
        </div>
      </transition>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, computed, onMounted } from 'vue'
  
  /**
   * Componente: AcessibilidadeFloat
   * Descrição: Botão flutuante de acessibilidade para controle dinâmico de tamanho de fonte e skins.
   * Alinhamento Estratégico: Diretrizes de Acessibilidade da PIB SP (Inclusão de idosos e deficientes visuais).
   */
  
  const isOpen = ref(false)
  const textScale = ref(2) // 1 = Pequeno, 2 = Padrão, 3 = Grande, 4 = Extra Grande
  const theme = ref<'light' | 'dark' | 'high-contrast'>('light')
  const focusMode = ref(false)
  
  // Mapeamento visual das escalas de fontes
  const scales = {
    1: { css: '90%', label: 'Pequena (90%)' },
    2: { css: '100%', label: 'Padrão (100%)' },
    3: { css: '115%', label: 'Grande (115%)' },
    4: { css: '130%', label: 'Extra Grande (130%)' }
  }
  
  const textScaleLabel = computed(() => {
    return scales[textScale.value as keyof typeof scales]?.label || 'Padrão'
  })
  
  const togglePanel = () => {
    isOpen.value = !isOpen.value
  }
  
  const closePanel = () => {
    isOpen.value = false
  }
  
  // Alteração de Escala de Texto (Modifica a base do HTML para escalar o site inteiro via rem)
  const changeTextScale = (direction: number) => {
    const target = textScale.value + direction
    if (target >= 1 && target <= 4) {
      textScale.value = target
      applyTextScale()
    }
  }
  
  const resetTextScale = () => {
    textScale.value = 2
    applyTextScale()
  }
  
  const applyTextScale = () => {
    const scale = scales[textScale.value as keyof typeof scales]?.css || '100%'
    if (typeof document !== 'undefined') {
      document.documentElement.style.fontSize = scale
      localStorage.setItem('pib-sp-text-scale', textScale.value.toString())
    }
  }
  
  // Controle de Skins e Contraste
  const setTheme = (newTheme: 'light' | 'dark' | 'high-contrast') => {
    theme.value = newTheme
    applyTheme()
  }
  
  const applyTheme = () => {
    if (typeof document !== 'undefined') {
      const root = document.documentElement
      
      // Remove classes antigas
      root.classList.remove('dark', 'high-contrast')
      
      // Adiciona classe correspondente
      if (theme.value === 'dark') {
        root.classList.add('dark')
      } else if (theme.value === 'high-contrast') {
        root.classList.add('high-contrast')
      }
      
      localStorage.setItem('pib-sp-theme', theme.value)
    }
  }
  
  // Modo de Foco (Oculta banners decorativos ou efeitos visuais agressivos)
  const toggleFocusMode = () => {
    focusMode.value = !focusMode.value
    if (typeof document !== 'undefined') {
      if (focusMode.value) {
        document.documentElement.classList.add('focus-mode')
      } else {
        document.documentElement.classList.remove('focus-mode')
      }
      localStorage.setItem('pib-sp-focus-mode', focusMode.value ? 'true' : 'false')
    }
  }
  
  // Inicialização segura no lado do cliente (Prevenindo erros de SSR)
  onMounted(() => {
    const savedScale = localStorage.getItem('pib-sp-text-scale')
    const savedTheme = localStorage.getItem('pib-sp-theme')
    const savedFocus = localStorage.getItem('pib-sp-focus-mode')
  
    if (savedScale) {
      textScale.value = parseInt(savedScale)
      applyTextScale()
    }
    
    if (savedTheme) {
      theme.value = savedTheme as 'light' | 'dark' | 'high-contrast'
      applyTheme()
    }
  
    if (savedFocus === 'true') {
      focusMode.value = true
      document.documentElement.classList.add('focus-mode')
    }
  })
  </script>
  
  <style scoped>
  /* Transição elegante do painel flutuante */
  .panel-fade-enter-active,
  .panel-fade-leave-active {
    transition: opacity 0.3s cubic-bezier(0.16, 1, 0.3, 1), transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  }
  
  .panel-fade-enter-from,
  .panel-fade-leave-to {
    opacity: 0;
    transform: translateY(12px) scale(0.95);
  }
  </style>