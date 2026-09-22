<template>
  <div class="bg-slate-800/60 border border-slate-700/50 rounded-2xl p-5 shadow-xl backdrop-blur-sm transition-all duration-300">
    <!-- Cabeçalho -->
    <div 
      class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 transition-all"
      :class="{ 'pb-3 border-b border-slate-700/60 mb-4': !isCollapsed }"
    >
      <div class="flex items-center gap-2.5">
        <span class="w-8 h-8 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold text-sm shrink-0">
          📖
        </span>
        <div>
          <h2 class="text-base font-bold text-white">
            Diário de Bordo & Atas de Alinhamento
          </h2>
          <p class="text-xs text-slate-400">
            Registro histórico de reuniões, decisões e procedimentos operacionais (POPs).
          </p>
        </div>
      </div>

      <div class="flex items-center gap-2.5 self-end sm:self-auto">
        <!-- Legenda do Semáforo -->
        <div class="hidden sm:flex items-center gap-3 text-[11px] text-slate-400 bg-slate-900/60 px-3 py-1.5 rounded-lg border border-slate-700/50">
          <span class="flex items-center gap-1.5"><span class="w-2 h-2 rounded-full bg-emerald-500"></span> Concluído / Ok</span>
          <span class="flex items-center gap-1.5"><span class="w-2 h-2 rounded-full bg-amber-500"></span> Investigação</span>
          <span class="flex items-center gap-1.5"><span class="w-2 h-2 rounded-full bg-red-500"></span> Atenção Crítica</span>
        </div>

        <!-- Botão Novo Apontamento -->
        <button
          @click="abrirModal"
          class="px-3 py-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold rounded-lg shadow-md transition-all cursor-pointer flex items-center gap-1"
        >
          <span>+</span> Novo Apontamento
        </button>

        <!-- Botão Recolher/Expandir -->
        <button
          @click="isCollapsed = !isCollapsed"
          class="px-3 py-1.5 bg-slate-700/80 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-semibold rounded-lg border border-slate-600/60 transition-all flex items-center gap-1.5 shadow-sm cursor-pointer"
          :title="isCollapsed ? 'Expandir Diário de Bordo' : 'Recolher Diário de Bordo'"
        >
          <span>{{ isCollapsed ? 'Expandir' : 'Recolher' }}</span>
          <span class="text-[10px] transform transition-transform duration-200" :class="{ 'rotate-180': isCollapsed }">
            ▲
          </span>
        </button>
      </div>
    </div>

    <!-- Conteúdo do Diário de Bordo -->
    <transition name="fade-slide">
      <div v-show="!isCollapsed" class="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-1">
        <!-- COLUNA 1: ATAS E REUNIÕES COM BBCODE -->
        <div class="lg:col-span-2 space-y-3">
          
          <!-- Status de Carregamento -->
          <div v-if="carregando" class="text-center py-8 text-xs text-slate-400">
            Carregando diário de bordo...
          </div>

          <!-- Cards vindos da API -->
          <div
            v-else-if="apontamentos && apontamentos.length > 0"
            v-for="item in apontamentos"
            :key="item.id"
            class="bg-slate-900/90 border rounded-xl p-4 space-y-2 shadow-sm transition-all"
            :class="estiloCard(item.status)"
          >
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
              <div class="flex items-center gap-2 flex-wrap">
                <!-- Indicador Esférico do Semáforo -->
                <span class="w-3 h-3 rounded-full" :class="estiloPontoSemaforo(item.status)"></span>
                <span class="px-2 py-0.5 text-[10px] font-extrabold rounded border uppercase tracking-wider" :class="estiloBadgeSemaforo(item.status)">
                  {{ labelSemaforo(item.status) }}
                </span>

                <!-- Nome de quem preencheu/autor -->
                <span v-if="item.nome_usuario || item.pmo_usuarios?.nome" class="px-2 py-0.5 text-[10px] font-semibold bg-slate-800 text-slate-300 rounded border border-slate-700/80 flex items-center gap-1">
                  👤 {{ item.nome_usuario || item.pmo_usuarios?.nome }}
                </span>
              </div>

              <span class="text-slate-400 text-xs font-mono">{{ formatarData(item.created_at) }}</span>
            </div>

            <h3 class="font-bold text-white text-sm pt-1">
              {{ item.titulo }}
            </h3>

            <!-- Renderizador de BBCode Convertido para HTML -->
            <div 
              class="text-xs text-slate-300 leading-relaxed bbcode-content"
              v-html="parseBBCode(item.resumo_decisao)"
            ></div>
          </div>

          <!-- Estado Vazio -->
          <div v-else class="text-center py-8 text-xs text-slate-400 border border-dashed border-slate-800 rounded-xl">
            Nenhuma anotação encontrada no diário de bordo.
          </div>

        </div>

        <!-- COLUNA 2: ENTREVISTAS & POPS DAS ÁREAS -->
        <div class="bg-slate-900/80 border border-slate-700/60 rounded-xl p-4 space-y-4 self-start">
          <div>
            <h3 class="text-sm font-bold text-white flex items-center gap-2">
              <span>🎙️</span> Entrevistas & POPs das Áreas
            </h3>
            <p class="text-[11px] text-slate-400 mt-0.5">
              Procedimentos Operacionais Padrão mapeados com os líderes ministeriais.
            </p>
          </div>

          <div class="space-y-2">
            <div class="bg-slate-800/90 p-3 rounded-xl border border-slate-700/80 flex items-center justify-between text-xs hover:border-amber-500/40 transition-all">
              <span class="text-slate-200 font-medium">POP 01 — Acolhimento e Recepção</span>
              <span class="text-amber-400 font-semibold cursor-pointer hover:underline text-[11px]">Ver Resumo</span>
            </div>
            <div class="bg-slate-800/90 p-3 rounded-xl border border-slate-700/80 flex items-center justify-between text-xs hover:border-amber-500/40 transition-all">
              <span class="text-slate-200 font-medium">POP 02 — Triagem de Visitantes 48h</span>
              <span class="text-amber-400 font-semibold cursor-pointer hover:underline text-[11px]">Ver Resumo</span>
            </div>
          </div>
        </div>
      </div>
    </transition>

    <!-- Modal de Cadastro de Apontamento -->
    <div v-if="modalNovo" class="fixed inset-0 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 z-50 overflow-y-auto">
      <div class="bg-slate-900 border border-slate-700 rounded-2xl p-6 max-w-lg w-full shadow-2xl space-y-4 my-8">
        <div class="flex justify-between items-center border-b border-slate-800 pb-3">
          <h3 class="text-lg font-bold text-white flex items-center gap-2">
            <span>📖</span> Novo Registro no Diário de Bordo
          </h3>
          <button @click="modalNovo = false" class="text-slate-400 hover:text-white cursor-pointer">✕</button>
        </div>

        <!-- Título -->
        <div>
          <label class="block text-xs font-semibold text-slate-400 mb-1">Título do Alinhamento / Pauta *</label>
          <input 
            v-model="formItem.titulo" 
            type="text" 
            placeholder="Ex: Alinhamento de TI & Ministério de Louvor" 
            class="w-full bg-slate-800 border border-slate-700 rounded-lg p-2.5 text-sm text-white focus:outline-none focus:border-amber-500" 
          />
        </div>

        <!-- Status do Semáforo e Responsável -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label class="block text-xs font-semibold text-slate-400 mb-1">Status / Semáforo *</label>
            <select v-model="formItem.status" class="w-full bg-slate-800 border border-slate-700 rounded-lg p-2.5 text-sm text-white focus:outline-none focus:border-amber-500">
              <option value="concluido">🟢 Concluído / Ok</option>
              <option value="atencao">🟡 Atenção / Investigação</option>
              <option value="critico">🔴 Atenção Crítica</option>
            </select>
          </div>

          <div>
            <label class="block text-xs font-semibold text-slate-400 mb-1">Autor / Responsável</label>
            <select v-model="formItem.usuario_id" class="w-full bg-slate-800 border border-slate-700 rounded-lg p-2.5 text-sm text-white focus:outline-none focus:border-amber-500">
              <option :value="null">Selecione um usuário...</option>
              <option v-for="user in usuarios" :key="user.id" :value="user.id">
                {{ user.nome }}
              </option>
            </select>
          </div>
        </div>

        <!-- Conteúdo em BBCode -->
        <div>
          <div class="flex justify-between items-center mb-1">
            <label class="block text-xs font-semibold text-slate-400">Ata / Decisão (Aceita BBCode) *</label>
            <div class="flex items-center gap-1">
              <button @click="inserirBBCode('[b]', '[/b]')" type="button" class="px-1.5 py-0.5 bg-slate-800 text-slate-300 hover:text-white rounded text-[11px] font-bold border border-slate-700">B</button>
              <button @click="inserirBBCode('[i]', '[/i]')" type="button" class="px-1.5 py-0.5 bg-slate-800 text-slate-300 hover:text-white rounded text-[11px] italic border border-slate-700">I</button>
              <button @click="inserirBBCode('[color=red]', '[/color]')" type="button" class="px-1.5 py-0.5 bg-slate-800 text-red-400 rounded text-[11px] border border-slate-700">Vermelho</button>
              <button @click="inserirBBCode('[color=amber]', '[/color]')" type="button" class="px-1.5 py-0.5 bg-slate-800 text-amber-300 rounded text-[11px] border border-slate-700">Amarelo</button>
            </div>
          </div>
          <textarea 
            ref="textareaRef"
            v-model="formItem.resumo_decisao" 
            rows="5" 
            placeholder="Digite os tópicos acordados. Ex: [b]Decisões:[/b] &#10;[*] Item 1 &#10;[*] Item 2" 
            class="w-full bg-slate-800 border border-slate-700 rounded-lg p-2.5 text-xs font-mono text-white focus:outline-none focus:border-amber-500"
          ></textarea>
        </div>

        <div v-if="erroForm" class="p-2.5 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-xs">
          {{ erroForm }}
        </div>

        <!-- Botões -->
        <div class="flex justify-end gap-3 pt-3 border-t border-slate-800">
          <button @click="modalNovo = false" type="button" class="px-4 py-2 text-xs text-slate-400 hover:text-white cursor-pointer">
            Cancelar
          </button>
          <button 
            @click="salvarRegistro" 
            :disabled="salvando" 
            type="button"
            class="px-4 py-2 bg-amber-500 text-slate-950 font-bold text-xs rounded-lg hover:bg-amber-400 disabled:opacity-50 cursor-pointer flex items-center gap-1.5"
          >
            <span v-if="salvando">💾 Salvando...</span>
            <span v-else>Salvar Apontamento</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isCollapsed = ref(false)
const carregando = ref(true)
const salvando = ref(false)
const modalNovo = ref(false)
const erroForm = ref('')
const textareaRef = ref<HTMLTextAreaElement | null>(null)

const apontamentos = ref<any[]>([])
const usuarios = ref<any[]>([])

const formItem = ref({
  titulo: '',
  status: 'concluido',
  usuario_id: null as string | null,
  resumo_decisao: ''
})

// BUSCA DADOS DA API NITRO (/api/pmo/diario)
async function carregarDiario() {
  carregando.value = true
  try {
    const res: any = await $fetch('/api/pmo/diario')
    
    if (Array.isArray(res)) {
      apontamentos.value = res
    } else if (res?.data && Array.isArray(res.data)) {
      apontamentos.value = res.data
    } else {
      apontamentos.value = []
    }
  } catch (error) {
    console.error('Erro ao carregar o diário de bordo:', error)
    apontamentos.value = []
  } finally {
    carregando.value = false
  }
}

// BUSCA LISTA DE USUÁRIOS
async function carregarUsuarios() {
  try {
    const res: any = await $fetch('/api/pmo/usuarios')
    if (res?.success && Array.isArray(res.data)) {
      usuarios.value = res.data
    }
  } catch (err) {
    console.error('Erro ao buscar usuários:', err)
  }
}

function abrirModal() {
  erroForm.value = ''
  formItem.value = {
    titulo: '',
    status: 'concluido',
    usuario_id: null,
    resumo_decisao: ''
  }
  modalNovo.value = true
}

function inserirBBCode(tagInicio: string, tagFim: string) {
  if (!textareaRef.value) return
  const ta = textareaRef.value
  const start = ta.selectionStart
  const end = ta.selectionEnd
  const selectedText = formItem.value.resumo_decisao.substring(start, end)
  const replacement = `${tagInicio}${selectedText || 'texto'}${tagFim}`
  
  formItem.value.resumo_decisao = 
    formItem.value.resumo_decisao.substring(0, start) + 
    replacement + 
    formItem.value.resumo_decisao.substring(end)
}

async function salvarRegistro() {
  erroForm.value = ''

  if (!formItem.value.titulo.trim() || !formItem.value.resumo_decisao.trim()) {
    erroForm.value = 'Preencha o Título e o Resumo/Decisão.'
    return
  }

  salvando.value = true
  try {
    const res: any = await $fetch('/api/pmo/diario', {
      method: 'POST',
      body: formItem.value
    })

    if (res?.success) {
      await carregarDiario()
      modalNovo.value = false
    }
  } catch (err: any) {
    console.error('Erro ao salvar no diário:', err)
    erroForm.value = err.data?.statusMessage || 'Erro ao salvar registro.'
  } finally {
    salvando.value = false
  }
}

// PARSER DE BBCODE -> HTML
function parseBBCode(text: string): string {
  if (!text) return ''

  let html = text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')

  // Negrito e Itálico
  html = html.replace(/\[b\]([\s\S]*?)\[\/b\]/gi, '<strong class="font-bold text-slate-100">$1</strong>')
  html = html.replace(/\[i\]([\s\S]*?)\[\/i\]/gi, '<em class="italic">$1</em>')

  // Cores
  html = html.replace(/\[color=red\]([\s\S]*?)\[\/color\]/gi, '<span class="text-red-400 font-semibold">$1</span>')
  html = html.replace(/\[color=amber\]([\s\S]*?)\[\/color\]/gi, '<span class="text-amber-300 font-semibold">$1</span>')
  html = html.replace(/\[color=green\]([\s\S]*?)\[\/color\]/gi, '<span class="text-emerald-400 font-semibold">$1</span>')

  // E-mail
  html = html.replace(/\[email\]([\s\S]*?)\[\/email\]/gi, '<a href="mailto:$1" class="text-amber-400 hover:underline font-mono">$1</a>')

  // Listas [list] ... [*] ... [/list]
  html = html.replace(/\[list\]([\s\S]*?)\[\/list\]/gi, (_, listContent) => {
    const items = listContent
      .split(/\[\*\]/)
      .filter((item: string) => item.trim().length > 0)
      .map((item: string) => `<li class="ml-1">${item.trim()}</li>`)
      .join('')
    return `<ul class="list-disc pl-5 space-y-1.5 my-2.5">${items}</ul>`
  })

  // Quebras de linha
  html = html.replace(/\n/g, '<br>')
  html = html.replace(/<\/ul><br\s*\/?>/gi, '</ul>')
  html = html.replace(/<br\s*\/?>\s*<ul/gi, '<ul')

  return html
}

// FORMATADORES E ESTILOS DO SEMÁFORO
function formatarData(dataIso: string) {
  if (!dataIso) return ''
  const d = new Date(dataIso)
  return d.toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' })
}

function labelSemaforo(status: string) {
  if (status === 'critico') return 'Atenção Crítica'
  if (status === 'atencao') return 'Atenção / Investigação'
  return 'Concluído / Ok'
}

function estiloCard(status: string) {
  if (status === 'critico') return 'border-red-500/40 hover:border-red-500/60'
  if (status === 'atencao') return 'border-amber-500/40 hover:border-amber-500/60'
  return 'border-emerald-500/30 hover:border-emerald-500/50'
}

function estiloPontoSemaforo(status: string) {
  if (status === 'critico') return 'bg-red-500 animate-pulse ring-4 ring-red-500/20'
  if (status === 'atencao') return 'bg-amber-500 animate-pulse ring-4 ring-amber-500/20'
  return 'bg-emerald-500'
}

function estiloBadgeSemaforo(status: string) {
  if (status === 'critico') return 'bg-red-500/20 text-red-300 border-red-500/30'
  if (status === 'atencao') return 'bg-amber-500/20 text-amber-300 border-amber-500/30'
  return 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
}

onMounted(() => {
  carregarDiario()
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