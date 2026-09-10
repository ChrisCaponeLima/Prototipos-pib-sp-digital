<template>
    <section class="bg-white py-16 px-6 lg:px-12 text-slate-800">
      <div class="container mx-auto max-w-6xl">
        
        <!-- Grid Principal: Texto à Esquerda, Cards de Dúvidas à Direita -->
        <div class="grid gap-12 lg:grid-cols-12 lg:items-center">
          
          <!-- Coluna de Texto Principal (4 cols) -->
          <div class="space-y-6 lg:col-span-5">
            <span class="text-xs font-bold uppercase tracking-widest text-amber-600">
              Você é nosso convidado
            </span>
            <h2 class="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              Como é uma visita à PIB de São Paulo?
            </h2>
            <p class="text-lg text-slate-600 leading-relaxed">
              Sabemos que visitar uma igreja pela primeira vez pode gerar algumas dúvidas. Queremos que você se sinta totalmente em casa e saiba exatamente o que esperar ao cruzar as nossas portas no próximo domingo.
            </p>
            <div class="pt-4">
              <NuxtLink 
                to="/sou-novo" 
                class="inline-flex items-center justify-center rounded-lg bg-amber-500 px-6 py-3 font-bold text-slate-900 transition-all hover:bg-amber-400 active:scale-95"
              >
                Guia Completo do Visitante
              </NuxtLink>
            </div>
          </div>
  
          <!-- Coluna de Cards de Dúvidas (7 cols) -->
          <div class="grid gap-6 md:grid-cols-2 lg:col-span-7">
            
            <!-- Card 1: Vestuário -->
            <div class="rounded-2xl border border-slate-100 bg-slate-50 p-6 transition-all hover:shadow-md">
              <div class="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500/10 text-amber-600">
                <!-- SVG de Cabide/Roupa -->
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <h3 class="text-lg font-bold text-slate-900">Como me vestir?</h3>
              <p class="mt-2 text-sm text-slate-600">
                Não se preocupe com formalidades. Nosso ambiente é acolhedor e casual. Você verá pessoas de terno e gravata, mas também verá muitas de jeans e camiseta. Venha como se sentir confortável!
              </p>
            </div>
  
            <!-- Card 2: Espaço Kids -->
            <div class="rounded-2xl border border-slate-100 bg-slate-50 p-6 transition-all hover:shadow-md">
              <div class="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500/10 text-amber-600">
                <!-- SVG de Criança/Blocos -->
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 class="text-lg font-bold text-slate-900">E os meus filhos?</h3>
              <p class="mt-2 text-sm text-slate-600">
                Temos uma estrutura segura com berçário e classes preparadas para receber crianças de todas as idades (Espaço Kids) [2]. Eles aprenderão a Bíblia de forma divertida enquanto você assiste ao culto [2].
              </p>
            </div>
  
            <!-- Card 3: Recepção -->
            <div class="rounded-2xl border border-slate-100 bg-slate-50 p-6 transition-all hover:shadow-md">
              <div class="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500/10 text-amber-600">
                <!-- SVG de Mãos / Boas-vindas -->
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 class="text-lg font-bold text-slate-900">Serei abordado na entrada?</h3>
              <p class="mt-2 text-sm text-slate-600">
                Nossa equipe de recepção estará na porta para te dar um boletim e te guiar até um assento confortável, se desejar [3, 4]. Respeitamos seu espaço e você não precisará se levantar ou se expor durante o culto.
              </p>
            </div>
  
            <!-- Card 4: Estilo do Culto -->
            <div class="rounded-2xl border border-slate-100 bg-slate-50 p-6 transition-all hover:shadow-md">
              <div class="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500/10 text-amber-600">
                <!-- SVG de Livro / Bíblia -->
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 class="text-lg font-bold text-slate-900">Como funciona o culto?</h3>
              <p class="mt-2 text-sm text-slate-600">
                Nossas celebrações duram cerca de 1 hora e 15 minutos. Elas combinam tempos de louvor (música) com mensagens práticas e bíblicas do nosso pastor sênior para aplicar no seu dia a dia [5].
              </p>
            </div>
  
          </div>
  
        </div>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  /**
   * Componente: VisitorWelcome
   * Descrição: Bloco para sanar dúvidas práticas e acolher o visitante de primeira viagem.
   * Princípio UX: Reduzir a barreira do desconhecido (anestesia social de recepção).
   */
  </script>