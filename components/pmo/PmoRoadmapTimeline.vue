<template>
  <section class="max-w-7xl mx-auto mb-8 bg-slate-800/80 border border-slate-700/80 rounded-2xl p-5 shadow-xl backdrop-blur-sm transition-all duration-300">
    <!-- Cabeçalho do Cronograma com Botão de Collapse -->
    <div 
      class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 transition-all"
      :class="{ 'pb-3 border-b border-slate-700/60 mb-4': !isCollapsed }"
    >
      <div class="flex items-center gap-3">
        <div class="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold text-base shrink-0">
          ⏳
        </div>
        <div>
          <div class="flex items-center gap-2 flex-wrap">
            <h2 class="text-base font-bold text-white">Roadmap Estratégico do Projeto</h2>
            <span class="px-2.5 py-0.5 bg-blue-500/20 text-blue-400 border border-blue-500/30 text-[10px] font-bold rounded-full uppercase animate-pulse">
              Fase Ativa: Pré-Projeto
            </span>
          </div>
          <p class="text-xs text-slate-400">
            Visão unificada do progresso das 4 fases da transformação digital.
          </p>
        </div>
      </div>

      <div class="flex items-center gap-3 self-end sm:self-auto">
        <!-- Alerta de Governança -->
        <div v-if="!isCollapsed" class="hidden lg:flex bg-amber-500/10 border border-amber-500/20 rounded-xl px-3 py-1.5 text-xs text-amber-300/90 items-center gap-2">
          <span>💡</span>
          <span><strong>Governança:</strong> Prazos oficiais iniciam após kick-off.</span>
        </div>

        <!-- Botão de Collapse -->
        <button
          @click="isCollapsed = !isCollapsed"
          class="px-3 py-1.5 bg-slate-700/80 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-semibold rounded-lg border border-slate-600/60 transition-all flex items-center gap-1.5 shadow-sm cursor-pointer"
          :title="isCollapsed ? 'Expandir Roadmap' : 'Recolher Roadmap'"
        >
          <span>{{ isCollapsed ? 'Expandir' : 'Recolher' }}</span>
          <span class="text-[10px] transform transition-transform duration-200" :class="{ 'rotate-180': isCollapsed }">
            ▲
          </span>
        </button>
      </div>
    </div>

    <!-- Grid de Fases (Ocultável) -->
    <transition name="fade-slide">
      <div v-show="!isCollapsed" class="grid grid-cols-1 md:grid-cols-5 gap-3 pt-1">
        <!-- FASE 0 -->
        <div class="bg-slate-900/90 border-2 border-amber-500 rounded-xl p-3 shadow-lg shadow-amber-500/10">
          <div class="flex items-center justify-between mb-1.5">
            <span class="w-6 h-6 rounded-full bg-amber-500 text-slate-950 font-black text-xs flex items-center justify-center">0</span>
            <span class="text-[9px] font-extrabold uppercase px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-400">Ativo</span>
          </div>
          <h3 class="text-xs font-bold text-white">Fase 0 — Pré-Projeto</h3>
          <p class="text-[10px] text-amber-300 mb-2">Concepção & Diagnóstico</p>
          <p class="text-[10px] text-slate-400 border-t border-slate-800 pt-1.5">• Requisitos, API Prover e Book Pastoral</p>
        </div>

        <!-- FASE 1 -->
        <div class="bg-slate-900/50 border border-slate-700/70 rounded-xl p-3 opacity-80 hover:opacity-100 transition-all">
          <div class="flex items-center justify-between mb-1.5">
            <span class="w-6 h-6 rounded-full bg-slate-800 text-slate-400 font-bold text-xs flex items-center justify-center">1</span>
            <span class="text-[9px] text-slate-400">Semanas 2-4</span>
          </div>
          <h3 class="text-xs font-bold text-slate-200">Fase 1 — MVP</h3>
          <p class="text-[10px] text-slate-400 mb-2">Acolhimento & Visita</p>
          <p class="text-[10px] text-slate-500 border-t border-slate-800/80 pt-1.5">• Home, "Sou Novo", Culto Ao Vivo e PIX</p>
        </div>

        <!-- FASE 2 -->
        <div class="bg-slate-900/50 border border-slate-700/70 rounded-xl p-3 opacity-70 hover:opacity-100 transition-all">
          <div class="flex items-center justify-between mb-1.5">
            <span class="w-6 h-6 rounded-full bg-slate-800 text-slate-400 font-bold text-xs flex items-center justify-center">2</span>
            <span class="text-[9px] text-slate-500">Mês 2</span>
          </div>
          <h3 class="text-xs font-bold text-slate-300">Fase 2 — Comunidade</h3>
          <p class="text-[10px] text-slate-400 mb-2">Engajamento Diário</p>
          <p class="text-[10px] text-slate-500 border-t border-slate-800/80 pt-1.5">• Busca de PGs, Mural Oração e Versículo</p>
        </div>

        <!-- FASE 3 -->
        <div class="bg-slate-900/50 border border-slate-700/70 rounded-xl p-3 opacity-70 hover:opacity-100 transition-all">
          <div class="flex items-center justify-between mb-1.5">
            <span class="w-6 h-6 rounded-full bg-slate-800 text-slate-400 font-bold text-xs flex items-center justify-center">3</span>
            <span class="text-[9px] text-slate-500">Mês 3-4</span>
          </div>
          <h3 class="text-xs font-bold text-slate-300">Fase 3 — Automação</h3>
          <p class="text-[10px] text-slate-400 mb-2">Trilhas & Discipulado</p>
          <p class="text-[10px] text-slate-500 border-t border-slate-800/80 pt-1.5">• Chatbot WhatsApp e Área do Membro</p>
        </div>

        <!-- FASE 4 -->
        <div class="bg-slate-900/50 border border-slate-700/70 rounded-xl p-3 opacity-70 hover:opacity-100 transition-all">
          <div class="flex items-center justify-between mb-1.5">
            <span class="w-6 h-6 rounded-full bg-slate-800 text-slate-400 font-bold text-xs flex items-center justify-center">4</span>
            <span class="text-[9px] text-slate-500">Mês 5+</span>
          </div>
          <h3 class="text-xs font-bold text-slate-300">Fase 4 — BI & Governança</h3>
          <p class="text-[10px] text-slate-400 mb-2">Expansão & Dados</p>
          <p class="text-[10px] text-slate-500 border-t border-slate-800/80 pt-1.5">• Frequência Fria e Funil de Visitantes</p>
        </div>
      </div>
    </transition>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// Inicia aberto (false). Caso queira que inicie recolhido por padrão, altere para 'true'.
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