<template>
    <div class="bg-slate-50 min-h-screen py-12 px-6 lg:px-12">
      <div class="container mx-auto max-w-6xl">
        
        <!-- Cabeçalho de Navegação -->
        <div class="text-center max-w-3xl mx-auto mb-12">
          <span class="text-xs font-bold uppercase tracking-widest text-amber-600">Vida em Comunidade</span>
          <h1 class="mt-2 text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Encontre um <span class="text-amber-600 font-serif italic">Pequeno Grupo</span>
          </h1>
          <p class="mt-4 text-lg text-slate-600">
            Os PGs são o coração da nossa igreja durante a semana. Um espaço seguro para compartilhar a vida, estudar a Bíblia e caminhar em comunhão no centro e nos bairros de São Paulo.
          </p>
        </div>
  
        <!-- PAINEL DE FILTROS REATIVOS -->
        <div class="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm mb-8 space-y-6">
          <div class="grid gap-6 md:grid-cols-3">
            
            <!-- Filtro: Perfil -->
            <div class="space-y-2">
              <label class="block text-xs font-bold uppercase text-slate-500 tracking-wider">Perfil do Grupo</label>
              <select v-model="selectedPerfil" class="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm focus:border-amber-500 focus:ring-1 focus:ring-amber-500 bg-white">
                <option value="">Todos os perfis</option>
                <option value="Jovens">Jovens</option>
                <option value="Casais">Casais</option>
                <option value="Homens">Homens</option>
                <option value="Mulheres">Mulheres</option>
                <option value="Misto">Misto</option>
                <option value="3ª Idade">3ª Idade</option>
              </select>
            </div>
  
            <!-- Filtro: Dia da Semana -->
            <div class="space-y-2">
              <label class="block text-xs font-bold uppercase text-slate-500 tracking-wider">Dia da Semana</label>
              <select v-model="selectedDia" class="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm focus:border-amber-500 focus:ring-1 focus:ring-amber-500 bg-white">
                <option value="">Qualquer dia</option>
                <option value="Segunda">Segunda-feira</option>
                <option value="Terça">Terça-feira</option>
                <option value="Quarta">Quarta-feira</option>
                <option value="Quinta">Quinta-feira</option>
                <option value="Sexta">Sexta-feira</option>
                <option value="Sábado">Sábado</option>
                <option value="Domingo">Domingo</option>
              </select>
            </div>
  
            <!-- Filtro: Região de SP -->
            <div class="space-y-2">
              <label class="block text-xs font-bold uppercase text-slate-500 tracking-wider">Região / Bairro</label>
              <select v-model="selectedRegiao" class="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm focus:border-amber-500 focus:ring-1 focus:ring-amber-500 bg-white">
                <option value="">Todas as regiões</option>
                <option value="Centro">Centro</option>
                <option value="Zona Norte">Zona Norte</option>
                <option value="Zona Sul">Zona Sul</option>
                <option value="Zona Leste">Zona Leste</option>
                <option value="Zona Oeste">Zona Oeste</option>
                <option value="Grande SP">Grande SP</option>
              </select>
            </div>
  
          </div>
  
          <!-- Barra de Busca por texto livre (Bairro/Líder) -->
          <div class="relative">
            <input 
              v-model="searchQuery" 
              type="text" 
              placeholder="Buscar por bairro, nome do líder ou nome do PG..." 
              class="w-full rounded-lg border border-slate-300 pl-11 pr-4 py-3 text-sm focus:border-amber-500 focus:ring-1 focus:ring-amber-500 bg-white"
            />
            <span class="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
              <!-- SVG Lupa -->
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </span>
          </div>
        </div>
  
        <!-- STATUS DA BUSCA -->
        <div class="mb-6 flex justify-between items-center text-sm text-slate-500">
          <p>Encontrados: <strong class="text-slate-800">{{ filteredPgs.length }}</strong> Pequenos Grupos</p>
          <button 
            v-if="hasActiveFilters" 
            @click="clearFilters" 
            class="text-amber-600 hover:text-amber-700 font-semibold flex items-center gap-1"
          >
            Limpar Filtros
          </button>
        </div>
  
        <!-- GRID DE CARDS DOS PGS -->
        <div v-if="filteredPgs.length > 0" class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div 
            v-for="pg in filteredPgs" 
            :key="pg.id" 
            class="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
          >
            <div class="space-y-4">
              <!-- Badges e Modalidade -->
              <div class="flex items-center justify-between gap-2">
                <span class="rounded-full bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-700">
                  {{ pg.perfil }}
                </span>
                <span class="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  ● {{ pg.modalidade }}
                </span>
              </div>
  
              <!-- Título e Líder -->
              <div>
                <h3 class="text-xl font-bold text-slate-900">{{ pg.nome }}</h3>
                <p class="text-xs text-slate-500 mt-1">Líder: <strong>{{ pg.lider }}</strong></p>
              </div>
  
              <!-- Localização e Bairro -->
              <div class="flex items-start gap-2.5 text-sm text-slate-600">
                <!-- SVG Pin -->
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-amber-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{{ pg.bairro }} ({{ pg.regiao }})</span>
              </div>
  
              <!-- Horário e Dia -->
              <div class="flex items-start gap-2.5 text-sm text-slate-600">
                <!-- SVG Relógio -->
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-amber-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{{ pg.diaSemana }}s, às {{ pg.horario }}</span>
              </div>
            </div>
  
            <!-- Botão Conectar (CTA) -->
            <div class="mt-6 pt-4 border-t border-slate-100">
              <a 
                :href="`https://wa.me/${pg.contato}?text=Olá! Gostaria de saber mais sobre o PG ${pg.nome}.`" 
                target="_blank"
                class="w-full inline-flex items-center justify-center rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-bold py-2.5 text-sm transition-colors"
              >
                Quero Participar
              </a>
            </div>
          </div>
        </div>
  
        <!-- ESTADO VAZIO (Nenhum resultado encontrado) -->
        <div v-else class="text-center py-16 bg-white rounded-2xl border border-slate-200 shadow-sm max-w-lg mx-auto">
          <div class="h-16 w-16 mx-auto flex items-center justify-center rounded-full bg-slate-100 text-slate-400 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 class="text-lg font-bold text-slate-900">Nenhum PG encontrado</h3>
          <p class="text-slate-500 text-sm mt-2 px-6">
            Não encontramos nenhum grupo com esses filtros específicos. Tente ampliar sua busca ou entre em contato conosco para abrirmos um novo PG na sua região!
          </p>
          <button @click="clearFilters" class="mt-6 inline-flex items-center justify-center rounded-lg bg-amber-500 px-5 py-2.5 text-sm font-bold text-slate-900 hover:bg-amber-400 transition-colors">
            Limpar Filtros
          </button>
        </div>
  
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, computed } from 'vue'
  import type { PequenoGrupo } from '~/types/pgs'
  
  // SEO Local Estruturado para o Google
  useSeoMeta({
    title: 'Pequenos Grupos — PIB de São Paulo',
    description: 'Encontre o Pequeno Grupo (Célula) ideal no Centro, Zona Norte, Sul, Leste, Oeste ou Grande SP. Faça parte de uma comunidade unida.'
  })
  
  // Lista de PGs estática simulada para validação e testes visuais (Mocks reais de SP)
  const pgsList = ref<PequenoGrupo[]>([
    {
      id: '1',
      nome: 'PG Central - Vida Nova',
      lider: 'Marcos & Sandra',
      regiao: 'Centro',
      bairro: 'Campos Elíseos',
      diaSemana: 'Quarta',
      horario: '20:00h',
      perfil: 'Misto',
      modalidade: 'Presencial',
      contato: '5511999999999'
    },
    {
      id: '2',
      nome: 'PG Jovens Urbanos',
      lider: 'Lucas Almeida',
      regiao: 'Centro',
      bairro: 'Santa Cecília',
      diaSemana: 'Sábado',
      horario: '18:30h',
      perfil: 'Jovens',
      modalidade: 'Presencial',
      contato: '5511999999999'
    },
    {
      id: '3',
      nome: 'PG Casais da Rocha',
      lider: 'Pr. Paulo Eduardo',
      regiao: 'Zona Oeste',
      bairro: 'Perdizes',
      diaSemana: 'Quinta',
      horario: '20:00h',
      perfil: 'Casais',
      modalidade: 'Híbrido',
      contato: '5511999999999'
    },
    {
      id: '4',
      nome: 'PG Mulheres de Fé',
      lider: 'Beatriz Costa',
      regiao: 'Zona Norte',
      bairro: 'Santana',
      diaSemana: 'Terça',
      horario: '14:30h',
      perfil: 'Mulheres',
      modalidade: 'Online',
      contato: '5511999999999'
    },
    {
      id: '5',
      nome: 'PG Integração Centro',
      lider: 'Renato Silva',
      regiao: 'Centro',
      bairro: 'República',
      diaSemana: 'Segunda',
      horario: '19:45h',
      perfil: 'Misto',
      modalidade: 'Presencial',
      contato: '5511999999999'
    },
    {
      id: '6',
      nome: 'PG Conexão Grande SP',
      lider: 'Felipe & Tânia',
      regiao: 'Grande SP',
      bairro: 'Guarulhos',
      diaSemana: 'Sexta',
      horario: '20:00h',
      perfil: '3ª Idade',
      modalidade: 'Híbrido',
      contato: '5511999999999'
    }
  ])
  
  // Estados dos filtros
  const selectedPerfil = ref('')
  const selectedDia = ref('')
  const selectedRegiao = ref('')
  const searchQuery = ref('')
  
  // Lógica de filtragem reativa combinada
  const filteredPgs = computed(() => {
    return pgsList.value.filter(pg => {
      const matchesPerfil = !selectedPerfil.value || pg.perfil === selectedPerfil.value
      const matchesDia = !selectedDia.value || pg.diaSemana === selectedDia.value
      const matchesRegiao = !selectedRegiao.value || pg.regiao === selectedRegiao.value
      
      const query = searchQuery.value.toLowerCase().trim()
      const matchesSearch = !query || 
                            pg.nome.toLowerCase().includes(query) || 
                            pg.bairro.toLowerCase().includes(query) || 
                            pg.lider.toLowerCase().includes(query)
  
      return matchesPerfil && matchesDia && matchesRegiao && matchesSearch
    })
  })
  
  // Helper para verificar se há filtros ativos
  const hasActiveFilters = computed(() => {
    return !!selectedPerfil.value || !!selectedDia.value || !!selectedRegiao.value || !!searchQuery.value
  })
  
  // Função para limpar todos os filtros
  const clearFilters = () => {
    selectedPerfil.value = ''
    selectedDia.value = ''
    selectedRegiao.value = ''
    searchQuery.value = ''
  }
  </script>