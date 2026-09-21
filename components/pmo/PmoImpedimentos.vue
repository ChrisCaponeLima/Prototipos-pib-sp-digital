<template>
  <div class="bg-red-950/30 border border-red-500/30 rounded-2xl p-4 shadow-lg transition-all duration-300">
    <!-- Cabeçalho do Bloco com Botão de Collapse -->
    <div 
      class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 transition-all"
      :class="{ 'mb-3 pb-2 border-b border-red-500/20': !isCollapsed }"
    >
      <div class="flex items-center gap-2.5">
        <span class="px-2 py-0.5 bg-red-500 text-white font-extrabold text-[10px] rounded uppercase tracking-wider animate-pulse">
          Gargalos Críticos
        </span>
        <h3 class="text-sm font-bold text-red-200">
          Central de Impedimentos & Bloqueadores Externos
        </h3>
      </div>

      <div class="flex items-center gap-3 self-end sm:self-auto">
        <span v-if="!isCollapsed" class="hidden md:inline text-xs text-red-400/80">
          Atenção imediata requerida do responsável
        </span>

        <!-- Botão de Recolher/Expandir -->
        <button
          @click="isCollapsed = !isCollapsed"
          class="px-2.5 py-1 bg-red-900/40 hover:bg-red-900/60 text-red-200 text-xs font-semibold rounded-lg border border-red-500/40 transition-all flex items-center gap-1.5 cursor-pointer shadow-sm"
          :title="isCollapsed ? 'Expandir Impedimentos' : 'Recolher Impedimentos'"
        >
          <span>{{ isCollapsed ? 'Expandir' : 'Recolher' }}</span>
          <span class="text-[10px] transform transition-transform duration-200" :class="{ 'rotate-180': isCollapsed }">
            ▲
          </span>
        </button>
      </div>
    </div>

    <!-- Lista de Cards (Ocultável) -->
    <transition name="fade-slide">
      <div v-show="!isCollapsed" class="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
        <!-- BLOQUEADOR 1 -->
        <div class="bg-slate-900/90 border border-red-500/40 rounded-xl p-3 flex justify-between items-center shadow-sm">
          <div>
            <p class="text-xs font-semibold text-white">Aguardando liberação do Bearer Token na API Prover</p>
            <p class="text-[11px] text-slate-400">Pendente envio do token de produção pela equipe de suporte da Prover.</p>
          </div>
          <span class="px-2.5 py-1 bg-red-500/20 text-red-300 text-[10px] font-bold rounded border border-red-500/30 shrink-0 ml-2">
            TI / Prover
          </span>
        </div>

        <!-- BLOQUEADOR 2 -->
        <div class="bg-slate-900/90 border border-red-500/40 rounded-xl p-3 flex justify-between items-center shadow-sm">
          <div>
            <p class="text-xs font-semibold text-white">Recuperação de Acesso Máster no Registro.br</p>
            <p class="text-[11px] text-slate-400">Aguardando validação do e-mail institucional pela secretaria.</p>
          </div>
          <span class="px-2.5 py-1 bg-amber-500/20 text-amber-300 text-[10px] font-bold rounded border border-amber-500/30 shrink-0 ml-2">
            Secretaria
          </span>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// Estado do collapse (inicia aberto).
const isCollapsed = ref(false)
</script>

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.25s ease-in-out;
}

.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}
</style>
