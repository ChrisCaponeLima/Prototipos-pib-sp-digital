<template>
    <section class="bg-slate-900 py-20 px-6 lg:px-12 text-white relative overflow-hidden">
      <!-- Detalhe decorativo de fundo simulando feixes de luz urbana -->
      <div class="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div class="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
  
      <div class="container mx-auto max-w-6xl relative z-10">
        
        <!-- Cabeçalho da Seção -->
        <div class="mb-16 text-center max-w-3xl mx-auto">
          <span class="text-xs font-bold uppercase tracking-widest text-amber-400">
            Fé, Amor e Ação Prática
          </span>
          <h2 class="mt-2 text-3xl font-bold tracking-tight text-white md:text-5xl font-sans">
            Uma Igreja <span class="text-amber-400 font-serif italic">Viva</span> para a Cidade
          </h2>
          <p class="mt-4 text-lg text-slate-300 leading-relaxed">
            Nossa fé não se limita aos domingos. Há mais de um século, nos dedicamos a amar, servir e transformar o centro de São Paulo através de ações práticas de impacto comunitário e social.
          </p>
        </div>
  
        <!-- Grid de Frentes de Ação -->
        <div class="grid gap-8 md:grid-cols-3">
          
          <!-- Bloco 1: Acolhimento e Assistência -->
          <div class="rounded-2xl border border-slate-800 bg-slate-950/60 p-8 backdrop-blur-sm transition-all hover:border-amber-500/30">
            <div class="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10 text-amber-400">
              <!-- SVG Coração / Mão -->
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-white">Acolhimento & Dignidade</h3>
            <p class="mt-3 text-slate-400 text-sm leading-relaxed">
              Projetos contínuos de apoio a pessoas em situação de extrema vulnerabilidade social no centro de SP, fornecendo alimentação, banho, roupas limpas e, acima de tudo, escuta ativa e reinserção social.
            </p>
          </div>
  
          <!-- Bloco 2: Apoio a Imigrantes e Refugiados -->
          <div class="rounded-2xl border border-slate-800 bg-slate-950/60 p-8 backdrop-blur-sm transition-all hover:border-amber-500/30">
            <div class="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10 text-amber-400">
              <!-- SVG Globo / Conexão -->
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2h2m4-3.055a9 9 0 11-16.19 5.067" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-white">Apoio a Imigrantes</h3>
            <p class="mt-3 text-slate-400 text-sm leading-relaxed">
              Por estarmos em uma região multicultural, oferecemos orientação jurídica, ensino da língua portuguesa, apoio emocional e distribuição de insumos básicos para auxiliar na integração de famílias imigrantes e refugiados.
            </p>
          </div>
  
          <!-- Bloco 3: Desenvolvimento e Educação -->
          <div class="rounded-2xl border border-slate-800 bg-slate-950/60 p-8 backdrop-blur-sm transition-all hover:border-amber-500/30">
            <div class="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10 text-amber-400">
              <!-- SVG Livro / Graduação -->
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-white">Capacitação & Cidadania</h3>
            <p class="mt-3 text-slate-400 text-sm leading-relaxed">
              Cursos livres, oficinas profissionalizantes, apoio escolar para crianças do bairro e triagem de talentos profissionais para conectar voluntários de diversas áreas com as demandas reais de nossa comunidade.
            </p>
          </div>
  
        </div>
  
        <!-- Banner Interno de Convocação (CTA) -->
        <div class="mt-16 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 p-8 md:p-12 text-slate-950 flex flex-col md:flex-row justify-between items-center gap-8">
          <div class="max-w-2xl text-center md:text-left">
            <h4 class="text-2xl md:text-3xl font-bold tracking-tight">Quer fazer a diferença na nossa cidade?</h4>
            <p class="mt-2 text-slate-900/90 font-medium">
              Seja você profissional da saúde, educação, direito, ou alguém disposto a estender a mão: seu talento pode transformar vidas no Centro de São Paulo.
            </p>
          </div>
          <NuxtLink 
            to="/sou-novo" 
            class="shrink-0 rounded-lg bg-slate-950 px-6 py-4 font-bold text-white transition-all hover:bg-slate-800 active:scale-95 text-center w-full md:w-auto"
          >
            Quero ser Voluntário
          </NuxtLink>
        </div>
  
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  /**
   * Componente: SocialImpact
   * Descrição: Mostra a atuação e relevância social da PIB SP no centro da cidade.
   * Alinhamento: Requisito de Ação Social & Missões no Centro (Campos Elíseos).
   */
  </script>