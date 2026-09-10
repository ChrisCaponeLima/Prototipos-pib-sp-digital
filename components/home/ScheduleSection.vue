<template>
    <section class="bg-slate-50 py-16 px-6 lg:px-12 text-slate-800">
      <div class="container mx-auto max-w-6xl">
        
        <!-- Cabeçalho da Seção -->
        <div class="mb-12 text-center md:text-left">
          <span class="text-xs font-bold uppercase tracking-widest text-amber-600">
            Planeje sua Visita
          </span>
          <h2 class="mt-2 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Cultos Presenciais & Localização
          </h2>
          <p class="mt-4 max-w-2xl text-lg text-slate-600">
            Estamos localizados em uma região histórica e de fácil acesso no centro de São Paulo. Veja nossos horários e prepare-se para estar conosco [2, 3].
          </p>
        </div>
  
        <!-- Grid de Conteúdo -->
        <div class="grid gap-8 lg:grid-cols-3">
          
          <!-- CARD 1: Horários dos Cultos -->
          <div class="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <div>
              <div class="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600 mb-6">
                <!-- SVG Relógio -->
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 class="text-xl font-bold text-slate-900">Nossas Celebrações</h3>
              <p class="mt-2 text-slate-600">Celebramos a fé juntos todos os domingos em dois períodos principais [1, 3]:</p>
              
              <div class="mt-6 space-y-4">
                <div class="flex items-start gap-3 border-l-4 border-amber-500 pl-4">
                  <div>
                    <h4 class="font-bold text-slate-900">Culto da Manhã</h4>
                    <p class="text-sm text-slate-500">Domingo, às 09:00h</p>
                  </div>
                </div>
                <div class="flex items-start gap-3 border-l-4 border-amber-500 pl-4">
                  <div>
                    <h4 class="font-bold text-slate-900">Culto da Noite</h4>
                    <p class="text-sm text-slate-500">Domingo, às 19:00h</p>
                  </div>
                </div>
                <div class="flex items-start gap-3 border-l-4 border-slate-300 pl-4">
                  <div>
                    <h4 class="font-bold text-slate-700">Reuniões de Oração</h4>
                    <p class="text-sm text-slate-500">Quartas-feiras, às 19:30h [3]</p>
                  </div>
                </div>
              </div>
            </div>
  
            <div class="mt-8 border-t border-slate-100 pt-6">
              <span class="text-xs text-slate-400 block mb-2">Transmissões Online</span>
              <p class="text-sm text-slate-600">Não consegue vir presencialmente? Transmitimos nossos cultos de domingo ao vivo [3].</p>
            </div>
          </div>
  
          <!-- CARD 2: Endereço e Acesso -->
          <div class="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <div>
              <div class="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600 mb-6">
                <!-- SVG Pin de Mapa -->
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 class="text-xl font-bold text-slate-900">Como Chegar</h3>
              <p class="mt-2 text-slate-600">Estamos localizados no coração de São Paulo, em frente a uma praça de fácil referência [2]:</p>
              
              <div class="mt-6 space-y-4">
                <p class="text-slate-900 font-medium">
                  Praça Princesa Isabel, s/n<br>
                  Campos Elíseos, São Paulo - SP [2]
                </p>
                
                <div class="space-y-2">
                  <h4 class="text-sm font-semibold text-slate-900 uppercase tracking-wider">Transporte Público [1]:</h4>
                  <p class="text-sm text-slate-600">
                    🚍 Próximo ao corredor de ônibus da Av. Rio Branco e Duque de Caxias.<br>
                    🚇 Estações de metrô Luz (Linha 1-Azul/4-Amarela) e Santa Cecília (Linha 3-Vermelha).
                  </p>
                </div>
              </div>
            </div>
  
            <div class="mt-8 flex flex-wrap gap-3 pt-6 border-t border-slate-100">
              <a 
                href="https://maps.google.com/?q=Praça+Princesa+Isabel+Campos+Eliseos+PIB" 
                target="_blank" 
                class="inline-flex flex-1 items-center justify-center rounded-lg bg-slate-900 px-4 py-2.5 text-center text-xs font-bold text-white transition-colors hover:bg-slate-800"
              >
                Google Maps [1]
              </a>
              <a 
                href="https://waze.com/ul?q=Praça+Princesa+Isabel+Campos+Eliseos+PIB" 
                target="_blank" 
                class="inline-flex flex-1 items-center justify-center rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-center text-xs font-bold text-slate-700 transition-colors hover:bg-slate-50"
              >
                Waze [1]
              </a>
            </div>
          </div>
  
          <!-- CARD 3: Infraestrutura & Acolhimento -->
          <div class="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <div>
              <div class="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600 mb-6">
                <!-- SVG Estrela/Acolhimento -->
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 class="text-xl font-bold text-slate-900">Estrutura & Facilidades</h3>
              <p class="mt-2 text-slate-600">Preparamos nossa estrutura física para acolher você e sua família com total conforto [1]:</p>
              
              <ul class="mt-6 space-y-4 text-sm text-slate-600">
                <li class="flex items-start gap-2">
                  <span class="text-amber-500 font-bold">✓</span>
                  <span><strong>Estacionamento Conveniado:</strong> Disponível nos horários de cultos para sua total tranquilidade e segurança [1].</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-amber-500 font-bold">✓</span>
                  <span><strong>Acessibilidade Plena:</strong> Rampas, elevadores e banheiros adaptados para pessoas com deficiência ou mobilidade reduzida [1, 4, 5].</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-amber-500 font-bold">✓</span>
                  <span><strong>Espaço Kids & Berçário:</strong> Local seguro e estruturado para que seus filhos aprendam a palavra de Deus enquanto você adora [1].</span>
                </li>
              </ul>
            </div>
  
            <div class="mt-8 border-t border-slate-100 pt-6">
              <NuxtLink 
                to="/sou-novo" 
                class="text-xs font-bold text-amber-600 hover:text-amber-700 inline-flex items-center gap-1"
              >
                O que esperar da minha primeira visita? ➔
              </NuxtLink>
            </div>
          </div>
  
        </div>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  /**
   * Componente: ScheduleSection
   * Descrição: Bloco de endereço, horários de cultos, facilidades e acesso.
   * Princípio UX: Responder 'onde', 'quando' e 'como' em menos de 5 segundos [1, 6].
   */
  </script>