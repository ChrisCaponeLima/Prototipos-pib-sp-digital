<template>
  <div class="min-h-screen bg-slate-900 text-slate-100 p-4 sm:p-6 lg:p-8 font-sans">
    <!-- Header Principal -->
    <header class="max-w-7xl mx-auto mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-slate-800 pb-6">
      <div>
        <div class="flex items-center gap-3">
          <span class="px-3 py-1 bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold rounded-full uppercase tracking-wider">
            PIB SP Digital
          </span>
          <span class="text-xs text-slate-400">Governança & Campus Digital 2026</span>
        </div>
        <h1 class="text-2xl sm:text-3xl font-bold text-white mt-2">Central de Acompanhamento & PMO</h1>
        <p class="text-slate-400 text-sm mt-1">Gestão reativa, diário de bordo, hub de aprovações e cofre seguro.</p>
      </div>

      <!-- Abas de Navegação -->
      <div class="flex flex-wrap items-center bg-slate-800 p-1.5 rounded-xl border border-slate-700/60 gap-1">
        <button
          v-for="aba in abasMenu"
          :key="aba.id"
          @click="abaAtiva = aba.id"
          :class="[
            'px-3 py-2 text-xs font-medium rounded-lg transition-all flex items-center gap-1.5',
            abaAtiva === aba.id ? 'bg-amber-500 text-slate-950 font-bold shadow-md' : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
          ]"
        >
          <span>{{ aba.icone }}</span> {{ aba.label }}
        </button>
      </div>
    </header>

    <!-- Linha do Tempo Fixa de Marcos -->
    <PmoRoadmapTimeline />

    <!-- Conteúdo Dinâmico por Aba -->
    <main class="max-w-7xl mx-auto space-y-6">
      <div v-if="abaAtiva === 'kanban'" class="space-y-6">
        <PmoImpedimentos />
        <PmoKanbanBoard />
      </div>

      <PmoDiarioBordo v-else-if="abaAtiva === 'diario'" />
      <PmoAprovacoes v-else-if="abaAtiva === 'aprovacoes'" />
      <PmoCofreAtivos v-else-if="abaAtiva === 'cofre'" />
      <PmoRoiMetrics v-else-if="abaAtiva === 'roi'" />
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

definePageMeta({
  middleware: 'pmo-auth'
})

const abaAtiva = ref('kanban')

const abasMenu = [
  { id: 'kanban', label: 'Kanban & Impedimentos', icone: '📋' },
  { id: 'diario', label: 'Diário de Bordo & POPs', icone: '📖' },
  { id: 'aprovacoes', label: 'Hub de Aprovações', icone: '✅' },
  { id: 'cofre', label: 'Cofre de Ativos', icone: '🔐' },
  { id: 'roi', label: 'ROI & Economia', icone: '📈' }
]
</script>