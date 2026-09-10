<template>
    <div class="bg-slate-950 text-slate-100 min-h-screen py-8 px-6 lg:px-12">
      <div class="container mx-auto max-w-7xl space-y-8">
        
        <!-- CABEÇALHO DO PAINEL -->
        <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-slate-800 pb-6">
          <div>
            <span class="text-xs font-bold uppercase tracking-widest text-amber-500">Área de Inteligência & Pastoreio</span>
            <h1 class="text-3xl font-bold tracking-tight text-white md:text-4xl mt-1">
              Painel Geral de Gestão Eclesiástica (BI)
            </h1>
            <p class="text-sm text-slate-400 mt-1">
              Mapeamento e acompanhamento reativo da saúde espiritual, acolhimento de visitantes e recursos da PIB SP.
            </p>
          </div>
          <div class="flex items-center gap-3">
            <span class="inline-flex h-3.5 w-3.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span class="text-xs font-semibold text-slate-400 tracking-wider uppercase">
              Sincronizado com ERP (Atos29)
            </span>
          </div>
        </div>
  
        <!-- BLOCO DE MÉTRICAS CHAVE (KPIS DE VALIDAÇÃO) -->
        <!-- Corrigido: Adicionado grid-cols-1 por padrão (Mobile-First) para evitar esmagamento em celular -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <!-- Card Membros -->
          <div class="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-sm">
            <div class="flex items-center justify-between text-slate-400 mb-2">
              <span class="text-xs font-bold uppercase tracking-wider">Membros Ativos</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <div class="flex items-baseline gap-2">
              <span class="text-3xl font-extrabold text-white">1.240</span>
              <span class="text-xs font-semibold text-emerald-400">+4.2%</span>
            </div>
            <p class="text-[10px] text-slate-500 mt-2">Crescimento vs. último trimestre</p>
          </div>
  
          <!-- Card Visitantes do Mês -->
          <div class="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-sm">
            <div class="flex items-center justify-between text-slate-400 mb-2">
              <span class="text-xs font-bold uppercase tracking-wider">Novos Visitantes</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
              </svg>
            </div>
            <div class="flex items-baseline gap-2">
              <span class="text-3xl font-extrabold text-white">68</span>
              <span class="text-xs font-semibold text-emerald-400">+12%</span>
            </div>
            <p class="text-[10px] text-slate-500 mt-2">Inscrições na ficha "Sou Novo" (30 dias)</p>
          </div>
  
          <!-- Card SLA Acolhimento -->
          <div class="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-sm">
            <div class="flex items-center justify-between text-slate-400 mb-2">
              <span class="text-xs font-bold uppercase tracking-wider">Atendimento (48h)</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div class="flex items-baseline gap-2">
              <span class="text-3xl font-extrabold text-white">94.1%</span>
              <span class="text-xs font-semibold text-emerald-400">✓ Meta 90%</span>
            </div>
            <p class="text-[10px] text-slate-500 mt-2">Visitantes acolhidos em menos de 48h</p>
          </div>
  
          <!-- Card PGs Ativos -->
          <div class="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-sm">
            <div class="flex items-center justify-between text-slate-400 mb-2">
              <span class="text-xs font-bold uppercase tracking-wider">Pequenos Grupos</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div class="flex items-baseline gap-2">
              <span class="text-3xl font-extrabold text-white">32</span>
              <span class="text-xs font-semibold text-amber-400">3 Novos</span>
            </div>
            <p class="text-[10px] text-slate-500 mt-2">Grupos em atividade em SP</p>
          </div>
  
        </div>
  
        <!-- AREA CENTRAL: Alerta Frequência Fria & Funil de Retenção -->
        <!-- Corrigido: Adicionado grid-cols-1 por padrão para evitar quebras em telas médias/celulares -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          <!-- COLUNA 1: Sistema de Prevenção de Evasão / Alertas (7 colunas no desktop) -->
          <div class="lg:col-span-7 rounded-2xl border border-slate-800 bg-slate-900/40 p-6 md:p-8 space-y-6">
            <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h2 class="text-xl font-bold text-white flex items-center gap-2">
                  <span class="inline-flex h-2.5 w-2.5 rounded-full bg-red-500"></span>
                  Prevenção de Evasão (Frequência Fria)
                </h2>
                <p class="text-xs text-slate-400 mt-1">
                  Alertas automáticos baseados na ausência em PGs ou cultos por mais de 3 semanas consecutivas.
                </p>
              </div>
              <!-- Filtro de Gravidade -->
              <select v-model="selectedAusencia" class="rounded-lg bg-slate-950 border border-slate-800 text-xs px-3 py-2 text-slate-300 focus:outline-none focus:border-amber-500">
                <option value="0">Todos os alertas</option>
                <option value="3">3 semanas ou mais</option>
                <option value="4">4 semanas ou mais (Urgente)</option>
              </select>
            </div>
  
            <!-- Tabela de Alertas Pastorais -->
            <div class="overflow-x-auto rounded-xl border border-slate-800">
              <table class="w-full text-left border-collapse text-xs">
                <thead>
                  <tr class="bg-slate-950 text-slate-400 uppercase tracking-wider font-bold">
                    <th class="p-4 border-b border-slate-800">Membro</th>
                    <th class="p-4 border-b border-slate-800">Pequeno Grupo</th>
                    <th class="p-4 border-b border-slate-800 text-center">Ausência</th>
                    <th class="p-4 border-b border-slate-800">Status</th>
                    <th class="p-4 border-b border-slate-800 text-right">Ação</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-800/60">
                  <tr 
                    v-for="alerta in filteredAlertas" 
                    :key="alerta.membroId"
                    class="hover:bg-slate-900/30 transition-colors"
                  >
                    <!-- Membro -->
                    <td class="p-4">
                      <div class="font-bold text-white">{{ alerta.nome }}</div>
                      <div class="text-[10px] text-slate-500">Última presença: {{ alerta.dataUltimaPresenca }}</div>
                    </td>
                    <!-- PG -->
                    <td class="p-4 text-slate-300">{{ alerta.pgNome }}</td>
                    <!-- Ausência -->
                    <td class="p-4 text-center">
                      <span 
                        class="inline-flex px-2 py-0.5 rounded-md font-bold"
                        :class="alerta.semanasAusente >= 4 ? 'bg-red-500/10 text-red-400 border border-red-500/20' : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'"
                      >
                        {{ alerta.semanasAusente }} semanas
                      </span>
                    </td>
                    <!-- Status -->
                    <td class="p-4">
                      <span 
                        class="inline-flex items-center gap-1.5"
                        :class="alerta.statusAlerta === 'Acompanhado' ? 'text-emerald-400' : alerta.statusAlerta === 'Notificado' ? 'text-amber-400' : 'text-slate-400'"
                      >
                        <span class="h-1.5 w-1.5 rounded-full fill-current" :class="alerta.statusAlerta === 'Acompanhado' ? 'bg-emerald-400' : alerta.statusAlerta === 'Notificado' ? 'bg-amber-400' : 'bg-slate-400'"></span>
                        {{ alerta.statusAlerta }}
                      </span>
                    </td>
                    <!-- Ação -->
                    <td class="p-4 text-right space-x-2">
                      <button 
                        v-if="alerta.statusAlerta === 'Pendente'"
                        @click="notificarLider(alerta.membroId)"
                        class="px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold"
                        title="Enviar alerta WhatsApp para o líder do PG"
                      >
                        Avisar Líder
                      </button>
                      <button 
                        v-if="alerta.statusAlerta !== 'Acompanhado'"
                        @click="marcarAcompanhado(alerta.membroId)"
                        class="px-2 py-1 rounded bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold"
                      >
                        Resolver
                      </button>
                      <span v-else class="text-[10px] text-slate-500 italic">Cuidado Ativo ✓</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
  
          <!-- COLUNA 2: Funil de Conversão e Retenção de Visitantes (5 colunas no desktop) -->
          <div class="lg:col-span-5 rounded-2xl border border-slate-800 bg-slate-900/40 p-6 md:p-8 space-y-6">
            <div>
              <h2 class="text-xl font-bold text-white flex items-center gap-2">
                Funil de Retenção de Visitantes
              </h2>
              <p class="text-xs text-slate-400 mt-1">
                Desempenho da jornada de integração e acolhimento dos novos cadastrados (Mês Corrente).
              </p>
            </div>
  
            <!-- Gráfico de Funil em CSS/SVG Nativo -->
            <div class="space-y-4 pt-2">
              <!-- Passo 1: Formulário Preenchido -->
              <div class="space-y-1.5">
                <div class="flex items-center justify-between text-xs">
                  <span class="font-bold text-slate-300">1. Cadastro no site ("Sou Novo")</span>
                  <span class="text-amber-500 font-bold">100% (68 pessoas)</span>
                </div>
                <div class="h-3.5 w-full bg-slate-950 rounded-full overflow-hidden border border-slate-800">
                  <div class="h-full bg-slate-700 rounded-full" style="width: 100%"></div>
                </div>
              </div>
  
              <!-- Passo 2: Contatados em 48h -->
              <div class="space-y-1.5">
                <div class="flex items-center justify-between text-xs">
                  <span class="font-bold text-slate-300">2. Acolhidos pela equipe em 48h</span>
                  <span class="text-emerald-400 font-bold">94.1% (64 pessoas)</span>
                </div>
                <div class="h-3.5 w-full bg-slate-950 rounded-full overflow-hidden border border-slate-800">
                  <div class="h-full bg-emerald-500 rounded-full" style="width: 94.1%"></div>
                </div>
              </div>
  
              <!-- Passo 3: Visita Presencial Agendada -->
              <div class="space-y-1.5">
                <div class="flex items-center justify-between text-xs">
                  <span class="font-bold text-slate-300">3. Visitaram o templo presencialmente</span>
                  <span class="text-amber-400 font-bold">73.5% (50 pessoas)</span>
                </div>
                <div class="h-3.5 w-full bg-slate-950 rounded-full overflow-hidden border border-slate-800">
                  <div class="h-full bg-amber-500 rounded-full" style="width: 73.5%"></div>
                </div>
              </div>
  
              <!-- Passo 4: Integração de PGs -->
              <div class="space-y-1.5">
                <div class="flex items-center justify-between text-xs">
                  <span class="font-bold text-slate-300">4. Integrados a um Pequeno Grupo (PG)</span>
                  <span class="text-amber-500 font-bold">47.0% (32 pessoas)</span>
                </div>
                <div class="h-3.5 w-full bg-slate-950 rounded-full overflow-hidden border border-slate-800">
                  <div class="h-full bg-amber-600 rounded-full" style="width: 47%"></div>
                </div>
              </div>
            </div>
  
            <div class="bg-slate-950/60 rounded-xl p-4 border border-slate-800/60 text-xs leading-relaxed text-slate-400">
              💡 <strong>Insight Estratégico:</strong> O principal gargalo do acolhimento atual é a transição da visita de domingo para a integração ao **Pequeno Grupo (Etapa 3 para 4)**. Recomendamos disparar convites geolocalizados automáticos baseados no bairro do visitante.
            </div>
          </div>
  
        </div>
  
        <!-- AREA INFERIOR: Distribuição Geográfica & Banco de Talentos (Seção Corrigida e Polida) -->
        <!-- Corrigido: Alterado de lg:grid-cols-12 sem default para grid-cols-1 lg:grid-cols-12 para blindar layouts mobile -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          <!-- COLUNA 1: Distribuição por Região / Mapa de Calor Simulado (6 colunas no desktop) -->
          <div class="lg:col-span-6 rounded-2xl border border-slate-800 bg-slate-900/40 p-6 md:p-8 space-y-6 flex flex-col justify-between animate-fade-in">
            <div>
              <h2 class="text-xl font-bold text-white flex items-center gap-2">
                Distribuição Geográfica de Membros e Visitantes
              </h2>
              <p class="text-xs text-slate-400 mt-1">
                Mapeamento de bairros de residência para identificação de demandas regionais e expansão de PGs.
              </p>
            </div>
  
            <!-- Tabela com representação visual livre de truncamentos (w-32 para Bairro e h-3 para Barra) -->
            <div class="space-y-4 my-2">
              <div 
                v-for="regiao in distribuicaoGeografica" 
                :key="regiao.bairro"
                class="flex items-center justify-between text-xs gap-4"
              >
                <!-- w-32 e min-w-[128px] garantidos para exibição sem espremer ou truncar o nome dos bairros -->
                <div class="w-32 min-w-[128px] font-semibold text-slate-300 truncate" :title="regiao.bairro">
                  {{ regiao.bairro }}
                </div>
                <!-- Barra de progresso elegante de h-3 -->
                <div class="flex-grow bg-slate-950 rounded-full h-3 overflow-hidden border border-slate-800/60 flex items-center">
                  <!-- Uso de style binding limpo para evitar erros de parser -->
                  <div class="bg-amber-500 h-full rounded-full transition-all duration-500" :style="{ width: regiao.porcentagem + '%' }"></div>
                </div>
                <!-- w-20 alinhado à direita para evitar quebra de linha de contagem em celulares -->
                <div class="w-20 text-right font-bold text-slate-300 shrink-0">
                  {{ regiao.quantidade }} <span class="text-[10px] text-slate-500 font-normal">hab</span>
                </div>
              </div>
            </div>
  
            <div class="bg-amber-500/5 rounded-xl border border-amber-500/10 p-4 text-xs text-amber-400 leading-relaxed mt-4">
              🗺️ <strong>Demanda Identificada:</strong> Há um forte adensamento de membros e visitantes residindo nas regiões de **Santana (Zona Norte)** e **Perdizes (Zona Oeste)**. Indica-se abrir novos PGs familiares nesses bairros.
            </div>
          </div>
  
          <!-- COLUNA 2: Mapeamento de Talentos / Voluntariado (6 colunas no desktop) -->
          <div class="lg:col-span-6 rounded-2xl border border-slate-800 bg-slate-900/40 p-6 md:p-8 space-y-6">
            <div>
              <h2 class="text-xl font-bold text-white flex items-center gap-2">
                Mapeamento de Talentos & Voluntariado
              </h2>
              <p class="text-xs text-slate-400 mt-1">
                Conexão entre as habilidades profissionais dos membros e os projetos sociais e de revitalização no Centro de SP.
              </p>
            </div>
  
            <!-- Grid de Talentos - Corrigido: Adicionado grid-cols-1 como base mobile-first obrigatória -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              <!-- Talento 1: Saúde -->
              <div class="bg-slate-950/60 rounded-xl p-4 border border-slate-800 flex items-start gap-3 hover:border-slate-700/60 transition-colors">
                <span class="inline-flex h-8 w-8 items-center justify-center rounded bg-amber-500/10 text-amber-400 shrink-0">
                  <!-- SVG de Coração com Cruz (Saúde) -->
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </span>
                <div>
                  <h3 class="font-bold text-white text-sm">Saúde & Bem-Estar</h3>
                  <p class="text-xs text-slate-400 mt-0.5"><strong>24 profissionais</strong> (Médicos, Psicólogos)</p>
                  <span class="text-[10px] text-amber-500 font-semibold block mt-1.5">8 voluntários ativos no Centro</span>
                </div>
              </div>
  
              <!-- Talento 2: Educação -->
              <div class="bg-slate-950/60 rounded-xl p-4 border border-slate-800 flex items-start gap-3 hover:border-slate-700/60 transition-colors">
                <span class="inline-flex h-8 w-8 items-center justify-center rounded bg-amber-500/10 text-amber-400 shrink-0">
                  <!-- SVG de Chapéu de Formatura (Educação) -->
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                  </svg>
                </span>
                <div>
                  <h3 class="font-bold text-white text-sm">Educação & Idiomas</h3>
                  <p class="text-xs text-slate-400 mt-0.5"><strong>37 voluntários</strong> (Professores, Tutores)</p>
                  <span class="text-[10px] text-amber-500 font-semibold block mt-1.5">Apoio escolar e de línguas ativo</span>
                </div>
              </div>
  
              <!-- Talento 3: Jurídico -->
              <div class="bg-slate-950/60 rounded-xl p-4 border border-slate-800 flex items-start gap-3 hover:border-slate-700/60 transition-colors">
                <span class="inline-flex h-8 w-8 items-center justify-center rounded bg-amber-500/10 text-amber-400 shrink-0">
                  <!-- SVG de Balança (Jurídico) -->
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7V4m0 0h12m0 0v3m0-3h3m-3 3l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9V4" />
                  </svg>
                </span>
                <div>
                  <h3 class="font-bold text-white text-sm">Jurídico & Cidadania</h3>
                  <p class="text-xs text-slate-400 mt-0.5"><strong>12 Advogados cadastrados</strong></p>
                  <span class="text-[10px] text-amber-500 font-semibold block mt-1.5">Apoio a imigrantes e refugiados</span>
                </div>
              </div>
  
              <!-- Talento 4: Artes e Design -->
              <div class="bg-slate-950/60 rounded-xl p-4 border border-slate-800 flex items-start gap-3 hover:border-slate-700/60 transition-colors">
                <span class="inline-flex h-8 w-8 items-center justify-center rounded bg-amber-500/10 text-amber-400 shrink-0">
                  <!-- SVG de Notas Musicais / Artes -->
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                  </svg>
                </span>
                <div>
                  <h3 class="font-bold text-white text-sm">Artes, Música & Mídia</h3>
                  <p class="text-xs text-slate-400 mt-0.5"><strong>48 voluntários</strong> (Músicos, Designers)</p>
                  <span class="text-[10px] text-amber-500 font-semibold block mt-1.5">Louvor, mídias e transmissões</span>
                </div>
              </div>
  
            </div>
  
            <div class="text-[10px] text-slate-500 text-center pt-2">
              *Cadastro de habilidades atualizado em tempo real via área logada do membro (Fase 3).
            </div>
          </div>
  
        </div>
  
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, computed } from 'vue'
  import type { AlertaFrequenciaFria } from '~/types/bi'
  
  // SEO do Painel de BI Restrito e Seguro
  useSeoMeta({
    title: 'Dashboard Pastoral de BI — Área Restrita PIB SP',
    robots: 'noindex, nofollow' // Prevenção de indexação no Google por segurança
  })
  
  // Estado de filtro de semanas de ausência
  const selectedAusencia = ref('0')
  
  // Mock de Alertas de Frequência Fria (Membros ausentes) para simulação de UX
  const alertasList = ref<AlertaFrequenciaFria[]>([
    {
      membroId: '1',
      nome: 'Eduardo Guimarães',
      pgNome: 'PG Central - Vida Nova',
      semanasAusente: 4,
      dataUltimaPresenca: '19/07/2026',
      statusAlerta: 'Pendente'
    },
    {
      membroId: '2',
      nome: 'Glória Maria Cavalcante',
      pgNome: 'PG Mulheres de Fé',
      semanasAusente: 3,
      dataUltimaPresenca: '26/07/2026',
      statusAlerta: 'Pendente'
    },
    {
      membroId: '3',
      nome: 'Ricardo Santos Mendonça',
      pgNome: 'PG Jovens Urbanos',
      semanasAusente: 4,
      dataUltimaPresenca: '12/07/2026',
      statusAlerta: 'Notificado'
    },
    {
      membroId: '4',
      nome: 'Helena Toledo Silveira',
      pgNome: 'PG Casais da Rocha',
      semanasAusente: 3,
      dataUltimaPresenca: '02/08/2026',
      statusAlerta: 'Acompanhado'
    }
  ])
  
  // Lógica de filtragem reativa baseada nas semanas de ausência
  const filteredAlertas = computed(() => {
    const minSemanas = parseInt(selectedAusencia.value)
    if (minSemanas === 0) return alertasList.value
    return alertasList.value.filter(a => a.semanasAusente >= minSemanas)
  })
  
  // Mapeamento e distribuição geográfica simulada (Bairros reais de SP)
  const distribuicaoGeografica = ref([
    { bairro: 'Campos Elíseos', quantidade: 284, porcentagem: 100 },
    { bairro: 'Santa Cecília', quantidade: 195, porcentagem: 68 },
    { bairro: 'Santana', quantidade: 142, porcentagem: 50 },
    { bairro: 'República / Sé', quantidade: 110, porcentagem: 38 },
    { bairro: 'Perdizes', quantidade: 98, porcentagem: 34 },
    { bairro: 'Guarulhos', quantidade: 54, porcentagem: 19 }
  ])
  
  // Ação 1: Notificar Líder (Simula um disparo automatizado por WhatsApp)
  const notificarLider = (membroId: string) => {
    const alerta = alertasList.value.find(a => a.membroId === membroId)
    if (alerta) {
      alerta.statusAlerta = 'Notificado'
      alert(`Mensagem automatizada enviada ao WhatsApp do líder do ${alerta.pgNome}: \n"Atenção líder! Nosso sistema detectou que o membro ${alerta.nome} não comparece há ${alerta.semanasAusente} semanas. Se possível, faça um contato de apoio pastoral."`)
    }
  }
  
  // Ação 2: Marcar como Acompanhado (Resolve o alerta com cuidado)
  const marcarAcompanhado = (membroId: string) => {
    const alerta = alertasList.value.find(a => a.membroId === membroId)
    if (alerta) {
      alerta.statusAlerta = 'Acompanhado'
    }
  }
  </script>