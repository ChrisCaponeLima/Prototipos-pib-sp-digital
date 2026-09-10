<template>
    <div class="bg-slate-50 min-h-screen py-12 px-4 sm:px-6 lg:px-12 text-slate-800">
      <div class="container mx-auto max-w-6xl space-y-12">
        
        <!-- CABEÇALHO DO HUB -->
        <div class="text-center max-w-3xl mx-auto space-y-4">
          <span class="text-xs font-bold uppercase tracking-widest text-amber-600 bg-amber-500/10 px-3 py-1 rounded-full">
            Celebração & Palavra
          </span>
          <h1 class="text-3xl font-bold tracking-tight text-slate-900 md:text-5xl font-sans">
            Cultos & <span class="text-amber-600 font-serif italic">Transmissões</span>
          </h1>
          <p class="text-lg text-slate-600">
            Participe dos nossos cultos ao vivo ou acesse o acervo completo de mensagens pastorais para edificação diária de onde estiver.
          </p>
        </div>
  
        <!-- SEÇÃO 1: TRANSMISSÃO AO VIVO (Coração do Campus Digital) -->
        <!-- items-stretch garante que o chat se estique para preencher exatamente a mesma altura definida pelo player de vídeo -->
        <section class="bg-slate-950 text-white rounded-3xl overflow-hidden border border-slate-900 shadow-xl grid grid-cols-1 lg:grid-cols-12 items-stretch">
          
          <!-- Player de Vídeo Simulador (8 colunas) -->
          <!-- aspect-video define a altura natural perfeita de 16:9 baseada na largura. É o elemento âncora que dita a altura do bloco -->
          <div class="lg:col-span-8 bg-black relative aspect-video flex items-center justify-center w-full">
            <div v-if="cultoAoVivoAtivo" class="absolute inset-0 h-full w-full">
              <!-- Simulação de Player de Transmissão Integrada -->
              <img 
                src="https://images.unsplash.com/photo-1461301037042-49f48515139a?auto=format&fit=crop&q=80&w=1200" 
                alt="Transmissão ao vivo do culto"
                class="h-full w-full object-cover opacity-70"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
              
              <!-- Indicador Pulsante AO VIVO -->
              <div class="absolute top-4 left-4 flex items-center gap-2 bg-red-600 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-widest text-white shadow-md">
                <span class="h-2 w-2 rounded-full bg-white animate-ping"></span>
                Ao Vivo
              </div>
  
              <!-- Botão Play Centralizador -->
              <div class="absolute inset-0 flex items-center justify-center">
                <button class="h-16 w-16 flex items-center justify-center rounded-full bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-lg active:scale-95 transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 fill-current translate-x-0.5" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>
  
              <!-- Barra de Controle Inferior -->
              <div class="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-slate-300">
                <span class="font-bold truncate mr-2">Culto de Celebração de Domingo — 19h</span>
                <span class="flex items-center gap-1 shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-slate-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  1.240 assistindo
                </span>
              </div>
            </div>
  
            <!-- Caso não haja transmissão ativa (Estado Offline) -->
            <div v-else class="p-8 text-center space-y-4 max-w-md">
              <span class="inline-flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 text-slate-600 shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.828m2.829 2.828L21 21M21 3L3 21" />
                </svg>
              </span>
              <h3 class="text-lg font-bold text-white">Próximo Culto de Celebração</h3>
              <p class="text-xs text-slate-400 leading-relaxed">
                Nossas transmissões ao vivo acontecem todos os <strong>Domingos às 11h e às 19h</strong>. Inscreva-se em nosso canal e ative as notificações!
              </p>
            </div>
          </div>
  
          <!-- Chat de Intercessão e Boas-Vindas Moderado (4 colunas) -->
          <!-- Usamos a técnica de absolute positioning no desktop para encaixar perfeitamente na altura do player sem deformar a seção -->
          <div class="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-slate-900 relative h-[380px] lg:h-auto">
            
            <div class="lg:absolute lg:inset-0 flex flex-col justify-between h-full w-full overflow-hidden">
              <!-- Topo do Chat -->
              <div class="p-4 border-b border-slate-900 bg-slate-950 flex items-center justify-between shrink-0">
                <span class="text-xs font-bold uppercase tracking-wider text-slate-400">Chat de Acolhimento</span>
                <span class="inline-flex items-center gap-1.5 text-[10px] font-semibold text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full">
                  Anfitrião Online
                </span>
              </div>
  
              <!-- Rolagem de Mensagens do Chat -->
              <div class="p-4 flex-grow overflow-y-auto space-y-4 text-xs bg-slate-950/40">
                <div v-for="msg in chatMock" :key="msg.id" class="space-y-1">
                  <div class="flex items-center gap-1.5 flex-wrap">
                    <span class="font-bold" :class="msg.isHost ? 'text-amber-400' : 'text-slate-300'">
                      {{ msg.nome }}
                    </span>
                    <span v-if="msg.isHost" class="text-[8px] bg-amber-500 text-slate-950 font-bold uppercase px-1 rounded shrink-0">
                      Líder / Host
                    </span>
                    <span class="text-[9px] text-slate-600 shrink-0">{{ msg.hora }}</span>
                  </div>
                  <p class="text-slate-400 leading-relaxed">{{ msg.texto }}</p>
                </div>
              </div>
  
              <!-- Input de envio rápido -->
              <div class="p-4 border-t border-slate-900 bg-slate-950/60 shrink-0">
                <form @submit.prevent="enviarChat" class="flex gap-2">
                  <input 
                    v-model="inputChat"
                    type="text"
                    placeholder="Diga um 'Amém' ou deixe seu pedido de oração..."
                    class="flex-grow rounded-lg bg-slate-900 border border-slate-800 text-xs px-3.5 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                  />
                  <button 
                    type="submit"
                    class="bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-lg px-3.5 py-2.5 transition-all shrink-0 font-bold active:scale-95"
                  >
                    <!-- SVG Enviar -->
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 19l9 2m-9-18v18m0-18L3 5m9 0l9-2" />
                    </svg>
                  </button>
                </form>
              </div>
            </div>
  
          </div>
  
        </section>
  
        <!-- SEÇÃO 2: ABAS DE MÍDIA - ACERVO DE SERMÕES OU PODCASTS -->
        <section class="space-y-6">
          
          <!-- Seleção de Abas -->
          <div class="flex border-b border-slate-200">
            <button 
              @click="activeTab = 'sermoes'" 
              class="px-6 py-3 text-sm font-bold border-b-2 transition-all"
              :class="activeTab === 'sermoes' ? 'border-amber-500 text-slate-900' : 'border-transparent text-slate-500 hover:text-slate-800'"
            >
              Sermões & Pregações
            </button>
            <button 
              @click="activeTab = 'podcasts'" 
              class="px-6 py-3 text-sm font-bold border-b-2 transition-all"
              :class="activeTab === 'podcasts' ? 'border-amber-500 text-slate-900' : 'border-transparent text-slate-500 hover:text-slate-800'"
            >
              Plataformas de Áudio (Podcast)
            </button>
          </div>
  
          <!-- ABA 1: SERMÕES GRAVADOS (BUSCADOR COM FILTROS) -->
          <div v-if="activeTab === 'sermoes'" class="space-y-6">
            
            <!-- Filtros de Busca Avançada -->
            <div class="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm space-y-4">
              <div class="grid gap-4 md:grid-cols-3">
                
                <!-- Busca por Texto Livre -->
                <div class="space-y-1 md:col-span-1">
                  <label class="block text-[10px] font-bold uppercase text-slate-500 tracking-wider">Buscar Palavra-chave</label>
                  <div class="relative">
                    <input 
                      v-model="searchQuery"
                      type="text"
                      placeholder="Ex: graça, fé, salvação..."
                      class="w-full rounded-lg border border-slate-300 pl-9 pr-4 py-2 text-xs focus:border-amber-500 focus:outline-none bg-white font-medium"
                    />
                    <span class="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </span>
                  </div>
                </div>
  
                <!-- Filtro por Série de Sermões -->
                <div class="space-y-1">
                  <label class="block text-[10px] font-bold uppercase text-slate-500 tracking-wider">Série de Mensagens</label>
                  <select 
                    v-model="selectedSerie"
                    class="w-full rounded-lg border border-slate-300 px-3 py-2 text-xs focus:border-amber-500 focus:outline-none bg-white font-medium"
                  >
                    <option value="">Todas as séries</option>
                    <option v-for="serie in seriesList" :key="serie" :value="serie">{{ serie }}</option>
                  </select>
                </div>
  
                <!-- Filtro por Pregador -->
                <div class="space-y-1">
                  <label class="block text-[10px] font-bold uppercase text-slate-500 tracking-wider">Pregador / Pastor</label>
                  <select 
                    v-model="selectedPregador"
                    class="w-full rounded-lg border border-slate-300 px-3 py-2 text-xs focus:border-amber-500 focus:outline-none bg-white font-medium"
                  >
                    <option value="">Todos os pregadores</option>
                    <option v-for="pregador in pregadoresList" :key="pregador" :value="pregador">{{ pregador }}</option>
                  </select>
                </div>
  
              </div>
            </div>
  
            <!-- Grid de Resultados dos Sermões -->
            <div v-if="filteredSermoes.length > 0" class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div 
                v-for="sermon in filteredSermoes" 
                :key="sermon.id"
                class="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all group flex flex-col justify-between"
              >
                <!-- Capa da Mensagem -->
                <div class="relative aspect-video bg-slate-900 overflow-hidden">
                  <img 
                    :src="sermon.capaUrl" 
                    :alt="sermon.titulo" 
                    class="absolute inset-0 h-full w-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div class="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
                  <!-- Duração -->
                  <span class="absolute bottom-3 right-3 bg-slate-950/80 text-white rounded px-2 py-0.5 text-[10px] font-bold backdrop-blur-sm">
                    {{ sermon.duracao }}
                  </span>
                  <!-- Série Badge -->
                  <span class="absolute top-3 left-3 bg-amber-500 text-slate-950 rounded px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider">
                    {{ sermon.serie }}
                  </span>
                </div>
  
                <!-- Detalhes do Sermão -->
                <div class="p-5 flex-grow flex flex-col justify-between space-y-4">
                  <div>
                    <h3 class="font-bold text-slate-900 group-hover:text-amber-600 transition-colors line-clamp-2 text-base leading-snug">
                      {{ sermon.titulo }}
                    </h3>
                    <p class="text-xs text-slate-500 mt-2 flex items-center gap-1">
                      <span>Pregado por: <strong>{{ sermon.pregador }}</strong></span>
                    </p>
                    <p class="text-xs text-slate-400 mt-0.5">
                      Data: {{ sermon.data }} | Bíblia: {{ sermon.passagemBiblica }}
                    </p>
                  </div>
  
                  <!-- Botão de Acesso -->
                  <div class="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span class="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                      {{ sermon.visualizacoes }} visualizações
                    </span>
                    <button class="inline-flex items-center gap-1 text-xs font-bold text-slate-950 hover:text-amber-600 transition-colors">
                      Assistir Mensagem
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
  
            <!-- Estado Vazio Sermões -->
            <div v-else class="text-center py-16 bg-white rounded-2xl border border-slate-200 shadow-sm max-w-lg mx-auto">
              <span class="h-12 w-12 bg-slate-100 text-slate-400 rounded-full flex items-center justify-center mx-auto mb-3 shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </span>
              <h3 class="font-bold text-slate-900 text-sm">Nenhum sermão localizado</h3>
              <p class="text-xs text-slate-500 mt-2 px-4 leading-relaxed">
                Não localizamos sermões correspondentes aos filtros aplicados. Tente expandir suas palavras-chave ou remover as opções selecionadas.
              </p>
              <button 
                @click="limparFiltrosSermoes"
                class="mt-4 text-xs font-bold text-amber-600 hover:text-amber-700 underline"
              >\
                Limpar todos os filtros
              </button>
            </div>
  
          </div>
  
          <!-- ABA 2: PLATAFORMAS DE AUDIO (INTEGRAÇÃO DE PODCAST) -->
          <div v-else-if="activeTab === 'podcasts'" class="grid gap-8 md:grid-cols-12 items-start">
            
            <!-- Chamada para Ação para Ouvintes Externos (5 colunas) -->
            <div class="md:col-span-5 space-y-6 bg-slate-900 text-white rounded-2xl p-6 md:p-8 border border-slate-800 shadow-sm">
              <div>
                <span class="text-[10px] font-bold uppercase tracking-widest text-amber-400 block">Fé em Qualquer Lugar</span>
                <h3 class="text-xl font-bold mt-1">Nossa Palavra nas Plataformas</h3>
                <p class="text-slate-300 text-xs leading-relaxed mt-2">
                  Leve as reflexões, devocionais e sermões bíblicos da PIB SP com você durante a semana. Disponível nos principais players de áudio para acompanhar no trânsito, no trabalho ou em momentos devocionais.
                </p>
              </div>
  
              <!-- Botões das Lojas Oficiais -->
              <div class="space-y-3">
                <!-- Spotify Link -->
                <a 
                  href="https://spotify.com" 
                  target="_blank" 
                  class="flex items-center gap-3 bg-[#1DB954] hover:bg-[#1ed760] text-slate-950 font-bold py-3 px-4 rounded-xl text-xs transition-colors w-full justify-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 fill-current shrink-0" viewBox="0 0 24 24"><path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm5.494 17.306c-.217.356-.684.472-1.04.254-2.884-1.762-6.513-2.162-10.787-1.185-.407.094-.82-.163-.914-.572-.094-.41.163-.82.572-.914 4.69-1.07 8.704-.616 11.916 1.35.357.217.473.684.253 1.041zm1.465-3.26c-.274.446-.856.592-1.302.318-3.3-2.028-8.332-2.617-12.23-1.432-.502.152-1.03-.137-1.183-.64-.153-.502.137-1.03.64-1.183 4.455-1.353 10.02-.7 13.8 1.62.445.275.592.857.318 1.302.002.001.002.001.002.001zm.126-3.41c-.328.536-1.03.712-1.567.384C15.53 8.99 8.924 8.772 5.093 9.935c-.6.182-1.23-.153-1.413-.754-.182-.6.153-1.23.754-1.412 4.56-1.385 11.83-1.134 16.29 1.517.538.322.715 1.025.385 1.562l.006.012z"/></svg>
                  Ouvir no Spotify
                </a>
                <!-- Apple Podcasts -->
                <a 
                  href="https://podcasts.apple.com" 
                  target="_blank" 
                  class="flex items-center gap-3 bg-slate-800 hover:bg-slate-700 text-white font-bold py-3 px-4 rounded-xl text-xs transition-colors border border-slate-700 w-full justify-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15.536a5 5 0 001.414-3.536 5 5 0 00-1.414-3.536M2.758 18.364a9 9 0 001.414-1.414 9 9 0 00-1.414-11.314M12 14a2 2 0 100-4 2 2 0 000 4z" />
                  </svg>
                  Ouvir no Apple Podcasts
                </a>
              </div>
            </div>
  
            <!-- Feed de Episódios Recentes (7 colunas) -->
            <div class="md:col-span-7 space-y-4">
              <h4 class="text-sm font-bold text-slate-900 border-l-2 border-amber-500 pl-3">Episódios Mais Recentes</h4>
              
              <div class="space-y-3">
                <div 
                  v-for="ep in podcastFeed" 
                  :key="ep.id"
                  class="bg-white rounded-xl border border-slate-200 p-4 shadow-sm flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 hover:shadow-md transition-shadow"
                >
                  <div class="space-y-1">
                    <span class="text-[9px] uppercase font-bold text-amber-600 block tracking-wider">{{ ep.serie }}</span>
                    <h5 class="font-bold text-slate-900 text-sm leading-tight">{{ ep.titulo }}</h5>
                    <p class="text-[10px] text-slate-400">Data de publicação: {{ ep.data }} | Duração: {{ ep.duracao }}</p>
                  </div>
                  <!-- Botão Ouvir Rápido (Player Simulador) -->
                  <button 
                    @click="playPodcast(ep.titulo)"
                    class="inline-flex items-center justify-center gap-1 px-3 py-1.5 rounded-lg bg-slate-950 hover:bg-amber-500 hover:text-slate-950 text-white text-xs font-bold transition-all shrink-0 active:scale-95"
                  >
                    Ouvir
                  </button>
                </div>
              </div>
            </div>
  
          </div>
  
        </section>
  
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, computed } from 'vue'
  
  // SEO Completo do Hub de Cultos para posicionamento orgânico e mídias
  useSeoMeta({
    title: 'Assista Online: Cultos & Mensagens — PIB de São Paulo',
    description: 'Participe de nossos cultos ao vivo aos domingos (11h e 19h) ou assista a sermões e pregações pastorais no coração de São Paulo.'
  })
  
  // Estados reativos globais
  const activeTab = ref<'sermoes' | 'podcasts'>('sermoes')
  const cultoAoVivoAtivo = ref(true) // Altere para false para simular o estado offline/grade de horários
  
  // Estados dos filtros de sermões
  const searchQuery = ref('')
  const selectedSerie = ref('')
  const selectedPregador = ref('')
  
  // Dados auxiliares de preenchimento dos filtros (obtidos do mock de forma dedupada no mundo real)
  const seriesList = ['Evangelho & Cidade', 'Famílias Saudáveis', 'Acolhimento Prático', 'Crescimento Espiritual']
  const pregadoresList = ['Pr. Paulo Eduardo', 'Pr. André Lourenço', 'Pra. Sandra Maria', 'Pr. Marcos Silva']
  
  // Estruturas de interface das entidades locais
  interface Sermao {
    id: string
    titulo: string
    descricao: string
    data: string
    pregador: string
    passagemBiblica: string
    serie: string
    duracao: string
    capaUrl: string
    visualizacoes: number
  }
  
  interface MensagemChat {
    id: string
    nome: string
    texto: string
    hora: string
    isHost: boolean
  }
  
  interface PodcastEpisodio {
    id: string
    titulo: string
    serie: string
    data: string
    duracao: string
  }
  
  // Mock de Sermões Gravados
  const sermoesMock = ref<Sermao[]>([
    {
      id: 's1',
      titulo: 'Viver de Forma Relevante no Coração de São Paulo',
      descricao: 'Como a igreja de Cristo pode atuar como um agente de paz, acolhimento e revitalização espiritual nas grandes metrópoles urbanas contemporâneas.',
      data: '23/08/2026',
      pregador: 'Pr. Paulo Eduardo',
      passagemBiblica: 'Jeremias 29:7',
      serie: 'Evangelho & Cidade',
      duracao: '38 min',
      capaUrl: 'https://images.unsplash.com/photo-1543852786-1cf6624b9987?auto=format&fit=crop&q=80&w=600',
      visualizacoes: 485
    },
    {
      id: 's2',
      titulo: 'Acolhimento que Transforma: A Diaconia de Cristo',
      descricao: 'Um estudo bíblico aprofundado sobre a hospitalidade de Jesus e como nossas comunidades locais podem ser refúgios práticos no centro urbano.',
      data: '16/08/2026',
      pregador: 'Pra. Sandra Maria',
      passagemBiblica: 'Romanos 15:7',
      serie: 'Acolhimento Prático',
      duracao: '32 min',
      capaUrl: 'https://images.unsplash.com/photo-1461301037042-49f48515139a?auto=format&fit=crop&q=80&w=600',
      visualizacoes: 320
    },
    {
      id: 's3',
      titulo: 'O Papel Prático da Família Cristã na Cidade Moderna',
      descricao: 'Orientação bíblica para pais e casais sobre como cultivar laços saudáveis e fundamentar os lares em meio ao ritmo acelerado do centro paulista.',
      data: '09/08/2026',
      pregador: 'Pr. André Lourenço',
      passagemBiblica: 'Efésios 5:21',
      serie: 'Famílias Saudáveis',
      duracao: '45 min',
      capaUrl: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80&w=600',
      visualizacoes: 512
    },
    {
      id: 's4',
      titulo: 'Firmeza Espiritual em Tempos de Incerteza',
      descricao: 'Buscando resiliência e estabilidade na palavra e na vida comunitária de oração quando os cenários externos se apresentam caóticos.',
      data: '02/08/2026',
      pregador: 'Pr. Paulo Eduardo',
      passagemBiblica: 'Hebreus 12:28',
      serie: 'Crescimento Espiritual',
      duracao: '35 min',
      capaUrl: 'https://images.unsplash.com/photo-1455849318743-b2233052fcff?auto=format&fit=crop&q=80&w=600',
      visualizacoes: 298
    }
  ])
  
  // Lógica de filtragem reativa combinada dos sermões
  const filteredSermoes = computed(() => {
    return sermoesMock.value.filter(sermon => {
      const matchesSerie = !selectedSerie.value || sermon.serie === selectedSerie.value
      const matchesPregador = !selectedPregador.value || sermon.pregador === selectedPregador.value
      
      const query = searchQuery.value.toLowerCase().trim()
      const matchesSearch = !query || 
                            sermon.titulo.toLowerCase().includes(query) || 
                            sermon.descricao.toLowerCase().includes(query) || 
                            sermon.passagemBiblica.toLowerCase().includes(query)
  
      return matchesSerie && matchesPregador && matchesSearch
    })
  })
  
  const limparFiltrosSermoes = () => {
    searchQuery.value = ''
    selectedSerie.value = ''
    selectedPregador.value = ''
  }
  
  // Mock de Histórico de Conversas do Chat ao vivo
  const chatMock = ref<MensagemChat[]>([
    {
      id: 'c1',
      nome: 'Cláudio Ferreira',
      texto: 'Boa noite igreja querida! Sintonizado aqui da Zona Norte de SP.',
      hora: '19:01h',
      isHost: false
    },
    {
      id: 'c2',
      nome: 'Juliana Castro',
      texto: 'Amém! Que palavra de bênção para iniciar a nossa semana.',
      hora: '19:04h',
      isHost: false
    },
    {
      id: 'c3',
      nome: 'Ministério de Acolhida (Anfitrião)',
      texto: 'Sejam todos muito bem-vindos à nossa transmissão! Se você é visitante ou precisa de oração, não deixe de acessar o nosso menu "Sou Novo" ou falar com nossa equipe pelo WhatsApp.',
      hora: '19:05h',
      isHost: true
    },
    {
      id: 'c4',
      nome: 'Roberto Silveira',
      texto: 'Peço oração pela saúde do meu irmão Marcelo que está internado.',
      hora: '19:08h',
      isHost: false
    }
  ])
  
  const inputChat = ref('')
  const enviarChat = () => {
    if (inputChat.value.trim()) {
      const novaMsg: MensagemChat = {
        id: Date.now().toString(),
        nome: 'Você (Visitante)',
        texto: inputChat.value,
        hora: 'Agora mesmo',
        isHost: false
      }
      chatMock.value.push(novaMsg)
      inputChat.value = ''
    }
  }
  
  // Mock de feed de episódios de áudio / Podcast
  const podcastFeed = ref<PodcastEpisodio[]>([
    {
      id: 'p1',
      titulo: 'Ep. 42 — Desafios da Fé na Cidade Grande',
      serie: 'Evangelho & Cidade',
      data: 'Há 3 dias',
      duracao: '24 min'
    },
    {
      id: 'p2',
      titulo: 'Ep. 41 — Hospitalidade Prática e Acolhimento Comunitário',
      serie: 'Acolhimento Prático',
      data: 'Há 10 dias',
      duracao: '18 min'
    },
    {
      id: 'p3',
      titulo: 'Ep. 40 — Comunhão Semanal e Vida nos Pequenos Grupos',
      serie: 'Crescimento Espiritual',
      data: 'Há 17 dias',
      duracao: '22 min'
    }
  ])
  
  const playPodcast = (titulo: string) => {
    alert(`Iniciando player de áudio integrado para o episódio: \n"${titulo}"\n\nDisponível nas principais plataformas digitais.`)
  }
  </script>
  
  <style scoped>
  /* Scrollbar elegante para a caixa de chat */
  ::-webkit-scrollbar {
    width: 4px;
  }
  ::-webkit-scrollbar-track {
    background: #020617; /* Slate 950 */
  }
  ::-webkit-scrollbar-thumb {
    background: #334155; /* Slate 700 */
    border-radius: 2px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #f59e0b; /* Amber 500 */
  }
  </style>