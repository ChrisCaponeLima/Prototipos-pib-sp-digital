<template>
    <div class="bg-slate-50 min-h-screen py-12 px-6 lg:px-12">
      <div class="container mx-auto max-w-6xl">
        
        <!-- Cabeçalho de Introdução -->
        <div class="text-center max-w-3xl mx-auto mb-12">
          <span class="text-xs font-bold uppercase tracking-widest text-amber-600">Espaço de Intercessão</span>
          <h1 class="mt-2 text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Mural de <span class="text-amber-600 font-serif italic">Orações</span>
          </h1>
          <p class="mt-4 text-lg text-slate-600">
            "Levai as cargas uns dos outros." Compartilhe seu pedido de forma pública ou confidencial, ou dedique alguns minutos do seu dia para interceder pelas necessidades da nossa comunidade.
          </p>
        </div>
  
        <!-- Grid Principal: Formulário à Esquerda, Mural à Direita -->
        <div class="grid gap-8 lg:grid-cols-12 items-start">
          
          <!-- COLUNA 1: Formulário de Envio (5 colunas) -->
          <div class="lg:col-span-5 bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm space-y-6 sticky top-24">
            <div>
              <h2 class="text-xl font-bold text-slate-900">Como podemos orar por você?</h2>
              <p class="text-xs text-slate-500 mt-1">Sua privacidade e conforto são nossa prioridade.</p>
            </div>
  
            <!-- Alerta de Envio com Sucesso -->
            <div v-if="submitted" class="bg-emerald-50 border border-emerald-200 rounded-xl p-5 text-center space-y-3">
              <div class="h-12 w-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 class="font-bold text-slate-900 text-sm">Pedido Recebido!</h3>
              <p class="text-xs text-slate-600 leading-relaxed">
                Obrigado por compartilhar conosco. Seu pedido foi adicionado ao mural e nosso gabinete pastoral também estará intercedendo por você esta semana.
              </p>
              <button @click="resetForm" class="text-xs font-bold text-amber-600 hover:text-amber-700 underline block mx-auto">
                Enviar novo pedido
              </button>
            </div>
  
            <!-- Formulário de Pedido -->
            <form v-else @submit.prevent="submitOracao" class="space-y-4">
              
              <!-- Campo Nome -->
              <div class="space-y-1">
                <label for="nome" class="block text-xs font-bold uppercase text-slate-500 tracking-wider">Seu Nome</label>
                <input 
                  id="nome"
                  v-model="form.nome"
                  type="text"
                  :disabled="form.anonimo"
                  placeholder="Ex: Maria Souza"
                  class="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500 bg-white disabled:bg-slate-100 disabled:text-slate-400"
                  :required="!form.anonimo"
                />
              </div>
  
              <!-- Toggle de Anonimato -->
              <label class="flex items-center gap-3 bg-slate-50 p-3 rounded-lg border border-slate-200 cursor-pointer select-none">
                <input 
                  type="checkbox" 
                  v-model="form.anonimo" 
                  class="rounded text-amber-500 focus:ring-amber-500 h-4 w-4"
                />
                <span class="text-xs font-semibold text-slate-700">Desejo enviar este pedido de forma Anônima</span>
              </label>
  
              <!-- Área de Texto do Pedido -->
              <div class="space-y-1">
                <label for="texto" class="block text-xs font-bold uppercase text-slate-500 tracking-wider">Seu Pedido de Oração</label>
                <textarea 
                  id="texto"
                  v-model="form.texto"
                  rows="4"
                  required
                  placeholder="Escreva aqui pelo que você gostaria que orássemos (saúde, família, decisões, etc.)..."
                  class="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500 bg-white resize-none"
                ></textarea>
              </div>
  
              <!-- Tipo de Privacidade (Mural Público ou Pastoral Secreto) -->
              <div class="space-y-1">
                <span class="block text-xs font-bold uppercase text-slate-500 tracking-wider">Visibilidade</span>
                <div class="grid gap-2 sm:grid-cols-2 mt-1">
                  <label class="flex items-center gap-2 bg-white p-2.5 rounded-lg border border-slate-200 cursor-pointer hover:border-amber-500/50">
                    <input type="radio" v-model="form.privacidade" value="publico" class="text-amber-500 focus:ring-amber-500 h-4 w-4" />
                    <span class="text-xs font-semibold text-slate-700">Mural Público</span>
                  </label>
                  <label class="flex items-center gap-2 bg-white p-2.5 rounded-lg border border-slate-200 cursor-pointer hover:border-amber-500/50">
                    <input type="radio" v-model="form.privacidade" value="privado" class="text-amber-500 focus:ring-amber-500 h-4 w-4" />
                    <span class="text-xs font-semibold text-slate-700">Apenas Pastores</span>
                  </label>
                </div>
                <p class="text-[10px] text-slate-400 leading-tight mt-1">
                  *Pedidos enviados como "Apenas Pastores" não aparecerão no site e serão encaminhados diretamente ao gabinete do Pr. Paulo Eduardo.
                </p>
              </div>
  
              <!-- Botão Enviar -->
              <button 
                type="submit"
                class="w-full rounded-lg bg-amber-500 hover:bg-amber-400 py-3 text-center font-bold text-slate-900 transition-colors text-sm active:scale-95"
              >
                Publicar Pedido
              </button>
            </form>
          </div>
  
          <!-- COLUNA 2: Lista de Pedidos Públicos (7 colunas) -->
          <div class="lg:col-span-7 space-y-6">
            <div class="flex items-center justify-between border-b border-slate-200 pb-3">
              <h2 class="text-lg font-bold text-slate-900">Pedidos Recentes</h2>
              <span class="text-xs text-slate-500">Membros intercedendo ativamente</span>
            </div>
  
            <!-- Lista de Cards Reativos -->
            <div class="space-y-4">
              <div 
                v-for="pedido in muralList" 
                :key="pedido.id"
                class="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
              >
                <!-- Tarjeta decorativa sutil -->
                <div class="absolute left-0 top-0 bottom-0 w-1 bg-amber-400"></div>
  
                <!-- Topo do Card: Nome e Data -->
                <div class="flex items-center justify-between gap-4 mb-4">
                  <span class="font-bold text-slate-900 text-sm">
                    {{ pedido.isAnonimo ? 'Anônimo' : pedido.nome }}
                  </span>
                  <span class="text-xs text-slate-400">
                    {{ pedido.data }}
                  </span>
                </div>
  
                <!-- Texto do Pedido -->
                <p class="text-slate-700 text-sm leading-relaxed mb-6 whitespace-pre-line">
                  "{{ pedido.texto }}"
                </p>
  
                <!-- Rodapé do Card: Contador de Orações e Ação -->
                <div class="flex items-center justify-between pt-4 border-t border-slate-100">
                  
                  <!-- Quantidade de Oradores -->
                  <span class="text-xs text-slate-500 flex items-center gap-1.5">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-amber-500 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <strong>{{ pedido.oracoes }}</strong> pessoas estão orando por isso
                  </span>
  
                  <!-- Botão "Estou Orando" Reativo -->
                  <button 
                    @click="interceder(pedido.id)"
                    :disabled="pedido.reacaoLocal"
                    class="inline-flex items-center gap-1.5 rounded-lg px-4 py-2 text-xs font-bold transition-all"
                    :class="pedido.reacaoLocal 
                      ? 'bg-emerald-50 text-emerald-600 border border-emerald-200 cursor-default' 
                      : 'bg-slate-900 hover:bg-slate-800 text-white active:scale-95'"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 fill-none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    {{ pedido.reacaoLocal ? 'Estou Orando' : 'Orar por isso' }}
                  </button>
                </div>
  
                <!-- Toast flutuante local simulando a notificação "Alguém orou por você" -->
                <transition name="toast">
                  <div v-if="toastAtivoId === pedido.id" class="absolute inset-0 bg-emerald-600/95 flex items-center justify-center p-4 text-center text-white z-20">
                    <div class="space-y-1">
                      <p class="font-bold text-sm">✨ Notificação Enviada!</p>
                      <p class="text-xs text-emerald-100">Uma mensagem anônima de encorajamento foi enviada para o autor deste pedido.</p>
                    </div>
                  </div>
                </transition>
              </div>
            </div>
          </div>
  
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, reactive } from 'vue'
  
  // Definição do Tipo TypeScript estrito conforme a arquitetura de dados
  interface PedidoOracao {
    id: string
    nome: string
    isAnonimo: boolean
    texto: string
    data: string
    oracoes: number
    reacaoLocal: boolean
  }
  
  // Configuração de SEO local
  useSeoMeta({
    title: 'Mural de Orações — PIB de São Paulo',
    description: 'Apoie membros e visitantes em momentos difíceis. Compartilhe suas necessidades de orações ou interceda de forma anônima e comunitária.'
  })
  
  const submitted = ref(false)
  const toastAtivoId = ref<string | null>(null)
  
  // Formulário Reativo
  const form = reactive({
    nome: '',
    anonimo: false,
    texto: '',
    privacidade: 'publico'
  })
  
  // Mock de Pedidos Iniciais de validação e engajamento
  const muralList = ref<PedidoOracao[]>([
    {
      id: '1',
      nome: 'Carlos Eduardo',
      isAnonimo: false,
      texto: 'Peço oração pelo restabelecimento da saúde da minha mãe, que está passando por exames delicados no hospital esta semana. Que Deus traga paz ao nosso coração.',
      data: 'Hoje, às 18:22h',
      oracoes: 24,
      reacaoLocal: false
    },
    {
      id: '2',
      nome: 'Anônimo',
      isAnonimo: true,
      texto: 'Gostaria de pedir oração pela minha vida profissional. Estou prestes a tomar uma decisão importante que mudará os rumos da minha carreira e da minha família.',
      data: 'Hoje, às 14:15h',
      oracoes: 12,
      reacaoLocal: false
    },
    {
      id: '3',
      nome: 'Fernanda Martins',
      isAnonimo: false,
      texto: 'Intercedam pelo meu Pequeno Grupo na Zona Sul. Estamos acolhendo duas famílias de imigrantes novos no bairro e precisamos de graça para acolhê-los de forma prática e estruturada.',
      data: 'Ontem',
      oracoes: 37,
      reacaoLocal: false
    }
  ])
  
  // Ação de envio do formulário
  const submitOracao = () => {
    // Se for público, adiciona ao mural simulado para fins de validação visual
    if (form.privacidade === 'publico') {
      const novoPedido: PedidoOracao = {
        id: Date.now().toString(),
        nome: form.nome,
        isAnonimo: form.anonimo,
        texto: form.texto,
        data: 'Agora mesmo',
        oracoes: 0,
        reacaoLocal: false
      }
      muralList.value.unshift(novoPedido)
    }
    submitted.value = true
  }
  
  // Ação de Apoio / "Estou Orando por Você"
  const interceder = (id: string) => {
    const pedido = muralList.value.find(p => p.id === id)
    if (pedido && !pedido.reacaoLocal) {
      pedido.oracoes++
      pedido.reacaoLocal = true
      
      // Ativa o toast de notificação apenas para o card correspondente
      toastAtivoId.value = id
      
      // Reseta o toast após 3.5 segundos para liberar a visão do card
      setTimeout(() => {
        toastAtivoId.value = null
      }, 3500)
    }
  }
  
  const resetForm = () => {
    form.nome = ''
    form.anonimo = false
    form.texto = ''
    form.privacidade = 'publico'
    submitted.value = false
  }
  </script>
  
  <style scoped>
  /* Transição elegante do Toast Simulado */
  .toast-enter-active,
  .toast-leave-active {
    transition: opacity 0.4s ease, transform 0.4s ease;
  }
  
  .toast-enter-from,
  .toast-leave-to {
    opacity: 0;
    transform: scale(0.98);
  }
  </style>