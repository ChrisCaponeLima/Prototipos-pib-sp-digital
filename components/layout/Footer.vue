<template>
    <footer class="bg-slate-950 text-slate-300 pt-16 pb-8 px-6 lg:px-12 border-t border-slate-900 relative overflow-hidden">
      <!-- Decoração sutil de fundo -->
      <div class="absolute bottom-0 right-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>
  
      <div class="container mx-auto max-w-6xl relative z-10">
        
        <!-- Seção Principal: Grid de 4 Colunas -->
        <div class="grid gap-12 lg:grid-cols-12 mb-12">
          
          <!-- Coluna 1: Identidade e História (4 colunas) -->
          <div class="lg:col-span-4 space-y-6">
            <div class="flex items-center gap-3">
              <!-- Logo Simbólica em SVG -->
              <div class="h-10 w-10 flex items-center justify-center rounded-lg bg-amber-500 text-slate-950 font-serif font-bold text-xl">
                P
              </div>
              <div>
                <span class="block text-lg font-bold text-white tracking-wide font-sans">PIB de São Paulo</span>
                <span class="text-[10px] text-amber-500 font-semibold uppercase tracking-wider block -mt-1">Primeira Igreja Batista</span>
              </div>
            </div>
            <p class="text-sm text-slate-400 leading-relaxed">
              Uma comunidade histórica fundada em 1899 [4]. Vivendo o Evangelho de Cristo de forma prática e relevante no coração de São Paulo, promovendo acolhimento, fé e transformação urbana [4-6].
            </p>
            <!-- Redes Sociais -->
            <div class="flex items-center gap-4 pt-2">
              <!-- Instagram -->
              <a href="https://instagram.com" target="_blank" class="h-9 w-9 flex items-center justify-center rounded-lg bg-slate-900 hover:bg-amber-500 hover:text-slate-950 transition-colors" title="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <!-- YouTube -->
              <a href="https://youtube.com" target="_blank" class="h-9 w-9 flex items-center justify-center rounded-lg bg-slate-900 hover:bg-amber-500 hover:text-slate-950 transition-colors" title="YouTube">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.163a3.003 3.003 0 00-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.517 0-9.388.507a3.003 3.003 0 00-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 002.11 2.11c1.871.507 9.388.507 9.388.507s7.517 0 9.388-.507a3.003 3.003 0 002.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
              <!-- Spotify -->
              <a href="https://spotify.com" target="_blank" class="h-9 w-9 flex items-center justify-center rounded-lg bg-slate-900 hover:bg-amber-500 hover:text-slate-950 transition-colors" title="Spotify">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 fill-current" viewBox="0 0 24 24"><path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm5.494 17.306c-.217.356-.684.472-1.04.254-2.884-1.762-6.513-2.162-10.787-1.185-.407.094-.82-.163-.914-.572-.094-.41.163-.82.572-.914 4.69-1.07 8.704-.616 11.916 1.35.357.217.473.684.253 1.041zm1.465-3.26c-.274.446-.856.592-1.302.318-3.3-2.028-8.332-2.617-12.23-1.432-.502.152-1.03-.137-1.183-.64-.153-.502.137-1.03.64-1.183 4.455-1.353 10.02-.7 13.8 1.62.445.275.592.857.318 1.302.002.001.002.001.002.001zm.126-3.41c-.328.536-1.03.712-1.567.384C15.53 8.99 8.924 8.772 5.093 9.935c-.6.182-1.23-.153-1.413-.754-.182-.6.153-1.23.754-1.412 4.56-1.385 11.83-1.134 16.29 1.517.538.322.715 1.025.385 1.562l.006.012z"/></svg>
              </a>
            </div>
          </div>
  
          <!-- Coluna 2: Navegação Rápida (2 colunas) -->
          <div class="lg:col-span-2 space-y-4">
            <h4 class="text-sm font-bold text-white uppercase tracking-wider border-l-2 border-amber-500 pl-3">
              Conecte-se
            </h4>
            <ul class="space-y-2 text-sm">
              <li><NuxtLink to="/sou-novo" class="hover:text-amber-400 transition-colors">Sou Novo</NuxtLink></li>
              <li><NuxtLink to="/sobre" class="hover:text-amber-400 transition-colors">Sobre Nós</NuxtLink></li>
              <li><NuxtLink to="/cultos" class="hover:text-amber-400 transition-colors">Cultos & Mídia</NuxtLink></li>
              <li><NuxtLink to="/pgs" class="hover:text-amber-400 transition-colors">Pequenos Grupos</NuxtLink></li>
              <li><NuxtLink to="/social" class="hover:text-amber-400 transition-colors">Ação Social</NuxtLink></li>
            </ul>
          </div>
  
          <!-- Coluna 3: Secretaria e Contatos (3 colunas) -->
          <div class="lg:col-span-3 space-y-4">
            <h4 class="text-sm font-bold text-white uppercase tracking-wider border-l-2 border-amber-500 pl-3">
              Secretaria
            </h4>
            <ul class="space-y-4 text-sm text-slate-400">
              <!-- Telefone/Whats -->
              <li class="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-amber-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>
                  <strong>Atendimento Comercial:</strong><br>
                  (11) 3224-0000<br>
                  <span class="text-xs text-slate-500">Seg. a Sex. das 09h às 17h</span>
                </span>
              </li>
              <!-- Email -->
              <li class="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-amber-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span class="break-all">
                  <strong>E-mail:</strong><br>
                  secretaria@pib.org.br
                </span>
              </li>
            </ul>
          </div>
  
          <!-- Coluna 4: Contribuição Facilitada - Dízimos/Ofertas PIX (3 colunas) [2, 3] -->
          <div class="lg:col-span-3 space-y-4">
            <h4 class="text-sm font-bold text-white uppercase tracking-wider border-l-2 border-amber-500 pl-3">
              Dízimos & Ofertas
            </h4>
            <div class="rounded-xl bg-slate-900 border border-slate-800 p-5 space-y-4">
              <p class="text-xs text-slate-400 leading-relaxed">
                Contribua com a manutenção, missões e projetos de acolhimento social no centro de SP [3].
              </p>
              
              <!-- Chave PIX e Cópia Rápida [3] -->
              <div class="space-y-2">
                <span class="text-[10px] uppercase font-bold text-amber-500 block tracking-wider">Chave PIX CNPJ</span>
                <div class="flex items-center gap-1 bg-slate-950 rounded-lg p-2 border border-slate-800">
                  <span class="text-xs font-mono text-slate-300 select-all truncate">
                    {{ pixKey }}
                  </span>
                  <button 
                    @click="copyPixKey" 
                    class="ml-auto shrink-0 p-1.5 rounded-md hover:bg-slate-900 transition-all active:scale-95 text-slate-400 hover:text-amber-500"
                    :title="copied ? 'Copiado!' : 'Copiar Chave'"
                  >
                    <!-- SVG Copiado Check ou Copiar Pasta -->
                    <svg v-if="copied" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                    </svg>
                  </button>
                </div>
                
                <!-- Alerta Reativo de Cópia Bem-sucedida -->
                <transition name="fade">
                  <p v-if="copied" class="text-[10px] text-emerald-400 font-semibold text-right -mt-1 animate-pulse">
                    ✓ Chave copiada com sucesso!
                  </p>
                </transition>
              </div>
  
              <!-- SSL / Segurança [2] -->
              <div class="flex items-center justify-between pt-2 border-t border-slate-800 text-[10px] text-slate-500">
                <span class="flex items-center gap-1">
                  <!-- SVG Cadeado -->
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  Conexão Segura SSL
                </span>
                <span class="uppercase tracking-wider font-semibold">PIB SP Transparência</span>
              </div>
            </div>
          </div>
  
        </div>
  
        <!-- Divisor Final -->
        <div class="border-t border-slate-900 pt-8 mt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <!-- Copyright -->
          <p class="text-center md:text-left">
            &copy; 2026 Primeira Igreja Batista de São Paulo. Todos os direitos reservados. [4]
          </p>
          
          <!-- Links Legais & Conformidade [2, 7] -->
          <div class="flex flex-wrap items-center justify-center gap-6">
            <NuxtLink to="/privacidade" class="hover:text-amber-500 transition-colors">
              Política de Privacidade & LGPD [2, 7]
            </NuxtLink>
            <span class="hidden md:inline text-slate-800">|</span>
            <span>
              Desenvolvido sob o conceito <span class="text-slate-400 font-medium">Visitor-First UX</span> [6]
            </span>
          </div>
        </div>
  
      </div>
    </footer>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  
  /**
   * Componente: Footer (Rodapé Completo)
   * Descrição: Encerramento de página contendo dados da secretaria, redes, links legais e o bloco PIX.
   * Alinhamento Estratégico: Fase 1 (MVP) - Conversão e facilitação de dízimos/ofertas.
   */
  
  // Chave PIX oficial (Simulação com CNPJ da igreja conforme documentação) [2, 3]
  const pixKey = '05.210.123/0001-99'
  const copied = ref(false)
  
  const copyPixKey = () => {
    // Copia o valor sem formatação de espaços para garantir o sucesso da transação
    navigator.clipboard.writeText(pixKey.replace(/\s/g, ''))
    copied.value = true
    
    // Reseta o estado de "Copiado!" após 3 segundos
    setTimeout(() => {
      copied.value = false
    }, 3000)
  }
  </script>
  
  <style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s ease;
  }
  
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
  </style>