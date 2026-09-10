<template>
    <div class="bg-slate-900 text-white rounded-2xl p-6 md:p-8 border border-amber-500/20 shadow-xl relative overflow-hidden max-w-2xl mx-auto">
      <!-- Detalhe decorativo de fundo -->
      <div class="absolute -right-12 -top-12 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl pointer-events-none"></div>
  
      <!-- Cabeçalho do Card -->
      <div class="flex items-center justify-between mb-6 relative z-10">
        <span class="text-xs uppercase font-bold text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full tracking-wider">
          Versículo do Dia
        </span>
        <span class="text-xs text-slate-400 font-medium">PIB SP Digital</span>
      </div>
  
      <!-- Conteúdo com carregamento dinâmico -->
      <div v-if="carregando" class="py-8 text-center space-y-3">
        <div class="h-6 w-6 border-2 border-amber-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
        <p class="text-xs text-slate-400">Buscando inspiração diária...</p>
      </div>
  
      <div v-else-if="versiculo" class="space-y-6 relative z-10">
        <!-- Texto do Versículo -->
        <blockquote class="text-lg md:text-xl font-serif italic text-slate-100 leading-relaxed text-center">
          "{{ versiculo.texto }}"
        </blockquote>
        
        <!-- Referência Bíblica -->
        <cite class="block text-right text-xs md:text-sm font-bold text-amber-400 tracking-wide font-sans not-italic">
          — {{ versiculo.referencia }}
        </cite>
  
        <!-- Painel de Ações Interativas -->
        <div class="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <!-- Botão Principal: Copiar Texto -->
          <button 
            @click="copiarTexto"
            class="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 hover:text-amber-400 text-slate-300 transition-colors"
            :title="copiado ? 'Texto Copiado!' : 'Copiar para a Área de Transferência'"
          >
            <svg v-if="copiado" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            {{ copiado ? 'Copiado!' : 'Copiar' }}
          </button>
  
          <!-- Botão: Compartilhar nas Redes/Stories -->
          <button 
            @click="compartilhar"
            class="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 hover:text-amber-400 text-slate-300 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8.684 10.742l4.632-2.316m0 0a3 3 0 10-4.632-2.316m4.632 2.316a3 3 0 000 4.632m0 0l-4.632-2.316m0 0a3 3 0 104.632 2.316" />
            </svg>
            Compartilhar
          </button>
  
          <!-- Botão: Ler Devocional -->
          <button 
            @click="abrirDevocional"
            class="inline-flex items-center gap-1.5 text-xs font-bold px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 transition-colors ml-auto"
          >
            Ler Devocional ➔
          </button>
        </div>
      </div>
  
      <!-- Tratamento de Erro -->
      <div v-else class="text-center py-6 text-red-400 text-sm">
        Não foi possível carregar a mensagem diária.
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  import { useVersiculo } from '~/composables/useVersiculo'
  
  /**
   * Componente: VersiculoDoDia
   * Descrição: Exibe o versículo diário e permite ações de compartilhamento e cópia.
   * Princípio UX: Oferecer pílulas de encorajamento diário com facilidade de tráfego orgânico (compartilhamento).
   */
  
  const { versiculo, carregando } = useVersiculo()
  const copiado = ref(false)
  
  // Função para Copiar o Texto formatado [1]
  const copiarTexto = () => {
    if (versiculo.value) {
      const textoFormatado = `"${versiculo.value.texto}" — ${versiculo.value.referencia}\n\nVia Campus Digital PIB São Paulo`
      navigator.clipboard.writeText(textoFormatado)
      copiado.value = true
      setTimeout(() => {
        copiado.value = false
      }, 2500)
    }
  }
  
  // Lógica de Compartilhamento Nativo no Celular (Ideal para Stories/WhatsApp) [1, 11]
  const compartilhar = () => {
    if (navigator.share && versiculo.value) {
      navigator.share({
        title: 'Versículo do Dia — PIB SP',
        text: `"${versiculo.value.texto}" — ${versiculo.value.referencia}`,
        url: window.location.href
      }).catch((err) => console.log('Erro ao compartilhar:', err))
    } else {
      // Fallback caso o navegador não tenha suporte a Web Share (ex: computadores de mesa)
      copiarTexto()
      alert('Texto copiado! Você já pode colá-lo nos seus Stories ou no WhatsApp.')
    }
  }
  
  const abrirDevocional = () => {
    alert('Seu devocional diário da PIB SP está sendo preparado. Funcionalidade integrante da Fase 2 de expansão!')
  }
  </script>