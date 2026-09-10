<template>
    <div class="bg-slate-50 min-h-screen py-12 px-4 sm:px-6 lg:px-12 text-slate-800">
      <div class="container mx-auto max-w-6xl space-y-12 animate-fade-in">
        
        <!-- CABEÇALHO DA PÁGINA -->
        <div class="text-center max-w-3xl mx-auto space-y-4">
          <span class="text-xs font-bold uppercase tracking-widest text-amber-600 bg-amber-500/10 px-3 py-1 rounded-full">
            Fé em Ação na Metrópole
          </span>
          <h1 class="text-3xl font-bold tracking-tight text-slate-900 md:text-5xl font-sans">
            Ação Social & <span class="text-amber-600 font-serif italic">Missões</span>
          </h1>
          <p class="text-lg text-slate-600 leading-relaxed">
            Localizada na Praça Princesa Isabel, nos Campos Elíseos, a PIB de São Paulo pulsa no coração da capital paulista há mais de 120 anos. Cremos em uma igreja viva para a cidade, que manifesta o Evangelho através do acolhimento prático, alívio de vulnerabilidades e restauração social.
          </p>
        </div>
  
        <!-- MÉTRICAS DE IMPACTO SOCIAL (KPIs REATIVOS) -->
        <section class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          
          <!-- KPI 1 -->
          <div class="bg-slate-900 text-white rounded-2xl p-6 border border-slate-800 shadow-sm flex items-center gap-4">
            <span class="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10 text-amber-400 shrink-0">
              <!-- Ícone Coração / Cuidado -->
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </span>
            <div>
              <span class="block text-2xl font-extrabold text-white">4.800+</span>
              <span class="text-xs text-slate-400 font-medium">Atendimentos Sociais/Ano</span>
            </div>
          </div>
  
          <!-- KPI 2 -->
          <div class="bg-slate-900 text-white rounded-2xl p-6 border border-slate-800 shadow-sm flex items-center gap-4">
            <span class="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10 text-amber-400 shrink-0">
              <!-- Ícone Usuários / Imigrantes -->
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7V4m0 0h12m0 0v3m0-3h3m-3 3l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9V4" />
              </svg>
            </span>
            <div>
              <span class="block text-2xl font-extrabold text-white">350+</span>
              <span class="text-xs text-slate-400 font-medium">Imigrantes Acolhidos</span>
            </div>
          </div>
  
          <!-- KPI 3 -->
          <div class="bg-slate-900 text-white rounded-2xl p-6 border border-slate-800 shadow-sm flex items-center gap-4">
            <span class="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10 text-amber-400 shrink-0">
              <!-- Ícone Voluntários -->
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </span>
            <div>
              <span class="block text-2xl font-extrabold text-white">120+</span>
              <span class="text-xs text-slate-400 font-medium">Voluntários Ativos</span>
            </div>
          </div>
  
          <!-- KPI 4 -->
          <div class="bg-slate-900 text-white rounded-2xl p-6 border border-slate-800 shadow-sm flex items-center gap-4">
            <span class="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10 text-amber-400 shrink-0">
              <!-- Ícone Refeições / Apoio -->
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </span>
            <div>
              <span class="block text-2xl font-extrabold text-white">15.000+</span>
              <span class="text-xs text-slate-400 font-medium">Refeições e Cestas/Ano</span>
            </div>
          </div>
  
        </section>
  
        <!-- FRENTES DE TRABALHO ATIVAS (CARDS MODERNOS COM ÍCONES SVGS BLINDADOS) -->
        <section class="space-y-6">
          <div class="border-b border-slate-200 pb-3">
            <h2 class="text-2xl font-bold text-slate-900">Nossas Frentes de Atuação no Centro</h2>
            <p class="text-sm text-slate-500 mt-1">Como servimos de maneira prática a comunidade dos Campos Elíseos e arredores.</p>
          </div>
  
          <div class="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            
            <!-- Frente 1: Apoio Jurídico e Acolhimento de Refugiados/Imigrantes -->
            <div class="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-6">
              <div class="space-y-4">
                <div class="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500/10 text-amber-600 shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7V4m0 0h12m0 0v3m0-3h3m-3 3l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9V4" />
                  </svg>
                </div>
                <div class="space-y-2">
                  <h3 class="text-lg font-bold text-slate-900">Acolhimento a Imigrantes e Refugiados</h3>
                  <p class="text-slate-600 text-sm leading-relaxed">
                    Oferecemos assessoria jurídica gratuita para regularização documental de estrangeiros, além de aulas semanais de Língua Portuguesa e orientação cultural para integração no mercado de trabalho paulista.
                  </p>
                </div>
              </div>
              <div class="text-xs font-semibold text-amber-600 flex items-center gap-1.5">
                <span>● Parceria com Advogados Membros</span>
              </div>
            </div>
  
            <!-- Frente 2: Mutirões e Atendimento de Saúde -->
            <div class="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-6">
              <div class="space-y-4">
                <div class="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500/10 text-amber-600 shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <div class="space-y-2">
                  <h3 class="text-lg font-bold text-slate-900">Mutirão Solidário e Saúde no Centro</h3>
                  <p class="text-slate-600 text-sm leading-relaxed">
                    Ações periódicas de saúde e dignidade na Praça Princesa Isabel. Nossa equipe de 24 médicos, psicólogos e enfermeiros voluntários provê consultas rápidas, exames de glicemia, aferição de pressão e apoio psicossocial.
                  </p>
                </div>
              </div>
              <div class="text-xs font-semibold text-amber-600 flex items-center gap-1.5">
                <span>● 24 Profissionais de Saúde Cadastrados</span>
              </div>
            </div>
  
            <!-- Frente 3: Recreação e Reforço Escolar Kids -->
            <div class="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-6">
              <div class="space-y-4">
                <div class="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500/10 text-amber-600 shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                  </svg>
                </div>
                <div class="space-y-2">
                  <h3 class="text-lg font-bold text-slate-900">Apoio Escolar e Recreação Infantil</h3>
                  <p class="text-slate-600 text-sm leading-relaxed">
                    Oferecemos oficinas educativas, atividades lúdicas de artes e acompanhamento pedagógico/reforço escolar para crianças em situação de vulnerabilidade e filhos de imigrantes residentes no centro de São Paulo.
                  </p>
                </div>
              </div>
              <div class="text-xs font-semibold text-amber-600 flex items-center gap-1.5">
                <span>● 37 Professores e Tutores Ativos</span>
              </div>
            </div>
  
          </div>
        </section>
  
        <!-- PORTAL DE ENGAJAMENTO: COMO AJUDAR? (FORMULÁRIO MULTI-AÇÃO DE VOLUNTARIADO OU DOAÇÃO) -->
        <section class="grid gap-8 grid-cols-1 lg:grid-cols-12 items-start">
          
          <!-- Formulário Reativo de Cadastro de Voluntários (7 colunas) -->
          <div class="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm space-y-6">
            <div>
              <h2 class="text-xl font-bold text-slate-900 flex items-center gap-2">
                Faça Parte: Seja um Voluntário Social
              </h2>
              <p class="text-xs text-slate-500 mt-1">
                Conectamos as suas habilidades profissionais e talentos com as demandas ativas de ação social no Centro.
              </p>
            </div>
  
            <!-- Alerta de Envio Bem Sucedido -->
            <div v-if="cadastroEnviado" class="bg-emerald-50 border border-emerald-200 rounded-xl p-6 text-center space-y-3">
              <div class="h-12 w-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 class="font-bold text-slate-900 text-sm">Cadastro de Voluntariado Recebido!</h3>
              <p class="text-xs text-slate-600 leading-relaxed max-w-sm mx-auto">
                Que alegria ter você conosco! Nossa equipe de ação social analisará sua especialidade e entrará em contato via WhatsApp em até 48 horas para agendar seu início.
              </p>
              <button @click="resetForm" class="text-xs font-bold text-amber-600 hover:text-amber-700 underline block mx-auto pt-2">
                Cadastrar outra área ou voluntário
              </button>
            </div>
  
            <!-- Formulário Principal -->
            <form v-else @submit.prevent="submeterVoluntario" class="space-y-4">
              <div class="grid gap-4 grid-cols-1 sm:grid-cols-2">
                <!-- Nome -->
                <div class="space-y-1">
                  <label for="social-nome" class="block text-xs font-bold uppercase text-slate-500 tracking-wider">Nome Completo</label>
                  <input 
                    id="social-nome"
                    v-model="form.nome"
                    type="text"
                    required
                    placeholder="Seu nome"
                    class="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-xs focus:border-amber-500 focus:outline-none bg-white"
                  />
                </div>
  
                <!-- WhatsApp -->
                <div class="space-y-1">
                  <label for="social-tel" class="block text-xs font-bold uppercase text-slate-500 tracking-wider">WhatsApp para Contato</label>
                  <input 
                    id="social-tel"
                    v-model="form.whatsapp"
                    type="tel"
                    required
                    placeholder="Ex: (11) 99999-9999"
                    class="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-xs focus:border-amber-500 focus:outline-none bg-white"
                  />
                </div>
              </div>
  
              <!-- Email -->
              <div class="space-y-1">
                <label for="social-email" class="block text-xs font-bold uppercase text-slate-500 tracking-wider">E-mail</label>
                <input 
                  id="social-email"
                  v-model="form.email"
                  type="email"
                  required
                  placeholder="exemplo@email.com"
                  class="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-xs focus:border-amber-500 focus:outline-none bg-white"
                />
              </div>
  
              <div class="grid gap-4 grid-cols-1 sm:grid-cols-2">
                <!-- Área de Especialidade / Profissão -->
                <div class="space-y-1">
                  <label for="social-area" class="block text-xs font-bold uppercase text-slate-500 tracking-wider">Área de Atuação / Habilidade</label>
                  <select 
                    id="social-area"
                    v-model="form.areaAtuacao"
                    required
                    class="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-xs focus:border-amber-500 focus:outline-none bg-white font-medium"
                  >
                    <option value="" disabled>Selecione sua habilidade</option>
                    <option value="Saúde">Saúde & Bem-Estar (Médico, Psicólogo, etc.)</option>
                    <option value="Educação">Educação, Artes & Idiomas (Apoio Escolar)</option>
                    <option value="Jurídico">Jurídico & Cidadania (Advogado, Assistente)</option>
                    <option value="Logística">Logística & Apoio Prático (Triagem de Roupas/Alimentos)</option>
                    <option value="Geral">Outros / Desejo Servir onde houver maior necessidade</option>
                  </select>
                </div>
  
                <!-- Disponibilidade -->
                <div class="space-y-1">
                  <label for="social-periodo" class="block text-xs font-bold uppercase text-slate-500 tracking-wider">Melhor Disponibilidade</label>
                  <select 
                    id="social-periodo"
                    v-model="form.disponibilidade"
                    required
                    class="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-xs focus:border-amber-500 focus:outline-none bg-white font-medium"
                  >
                    <option value="" disabled>Selecione seu período livre</option>
                    <option value="Sabado">Sábados (Ações e Mutirões)</option>
                    <option value="Semana-Dia">Dias de Semana (Comercial / Apoio)</option>
                    <option value="Semana-Noite">Dias de Semana (Noites / Aulas)</option>
                    <option value="Domingo">Domingos (Apoio Interno / Kids)</option>
                  </select>
                </div>
              </div>
  
              <!-- Notas adicionais de Habilidades -->
              <div class="space-y-1">
                <label for="social-notes" class="block text-xs font-bold uppercase text-slate-500 tracking-wider">Descreva brevemente como gostaria de apoiar</label>
                <textarea 
                  id="social-notes"
                  v-model="form.descricaoHabilidades"
                  rows="3"
                  placeholder="Ex: Sou médico clínico geral e gostaria de atuar nos mutirões de sábado de manhã..."
                  class="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-xs focus:border-amber-500 focus:outline-none bg-white resize-none"
                ></textarea>
              </div>
  
              <p class="text-[10px] text-slate-400 leading-tight">
                *Ao enviar, você autoriza o tratamento dos seus dados de contato pela secretaria de Ação Social da PIB SP, estritamente de acordo com as normas da LGPD.
              </p>
  
              <button 
                type="submit"
                class="w-full rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-3.5 text-xs transition-colors active:scale-95 shadow-sm"
              >
                Enviar Cadastro de Voluntário
              </button>
            </form>
          </div>
  
          <!-- Apoio Financeiro e Doações / PIX (5 colunas) -->
          <div class="lg:col-span-5 bg-slate-900 text-white rounded-2xl border border-slate-800 p-6 md:p-8 shadow-sm space-y-6 flex flex-col justify-between">
            <div class="space-y-4">
              <div>
                <span class="text-[10px] font-bold uppercase tracking-widest text-amber-400 block">Sustento Ministerial</span>
                <h3 class="text-xl font-bold mt-1 text-white">Contribua com Nossos Projetos</h3>
                <p class="text-slate-300 text-xs leading-relaxed mt-2">
                  Nossas ações de impacto social e acolhimento no centro de São Paulo são financiadas e mantidas integralmente através das doações e ofertas voluntárias de nossos membros e parceiros de missões. Faça parte desta provisão prática!
                </p>
              </div>
  
              <!-- Caixa de Destaque do PIX Social -->
              <div class="bg-slate-950 rounded-xl p-5 border border-slate-800/80 text-left space-y-4">
                <div class="flex items-center gap-3">
                  <span class="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0">
                    ✨
                  </span>
                  <div>
                    <span class="text-[10px] font-bold uppercase tracking-wider text-emerald-400 block">PIX Destinado à Ação Social</span>
                    <span class="text-xs font-semibold text-slate-300">Evite dinheiro físico, faça por QR Code</span>
                  </div>
                </div>
  
                <!-- Linha de cópia do PIX -->
                <div class="space-y-1 pt-1">
                  <span class="block text-[10px] font-bold uppercase text-slate-500">Chave CNPJ / E-mail Social</span>
                  <div class="flex items-center gap-2">
                    <input 
                      type="text" 
                      readonly 
                      value="social@pibsp.org" 
                      class="bg-slate-900 border border-slate-800 rounded-lg text-xs px-3 py-2 w-full text-white font-mono select-all focus:outline-none"
                    />
                    <button 
                      @click="copiarChavePIX"
                      class="px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-bold transition-all text-amber-400 shrink-0 active:scale-95"
                    >
                      {{ pixCopiado ? 'Copiado!' : 'Copiar' }}
                    </button>
                  </div>
                </div>
              </div>
            </div>
  
            <div class="bg-slate-950/40 p-4 rounded-xl border border-slate-800 text-[10px] leading-relaxed text-slate-400 mt-4">
              📋 <strong>Transparência e Prestação de Contas:</strong> Todos os demonstrativos de arrecadação e destinação de recursos para os projetos sociais são consolidados e disponibilizados para download e consulta pública na nossa página de Transparência Financeira trimestralmente.
            </div>
          </div>
  
        </section>
  
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, reactive } from 'vue'
  
  // Configurações SEO otimizadas para posicionamento orgânico de Ação Social e Missões
  useSeoMeta({
    title: 'Ação Social, Missões & Impacto Urbano — PIB de São Paulo',
    description: 'Conheça nossos projetos sociais nos Campos Elíseos e centro de SP: apoio a imigrantes, mutirões de saúde e voluntariado prático no coração da cidade.'
  })
  
  // Estados Reativos
  const cadastroEnviado = ref(false)
  const pixCopiado = ref(false)
  
  const form = reactive({
    nome: '',
    whatsapp: '',
    email: '',
    areaAtuacao: '',
    disponibilidade: '',
    descricaoHabilidades: ''
  })
  
  // Envio Reativo de Voluntariado
  const submeterVoluntario = () => {
    // Lógica de simulação de submissão do formulário do participante voluntário
    cadastroEnviado.value = true
  }
  
  const resetForm = () => {
    form.nome = ''
    form.whatsapp = ''
    form.email = ''
    form.areaAtuacao = ''
    form.disponibilidade = ''
    form.descricaoHabilidades = ''
    cadastroEnviado.value = false
  }
  
  // Cópia da chave PIX Social
  const copiarChavePIX = () => {
    navigator.clipboard.writeText('social@pibsp.org')
    pixCopiado.value = true
    setTimeout(() => {
      pixCopiado.value = false
    }, 2500)
  }
  </script>
  
  <style scoped>
  /* Transição simples de entrada de página */
  .animate-fade-in {
    animation: fadeIn 0.4s ease-out;
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(4px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  </style>