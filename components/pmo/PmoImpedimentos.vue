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
        <h3 class="text-sm font-bold text-red-200 flex items-center gap-2">
          Central de Impedimentos & Bloqueadores Externos
          <span v-if="impedimentos.length > 0" class="text-xs bg-red-500/20 text-red-300 border border-red-500/40 px-2 py-0.5 rounded-full">
            {{ impedimentos.length }}
          </span>
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

    <!-- Lista de Cards Reativa a partir das Tarefas com Impeditivo -->
    <transition name="fade-slide">
      <div v-show="!isCollapsed" class="pt-1">
        <!-- Estado de Carregamento -->
        <div v-if="pending" class="text-center py-4 text-xs text-red-300/60">
          ⏳ Carregando impedimentos...
        </div>

        <!-- Lista Vazia (Sem Impeditivos) -->
        <div v-else-if="impedimentos.length === 0" class="text-center py-4 text-xs text-slate-400 border border-dashed border-red-500/20 rounded-xl">
          Nenhum bloqueador ou impeditivo crítico registrado no momento.
        </div>

        <!-- Grid de Cards com Impeditivo -->
        <div v-else class="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div 
            v-for="item in impedimentos" 
            :key="item.id"
            class="bg-slate-900/90 border border-red-500/40 rounded-xl p-3 flex justify-between items-start shadow-sm gap-2"
          >
            <div class="space-y-1 pr-1">
              <div class="flex items-center gap-1.5">
                <span class="text-[10px] font-extrabold uppercase px-1.5 py-0.5 rounded bg-slate-800 text-amber-400 border border-amber-500/20">
                  {{ item.fase }}
                </span>
                <p class="text-xs font-semibold text-white leading-snug">
                  {{ item.titulo }}
                </p>
              </div>
              <p v-if="item.descricao" class="text-[11px] text-slate-400 line-clamp-2">
                {{ item.descricao }}
              </p>
            </div>

            <span class="px-2.5 py-1 bg-red-500/20 text-red-300 text-[10px] font-bold rounded border border-red-500/30 shrink-0 ml-2 whitespace-nowrap">
              👤 {{ item.pmo_usuarios?.nome || 'Sem Responsável' }}
            </span>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

interface Usuario {
  id: string
  nome: string
  email?: string
}

interface Tarefa {
  id: string
  titulo: string
  descricao?: string
  fase: string
  status: string
  prioridade: string
  responsavel_id?: string
  Impeditivo?: boolean | null
  pmo_usuarios?: Usuario | null
  updated_at?: string
}

// Estado do collapse (inicia aberto)
const isCollapsed = ref(false)

// Busca tarefas diretamente da API do PMO
const { data: responseApi, pending } = await useFetch<{ success: boolean, data: Tarefa[] }>('/api/pmo/tarefas')

// Filtra apenas as tarefas marcadas com Impeditivo === true
const impedimentos = computed<Tarefa[]>(() => {
  const lista = responseApi.value?.data || []
  return lista.filter((t) => Boolean(t.Impeditivo))
})
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