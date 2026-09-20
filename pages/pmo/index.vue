<template>
  <div class="min-h-screen bg-slate-900 text-slate-100 p-4 sm:p-6 lg:p-8 font-sans">
    <!-- Header do PMO Hub -->
    <header class="max-w-7xl mx-auto mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-slate-800 pb-6">
      <div>
        <div class="flex items-center gap-3">
          <span class="px-3 py-1 bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold rounded-full uppercase tracking-wider">
            PIB SP Digital
          </span>
          <span class="text-xs text-slate-400">Campus Digital 2026</span>
        </div>
        <h1 class="text-2xl sm:text-3xl font-bold text-white mt-2">
          Central de Acompanhamento & PMO
        </h1>
        <p class="text-slate-400 text-sm mt-1">
          Gestão reativa do projeto, diário de bordo e cofre seguro de ativos.
        </p>
      </div>

      <!-- Abas de Navegação Principal -->
      <div class="flex items-center bg-slate-800 p-1.5 rounded-xl border border-slate-700/60 self-start md:self-auto">
        <button
          @click="abaAtiva = 'kanban'"
          :class="[
            'px-4 py-2 text-sm font-medium rounded-lg transition-all flex items-center gap-2',
            abaAtiva === 'kanban' 
              ? 'bg-amber-500 text-slate-950 font-semibold shadow-md' 
              : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
          ]"
        >
          <span>📋</span> Quadro Kanban
        </button>
        <button
          @click="abaAtiva = 'cofre'"
          :class="[
            'px-4 py-2 text-sm font-medium rounded-lg transition-all flex items-center gap-2',
            abaAtiva === 'cofre' 
              ? 'bg-amber-500 text-slate-950 font-semibold shadow-md' 
              : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
          ]"
        >
          <span>🔐</span> Cofre de Ativos
        </button>
      </div>
    </header>

    <!-- BLOCO SUPERIOR FIXO: LINHA DO TEMPO DE MARCOS DO PROJETO -->
    <section class="max-w-7xl mx-auto mb-8 bg-slate-800/80 border border-slate-700/80 rounded-2xl p-5 md:p-6 shadow-xl backdrop-blur-sm">
      <!-- Cabeçalho do Cronograma -->
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-700/60">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold text-lg">
            ⏳
          </div>
          <div>
            <div class="flex items-center gap-2">
              <h2 class="text-lg font-bold text-white">Linha do Tempo Estratégica</h2>
              <span class="px-2.5 py-0.5 bg-blue-500/20 text-blue-400 border border-blue-500/30 text-[11px] font-bold rounded-full uppercase animate-pulse">
                Fase Atual: Pré-Projeto
              </span>
            </div>
            <p class="text-xs text-slate-400 mt-0.5">
              Status oficial das etapas de concepção e implantação do Campus Digital.
            </p>
          </div>
        </div>

        <!-- Alerta de Governança sobre o Tempo de Execução -->
        <div class="bg-amber-500/10 border border-amber-500/20 rounded-xl px-3.5 py-2 text-xs text-amber-300/90 flex items-center gap-2 max-w-md">
          <span class="text-base">💡</span>
          <span>
            <strong>Aviso de Governança:</strong> O prazo oficial das Fases 1 a 4 só começa a contar após a aprovação formal do board pastoral e liberação do kick-off.
          </span>
        </div>
      </div>

      <!-- Componente Visual da Linha do Tempo (Horizontal / Desktop) -->
      <div class="relative py-2">
        <!-- Linha Traseira de Conectividade -->
        <div class="hidden md:block absolute top-1/2 left-8 right-8 h-1 bg-slate-700 -translate-y-1/2 z-0"></div>

        <!-- Etapas do Cronograma -->
        <div class="grid grid-cols-1 md:grid-cols-5 gap-4 relative z-10">
          
          <!-- FASE 0: ATIVA (VOCÊ ESTÁ AQUI) -->
          <div class="bg-slate-900/90 border-2 border-amber-500 rounded-xl p-4 shadow-lg shadow-amber-500/10 relative group transition-all">
            <div class="flex items-center justify-between mb-2 md:mb-3">
              <span class="w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-black text-xs flex items-center justify-center ring-4 ring-amber-500/20">
                0
              </span>
              <span class="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-amber-500/20 text-amber-400 border border-amber-500/40">
                Em Andamento
              </span>
            </div>
            <h3 class="text-xs font-bold text-white mb-1 uppercase tracking-wide">Fase 0 — Pré-Projeto</h3>
            <p class="text-[11px] text-amber-300 font-medium mb-2">Concepção & Levantamento</p>
            <ul class="text-[11px] text-slate-300 space-y-1 border-t border-slate-800 pt-2">
              <li class="flex items-center gap-1.5">
                <span class="text-amber-400">✓</span> Diagnóstico & Requisitos
              </li>
              <li class="flex items-center gap-1.5">
                <span class="text-amber-400">✓</span> Arquitetura Nuxt / Neon
              </li>
              <li class="flex items-center gap-1.5">
                <span class="text-amber-400">✓</span> Mapeamento API Prover
              </li>
              <li class="flex items-center gap-1.5">
                <span class="text-amber-400">✓</span> Book & Proposta Pastoral
              </li>
            </ul>
          </div>

          <!-- FASE 1: AGUARDANDO KICK-OFF -->
          <div class="bg-slate-900/50 border border-slate-700/70 rounded-xl p-4 opacity-80 hover:opacity-100 transition-all">
            <div class="flex items-center justify-between mb-2 md:mb-3">
              <span class="w-8 h-8 rounded-full bg-slate-800 border border-slate-600 text-slate-400 font-bold text-xs flex items-center justify-center">
                1
              </span>
              <span class="text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700">
                Aguardando Kick-off
              </span>
            </div>
            <h3 class="text-xs font-bold text-slate-200 mb-1 uppercase tracking-wide">Fase 1 — MVP</h3>
            <p class="text-[11px] text-slate-400 mb-2">Acolhimento (2-4 semanas)</p>
            <ul class="text-[11px] text-slate-400 space-y-1 border-t border-slate-800/80 pt-2">
              <li>• Home Visitor-First UX</li>
              <li>• Landing "Sou Novo"</li>
              <li>• Player de Cultos Ao Vivo</li>
              <li>• Dízimos e Ofertas PIX</li>
            </ul>
          </div>

          <!-- FASE 2: PLANEJADO -->
          <div class="bg-slate-900/50 border border-slate-700/70 rounded-xl p-4 opacity-70 hover:opacity-100 transition-all">
            <div class="flex items-center justify-between mb-2 md:mb-3">
              <span class="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 text-slate-400 font-bold text-xs flex items-center justify-center">
                2
              </span>
              <span class="text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-800 text-slate-500 border border-slate-700">
                Mês 2
              </span>
            </div>
            <h3 class="text-xs font-bold text-slate-300 mb-1 uppercase tracking-wide">Fase 2 — Comunidade</h3>
            <p class="text-[11px] text-slate-400 mb-2">Engajamento Diário</p>
            <ul class="text-[11px] text-slate-500 space-y-1 border-t border-slate-800/80 pt-2">
              <li>• Localizador de PGs</li>
              <li>• Mural Interativo Oração</li>
              <li>• Versículo do Dia / Stories</li>
              <li>• Boletim Web QR Code</li>
            </ul>
          </div>

          <!-- FASE 3: PLANEJADO -->
          <div class="bg-slate-900/50 border border-slate-700/70 rounded-xl p-4 opacity-70 hover:opacity-100 transition-all">
            <div class="flex items-center justify-between mb-2 md:mb-3">
              <span class="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 text-slate-400 font-bold text-xs flex items-center justify-center">
                3
              </span>
              <span class="text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-800 text-slate-500 border border-slate-700">
                Mês 3-4
              </span>
            </div>
            <h3 class="text-xs font-bold text-slate-300 mb-1 uppercase tracking-wide">Fase 3 — Automação</h3>
            <p class="text-[11px] text-slate-400 mb-2">Trilhas & Discipulado</p>
            <ul class="text-[11px] text-slate-500 space-y-1 border-t border-slate-800/80 pt-2">
              <li>• Chatbot WhatsApp 24/7</li>
              <li>• Área Logada do Membro</li>
              <li>• Trilha do Membro</li>
              <li>• Banco de Voluntários</li>
            </ul>
          </div>

          <!-- FASE 4: PLANEJADO -->
          <div class="bg-slate-900/50 border border-slate-700/70 rounded-xl p-4 opacity-70 hover:opacity-100 transition-all">
            <div class="flex items-center justify-between mb-2 md:mb-3">
              <span class="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 text-slate-400 font-bold text-xs flex items-center justify-center">
                4
              </span>
              <span class="text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-800 text-slate-500 border border-slate-700">
                Mês 5+
              </span>
            </div>
            <h3 class="text-xs font-bold text-slate-300 mb-1 uppercase tracking-wide">Fase 4 — BI Pastoral</h3>
            <p class="text-[11px] text-slate-400 mb-2">Expansão & Inteligência</p>
            <ul class="text-[11px] text-slate-500 space-y-1 border-t border-slate-800/80 pt-2">
              <li>• Dashboard Frequência Fria</li>
              <li>• Funil de Visitantes 48h</li>
              <li>• Mapa de Calor Geográfico</li>
              <li>• Totens PWA no Templo</li>
            </ul>
          </div>

        </div>
      </div>
    </section>

    <!-- CONTEÚDO DA ABA 1: KANBAN DO PROJETO -->
    <main class="max-w-7xl mx-auto" v-if="abaAtiva === 'kanban'">
      <!-- Toolbar do Kanban -->
      <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div class="flex items-center gap-2 text-sm text-slate-400">
          <span>Total de tarefas: <strong class="text-white">{{ tarefas.length }}</strong></span>
        </div>
        <button
          @click="modalNovaTarefa = true"
          class="px-4 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-sm rounded-xl transition-all shadow-lg flex items-center gap-2"
        >
          <span>+</span> Nova Tarefa
        </button>
      </div>

      <!-- Status de Carregamento -->
      <div v-if="carregandoTarefas" class="text-center py-12 text-slate-400">
        Carregando tarefas do Neon Postgres...
      </div>

      <!-- Colunas do Quadro Kanban -->
      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="coluna in colunasKanban"
          :key="coluna.id"
          class="bg-slate-800/60 border border-slate-700/50 rounded-2xl p-4 flex flex-col min-h-[500px]"
        >
          <!-- Cabeçalho da Coluna -->
          <div class="flex items-center justify-between pb-3 mb-4 border-b border-slate-700/50">
            <div class="flex items-center gap-2">
              <span class="w-3 h-3 rounded-full" :class="coluna.corIndicador"></span>
              <h3 class="font-semibold text-white text-sm tracking-wide">{{ coluna.titulo }}</h3>
            </div>
            <span class="text-xs bg-slate-700 text-slate-300 font-bold px-2.5 py-0.5 rounded-full">
              {{ tarefasPorColuna(coluna.id).length }}
            </span>
          </div>

          <!-- Cards de Tarefas -->
          <div class="flex-1 space-y-3 overflow-y-auto pr-1">
            <div
              v-for="tarefa in tarefasPorColuna(coluna.id)"
              :key="tarefa.id"
              class="bg-slate-900/90 border border-slate-700/80 hover:border-amber-500/50 rounded-xl p-4 shadow-sm transition-all group"
            >
              <div class="flex items-center justify-between gap-2 mb-2">
                <span class="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-800 text-amber-400 border border-amber-500/20">
                  {{ tarefa.fase }}
                </span>
                <span
                  class="text-[10px] font-semibold px-2 py-0.5 rounded uppercase"
                  :class="corPrioridade(tarefa.prioridade)"
                >
                  {{ tarefa.prioridade }}
                </span>
              </div>

              <h4 class="font-medium text-slate-100 text-sm mb-1 leading-snug">
                {{ tarefa.titulo }}
              </h4>

              <p v-if="tarefa.descricao" class="text-xs text-slate-400 line-clamp-2 mb-3">
                {{ tarefa.descricao }}
              </p>

              <!-- Ações do Card -->
              <div class="flex items-center justify-between pt-2 border-t border-slate-800 text-xs">
                <span class="text-slate-400">
                  {{ tarefa.responsavel?.nome || 'Sem responsável' }}
                </span>
                <select
                  :value="tarefa.status"
                  @change="moverTarefa(tarefa.id, ($event.target as HTMLSelectElement).value)"
                  class="bg-slate-800 text-slate-300 text-[11px] rounded px-2 py-1 border border-slate-700 focus:outline-none focus:border-amber-500 cursor-pointer"
                >
                  <option value="a_fazer">A Fazer</option>
                  <option value="em_andamento">Em Andamento</option>
                  <option value="em_validacao">Em Validação</option>
                  <option value="concluido">Concluído</option>
                </select>
              </div>
            </div>

            <div v-if="tarefasPorColuna(coluna.id).length === 0" class="text-center py-8 text-xs text-slate-400 border border-dashed border-slate-800 rounded-xl">
              Nenhuma tarefa aqui
            </div>
          </div>
        </div>
      </div>
    </main>

    <!-- CONTEÚDO DA ABA 2: COFRE DE ATIVOS -->
    <main class="max-w-7xl mx-auto" v-if="abaAtiva === 'cofre'">
      <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div>
          <h2 class="text-xl font-bold text-white">Cofre de Senhas & Credenciais Institucionais</h2>
          <p class="text-xs text-slate-400">Dados sensíveis criptografados via AES-256-GCM no Neon Postgres.</p>
        </div>
        <button
          @click="modalNovoAtivo = true"
          class="px-4 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-sm rounded-xl transition-all shadow-lg flex items-center gap-2"
        >
          <span>+</span> Cadastrar Novo Ativo
        </button>
      </div>

      <!-- Tabela do Cofre -->
      <div class="bg-slate-800/60 border border-slate-700/50 rounded-2xl overflow-hidden shadow-xl">
        <div class="overflow-x-auto">
          <table class="w-full text-left border-collapse">
            <thead>
              <tr class="bg-slate-800 text-slate-400 text-xs uppercase tracking-wider border-b border-slate-700">
                <th class="p-4">Ativo / Serviço</th>
                <th class="p-4">Categoria</th>
                <th class="p-4">Login / E-mail</th>
                <th class="p-4">Senha</th>
                <th class="p-4">E-mail de Resgate</th>
                <th class="p-4">2FA Status</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-700/50 text-sm">
              <tr v-for="ativo in ativosCofre" :key="ativo.id" class="hover:bg-slate-800/40 transition-colors">
                <td class="p-4 font-semibold text-white">
                  <div>{{ ativo.nomeAtivo }}</div>
                  <div class="text-xs text-slate-400 font-normal" v-if="ativo.plataforma">{{ ativo.plataforma }}</div>
                </td>
                <td class="p-4">
                  <span class="px-2.5 py-1 bg-slate-700 text-amber-300 text-xs font-medium rounded-full border border-amber-500/20">
                    {{ ativo.categoria }}
                  </span>
                </td>
                <td class="p-4 text-slate-300 font-mono text-xs">
                  {{ ativo.loginUsuario || '—' }}
                </td>
                <td class="p-4">
                  <div class="flex items-center gap-2">
                    <span class="font-mono text-xs px-2 py-1 bg-slate-900 rounded border border-slate-700 text-slate-200">
                      {{ exibeSenha[ativo.id] ? ativo.senha : '••••••••••••' }}
                    </span>
                    <button
                      @click="toggleSenha(ativo.id)"
                      class="text-xs text-slate-400 hover:text-amber-400 px-2 py-1 bg-slate-800 rounded border border-slate-700"
                    >
                      {{ exibeSenha[ativo.id] ? 'Ocultar' : 'Ver' }}
                    </button>
                  </div>
                </td>
                <td class="p-4 text-slate-400 text-xs">
                  {{ ativo.emailResgate || '—' }}
                </td>
                <td class="p-4 text-xs text-emerald-400 font-medium">
                  {{ ativo.status2fa || 'Ativo' }}
                </td>
              </tr>
              <tr v-if="ativosCofre.length === 0">
                <td colspan="6" class="p-8 text-center text-slate-400 text-sm">
                  Nenhum ativo cadastrado no cofre ainda.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>

    <!-- MODAL 1: NOVA TAREFA -->
    <div v-if="modalNovaTarefa" class="fixed inset-0 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div class="bg-slate-900 border border-slate-700 rounded-2xl p-6 max-w-md w-full shadow-2xl space-y-4">
        <h3 class="text-lg font-bold text-white">Cadastrar Nova Tarefa no PMO</h3>
        <div>
          <label class="block text-xs font-semibold text-slate-400 mb-1">Título</label>
          <input v-model="formTarefa.titulo" type="text" placeholder="Ex: Configurar DNS no Cloudflare" class="w-full bg-slate-800 border border-slate-700 rounded-lg p-2.5 text-sm text-white focus:outline-none focus:border-amber-500" />
        </div>
        <div>
          <label class="block text-xs font-semibold text-slate-400 mb-1">Descrição</label>
          <textarea v-model="formTarefa.descricao" rows="3" placeholder="Detalhes da pendência..." class="w-full bg-slate-800 border border-slate-700 rounded-lg p-2.5 text-sm text-white focus:outline-none focus:border-amber-500"></textarea>
        </div>
        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="block text-xs font-semibold text-slate-400 mb-1">Fase</label>
            <select v-model="formTarefa.fase" class="w-full bg-slate-800 border border-slate-700 rounded-lg p-2.5 text-sm text-white focus:outline-none focus:border-amber-500">
              <option value="Fase 0">Fase 0 (Pré-Projeto)</option>
              <option value="Fase 1">Fase 1 (MVP)</option>
              <option value="Fase 2">Fase 2 (Comunidade)</option>
              <option value="Fase 3">Fase 3 (Automação)</option>
              <option value="Fase 4">Fase 4 (BI)</option>
            </select>
          </div>
          <div>
            <label class="block text-xs font-semibold text-slate-400 mb-1">Prioridade</label>
            <select v-model="formTarefa.prioridade" class="w-full bg-slate-800 border border-slate-700 rounded-lg p-2.5 text-sm text-white focus:outline-none focus:border-amber-500">
              <option value="alta">Alta</option>
              <option value="media">Média</option>
              <option value="baixa">Baixa</option>
            </select>
          </div>
        </div>
        <div class="flex justify-end gap-3 pt-4 border-t border-slate-800">
          <button @click="modalNovaTarefa = false" class="px-4 py-2 text-sm text-slate-400 hover:text-white">Cancelar</button>
          <button @click="salvarNovaTarefa" class="px-4 py-2 bg-amber-500 text-slate-950 font-semibold text-sm rounded-lg hover:bg-amber-400">Salvar Tarefa</button>
        </div>
      </div>
    </div>

    <!-- MODAL 2: NOVO ATIVO -->
    <div v-if="modalNovoAtivo" class="fixed inset-0 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div class="bg-slate-900 border border-slate-700 rounded-2xl p-6 max-w-md w-full shadow-2xl space-y-4">
        <h3 class="text-lg font-bold text-white">Cadastrar Ativo no Cofre</h3>
        <div>
          <label class="block text-xs font-semibold text-slate-400 mb-1">Nome do Ativo</label>
          <input v-model="formAtivo.nomeAtivo" type="text" placeholder="Ex: Registro.br Domínio PIB" class="w-full bg-slate-800 border border-slate-700 rounded-lg p-2.5 text-sm text-white focus:outline-none focus:border-amber-500" />
        </div>
        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="block text-xs font-semibold text-slate-400 mb-1">Categoria</label>
            <input v-model="formAtivo.categoria" type="text" placeholder="Ex: Domínios, Apple, ERP" class="w-full bg-slate-800 border border-slate-700 rounded-lg p-2.5 text-sm text-white focus:outline-none focus:border-amber-500" />
          </div>
          <div>
            <label class="block text-xs font-semibold text-slate-400 mb-1">Login / Usuário</label>
            <input v-model="formAtivo.loginUsuario" type="text" placeholder="Ex: EUKAW" class="w-full bg-slate-800 border border-slate-700 rounded-lg p-2.5 text-sm text-white focus:outline-none focus:border-amber-500" />
          </div>
        </div>
        <div>
          <label class="block text-xs font-semibold text-slate-400 mb-1">Senha</label>
          <input v-model="formAtivo.senha" type="password" placeholder="Senha a ser criptografada" class="w-full bg-slate-800 border border-slate-700 rounded-lg p-2.5 text-sm text-white focus:outline-none focus:border-amber-500" />
        </div>
        <div>
          <label class="block text-xs font-semibold text-slate-400 mb-1">E-mail de Resgate / Token</label>
          <input v-model="formAtivo.emailResgate" type="email" placeholder="midiasoc.pibsp@gmail.com" class="w-full bg-slate-800 border border-slate-700 rounded-lg p-2.5 text-sm text-white focus:outline-none focus:border-amber-500" />
        </div>
        <div class="flex justify-end gap-3 pt-4 border-t border-slate-800">
          <button @click="modalNovoAtivo = false" class="px-4 py-2 text-sm text-slate-400 hover:text-white">Cancelar</button>
          <button @click="salvarNovoAtivo" class="px-4 py-2 bg-amber-500 text-slate-950 font-semibold text-sm rounded-lg hover:bg-amber-400">Salvar no Cofre</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const abaAtiva = ref<'kanban' | 'cofre'>('kanban')
const carregandoTarefas = ref(true)
const tarefas = ref<any[]>([])
const ativosCofre = ref<any[]>([])
const exibeSenha = ref<Record<string, boolean>>({})

// Modais e Formulários
const modalNovaTarefa = ref(false)
const modalNovoAtivo = ref(false)

const formTarefa = ref({
  titulo: '',
  descricao: '',
  fase: 'Fase 0',
  prioridade: 'media',
  status: 'a_fazer'
})

const formAtivo = ref({
  nomeAtivo: '',
  categoria: 'Domínios',
  loginUsuario: '',
  senha: '',
  emailResgate: ''
})

const colunasKanban = [
  { id: 'a_fazer', titulo: 'A Fazer', corIndicador: 'bg-amber-500' },
  { id: 'em_andamento', titulo: 'Em Andamento', corIndicador: 'bg-blue-500' },
  { id: 'em_validacao', titulo: 'Em Validação (Igreja)', corIndicador: 'bg-purple-500' },
  { id: 'concluido', titulo: 'Concluído', corIndicador: 'bg-emerald-500' }
]

function tarefasPorColuna(statusId: string) {
  return tarefas.value.filter((t) => t.status === statusId)
}

function corPrioridade(prio: string) {
  if (prio === 'alta') return 'bg-red-500/20 text-red-400 border border-red-500/30'
  if (prio === 'media') return 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
  return 'bg-slate-700 text-slate-300'
}

function toggleSenha(id: string) {
  exibeSenha.value[id] = !exibeSenha.value[id]
}

// BUSCAR DADOS DO BACKEND NUXT (NEON POSTGRES VIA PRISMA)
async function carregarTarefas() {
  carregandoTarefas.value = true
  try {
    const res: any = await $fetch('/api/pmo/tarefas')
    if (res.success) tarefas.value = res.data
  } catch (err) {
    console.error('Erro ao carregar tarefas', err)
  } finally {
    carregandoTarefas.value = false
  }
}

async function carregarAtivos() {
  try {
    const res: any = await $fetch('/api/pmo/cofre')
    if (res.success) ativosCofre.value = res.data
  } catch (err) {
    console.error('Erro ao carregar cofre', err)
  }
}

async function moverTarefa(id: string, novoStatus: string) {
  try {
    await $fetch(`/api/pmo/tarefas/${id}`, {
      method: 'PATCH',
      body: { status: novoStatus }
    })
    await carregarTarefas()
  } catch (err) {
    console.error('Erro ao mover tarefa', err)
  }
}

async function salvarNovaTarefa() {
  if (!formTarefa.value.titulo) return
  try {
    await $fetch('/api/pmo/tarefas', {
      method: 'POST',
      body: formTarefa.value
    })
    modalNovaTarefa.value = false
    formTarefa.value = { titulo: '', descricao: '', fase: 'Fase 0', prioridade: 'media', status: 'a_fazer' }
    await carregarTarefas()
  } catch (err) {
    console.error('Erro ao salvar tarefa', err)
  }
}

async function salvarNovoAtivo() {
  if (!formAtivo.value.nomeAtivo) return
  try {
    await $fetch('/api/pmo/cofre', {
      method: 'POST',
      body: formAtivo.value
    })
    modalNovoAtivo.value = false
    formAtivo.value = { nomeAtivo: '', categoria: 'Domínios', loginUsuario: '', senha: '', emailResgate: '' }
    await carregarAtivos()
  } catch (err) {
    console.error('Erro ao salvar ativo', err)
  }
}

onMounted(() => {
  carregarTarefas()
  carregarAtivos()
})
</script>

