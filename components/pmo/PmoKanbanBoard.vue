<template>
  <div class="bg-slate-800/60 border border-slate-700/50 rounded-2xl p-4 shadow-xl backdrop-blur-sm transition-all duration-300">
    <!-- Cabeçalho do Quadro Kanban -->
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
            Acompanhamento reativo das demandas por fase, status e prioridade. (Dê duplo clique em um card para editar).
          </p>
        </div>
      </div>

      <div class="flex items-center gap-3 self-end sm:self-auto">
        <button
          v-if="!isCollapsed"
          @click="abrirModalNovaTarefa"
          class="px-3 py-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-xl transition-all shadow-md flex items-center gap-1 cursor-pointer"
        >
          <span>+</span> Nova Tarefa
        </button>

        <button
          @click="isCollapsed = !isCollapsed"
          class="px-3 py-1.5 bg-slate-700/80 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-semibold rounded-lg border border-slate-600/60 transition-all flex items-center gap-1.5 shadow-sm cursor-pointer"
        >
          <span>{{ isCollapsed ? 'Expandir' : 'Recolher' }}</span>
          <span class="text-[10px] transform transition-transform duration-200" :class="{ 'rotate-180': isCollapsed }">
            ▲
          </span>
        </button>
      </div>
    </div>

    <!-- Conteúdo do Kanban -->
    <transition name="fade-slide">
      <div v-show="!isCollapsed" class="space-y-4">
        <!-- Barra de Filtros -->
        <div class="bg-slate-900/80 border border-slate-700/70 rounded-xl p-3 flex flex-wrap items-center justify-between gap-3">
          <div class="flex flex-wrap items-center gap-3 w-full sm:w-auto">
            <span class="text-xs font-semibold text-slate-400 flex items-center gap-1">
              <span>🔍</span> Filtros:
            </span>

            <select
              v-model="filtroResponsavel"
              class="bg-slate-800 border border-slate-700 text-slate-200 text-xs rounded-lg px-2.5 py-1.5 focus:outline-none focus:border-amber-500 cursor-pointer"
            >
              <option value="">Todos os Responsáveis</option>
              <option v-for="user in listaUsuarios" :key="user.id" :value="user.id">
                {{ user.nome }}
              </option>
            </select>

            <select
              v-model="filtroPrioridade"
              class="bg-slate-800 border border-slate-700 text-slate-200 text-xs rounded-lg px-2.5 py-1.5 focus:outline-none focus:border-amber-500 cursor-pointer"
            >
              <option value="">Todas as Prioridades</option>
              <option value="alta">Alta Prioridade</option>
              <option value="media">Média Prioridade</option>
              <option value="baixa">Baixa Prioridade</option>
            </select>

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

        <div v-if="pending" class="text-center py-12 text-slate-400 text-xs flex items-center justify-center gap-2">
          <span class="animate-spin text-amber-500 text-base">⏳</span> Carregando tarefas do PMO...
        </div>

        <!-- Colunas do Kanban -->
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

            <!-- Cards -->
            <div class="flex-1 space-y-2.5 overflow-y-auto pr-0.5">
              <div
                v-for="tarefa in tarefasFiltradasPorColuna(coluna.id)"
                :key="tarefa.id"
                @dblclick="abrirModalEdicaoTarefa(tarefa)"
                class="bg-slate-800/90 rounded-xl p-3 shadow-sm transition-all group space-y-2 cursor-pointer select-none"
                :class="[
                  tarefa.Impeditivo 
                    ? 'border-2 border-red-500 shadow-lg shadow-red-500/10' 
                    : 'border border-slate-700/80 hover:border-amber-500/50'
                ]"
                title="Clique duas vezes para editar a tarefa"
              >
                <!-- Badges -->
                <div class="flex items-center justify-between gap-2">
                  <div class="flex items-center gap-1.5 flex-wrap">
                    <span class="text-[9px] font-extrabold uppercase px-1.5 py-0.5 rounded bg-slate-900 text-amber-400 border border-amber-500/20">
                      {{ tarefa.fase }}
                    </span>
                    <!-- Tag Visual de Impeditivo -->
                    <span v-if="tarefa.Impeditivo" class="text-[9px] font-extrabold uppercase px-1.5 py-0.5 rounded bg-red-500/20 text-red-400 border border-red-500/40 animate-pulse">
                      ⚠️ Impeditivo
                    </span>
                  </div>
                  <span class="text-[9px] font-bold px-1.5 py-0.5 rounded uppercase" :class="corPrioridade(tarefa.prioridade)">
                    {{ tarefa.prioridade }}
                  </span>
                </div>

                <!-- Conteúdo -->
                <div>
                  <h5 class="font-medium text-slate-100 text-xs mb-0.5 leading-snug">
                    {{ tarefa.titulo }}
                  </h5>
                  <p v-if="tarefa.descricao" class="text-[11px] text-slate-400 line-clamp-2">
                    {{ tarefa.descricao }}
                  </p>
                </div>

                <!-- Rodapé do Card (Com nomes e rótulos diretos) -->
                <div class="pt-2 border-t border-slate-700/60 flex flex-col gap-1.5">
                  <!-- Reatribuir Responsável -->
                  <div class="flex items-center justify-between text-[10px]">
                    <span class="text-slate-300 font-medium truncate max-w-[130px] flex items-center gap-1">
                      <span>👤</span> {{ tarefa.pmo_usuarios?.nome || 'Sem Responsável' }}
                    </span>
                    <select
                      :value="tarefa.responsavel_id || tarefa.pmo_usuarios?.id || ''"
                      @change="reatribuirResponsavel(tarefa, ($event.target as HTMLSelectElement).value)"
                      @click.stop
                      class="bg-slate-900 text-slate-300 text-[10px] rounded px-1.5 py-0.5 border border-slate-700 focus:outline-none focus:border-amber-500 cursor-pointer max-w-[110px] truncate"
                    >
                      <option value="">Sem Responsável</option>
                      <option v-for="user in listaUsuarios" :key="user.id" :value="user.id">
                        {{ user.nome }}
                      </option>
                    </select>
                  </div>

                  <!-- Mover Status / Coluna -->
                  <div class="flex items-center justify-between text-[10px]">
                    <span class="text-amber-400 font-semibold flex items-center gap-1">
                      <span>📌</span> {{ rotuloStatus(tarefa.status) }}
                    </span>
                    <select
                      :value="tarefa.status"
                      @change="moverTarefa(tarefa, ($event.target as HTMLSelectElement).value)"
                      @click.stop
                      class="bg-slate-900 text-slate-300 text-[10px] rounded px-1.5 py-0.5 border border-slate-700 focus:outline-none focus:border-amber-500 cursor-pointer"
                    >
                      <option value="a_fazer">A Fazer</option>
                      <option value="em_andamento">Em Andamento</option>
                      <option value="em_validacao">Em Validação</option>
                      <option value="concluido">Concluído</option>
                    </select>
                  </div>
                </div>
              </div>

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

    <!-- Modal de Formulário de Tarefa (Criação e Edição via duplo clique) -->
    <div v-if="modalNovaTarefa" class="fixed inset-0 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div class="bg-slate-900 border border-slate-700 rounded-2xl p-6 max-w-md w-full shadow-2xl space-y-4">
        <div class="flex justify-between items-center border-b border-slate-800 pb-3">
          <h3 class="text-lg font-bold text-white">
            {{ tarefaEmEdicaoId ? 'Editar Tarefa' : 'Cadastrar Nova Tarefa' }}
          </h3>
          <button @click="modalNovaTarefa = false" class="text-slate-400 hover:text-white cursor-pointer">✕</button>
        </div>

        <div>
          <label class="block text-xs font-semibold text-slate-400 mb-1">Título *</label>
          <input v-model="formNovaTarefa.titulo" type="text" placeholder="Ex: Mapear rotas da API Prover" class="w-full bg-slate-800 border border-slate-700 rounded-lg p-2.5 text-sm text-white focus:outline-none focus:border-amber-500" />
        </div>

        <div>
          <label class="block text-xs font-semibold text-slate-400 mb-1">Descrição</label>
          <textarea v-model="formNovaTarefa.descricao" rows="3" placeholder="Detalhes da pendência..." class="w-full bg-slate-800 border border-slate-700 rounded-lg p-2.5 text-sm text-white focus:outline-none focus:border-amber-500"></textarea>
        </div>

        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="block text-xs font-semibold text-slate-400 mb-1">Fase *</label>
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
              <option :value="null">Nenhum responsável</option>
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

        <!-- Checkbox de Impeditivo -->
        <div class="pt-1">
          <label class="flex items-center gap-2 cursor-pointer bg-slate-800/80 p-3 rounded-xl border border-slate-700 hover:border-red-500/40 transition-all">
            <input 
              v-model="formNovaTarefa.Impeditivo" 
              type="checkbox" 
              class="w-4 h-4 text-red-500 bg-slate-900 border-slate-700 rounded focus:ring-red-500 focus:ring-offset-slate-900 cursor-pointer" 
            />
            <div class="flex flex-col">
              <span class="text-xs font-bold text-red-400 flex items-center gap-1">
                ⚠️ Marcar como Impeditivo
              </span>
              <span class="text-[10px] text-slate-400">Destaca o card com borda vermelha indicando bloqueio no fluxo.</span>
            </div>
          </label>
        </div>

        <!-- Alerta de Erro -->
        <div v-if="erroModal" class="p-2.5 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-xs">
          {{ erroModal }}
        </div>

        <div class="flex justify-end gap-3 pt-4 border-t border-slate-800">
          <button @click="modalNovaTarefa = false" class="px-4 py-2 text-sm text-slate-400 hover:text-white cursor-pointer">Cancelar</button>
          <button @click="salvarTarefa" :disabled="salvando" class="px-4 py-2 bg-amber-500 text-slate-950 font-bold text-sm rounded-lg hover:bg-amber-400 disabled:opacity-50 cursor-pointer">
            {{ salvando ? 'Salvando...' : (tarefaEmEdicaoId ? 'Atualizar' : 'Salvar Tarefa') }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'

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

const isCollapsed = ref(false)
const filtroResponsavel = ref('')
const filtroPrioridade = ref('')
const modalNovaTarefa = ref(false)
const salvando = ref(false)
const erroModal = ref('')
const tarefaEmEdicaoId = ref<string | null>(null)

const colunasKanban = [
  { id: 'a_fazer', titulo: 'A Fazer', corIndicador: 'bg-amber-500' },
  { id: 'em_andamento', titulo: 'Em Andamento', corIndicador: 'bg-blue-500' },
  { id: 'em_validacao', titulo: 'Em Validação (Igreja)', corIndicador: 'bg-purple-500' },
  { id: 'concluido', titulo: 'Concluído', corIndicador: 'bg-emerald-500' }
]

const listaUsuarios = ref<Usuario[]>([])

const { data: responseApi, pending, refresh } = await useFetch<{ success: boolean, data: Tarefa[] }>('/api/pmo/tarefas')

const tarefas = computed<Tarefa[]>(() => responseApi.value?.data || [])

const formNovaTarefa = ref({
  titulo: '',
  descricao: '',
  fase: 'Fase 0',
  prioridade: 'media',
  responsavel_id: null as string | null,
  status: 'a_fazer',
  Impeditivo: false
})

async function carregarUsuarios() {
  try {
    const response: any = await $fetch('/api/pmo/usuarios')
    if (response?.success && Array.isArray(response.data)) {
      listaUsuarios.value = response.data
    }
  } catch (err) {
    console.error('Erro ao carregar usuários:', err)
  }
}

function abrirModalNovaTarefa() {
  erroModal.value = ''
  tarefaEmEdicaoId.value = null
  formNovaTarefa.value = {
    titulo: '',
    descricao: '',
    fase: 'Fase 0',
    prioridade: 'media',
    responsavel_id: listaUsuarios.value.length > 0 ? listaUsuarios.value[0].id : null,
    status: 'a_fazer',
    Impeditivo: false
  }
  modalNovaTarefa.value = true
}

// Abertura via Duplo Clique com preenchimento dos dados do card
function abrirModalEdicaoTarefa(tarefa: Tarefa) {
  erroModal.value = ''
  tarefaEmEdicaoId.value = tarefa.id
  formNovaTarefa.value = {
    titulo: tarefa.titulo || '',
    descricao: tarefa.descricao || '',
    fase: tarefa.fase || 'Fase 0',
    prioridade: tarefa.prioridade || 'media',
    responsavel_id: tarefa.responsavel_id || tarefa.pmo_usuarios?.id || null,
    status: tarefa.status || 'a_fazer',
    Impeditivo: Boolean(tarefa.Impeditivo)
  }
  modalNovaTarefa.value = true
}

const tarefasFiltradas = computed(() => {
  return tarefas.value.filter((t) => {
    const respId = t.responsavel_id || t.pmo_usuarios?.id
    const BateResp = !filtroResponsavel.value || respId === filtroResponsavel.value
    const BatePrio = !filtroPrioridade.value || t.prioridade === filtroPrioridade.value
    return BateResp && BatePrio
  })
})

function tarefasFiltradasPorColuna(statusId: string) {
  return tarefasFiltradas.value.filter((t) => t.status === statusId)
}

function rotuloStatus(status: string) {
  if (status === 'a_fazer') return 'A Fazer'
  if (status === 'em_andamento') return 'Em Andamento'
  if (status === 'em_validacao') return 'Em Validação'
  if (status === 'concluido') return 'Concluído'
  return status
}

function corPrioridade(prio: string) {
  if (prio === 'alta') return 'bg-red-500/20 text-red-400 border border-red-500/30'
  if (prio === 'media') return 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
  return 'bg-slate-700 text-slate-300'
}

async function moverTarefa(tarefa: Tarefa, novoStatus: string) {
  if (!tarefa || tarefa.status === novoStatus) return

  const statusAntigo = tarefa.status
  tarefa.status = novoStatus

  try {
    const res: any = await $fetch(`/api/pmo/tarefas/${tarefa.id}`, {
      method: 'PATCH',
      body: { status: novoStatus }
    })

    if (res?.success) {
      await refresh()
    }
  } catch (error) {
    console.error('Erro ao mover tarefa:', error)
    tarefa.status = statusAntigo
  }
}

async function reatribuirResponsavel(tarefa: Tarefa, novoResponsavelId: string) {
  if (!tarefa) return

  try {
    const res: any = await $fetch(`/api/pmo/tarefas/${tarefa.id}`, {
      method: 'PATCH',
      body: { responsavel_id: novoResponsavelId || null }
    })

    if (res?.success) {
      await refresh()
    }
  } catch (error) {
    console.error('Erro ao reatribuir responsável:', error)
  }
}

function limparFiltros() {
  filtroResponsavel.value = ''
  filtroPrioridade.value = ''
}

// Salvar / Atualizar Tarefa
async function salvarTarefa() {
  erroModal.value = ''

  if (!formNovaTarefa.value.titulo.trim()) {
    erroModal.value = 'O título da tarefa é obrigatório.'
    return
  }

  salvando.value = true
  try {
    const isEdicao = !!tarefaEmEdicaoId.value
    const url = isEdicao ? `/api/pmo/tarefas/${tarefaEmEdicaoId.value}` : '/api/pmo/tarefas'
    const method = isEdicao ? 'PATCH' : 'POST'

    const res: any = await $fetch(url, {
      method,
      body: formNovaTarefa.value
    })

    if (res?.success) {
      await refresh()
      modalNovaTarefa.value = false
    }
  } catch (error: any) {
    console.error('Erro ao salvar tarefa:', error)
    erroModal.value = error.data?.statusMessage || 'Erro ao comunicar com o servidor.'
  } finally {
    salvando.value = false
  }
}

onMounted(() => {
  carregarUsuarios()
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