<template>
  <div class="bg-slate-800/60 border border-slate-700/50 rounded-2xl p-4 shadow-xl backdrop-blur-sm transition-all duration-300">
    <!-- Cabeçalho do Quadro Kanban com Botão de Collapse -->
    <div 
      class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 transition-all"
      :class="{ 'mb-4 pb-3 border-b border-slate-700/60': !isCollapsed }"
    >
      <div class="flex items-center gap-2.5">
        <span class="w-8 h-8 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold text-sm shrink-0">
          📋
        </span>
        <div>
          <div class="flex items-center gap-2">
            <h3 class="text-sm font-bold text-white">
              Quadro Kanban de Tarefas
            </h3>
            <span class="text-xs bg-slate-700 text-slate-300 font-bold px-2.5 py-0.5 rounded-full">
              {{ tarefas.length }} {{ tarefas.length === 1 ? 'tarefa' : 'tarefas' }}
            </span>
          </div>
          <p class="text-[11px] text-slate-400">
            Acompanhamento reativo das demandas por fase, status e prioridade.
          </p>
        </div>
      </div>

      <div class="flex items-center gap-3 self-end sm:self-auto">
        <!-- Botão Nova Tarefa (Apenas visível quando expandido) -->
        <button
          v-if="!isCollapsed"
          @click="modalNovaTarefa = true"
          class="px-3 py-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-xl transition-all shadow-md flex items-center gap-1 cursor-pointer"
        >
          <span>+</span> Nova Tarefa
        </button>

        <!-- Botão de Recolher/Expandir -->
        <button
          @click="isCollapsed = !isCollapsed"
          class="px-3 py-1.5 bg-slate-700/80 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-semibold rounded-lg border border-slate-600/60 transition-all flex items-center gap-1.5 shadow-sm cursor-pointer"
          :title="isCollapsed ? 'Expandir Quadro Kanban' : 'Recolher Quadro Kanban'"
        >
          <span>{{ isCollapsed ? 'Expandir' : 'Recolher' }}</span>
          <span class="text-[10px] transform transition-transform duration-200" :class="{ 'rotate-180': isCollapsed }">
            ▲
          </span>
        </button>
      </div>
    </div>

    <!-- Conteúdo do Kanban (Filtros + Colunas Ocultáveis) -->
    <transition name="fade-slide">
      <div v-show="!isCollapsed" class="space-y-4">
        <!-- Barra de Filtros Rápidos -->
        <div class="bg-slate-900/80 border border-slate-700/70 rounded-xl p-3 flex flex-wrap items-center justify-between gap-3">
          <div class="flex flex-wrap items-center gap-3 w-full sm:w-auto">
            <span class="text-xs font-semibold text-slate-400 flex items-center gap-1">
              <span>🔍</span> Filtros:
            </span>

            <!-- Filtro por Responsável -->
            <select
              v-model="filtroResponsavel"
              class="bg-slate-800 border border-slate-700 text-slate-200 text-xs rounded-lg px-2.5 py-1.5 focus:outline-none focus:border-amber-500 cursor-pointer"
            >
              <option value="">Todos os Responsáveis</option>
              <option v-for="user in listaUsuarios" :key="user.id" :value="user.id">
                {{ user.nome }}
              </option>
            </select>

            <!-- Filtro por Prioridade -->
            <select
              v-model="filtroPrioridade"
              class="bg-slate-800 border border-slate-700 text-slate-200 text-xs rounded-lg px-2.5 py-1.5 focus:outline-none focus:border-amber-500 cursor-pointer"
            >
              <option value="">Todas as Prioridades</option>
              <option value="alta">Alta Prioridade</option>
              <option value="media">Média Prioridade</option>
              <option value="baixa">Baixa Prioridade</option>
            </select>

            <!-- Botão Limpar Filtros -->
            <button
              v-if="filtroResponsavel || filtroPrioridade"
              @click="limparFiltros"
              class="text-[11px] text-amber-400 hover:text-amber-300 underline font-medium cursor-pointer"
            >
              Limpar filtros
            </button>
          </div>

          <div class="text-[11px] text-slate-400 hidden lg:block">
            Exibindo <strong>{{ tarefasFiltradas.length }}</strong> de <strong>{{ tarefas.length }}</strong> tarefas
          </div>
        </div>

        <!-- Estado de Carregamento -->
        <div v-if="pending" class="text-center py-12 text-slate-400 text-xs flex items-center justify-center gap-2">
          <span class="animate-spin text-amber-500 text-base">⏳</span> Carregando tarefas do PMO...
        </div>

        <!-- Colunas do Quadro Kanban (4 Colunas) -->
        <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div
            v-for="coluna in colunasKanban"
            :key="coluna.id"
            class="bg-slate-900/60 border border-slate-700/60 rounded-xl p-3.5 flex flex-col min-h-[420px]"
          >
            <!-- Cabeçalho da Coluna -->
            <div class="flex items-center justify-between pb-2.5 mb-3 border-b border-slate-800">
              <div class="flex items-center gap-2">
                <span class="w-2.5 h-2.5 rounded-full" :class="coluna.corIndicador"></span>
                <h4 class="font-bold text-white text-xs uppercase tracking-wider">{{ coluna.titulo }}</h4>
              </div>
              <span class="text-[11px] bg-slate-800 text-slate-300 font-bold px-2 py-0.5 rounded-full border border-slate-700/60">
                {{ tarefasFiltradasPorColuna(coluna.id).length }}
              </span>
            </div>

            <!-- Cards de Tarefas -->
            <div class="flex-1 space-y-2.5 overflow-y-auto pr-0.5">
              <div
                v-for="tarefa in tarefasFiltradasPorColuna(coluna.id)"
                :key="tarefa.id"
                class="bg-slate-800/90 border border-slate-700/80 hover:border-amber-500/50 rounded-xl p-3 shadow-sm transition-all group"
              >
                <!-- Badges de Fase e Prioridade -->
                <div class="flex items-center justify-between gap-2 mb-1.5">
                  <span class="text-[9px] font-extrabold uppercase px-1.5 py-0.5 rounded bg-slate-900 text-amber-400 border border-amber-500/20">
                    {{ tarefa.fase }}
                  </span>
                  <span class="text-[9px] font-bold px-1.5 py-0.5 rounded uppercase" :class="corPrioridade(tarefa.prioridade)">
                    {{ tarefa.prioridade }}
                  </span>
                </div>

                <!-- Título e Descrição -->
                <h5 class="font-medium text-slate-100 text-xs mb-1 leading-snug">
                  {{ tarefa.titulo }}
                </h5>
                <p v-if="tarefa.descricao" class="text-[11px] text-slate-400 line-clamp-2 mb-2">
                  {{ tarefa.descricao }}
                </p>

                <!-- Rodapé do Card: Responsável e Seletor de Status -->
                <div class="flex items-center justify-between pt-2 border-t border-slate-700/60 text-[11px]">
                  <span class="text-slate-400 font-medium truncate max-w-[110px]" :title="tarefa.pmo_usuarios?.nome || 'Sem responsável'">
                    👤 {{ tarefa.pmo_usuarios?.nome || 'Sem Responsável' }}
                  </span>
                  <select
                    :value="tarefa.status"
                    @change="moverTarefa(tarefa.id, ($event.target as HTMLSelectElement).value)"
                    class="bg-slate-900 text-slate-300 text-[10px] rounded px-1.5 py-0.5 border border-slate-700 focus:outline-none focus:border-amber-500 cursor-pointer"
                  >
                    <option value="a_fazer">A Fazer</option>
                    <option value="em_andamento">Em Andamento</option>
                    <option value="em_validacao">Em Validação</option>
                    <option value="concluido">Concluído</option>
                  </select>
                </div>
              </div>

              <!-- Estado Vazio -->
              <div
                v-if="tarefasFiltradasPorColuna(coluna.id).length === 0"
                class="text-center py-8 text-[11px] text-slate-400 border border-dashed border-slate-800 rounded-xl"
              >
                Nenhuma tarefa
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>

    <!-- Modal de Nova Tarefa -->
    <div v-if="modalNovaTarefa" class="fixed inset-0 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div class="bg-slate-900 border border-slate-700 rounded-2xl p-6 max-w-md w-full shadow-2xl space-y-4">
        <h3 class="text-lg font-bold text-white">Cadastrar Nova Tarefa</h3>
        <div>
          <label class="block text-xs font-semibold text-slate-400 mb-1">Título</label>
          <input v-model="formNovaTarefa.titulo" type="text" placeholder="Ex: Mapear rotas da API Prover" class="w-full bg-slate-800 border border-slate-700 rounded-lg p-2.5 text-sm text-white focus:outline-none focus:border-amber-500" />
        </div>
        <div>
          <label class="block text-xs font-semibold text-slate-400 mb-1">Descrição</label>
          <textarea v-model="formNovaTarefa.descricao" rows="3" placeholder="Detalhes da pendência..." class="w-full bg-slate-800 border border-slate-700 rounded-lg p-2.5 text-sm text-white focus:outline-none focus:border-amber-500"></textarea>
        </div>
        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="block text-xs font-semibold text-slate-400 mb-1">Fase</label>
            <select v-model="formNovaTarefa.fase" class="w-full bg-slate-800 border border-slate-700 rounded-lg p-2.5 text-sm text-white focus:outline-none focus:border-amber-500">
              <option value="Fase 0">Fase 0 (Pré-Projeto)</option>
              <option value="Fase 1">Fase 1 (MVP)</option>
              <option value="Fase 2">Fase 2 (Comunidade)</option>
              <option value="Fase 3">Fase 3 (Automação)</option>
              <option value="Fase 4">Fase 4 (BI)</option>
            </select>
          </div>
          <div>
            <label class="block text-xs font-semibold text-slate-400 mb-1">Responsável</label>
            <select v-model="formNovaTarefa.responsavel_id" class="w-full bg-slate-800 border border-slate-700 rounded-lg p-2.5 text-sm text-white focus:outline-none focus:border-amber-500">
              <option v-for="user in listaUsuarios" :key="user.id" :value="user.id">
                {{ user.nome }}
              </option>
            </select>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="block text-xs font-semibold text-slate-400 mb-1">Prioridade</label>
            <select v-model="formNovaTarefa.prioridade" class="w-full bg-slate-800 border border-slate-700 rounded-lg p-2.5 text-sm text-white focus:outline-none focus:border-amber-500">
              <option value="alta">Alta</option>
              <option value="media">Média</option>
              <option value="baixa">Baixa</option>
            </select>
          </div>
          <div>
            <label class="block text-xs font-semibold text-slate-400 mb-1">Status Inicial</label>
            <select v-model="formNovaTarefa.status" class="w-full bg-slate-800 border border-slate-700 rounded-lg p-2.5 text-sm text-white focus:outline-none focus:border-amber-500">
              <option value="a_fazer">A Fazer</option>
              <option value="em_andamento">Em Andamento</option>
              <option value="em_validacao">Em Validação</option>
              <option value="concluido">Concluído</option>
            </select>
          </div>
        </div>
        <div class="flex justify-end gap-3 pt-4 border-t border-slate-800">
          <button @click="modalNovaTarefa = false" class="px-4 py-2 text-sm text-slate-400 hover:text-white cursor-pointer">Cancelar</button>
          <button @click="adicionarTarefa" :disabled="salvando" class="px-4 py-2 bg-amber-500 text-slate-950 font-bold text-sm rounded-lg hover:bg-amber-400 disabled:opacity-50 cursor-pointer">
            {{ salvando ? 'Salvando...' : 'Salvar Tarefa' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

// Interface das tarefas com o relacionamento do Prisma
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
  pmo_usuarios?: Usuario | null
  updated_at?: string
}

const isCollapsed = ref(false)
const filtroResponsavel = ref('')
const filtroPrioridade = ref('')
const modalNovaTarefa = ref(false)
const salvando = ref(false)

const colunasKanban = [
  { id: 'a_fazer', titulo: 'A Fazer', corIndicador: 'bg-amber-500' },
  { id: 'em_andamento', titulo: 'Em Andamento', corIndicador: 'bg-blue-500' },
  { id: 'em_validacao', titulo: 'Em Validação (Igreja)', corIndicador: 'bg-purple-500' },
  { id: 'concluido', titulo: 'Concluído', corIndicador: 'bg-emerald-500' }
]

// ID do Responsável Padrão
const RESPONSAVEL_PADRAO_ID = '3bf18ffc-1375-44c8-b3a6-3bd2dac19fff'

// Lista local para selects de responsável
const listaUsuarios = ref<Usuario[]>([
  { id: RESPONSAVEL_PADRAO_ID, nome: 'Responsável Principal' }
])

// Busca as tarefas via API do backend Nuxt
const { data: responseApi, pending, refresh } = await useFetch<{ success: boolean, data: Tarefa[] }>('/api/pmo/tarefas')

const tarefas = computed<Tarefa[]>(() => responseApi.value?.data || [])

const formNovaTarefa = ref({
  titulo: '',
  descricao: '',
  fase: 'Fase 0',
  prioridade: 'media',
  responsavel_id: RESPONSAVEL_PADRAO_ID,
  status: 'a_fazer'
})

const tarefasFiltradas = computed(() => {
  return tarefas.value.filter((t) => {
    const BateResp = !filtroResponsavel.value || t.responsavel_id === filtroResponsavel.value || t.pmo_usuarios?.id === filtroResponsavel.value
    const BatePrio = !filtroPrioridade.value || t.prioridade === filtroPrioridade.value
    return BateResp && BatePrio
  })
})

function tarefasFiltradasPorColuna(statusId: string) {
  return tarefasFiltradas.value.filter((t) => t.status === statusId)
}

function corPrioridade(prio: string) {
  if (prio === 'alta') return 'bg-red-500/20 text-red-400 border border-red-500/30'
  if (prio === 'media') return 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
  return 'bg-slate-700 text-slate-300'
}

// Atualização assíncrona do status
async function moverTarefa(id: string, novoStatus: string) {
  const tarefa = tarefas.value.find(x => x.id === id)
  if (!tarefa) return

  const statusAntigo = tarefa.status
  tarefa.status = novoStatus // Atualização otimista no UI

  try {
    await $fetch(`/api/pmo/tarefas/${id}`, {
      method: 'PATCH',
      body: { status: novoStatus }
    })
  } catch (error) {
    console.error('Erro ao mover tarefa:', error)
    tarefa.status = statusAntigo // Reverte se der erro na requisição
  }
}

function limparFiltros() {
  filtroResponsavel.value = ''
  filtroPrioridade.value = ''
}

// Adicionar tarefa chamando o endpoint POST
async function adicionarTarefa() {
  if (!formNovaTarefa.value.titulo) return

  salvando.value = true
  try {
    await $fetch('/api/pmo/tarefas', {
      method: 'POST',
      body: formNovaTarefa.value
    })

    await refresh() // Recarrega os dados do Kanban
    modalNovaTarefa.value = false
    formNovaTarefa.value = {
      titulo: '',
      descricao: '',
      fase: 'Fase 0',
      prioridade: 'media',
      responsavel_id: RESPONSAVEL_PADRAO_ID,
      status: 'a_fazer'
    }
  } catch (error) {
    console.error('Erro ao adicionar tarefa:', error)
  } finally {
    salvando.value = false
  }
}
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