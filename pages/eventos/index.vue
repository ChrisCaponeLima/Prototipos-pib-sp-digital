<template>
    <div class="bg-slate-50 min-h-screen py-12 px-4 sm:px-6 lg:px-12 text-slate-800">
      <div class="container mx-auto max-w-6xl">
        
        <!-- Cabeçalho do Hub de Eventos -->
        <div class="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span class="text-xs font-bold uppercase tracking-widest text-amber-600 bg-amber-500/10 px-3 py-1 rounded-full">
            Participe e Conecte-se
          </span>
          <h1 class="text-3xl font-bold tracking-tight text-slate-900 md:text-5xl font-sans">
            Próximos <span class="text-amber-600 font-serif italic">Eventos & Atividades</span>
          </h1>
          <p class="text-lg text-slate-600">
            Encontros, retiros, ações sociais e cursos de capacitação. Encontre o seu lugar e faça sua inscrição de forma rápida e segura.
          </p>
        </div>
  
        <!-- Barra de Filtros e Categorias -->
        <div class="bg-white rounded-2xl border border-slate-200 p-4 md:p-6 shadow-sm mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <!-- Abas de Categorias -->
          <div class="flex flex-wrap items-center gap-2 w-full md:w-auto">
            <button 
              @click="selectedCategoria = ''" 
              class="px-4 py-2 rounded-lg text-xs font-bold tracking-wider uppercase transition-all"
              :class="selectedCategoria === '' ? 'bg-amber-500 text-slate-950 shadow-sm' : 'bg-slate-100 hover:bg-slate-200 text-slate-600'"
            >\n            Todos
            </button>
            <button 
              v-for="cat in categorias" 
              :key="cat"
              @click="selectedCategoria = cat" 
              class="px-4 py-2 rounded-lg text-xs font-bold tracking-wider uppercase transition-all"
              :class="selectedCategoria === cat ? 'bg-amber-500 text-slate-950 shadow-sm' : 'bg-slate-100 hover:bg-slate-200 text-slate-600'"
            >
              {{ cat }}
            </button>
          </div>
  
          <!-- Filtro Gratuito/Pago -->
          <div class="flex items-center gap-3 w-full md:w-auto shrink-0">
            <select 
              v-model="filtroPreco" 
              class="w-full md:w-44 rounded-lg border border-slate-300 px-3 py-2 text-xs focus:border-amber-500 focus:outline-none bg-white font-medium"
            >
              <option value="todos">Todos os preços</option>\n            <option value="gratuito">Apenas Gratuitos</option>
              <option value="pago">Investimento/Taxa</option>
            </select>
          </div>
        </div>
  
        <!-- Vitrine de Eventos -->
        <div v-if="filteredEventos.length > 0" class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div 
            v-for="evento in filteredEventos" 
            :key="evento.id"
            class="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
          >
            <!-- Capa do Evento -->
            <div class="relative aspect-[16/10] bg-slate-900 overflow-hidden">
              <img 
                :src="evento.imagem" 
                :alt="evento.titulo" 
                class="absolute inset-0 h-full w-full object-cover opacity-85 hover:scale-105 transition-transform duration-500"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
              <!-- Badge Categoria -->
              <span class="absolute top-4 left-4 rounded bg-slate-950/80 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-amber-400 backdrop-blur-sm border border-slate-800">
                {{ evento.categoria }}
              </span>
              <!-- Badge Preço -->
              <span 
                class="absolute top-4 right-4 rounded px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm"
                :class="evento.valor && evento.valor > 0 ? 'bg-amber-500 text-slate-950' : 'bg-emerald-500/95 text-white'"
              >
                {{ evento.valor && evento.valor > 0 ? `R$ ${evt_valor_format(evento.valor)}` : 'Gratuito' }}
              </span>
            </div>
  
            <!-- Informações Detalhadas -->
            <div class="p-6 flex-grow flex flex-col justify-between">
              <div class="space-y-4">
                <div>
                  <h3 class="text-xl font-bold text-slate-900 leading-snug line-clamp-2">{{ evento.titulo }}</h3>
                  <p class="mt-2 text-slate-600 text-sm line-clamp-3 leading-relaxed">{{ evento.descricao }}</p>
                </div>
  
                <!-- Metadados rápidos - Correções aplicadas para evitar ícones gigantes (h-5 w-5 e shrink-0) e texto cortado -->
                <div class="space-y-3.5 border-t border-slate-100 pt-4 text-xs text-slate-600">
                  <!-- Data e Hora -->
                  <div class="flex items-start gap-2.5">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-amber-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span class="leading-relaxed">{{ evento.data }} <span class="text-slate-400 font-medium">às</span> {{ evento.horario }}</span>
                  </div>
                  <!-- Local físico/digital -->
                  <div class="flex items-start gap-2.5">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-amber-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span class="leading-relaxed break-words">{{ evento.local }}</span>
                  </div>
                  <!-- Controle de Vagas -->
                  <div v-if="evento.vagasLimitadas" class="flex items-start gap-2.5">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-amber-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span class="leading-relaxed" :class="getVagasRestantes(evento) <= 10 ? 'text-rose-600 font-bold' : ''">
                      Vagas: {{ evento.vagasPreenchidas }} / {{ evento.totalVagas }} 
                      <span v-if="getVagasRestantes(evento) <= 10" class="block sm:inline text-xs">({{ getVagasRestantes(evento) }} restantes!)</span>
                    </span>
                  </div>
                  <div v-else class="flex items-start gap-2.5 text-emerald-600 font-medium">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span class="leading-relaxed">Inscrições Livres / Sem Limite</span>
                  </div>
                </div>
              </div>
  
              <!-- Botão CTA -->
              <div class="mt-6 pt-4 border-t border-slate-100">
                <button 
                  v-if="evento.status === 'Ativo' && (!evento.vagasLimitadas || getVagasRestantes(evento) > 0)"
                  @click="abrirInscricao(evento)"
                  class="w-full inline-flex items-center justify-center rounded-xl bg-slate-950 hover:bg-slate-800 text-white font-bold py-3 text-sm transition-all active:scale-95 shadow-sm"
                >
                  Garantir minha vaga
                </button>
                <button 
                  v-else
                  disabled
                  class="w-full inline-flex items-center justify-center rounded-xl bg-slate-150 text-slate-400 font-bold py-3 text-sm cursor-not-allowed"
                >
                  Vagas Esgotadas / Encerrado
                </button>
              </div>
            </div>
          </div>
        </div>
  
        <!-- Estado Vazio -->
        <div v-else class="text-center py-20 bg-white rounded-2xl border border-slate-200 shadow-sm max-w-lg mx-auto">
          <div class="h-16 w-16 mx-auto flex items-center justify-center rounded-full bg-slate-100 text-slate-400 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 class="text-lg font-bold text-slate-900">Nenhum evento localizado</h3>
          <p class="text-slate-500 text-sm mt-2 px-6">
            Não há eventos agendados com os filtros selecionados neste momento. Tente expandir suas categorias ou fale com a secretaria.
          </p>
          <button 
            @click="selectedCategoria = ''; filtroPreco = 'todos'" 
            class="mt-6 inline-flex items-center justify-center rounded-lg bg-amber-500 px-5 py-2.5 text-sm font-bold text-slate-900 hover:bg-amber-400 transition-colors"
          >
            Limpar Filtros
          </button>
        </div>
  
        <!-- MODAL FLUTUANTE: Ficha de Inscrição Inteligente (Visitor-First UX) -->
        <transition name="modal-fade">
          <div 
            v-if="modalAberto" 
            class="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          >
            <div 
              class="bg-white w-full max-w-lg rounded-2xl border border-slate-200 shadow-2xl relative overflow-hidden flex flex-col justify-between"
              @click.stop
            >
              <!-- Detalhe colorido no topo do modal -->
              <div class="h-2 bg-amber-500"></div>
  
              <!-- Cabeçalho do Modal -->
              <div class="p-6 pb-4 border-b border-slate-100 flex items-start justify-between">
                <div>
                  <span class="text-[10px] font-bold uppercase tracking-wider text-amber-600 block">
                    Inscrição para evento
                  </span>
                  <h2 class="text-xl font-bold text-slate-900 mt-1 leading-snug">
                    {{ selectedEvento?.titulo }}
                  </h2>
                </div>
                <button 
                  @click="fecharInscricao" 
                  class="text-slate-400 hover:text-slate-600 p-1.5 rounded-lg hover:bg-slate-50"
                >
                  <!-- SVG Sair -->
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
  
              <!-- Formulário Reativo / Estado Sucesso -->
              <div class="p-6 overflow-y-auto max-h-[60vh] space-y-6">
                
                <!-- Estado 1: Sucesso pós-envio -->
                <div v-if="inscricaoSucesso" class="text-center py-6 space-y-4">
                  <div class="h-16 w-16 mx-auto flex items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 class="text-2xl font-bold text-slate-900">Inscrição Garantida!</h3>
                  <p class="text-slate-600 text-sm max-w-sm mx-auto leading-relaxed">
                    Sua vaga para <strong>{{ selectedEvento?.titulo }}</strong> está confirmada com sucesso! Um comprovante de inscrição digital foi enviado para o seu WhatsApp.
                  </p>
                  <div v-if="selectedEvento?.valor && selectedEvento.valor > 0" class="bg-amber-50 p-4 rounded-xl border border-amber-200 text-left space-y-2 mt-4 text-xs">
                    <span class="font-bold text-amber-800 uppercase tracking-wider block">🚨 Próximo Passo: Pagamento</span>
                    <p class="text-slate-700">
                      Como este evento requer investimento, nossa secretaria gerou um PIX copia-e-cola enviado por mensagem. Por favor, confirme o PIX em até 24h para manter sua inscrição ativa.
                    </p>
                  </div>
                  <button 
                    @click="fecharInscricao" 
                    class="mt-6 w-full rounded-xl bg-slate-950 hover:bg-slate-800 text-white font-bold py-3 text-sm transition-all"
                  >
                    Fechar janela
                  </button>
                </div>
  
                <!-- Estado 2: Preenchimento do Formulário -->
                <form v-else @submit.prevent="confirmarInscricao" class="space-y-4">
                  
                  <!-- Nome -->
                  <div class="space-y-1">
                    <label for="insc-name" class="block text-[11px] font-bold uppercase text-slate-500 tracking-wider">Nome Completo</label>
                    <input 
                      id="insc-name"
                      v-model="formInsc.nome"
                      type="text"
                      required
                      placeholder="Seu nome e sobrenome"
                      class="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500 bg-white"
                    />
                  </div>
  
                  <!-- WhatsApp -->
                  <div class="space-y-1">
                    <label for="insc-tel" class="block text-[11px] font-bold uppercase text-slate-500 tracking-wider">WhatsApp para Contato</label>
                    <input 
                      id="insc-tel"
                      v-model="formInsc.whatsapp"
                      type="tel"
                      required
                      placeholder="Ex: (11) 99999-9999"
                      class="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500 bg-white"
                    />
                  </div>
  
                  <!-- Email -->
                  <div class="space-y-1">
                    <label for="insc-email" class="block text-[11px] font-bold uppercase text-slate-500 tracking-wider">E-mail</label>
                    <input 
                      id="insc-email"
                      v-model="formInsc.email"
                      type="email"
                      required
                      placeholder="exemplo@email.com"
                      class="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500 bg-white"
                    />
                  </div>
  
                  <!-- Data Nascimento -->
                  <div class="space-y-1">
                    <label for="insc-birth" class="block text-[11px] font-bold uppercase text-slate-500 tracking-wider">Data de Nascimento</label>
                    <input 
                      id="insc-birth"
                      v-model="formInsc.dataNascimento"
                      type="date"
                      required
                      class="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500 bg-white"
                    />
                  </div>
  
                  <!-- Observações de Acolhimento -->
                  <div class="space-y-1">
                    <label for="insc-obs" class="block text-[11px] font-bold uppercase text-slate-500 tracking-wider">Necessidades Especiais ou Observações</label>
                    <textarea 
                      id="insc-obs"
                      v-model="formInsc.observacoes"
                      rows="2.5"
                      placeholder="Ex: Alergias alimentares, necessidade de tradução/acessibilidade, carona, etc."
                      class="w-full rounded-lg border border-slate-300 px-3.5 py-2 text-sm focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500 bg-white resize-none"
                    ></textarea>
                  </div>
  
                  <!-- Informações e Segurança LGPD -->
                  <p class="text-[10px] text-slate-400 leading-normal">
                    *Seus dados estão protegidos sob a nossa Política de Privacidade & LGPD e serão utilizados apenas para a organização deste evento e comunicação institucional respeitosa.
                  </p>
  
                  <!-- Botão Enviar Inscrição -->
                  <button 
                    type="submit"
                    class="w-full rounded-xl bg-amber-500 hover:bg-amber-400 py-3.5 text-center font-bold text-slate-950 transition-all active:scale-95 text-sm mt-4 shadow-sm"
                  >
                    Confirmar minha Inscrição
                  </button>
                </form>
  
              </div>
            </div>
          </div>
        </transition>
  
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, computed, reactive } from 'vue'
  
  // Definição local dos tipos de evento para compatibilidade perfeita
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
  
  // Configuração SEO local para indexação orgânica
  useSeoMeta({
    title: 'Eventos & Atividades — PIB de São Paulo',
    description: 'Confira a nossa agenda de retiros, acampamentos, cursos e eventos de impacto social no Centro de São Paulo. Inscreva-se online!'
  })
  
  // Lista fixa de Categorias de apoio
  const categorias: EventoCategoria[] = ['Jovens', 'Casais', 'Família', 'Ensino', 'Social', 'Geral']
  
  // Estados reativos de filtros
  const selectedCategoria = ref('')
  const filtroPreco = ref('todos') // todos, gratuito, pago
  
  // Mock de Eventos Ativos na PIB São Paulo para validação de design e fluxos
  const eventosList = ref<Evento[]>([
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
    },
    {
      id: 'e4',
      titulo: 'Ação de Impacto Social: Mutirão Solidário do Centro',
      descricao: 'Nossos projetos de acolhimento social necessitam de braços voluntários! Atividades integradas de corte de cabelo, atendimento jurídico, recreação infantil e triagem de roupas.',
      data: '12 de Setembro, 2026',
      horario: '08:00h às 17:00h',
      local: 'Praça Princesa Isabel - Campos Elíseos',
      categoria: 'Social',
      vagasLimitadas: false,
      vagasPreenchidas: 65,
      status: 'Ativo',
      imagem: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=600'
    }
  ])
  
  // Lógica combinada de filtragem reativa
  const filteredEventos = computed(() => {
    return eventosList.value.filter(evt => {
      // Filtro por Categoria
      const matchesCat = !selectedCategoria.value || evt.categoria === selectedCategoria.value
      
      // Filtro por Preço
      let matchesPreco = true
      if (filtroPreco.value === 'gratuito') {
        matchesPreco = !evt.valor || evt.valor === 0
      } else if (filtroPreco.value === 'pago') {
        matchesPreco = !!evt.valor && evt.valor > 0
      }
  
      return matchesCat && matchesPreco
    })
  })
  
  // Lógica de cálculo auxiliar para vagas restantes
  const getVagasRestantes = (evento: Evento): number => {
    if (!evento.vagasLimitadas || !evento.totalVagas) return 999
    return evento.totalVagas - evento.vagasPreenchidas
  }
  
  // Helper para formatar o valor sem casas decimais quando inteiros
  const evt_valor_format = (val: number): string => {
    return Number.isInteger(val) ? val.toString() : val.toFixed(2)
  }
  
  // Estados reativos da Inscrição (Modal)
  const modalAberto = ref(false)
  const selectedEvento = ref<Evento | null>(null)
  const inscricaoSucesso = ref(false)
  
  const formInsc = reactive({
    nome: '',
    whatsapp: '',
    email: '',
    dataNascimento: '',
    observacoes: ''
  })
  
  const abrirInscricao = (evento: Evento) => {
    selectedEvento.value = evento
    modalAberto.value = true
    inscricaoSucesso.value = false
  }
  
  const fecharInscricao = () => {
    modalAberto.value = false
    selectedEvento.value = null
    inscricaoSucesso.value = false
    resetFormInsc()
  }
  
  // Submissão reativa de Inscrição com simulação de atualização de vagas do card
  const confirmarInscricao = () => {
    if (selectedEvento.value) {
      // Atualiza localmente as vagas do mock para validação visual imediata
      const target = eventosList.value.find(e => e.id === selectedEvento.value?.id)
      if (target && target.vagasLimitadas && target.totalVagas) {
        if (target.vagasPreenchidas < target.totalVagas) {
          target.vagasPreenchidas++
        }
      }
      inscricaoSucesso.value = true
    }
  }
  
  const resetFormInsc = () => {
    formInsc.nome = ''
    formInsc.whatsapp = ''
    formInsc.email = ''
    formInsc.dataNascimento = ''
    formInsc.observacoes = ''
  }
  </script>
  
  <style scoped>
  /* Animação elegante do surgimento do Modal */
  .modal-fade-enter-active,
  .modal-fade-leave-active {
    transition: opacity 0.3s ease;
  }
  .modal-fade-enter-from,
  .modal-fade-leave-to {
    opacity: 0;
  }
  </style>