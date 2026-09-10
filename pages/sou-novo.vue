<template>
    <div class="bg-slate-50 text-slate-800">
      <!-- HERO HEADER: Mensagem de Expectativa e Acolhimento -->
      <section class="bg-slate-900 text-white py-16 px-6 lg:px-12 relative overflow-hidden">
        <div class="absolute inset-0 opacity-20 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div class="container mx-auto max-w-4xl text-center relative z-10 space-y-4">
          <span class="text-xs font-bold uppercase tracking-widest text-amber-400">
            Estamos esperando por você
          </span>
          <h1 class="text-3xl font-bold tracking-tight md:text-5xl font-sans">
            Planeje sua Visita à <span class="text-amber-400 font-serif italic">PIB SP</span>
          </h1>
          <p class="text-slate-300 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Queremos que sua primeira experiência conosco seja memorável, tranquila e cheia de paz. Veja abaixo tudo o que você precisa saber para nos visitar no próximo domingo!
          </p>
        </div>
      </section>
  
      <!-- SEÇÃO VÍDEO: Mensagem Pastoral de Boas-Vindas -->
      <section class="py-16 px-6 lg:px-12 bg-white">
        <div class="container mx-auto max-w-4xl">
          <div class="grid gap-8 md:grid-cols-12 items-center">
            <!-- Texto de Apoio -->
            <div class="md:col-span-5 space-y-4 text-center md:text-left">
              <h2 class="text-2xl font-bold text-slate-900 md:text-3xl">Uma mensagem do nosso pastor</h2>
              <p class="text-slate-600 text-sm leading-relaxed">
                Onosso pastor sênior, <strong>Pr. Paulo Eduardo</strong>, preparou uma mensagem especial de boas-vindas para apresentar a visão de nossa igreja urbana e histórica.
              </p>
              <div class="pt-2">
                <span class="inline-flex items-center gap-2 text-xs font-semibold text-amber-600 bg-amber-500/10 px-3 py-1 rounded-full">
                  ⏱ Vídeo de 2 minutos
                </span>
              </div>
            </div>
            <!-- Player de Vídeo Simulador -->
            <div class="md:col-span-7">
              <div class="relative aspect-video w-full rounded-2xl bg-slate-950 overflow-hidden shadow-lg border border-slate-150 group cursor-pointer">
                <!-- Imagem de Capa do Vídeo (Mock) -->
                <img 
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=1000" 
                  alt="Pr. Paulo Eduardo Boas-vindas" 
                  class="absolute inset-0 h-full w-full object-cover opacity-60 group-hover:scale-105 transition-all duration-500"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent"></div>
                
                <!-- Botão Central Play (SVG) -->
                <div class="absolute inset-0 flex items-center justify-center">
                  <div class="h-14 w-14 flex items-center justify-center rounded-full bg-amber-500 text-slate-950 shadow-md group-hover:bg-amber-400 group-hover:scale-110 transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 fill-current translate-x-0.5" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <!-- Nome do Pastor no Canto Inferior -->
                <span class="absolute bottom-4 left-4 text-xs font-semibold text-white tracking-wide">
                  Pr. Paulo Eduardo — Pastor Sênior, PIB SP
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <!-- SEÇÃO CHECKLIST: Guia Prático Passo a Passo -->
      <section class="py-16 px-6 lg:px-12 bg-slate-50 border-t border-b border-slate-100">
        <div class="container mx-auto max-w-5xl">
          <div class="text-center mb-12">
            <span class="text-xs font-bold uppercase tracking-widest text-amber-600">Checklist da Visita</span>
            <h2 class="mt-2 text-2xl font-bold text-slate-900 md:text-4xl">Preparado para o Domingo?</h2>
            <p class="mt-2 text-slate-600 text-sm max-w-xl mx-auto">
              Organizamos as respostas para as três dúvidas mais importantes de quem nos visita pela primeira vez.
            </p>
          </div>
  
          <div class="grid gap-8 md:grid-cols-3">
            <!-- Card 1: Estacionamento -->
            <div class="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm space-y-4">
              <div class="h-10 w-10 flex items-center justify-center rounded-lg bg-amber-500/10 text-amber-600">
                <!-- SVG Carro -->
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 19l9 2m-9-18v18m0-18L3 5m9 0l9-2" />
                </svg>
              </div>
              <h3 class="text-lg font-bold text-slate-900">1. Onde Estacionar?</h3>
              <p class="text-slate-600 text-sm leading-relaxed">
                Temos <strong>estacionamento conveniado e seguro</strong> muito próximo ao templo físico, na Praça Princesa Isabel. Ao chegar, nossa equipe de recepção indicará o local exato para que você guarde seu veículo com total segurança.
              </p>
            </div>
  
            <!-- Card 2: Filhos / Espaço Kids -->
            <div class="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm space-y-4">
              <div class="h-10 w-10 flex items-center justify-center rounded-lg bg-amber-500/10 text-amber-600">
                <!-- SVG Sorriso / Infantil -->
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 class="text-lg font-bold text-slate-900">2. Onde deixo meus filhos?</h3>
              <p class="text-slate-600 text-sm leading-relaxed">
                Traga seus filhos sem preocupações! Dispomos de um <strong>Berçário e do Espaço Kids</strong> totalmente adaptados. Monitores capacitados ministram atividades lúdicas e seguras enquanto você participa das celebrações principais.
              </p>
            </div>
  
            <!-- Card 3: Recepção e Acolhida -->
            <div class="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm space-y-4">
              <div class="h-10 w-10 flex items-center justify-center rounded-lg bg-amber-500/10 text-amber-600">
                <!-- SVG Mãos -->
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <h3 class="text-lg font-bold text-slate-900">3. Como funciona a recepção?</h3>
              <p class="text-slate-600 text-sm leading-relaxed">
                Logo na entrada do templo, voluntários de braços abertos lhe entregarão o nosso <strong>Boletim Digital</strong> e estarão disponíveis para encontrar um assento confortável e esclarecer qualquer dúvida sobre as dependências físicas da igreja.
              </p>
            </div>
          </div>
        </div>
      </section>
  
      <!-- SEÇÃO FORMULÁRIO: Conexão Rápida Interativa -->
      <section class="py-16 px-6 lg:px-12 bg-white">
        <div class="container mx-auto max-w-2xl">
          <div class="text-center mb-10">
            <span class="text-xs font-bold uppercase tracking-widest text-amber-600">Queremos te conhecer</span>
            <h2 class="mt-2 text-2xl font-bold text-slate-900 md:text-4xl">Ficha de Conexão Rápida</h2>
            <p class="mt-2 text-slate-600 text-sm">
              Preencha os campos abaixo e entraremos em contato de forma respeitosa em até 48 horas.
            </p>
          </div>
  
          <!-- Formulário Reativo -->
          <div class="bg-slate-50 rounded-2xl border border-slate-200 p-8 md:p-10 shadow-sm relative">
            <!-- Alerta de Sucesso -->
            <div v-if="submitted" class="text-center py-8 space-y-4">
              <div class="h-16 w-16 mx-auto flex items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 class="text-xl font-bold text-slate-900">Formulário Enviado!</h3>
              <p class="text-slate-600 text-sm max-w-md mx-auto">
                Muito obrigado por se conectar com a PIB de São Paulo, <strong>{{ form.name }}</strong>. Nossa equipe de acolhimento entrará em contato via WhatsApp muito em breve.
              </p>
              <button 
                @click="resetForm" 
                class="mt-4 text-xs font-bold text-amber-600 hover:text-amber-700 underline"
              >
                Enviar outra mensagem
              </button>
            </div>
  
            <!-- Formulário Principal -->
            <form v-else @submit.prevent="submitForm" class="space-y-6">
              <div class="space-y-1">
                <label for="name" class="block text-xs font-bold uppercase text-slate-500 tracking-wider">Seu Nome completo</label>
                <input 
                  id="name" 
                  v-model="form.name" 
                  type="text" 
                  required
                  placeholder="Ex: João da Silva" 
                  class="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500 bg-white"
                />
              </div>
  
              <div class="space-y-1">
                <label for="whatsapp" class="block text-xs font-bold uppercase text-slate-500 tracking-wider">WhatsApp para Contato</label>
                <input 
                  id="whatsapp" 
                  v-model="form.phone" 
                  type="tel" 
                  required
                  placeholder="Ex: (11) 99999-9999" 
                  class="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500 bg-white"
                />
              </div>
  
              <div class="space-y-1">
                <label class="block text-xs font-bold uppercase text-slate-500 tracking-wider">Como podemos ajudar você?</label>
                <div class="grid gap-3 sm:grid-cols-2 mt-2">
                  <label class="flex items-center gap-3 bg-white p-3 rounded-lg border border-slate-200 cursor-pointer hover:border-amber-500/50 transition-colors">
                    <input type="radio" v-model="form.reason" value="visita" class="text-amber-500 focus:ring-amber-500 h-4 w-4" />
                    <span class="text-xs font-semibold text-slate-700">Planejar visita presencial</span>
                  </label>
                  <label class="flex items-center gap-3 bg-white p-3 rounded-lg border border-slate-200 cursor-pointer hover:border-amber-500/50 transition-colors">
                    <input type="radio" v-model="form.reason" value="oracao" class="text-amber-500 focus:ring-amber-500 h-4 w-4" />
                    <span class="text-xs font-semibold text-slate-700">Solicitar Oração / Visita</span>
                  </label>
                  <label class="flex items-center gap-3 bg-white p-3 rounded-lg border border-slate-200 cursor-pointer hover:border-amber-500/50 transition-colors">
                    <input type="radio" v-model="form.reason" value="pg" class="text-amber-500 focus:ring-amber-500 h-4 w-4" />
                    <span class="text-xs font-semibold text-slate-700">Conhecer um Pequeno Grupo</span>
                  </label>
                  <label class="flex items-center gap-3 bg-white p-3 rounded-lg border border-slate-200 cursor-pointer hover:border-amber-500/50 transition-colors">
                    <input type="radio" v-model="form.reason" value="outros" class="text-amber-500 focus:ring-amber-500 h-4 w-4" />
                    <span class="text-xs font-semibold text-slate-700">Outros Assuntos</span>
                  </label>
                </div>
              </div>
  
              <div class="pt-4">
                <button 
                  type="submit" 
                  class="w-full rounded-lg bg-amber-500 py-4 text-center font-bold text-slate-900 transition-all hover:bg-amber-400 active:scale-95 text-sm"
                >
                  Enviar Solicitação de Conexão
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, reactive } from 'vue'
  
  /**
   * Página: Sou Novo (Landing Page de Acolhimento)
   * Descrição: O canal principal para captação e acolhimento de visitantes.
   * Alinhamento: Conceito Visitor-First UX e suporte a conversão rápida em até 48 horas.
   */
  
  // SEO Específico focado no visitante local do centro de São Paulo
  useSeoMeta({
    title: 'Sou Novo por Aqui — PIB de São Paulo',
    description: 'Programe sua primeira visita à Primeira Igreja Batista de São Paulo. Estacionamento gratuito, Espaço Kids e acolhimento esperando por você!'
  })
  
  const submitted = ref(false)
  
  const form = reactive({
    name: '',
    phone: '',
    reason: 'visita'
  })
  
  const submitForm = () => {
    // Simulação de envio com sucesso para validação local de UX
    submitted.value = true
  }
  
  const resetForm = () => {
    form.name = ''
    form.phone = ''
    form.reason = 'visita'
    submitted.value = false
  }
  </script>