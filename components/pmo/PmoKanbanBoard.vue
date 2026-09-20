<template>
    <div class="space-y-4">
      <!-- Barra de Filtros -->
      <div class="bg-slate-800/60 border border-slate-700/50 rounded-2xl p-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div class="flex flex-wrap items-center gap-3 w-full md:w-auto">
          <span class="text-xs font-semibold text-slate-400">Filtros Rápido:</span>
          <select v-model="filtroResponsavel" class="bg-slate-900 border border-slate-700 text-slate-200 text-xs rounded-lg px-3 py-1.5 focus:border-amber-500">
            <option value="">Todos os Responsáveis</option>
            <option value="Dev">Dev (Desenvolvimento)</option>
            <option value="TI">TI / Infraestrutura</option>
            <option value="Secretaria">Secretaria</option>
            <option value="Comunicação">Comunicação</option>
          </select>
          <select v-model="filtroPrioridade" class="bg-slate-900 border border-slate-700 text-slate-200 text-xs rounded-lg px-3 py-1.5 focus:border-amber-500">
            <option value="">Todas as Prioridades</option>
            <option value="alta">Alta Prioridade</option>
            <option value="media">Média Prioridade</option>
            <option value="baixa">Baixa Prioridade</option>
          </select>
        </div>
  
        <button @click="modalNovaTarefa = true" class="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-xl shadow-lg flex items-center gap-1.5">
          <span>+</span> Nova Tarefa
        </button>
      </div>
  
      <!-- Colunas Kanban -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div v-for="coluna in colunasKanban" :key="coluna.id" class="bg-slate-800/60 border border-slate-700/50 rounded-2xl p-4 flex flex-col min-h-[450px]">
          <div class="flex items-center justify-between pb-3 mb-3 border-b border-slate-700/50">
            <div class="flex items-center gap-2">
              <span class="w-2.5 h-2.5 rounded-full" :class="coluna.corIndicador"></span>
              <h3 class="font-bold text-white text-xs uppercase tracking-wider">{{ coluna.titulo }}</h3>
            </div>
            <span class="text-xs bg-slate-700 text-slate-200 font-bold px-2 py-0.5 rounded-full">
              {{ tarefasFiltradasPorColuna(coluna.id).length }}
            </span>
          </div>
  
          <div class="flex-1 space-y-3">
            <div v-for="tarefa in tarefasFiltradasPorColuna(coluna.id)" :key="tarefa.id" class="bg-slate-900/90 border border-slate-700/80 hover:border-amber-500/50 rounded-xl p-3 shadow-sm transition-all">
              <div class="flex items-center justify-between gap-2 mb-1.5">
                <span class="text-[9px] font-extrabold uppercase px-1.5 py-0.5 rounded bg-slate-800 text-amber-400 border border-amber-500/20">
                  {{ tarefa.fase }}
                </span>
                <span class="text-[9px] font-bold px-1.5 py-0.5 rounded uppercase" :class="corPrioridade(tarefa.prioridade)">
                  {{ tarefa.prioridade }}
                </span>
              </div>
              <h4 class="font-medium text-slate-100 text-xs mb-1">{{ tarefa.titulo }}</h4>
              <p v-if="tarefa.descricao" class="text-[11px] text-slate-400 line-clamp-2 mb-2">{{ tarefa.descricao }}</p>
              <div class="flex items-center justify-between pt-2 border-t border-slate-800 text-[11px]">
                <span class="text-slate-400">{{ tarefa.responsavel || 'Dev' }}</span>
                <select :value="tarefa.status" @change="moverTarefa(tarefa.id, ($event.target as HTMLSelectElement).value)" class="bg-slate-800 text-slate-300 text-[10px] rounded px-1.5 py-0.5 border border-slate-700">
                  <option value="a_fazer">A Fazer</option>
                  <option value="em_andamento">Em Andamento</option>
                  <option value="em_validacao">Em Validação</option>
                  <option value="concluido">Concluído</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  
  const filtroResponsavel = ref('')
  const filtroPrioridade = ref('')
  const modalNovaTarefa = ref(false)
  
  const colunasKanban = [
    { id: 'a_fazer', titulo: 'A Fazer', corIndicador: 'bg-amber-500' },
    { id: 'em_andamento', titulo: 'Em Andamento', corIndicador: 'bg-blue-500' },
    { id: 'em_validacao', titulo: 'Em Validação (Igreja)', corIndicador: 'bg-purple-500' },
    { id: 'concluido', titulo: 'Concluído', corIndicador: 'bg-emerald-500' }
  ]
  
  const tarefas = ref([
    { id: '1', titulo: 'Mapeamento das Rotas da API Prover', fase: 'Fase 0', status: 'em_andamento', prioridade: 'alta', responsavel: 'Dev' },
    { id: '2', titulo: 'Recuperação da Conta no Registro.br', fase: 'Fase 0', status: 'a_fazer', prioridade: 'alta', responsavel: 'Secretaria' },
    { id: '3', titulo: 'Desenvolvimento do Protótipo da Home', fase: 'Fase 0', status: 'em_validacao', prioridade: 'media', responsavel: 'Dev' }
  ])
  
  function tarefasFiltradasPorColuna(statusId: string) {
    return tarefas.value.filter((t) => {
      const bateStatus = t.status === statusId
      const bateResp = !filtroResponsavel.value || t.responsavel === filtroResponsavel.value
      const batePrio = !filtroPrioridade.value || t.prioridade === filtroPrioridade.value
      return bateStatus && bateResp && batePrio
    })
  }
  
  function corPrioridade(prio: string) {
    if (prio === 'alta') return 'bg-red-500/20 text-red-400 border border-red-500/30'
    if (prio === 'media') return 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
    return 'bg-slate-700 text-slate-300'
  }
  
  function moverTarefa(id: string, novoStatus: string) {
    const t = tarefas.value.find(x => x.id === id)
    if (t) t.status = novoStatus
  }
  </script>