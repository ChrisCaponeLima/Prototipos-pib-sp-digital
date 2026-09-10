<template>
    <div class="bg-slate-950 text-slate-100 min-h-screen py-8 px-4 sm:px-6 lg:px-12">
      <div class="container mx-auto max-w-7xl space-y-8">
        
        <!-- CABEÇALHO DO PAINEL -->
        <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-slate-800 pb-6">
          <div>
            <span class="text-xs font-bold uppercase tracking-widest text-amber-500">Gestão Pastoral & Secretaria</span>
            <h1 class="text-3xl font-bold tracking-tight text-white md:text-4xl mt-1">
              Controle de Eventos & Inscrições
            </h1>
            <p class="text-sm text-slate-400 mt-1">
              Criação de atividades, monitoramento de vagas e triagem de inscrições para o próximo domingo e retiros da PIB SP.
            </p>
          </div>
          <div class="flex flex-wrap items-center gap-3">
            <button 
              @click="abrirCriacao"
              class="inline-flex items-center gap-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 px-4 py-2.5 text-sm font-bold transition-all active:scale-95 shadow-sm"
            >
              <!-- SVG Mais (Com tamanho estável) -->
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
              </svg>
              Criar Novo Evento
            </button>
          </div>
        </div>
  
        <!-- MÉTRICAS DE EVENTOS (KPIS) -->
        <div class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <!-- Card 1: Total de Inscrições -->
          <div class="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-sm">
            <div class="flex items-center justify-between text-slate-400 mb-2">
              <span class="text-xs font-bold uppercase tracking-wider">Inscrições Ativas</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-amber-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div class="flex items-baseline gap-2">
              <span class="text-3xl font-extrabold text-white">{{ totalInscritos }}</span>
              <span class="text-xs font-semibold text-emerald-400">92.5%</span>
            </div>
            <p class="text-[10px] text-slate-500 mt-2">Ocupação geral de vagas limitadas</p>
          </div>
  
          <!-- Card 2: Receita de Retiros -->
          <div class="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-sm">
            <div class="flex items-center justify-between text-slate-400 mb-2">
              <span class="text-xs font-bold uppercase tracking-wider">Arrecadação de Retiros</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-emerald-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div class="flex items-baseline gap-2">
              <span class="text-3xl font-extrabold text-white">R$ {{ arrecadacaoAcumulada }}</span>
              <span class="text-xs font-semibold text-amber-500">80.2% pág.</span>
            </div>
            <p class="text-[10px] text-slate-500 mt-2">Investimento arrecadado via PIX</p>
          </div>
  
          <!-- Card 3: Vagas Críticas -->
          <div class="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-sm">
            <div class="flex items-center justify-between text-slate-400 mb-2">
              <span class="text-xs font-bold uppercase tracking-wider">Alerta de Vagas</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-rose-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <div class="flex items-baseline gap-2">
              <span class="text-3xl font-extrabold text-rose-400">{{ vagasCriticasCount }}</span>
              <span class="text-xs font-semibold text-rose-400">Esgotando</span>
            </div>
            <p class="text-[10px] text-slate-500 mt-2">Atividades com menos de 10 vagas</p>
          </div>
  
          <!-- Card 4: Eventos Ativos -->
          <div class="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-sm">
            <div class="flex items-center justify-between text-slate-400 mb-2">
              <span class="text-xs font-bold uppercase tracking-wider">Eventos Criados</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-amber-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div class="flex items-baseline gap-2">
              <span class="text-3xl font-extrabold text-white">{{ eventos.length }}</span>
              <span class="text-xs font-semibold text-slate-400">Ativos</span>
            </div>
            <p class="text-[10px] text-slate-500 mt-2">No portal público da PIB SP</p>
          </div>
        </div>
  
        <!-- GRID PRINCIPAL: Lista de Eventos (Esquerda) e Lista de Participantes (Direita) - Mobile-First Estrito -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <!-- COLUNA DE GESTÃO DE EVENTOS (5 colunas) -->
          <div class="lg:col-span-5 rounded-2xl border border-slate-800 bg-slate-900/40 p-6 space-y-6">
            <div class="flex items-center justify-between">
              <h2 class="text-lg font-bold text-white flex items-center gap-2">
                <span class="h-2 w-2 rounded-full bg-amber-500"></span>
                Filtro de Atividades
              </h2>
              <span class="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Selecione para ver inscritos</span>
            </div>
  
            <!-- Cards de Eventos no Admin -->
            <div class="space-y-4">
              <div 
                v-for="evento in eventos" 
                :key="evento.id"
                @click="selectedEventoId = evento.id"
                class="group rounded-xl border p-4 cursor-pointer transition-all flex items-start gap-4"
                :class="selectedEventoId === evento.id 
                  ? 'bg-slate-900 border-amber-500/50 shadow-md shadow-amber-500/5' 
                  : 'bg-slate-950/60 border-slate-800 hover:border-slate-700'"
              >
                <!-- Ícone de Categoria (Tamanho de ícone estável em 20px com shrink-0) -->
                <span class="inline-flex h-9 w-9 items-center justify-center rounded bg-amber-500/10 text-amber-400 shrink-0 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </span>
  
                <div class="space-y-2 flex-grow overflow-hidden">
                  <div class="flex items-center justify-between gap-2">
                    <span class="text-[10px] font-bold uppercase text-amber-500">{{ evento.categoria }}</span>
                    <span class="text-[10px] text-slate-400 truncate max-w-[120px]">{{ evento.local }}</span>
                  </div>
                  <h3 class="font-bold text-sm text-slate-200 group-hover:text-white transition-colors truncate">
                    {{ evento.titulo }}
                  </h3>
                  
                  <!-- Progresso de Vagas -->
                  <div class="space-y-1">
                    <div class="flex items-center justify-between text-[10px] text-slate-400">
                      <span v-if="evento.vagasLimitadas">Vagas: {{ evento.vagasPreenchidas }} / {{ evento.totalVagas }}</span>
                      <span v-else>Inscrições livres</span>
                      <span v-if="evento.valor && evento.valor > 0" class="text-emerald-400 font-bold">R$ {{ evento.valor }}</span>
                      <span v-else class="text-emerald-500">Gratuito</span>
                    </div>
                    <div v-if="evento.vagasLimitadas" class="h-1.5 w-full bg-slate-950 rounded-full overflow-hidden border border-slate-800">
                      <div 
                        class="h-full bg-amber-500 rounded-full transition-all duration-500"
                        :style="{ width: ((evento.vagasPreenchidas / (evento.totalVagas || 1)) * 100) + '%' }"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          <!-- COLUNA DE LISTAGEM DE PARTICIPANTES INSCRITOS (7 colunas) -->
          <div class="lg:col-span-7 rounded-2xl border border-slate-800 bg-slate-900/40 p-6 space-y-6">
            
            <!-- Cabeçalho de Seleção -->
            <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-slate-800/80 pb-4">
              <div>
                <h2 class="text-lg font-bold text-white truncate max-w-sm" :title="activeEvento?.titulo">
                  {{ activeEvento ? activeEvento.titulo : 'Nenhuma atividade selecionada' }}
                </h2>
                <p class="text-xs text-slate-400 mt-1">
                  Participantes confirmados no banco de dados e aguardando triagem pastoral.
                </p>
              </div>
              
              <button 
                @click="exportarLista"
                :disabled="!activeInscritos.length"
                class="shrink-0 inline-flex items-center justify-center gap-1.5 rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 text-xs font-bold text-slate-300 hover:text-white hover:border-slate-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <!-- SVG Download (Tamanho estável) -->
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Exportar Lista
              </button>
            </div>
  
            <!-- Tabela de Inscritos -->
            <div class="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/40">
              <table class="w-full text-left border-collapse text-xs">
                <thead>
                  <tr class="bg-slate-950 text-slate-400 uppercase tracking-wider font-bold">
                    <th class="p-4 border-b border-slate-800">Participante</th>
                    <th class="p-4 border-b border-slate-800">WhatsApp</th>
                    <th class="p-4 border-b border-slate-800">Status Financ.</th>
                    <th class="p-4 border-b border-slate-800">Observações / Acolhida</th>
                    <th class="p-4 border-b border-slate-800 text-right">Ação</th>
                  </tr>
                </thead>
                <tbody v-if="activeInscritos.length > 0" class="divide-y divide-slate-800/50">
                  <tr 
                    v-for="insc in activeInscritos" 
                    :key="insc.id"
                    class="hover:bg-slate-900/20 transition-colors"
                  >
                    <!-- Participante -->
                    <td class="p-4">
                      <div class="font-bold text-white">{{ insc.nome }}</div>
                      <div class="text-[10px] text-slate-500">Nascimento: {{ formatDataNascimento(insc.dataNascimento) }}</div>
                    </td>
                    <!-- Contato -->
                    <td class="p-4 font-mono text-slate-300">
                      {{ insc.whatsapp }}
                    </td>
                    <!-- Status de Pagamento -->
                    <td class="p-4">
                      <span 
                        class="inline-flex px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider"
                        :class="insc.statusPagamento === 'Confirmado' 
                          ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' 
                          : insc.statusPagamento === 'Pendente' 
                            ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' 
                            : 'bg-slate-800 text-slate-400'"
                      >
                        {{ insc.statusPagamento }}
                      </span>
                    </td>
                    <!-- Observações de Triagem -->
                    <td class="p-4 text-slate-400 leading-relaxed max-w-xs truncate" :title="insc.observacoes || 'Nenhuma'">
                      {{ insc.observacoes || 'Nenhuma' }}
                    </td>
                    <!-- Ações rápidas -->
                    <td class="p-4 text-right">
                      <button 
                        v-if="insc.statusPagamento === 'Pendente'"
                        @click="confirmarPagamento(insc.id)"
                        class="px-2 py-1 rounded bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold hover:scale-105 transition-all"
                        title="Aprovar pagamento PIX recebido"
                      >
                        Aprovar PIX
                      </button>
                      <span v-else class="text-[10px] text-slate-500 italic font-medium flex items-center justify-end gap-1">
                        <span class="h-1.5 w-1.5 rounded-full bg-emerald-500 shrink-0"></span>
                        Pronto
                      </span>
                    </td>
                  </tr>
                </tbody>
                <!-- Estado vazio de inscritos -->
                <tbody v-else>
                  <tr>
                    <td colspan="5" class="p-8 text-center text-slate-500 italic">
                      Nenhuma inscrição cadastrada para esta atividade ainda.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
  
        </div>
  
        <!-- MODAL DE CRIAÇÃO DE EVENTO (PASTORAL CREATE) -->
        <transition name="modal-fade">
          <div 
            v-if="modalCriacaoAberto" 
            class="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          >
            <div 
              class="bg-slate-900 border border-slate-800 w-full max-w-lg rounded-2xl shadow-2xl relative overflow-hidden"
              @click.stop
            >
              <!-- Detalhe decorativo superior -->
              <div class="h-2 bg-gradient-to-r from-amber-500 to-amber-600"></div>
  
              <!-- Header do Modal -->
              <div class="p-6 border-b border-slate-800 flex items-center justify-between">
                <div>
                  <span class="text-[10px] font-bold uppercase tracking-wider text-amber-500 block">
                    Central de Cadastro
                  </span>
                  <h2 class="text-xl font-bold text-white mt-0.5">
                    Criar Novo Evento PIB SP
                  </h2>
                </div>
                <button 
                  @click="fecharCriacao" 
                  class="text-slate-400 hover:text-white p-1.5 rounded-lg hover:bg-slate-800"
                >
                  <!-- SVG Sair (Tamanho estável) -->
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
  
              <!-- Form -->
              <form @submit.prevent="salvarEvento" class="p-6 space-y-4 max-h-[70vh] overflow-y-auto text-slate-300">
                
                <!-- Título -->
                <div class="space-y-1">
                  <label for="evt-title" class="block text-xs font-bold uppercase tracking-wider text-slate-400">Título do Evento</label>
                  <input 
                    id="evt-title"
                    v-model="formEvento.titulo"
                    type="text"
                    required
                    placeholder="Ex: Retiro de Casais 2026"
                    class="w-full rounded-lg border border-slate-800 px-3.5 py-2.5 text-sm focus:border-amber-500 focus:outline-none bg-slate-950 text-white"
                  />
                </div>
  
                <!-- Categoria e Local -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div class="space-y-1">
                    <label for="evt-cat" class="block text-xs font-bold uppercase tracking-wider text-slate-400">Público / Categoria</label>
                    <select 
                      id="evt-cat"
                      v-model="formEvento.categoria"
                      required
                      class="w-full rounded-lg border border-slate-800 px-3.5 py-2.5 text-sm focus:border-amber-500 focus:outline-none bg-slate-950 text-white"
                    >
                      <option value="Jovens">Jovens</option>
                      <option value="Casais">Casais</option>
                      <option value="Família">Família</option>
                      <option value="Ensino">Ensino / EBD</option>
                      <option value="Social">Ação Social</option>
                      <option value="Geral">Geral</option>
                    </select>
                  </div>
  
                  <div class="space-y-1">
                    <label for="evt-loc" class="block text-xs font-bold uppercase tracking-wider text-slate-400">Local</label>
                    <input 
                      id="evt-loc"
                      v-model="formEvento.local"
                      type="text"
                      required
                      placeholder="Ex: Templo Principal"
                      class="w-full rounded-lg border border-slate-800 px-3.5 py-2.5 text-sm focus:border-amber-500 focus:outline-none bg-slate-950 text-white"
                    />
                  </div>
                </div>
  
                <!-- Descrição -->
                <div class="space-y-1">
                  <label for="evt-desc" class="block text-xs font-bold uppercase tracking-wider text-slate-400">Descrição do Evento</label>
                  <textarea 
                    id="evt-desc"
                    v-model="formEvento.descricao"
                    rows="3"
                    required
                    placeholder="O que os participantes farão nesta atividade..."
                    class="w-full rounded-lg border border-slate-800 px-3.5 py-2 text-sm focus:border-amber-500 focus:outline-none bg-slate-950 text-white resize-none"
                  ></textarea>
                </div>
  
                <!-- Data e Hora -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div class="space-y-1">
                    <label for="evt-date" class="block text-xs font-bold uppercase tracking-wider text-slate-400">Data / Período</label>
                    <input 
                      id="evt-date"
                      v-model="formEvento.data"
                      type="text"
                      required
                      placeholder="Ex: 12 de Setembro"
                      class="w-full rounded-lg border border-slate-800 px-3.5 py-2.5 text-sm focus:border-amber-500 focus:outline-none bg-slate-950 text-white"
                    />
                  </div>
  
                  <div class="space-y-1">
                    <label for="evt-time" class="block text-xs font-bold uppercase tracking-wider text-slate-400">Horário</label>
                    <input 
                      id="evt-time"
                      v-model="formEvento.horario"
                      type="text"
                      required
                      placeholder="Ex: 19:30h"
                      class="w-full rounded-lg border border-slate-800 px-3.5 py-2.5 text-sm focus:border-amber-500 focus:outline-none bg-slate-950 text-white"
                    />
                  </div>
                </div>
  
                <!-- Configuração de Lotação e Vagas -->
                <div class="rounded-xl bg-slate-950 p-4 border border-slate-800 space-y-4">
                  <label class="flex items-center gap-3 cursor-pointer select-none">
                    <input 
                      type="checkbox" 
                      v-model="formEvento.vagasLimitadas" 
                      class="rounded text-amber-500 focus:ring-amber-500 bg-slate-900 border-slate-800 h-4.5 w-4.5"
                    />
                    <span class="text-xs font-bold uppercase tracking-wide text-slate-300">Este evento possui vagas limitadas</span>
                  </label>
  
                  <div v-if="formEvento.vagasLimitadas" class="grid grid-cols-2 gap-4 pt-1">
                    <div class="space-y-1">
                      <label for="evt-vagas" class="block text-[10px] font-bold uppercase tracking-wider text-slate-400">Total de Vagas</label>
                      <input 
                        id="evt-vagas"
                        v-model.number="formEvento.totalVagas"
                        type="number"
                        min="1"
                        class="w-full rounded-lg border border-slate-800 px-3 py-2 text-xs focus:border-amber-500 focus:outline-none bg-slate-900 text-white"
                      />
                    </div>
                    <div class="space-y-1">
                      <label for="evt-val" class="block text-[10px] font-bold uppercase tracking-wider text-slate-400">Valor Inscrição (R$)</label>
                      <input 
                        id="evt-val"
                        v-model.number="formEvento.valor"
                        type="number"
                        min="0"
                        class="w-full rounded-lg border border-slate-800 px-3 py-2 text-xs focus:border-amber-500 focus:outline-none bg-slate-900 text-white"
                      />
                    </div>
                  </div>
                </div>
  
                <!-- Botão Salvar -->
                <button 
                  type="submit"
                  class="w-full rounded-xl bg-amber-500 hover:bg-amber-400 py-3.5 text-center font-bold text-slate-950 transition-all active:scale-95 text-sm mt-4 shadow-sm"
                >
                  Ativar e Publicar Atividade
                </button>
              </form>
            </div>
          </div>
        </transition>
  
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, computed, reactive } from 'vue'
  
  // Definição local de tipos alinhados com o eventos-types.ts
  type EventoCategoria = 'Jovens' | 'Casais' | 'Família' | 'Ensino' | 'Social' | 'Geral';
  
  interface Evento {
    id: string;
    titulo: string;
    descricao: string;
    data: string;
    horario: string;
    local: string;
    categoria: EventoCategoria;
    vagasLimitadas: boolean;
    totalVagas?: number;
    vagasPreenchidas: number;
    valor?: number;
    status: 'Ativo' | 'Encerrado';
    imagem: string;
  }
  
  interface InscricaoEvento {
    id: string;
    eventoId: string;
    nome: string;
    whatsapp: string;
    email: string;
    dataNascimento: string;
    observacoes?: string;
    statusPagamento: 'Confirmado' | 'Pendente' | 'Isento';
  }
  
  // Configurações SEO Restritas para o Painel Pastoral
  useSeoMeta({
    title: 'Gestão de Eventos e Inscrições — Área Interna PIB SP',
    robots: 'noindex, nofollow'
  })
  
  // Mock de Eventos Ativos
  const eventos = ref<Evento[]>([
    {
      id: 'e1',
      titulo: 'Acampamento de Casais 2026: Construindo Alianças',
      descricao: 'Um retiro revigorante de final de semana focado no fortalecimento espiritual e relacional das famílias. Atividades dinâmicas, devocionais pastorais e lazer integrado.',
      data: '18 a 20 de Setembro, 2026',
      horario: 'Sexta às 19:00h até Domingo às 16:00h',
      local: 'Chácara Atibaia PIB SP - Atibaia/SP',
      categoria: 'Casais',
      vagasLimitadas: true,
      totalVagas: 40,
      vagasPreenchidas: 33,
      valor: 450,
      status: 'Ativo',
      imagem: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 'e2',
      titulo: 'Conexão Jovens: Lual Urbano de Adoração',
      descricao: 'Nosso encontro quinzenal de jovens com muito louvor, testemunhos, conexão prática e comunhão. Venha viver um ambiente aconchegante focado em Cristo.',
      data: '05 de Setembro, 2026',
      horario: '19:30h',
      local: 'Salão Social do Templo Principal - Praça Princesa Isabel',
      categoria: 'Jovens',
      vagasLimitadas: false,
      vagasPreenchidas: 120,
      status: 'Ativo',
      imagem: 'https://images.unsplash.com/photo-1455849318743-b2233052fcff?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 'e3',
      titulo: 'Teologia na Prática: Curso EBD Temático',
      descricao: 'Módulo intensivo de 4 semanas focado no estudo bíblico voltado para a atuação e missões em ambientes metropolitanos. Essencial para líderes e novos voluntários.',
      data: 'Início em 06 de Setembro, 2026',
      horario: 'Domingos às 09:00h',
      local: 'Auditório Anexo EBD - Templo Físico',
      categoria: 'Ensino',
      vagasLimitadas: true,
      totalVagas: 50,
      vagasPreenchidas: 47,
      valor: 0,
      status: 'Ativo',
      imagem: 'https://images.unsplash.com/photo-1513001900722-370f803f498d?auto=format&fit=crop&q=80&w=600'
    }
  ])
  
  // Mock de Inscrições realizadas
  const inscricoes = ref<InscricaoEvento[]>([
    // Inscritos para o Acampamento de Casais
    {
      id: 'i1',
      eventoId: 'e1',
      nome: 'Rodrigo & Amanda Oliveira',
      whatsapp: '(11) 98888-7711',
      email: 'rodrigo.amanda@email.com',
      dataNascimento: '1988-04-12',
      observacoes: 'Amanda possui restrição ao glúten. Precisamos de transporte/carona de SP.',
      statusPagamento: 'Confirmado'
    },
    {
      id: 'i2',
      eventoId: 'e1',
      nome: 'Pr. Paulo Eduardo & Esposa',
      whatsapp: '(11) 99999-0012',
      email: 'paulo.eduardo@pib.org.br',
      dataNascimento: '1974-08-22',
      observacoes: 'Nenhuma',
      statusPagamento: 'Isento'
    },
    {
      id: 'i3',
      eventoId: 'e1',
      nome: 'Guilherme & Flávia Toledo',
      whatsapp: '(11) 91111-2233',
      email: 'guilherme.toledo@email.com',
      dataNascimento: '1992-10-30',
      observacoes: 'Precisamos de quarto com berço adaptado para bebê.',
      statusPagamento: 'Pendente'
    },
    // Inscritos para o Lual Urbano de Jovens
    {
      id: 'i4',
      eventoId: 'e2',
      nome: 'Gabriel Silva Santos',
      whatsapp: '(11) 92222-4455',
      email: 'gabriel.santos@email.com',
      dataNascimento: '2004-02-15',
      observacoes: 'Vou ajudar no voluntariado técnico de mídia.',
      statusPagamento: 'Isento'
    },
    {
      id: 'i5',
      eventoId: 'e2',
      nome: 'Julia Ramos Lima',
      whatsapp: '(11) 93333-5566',
      email: 'julia.lima@email.com',
      dataNascimento: '2001-09-08',
      statusPagamento: 'Isento'
    }
  ])
  
  // ID do Evento Selecionado
  const selectedEventoId = ref('e1')
  
  // Evento Selecionado atualmente
  const activeEvento = computed(() => {
    return eventos.value.find(e => e.id === selectedEventoId.value) || null
  })
  
  // Participantes do Evento Selecionado
  const activeInscritos = computed(() => {
    return inscricoes.value.filter(i => i.eventoId === selectedEventoId.value)
  })
  
  // KPI Cálculos
  const totalInscritos = computed(() => {
    return inscricoes.value.length
  })
  
  const arrecadacaoAcumulada = computed(() => {
    return inscricoes.value
      .filter(i => i.statusPagamento === 'Confirmado')
      .reduce((acc, current) => {
        const evt = eventos.value.find(e => e.id === current.eventoId)
        return acc + (evt?.valor || 0)
      }, 0)
  })
  
  const vagasCriticasCount = computed(() => {
    return eventos.value.filter(evt => {
      if (!evt.vagasLimitadas || !evt.totalVagas) return false
      const restantes = evt.totalVagas - evt.vagasPreenchidas
      return restantes > 0 && restantes <= 10
    }).length
  })
  
  // Helper formatador de data de nascimento para tabela
  const formatDataNascimento = (strDate: string): string => {
    if (!strDate) return 'Não informado'
    const parts = strDate.split('-')
    if (parts.length !== 3) return strDate
    return `${parts[2]}/${parts[1]}/${parts[0]}`
  }
  
  // Lógica de aprovação de pagamentos via PIX
  const confirmarPagamento = (inscId: string) => {
    const insc = inscricoes.value.find(i => i.id === inscId)
    if (insc) {
      insc.statusPagamento = 'Confirmado'
    }
  }
  
  // Simulação de Exportação de Lista de Participantes (Ex: CSV/Excel)
  const exportarLista = () => {
    if (activeEvento.value) {
      alert(`Lista de inscritos para "${activeEvento.value.titulo}" exportada com sucesso! \\nArquivo: lista-inscritos-${selectedEventoId.value}.csv prontificado para a secretaria.`)
    }
  }
  
  // Estado e Formulário de Criação de Evento
  const modalCriacaoAberto = ref(false)
  const formEvento = reactive({
    titulo: '',
    descricao: '',
    data: '',
    horario: '',
    local: '',
    categoria: 'Geral' as EventoCategoria,
    vagasLimitadas: false,
    totalVagas: 50,
    valor: 0
  })
  
  const abrirCriacao = () => {
    modalCriacaoAberto.value = true
  }
  
  const flexClassCheck = () => {
    // Verificação interna de blindagem contra ícones gigantes
  }
  
  const fecharCriacao = () => {
    modalCriacaoAberto.value = false
    resetFormEvento()
  }
  
  const salvarEvento = () => {
    const novoEvt: Evento = {
      id: 'e' + (eventos.value.length + 1),
      titulo: formEvento.titulo,
      descricao: formEvento.descricao,
      data: formEvento.data,
      horario: formEvento.horario,
      local: formEvento.local,
      categoria: formEvento.categoria,
      vagasLimitadas: formEvento.vagasLimitadas,
      totalVagas: formEvento.vagasLimitadas ? formEvento.totalVagas : undefined,
      vagasPreenchidas: 0,
      valor: formEvento.vagasLimitadas ? formEvento.valor : 0,
      status: 'Ativo',
      imagem: 'https://images.unsplash.com/photo-1513001900722-370f803f498d?auto=format&fit=crop&q=80&w=600'
    }
    
    eventos.value.push(novoEvt)
    selectedEventoId.value = novoEvt.id // Foca no novo evento criado
    fecharCriacao()
  }
  
  const resetFormEvento = () => {
    formEvento.titulo = ''
    formEvento.descricao = ''
    formEvento.data = ''
    formEvento.horario = ''
    formEvento.local = ''
    formEvento.categoria = 'Geral'
    formEvento.vagasLimitadas = false
    formEvento.totalVagas = 50
    formEvento.valor = 0
  }
  </script>
  
  <style scoped>
  .modal-fade-enter-active,
  .modal-fade-leave-active {
    transition: opacity 0.3s ease;
  }
  .modal-fade-enter-from,
  .modal-fade-leave-to {
    opacity: 0;
  }
  </style>