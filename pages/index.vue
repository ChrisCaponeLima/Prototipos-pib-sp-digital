<template>
    <div>
      <!-- Seções Globais da Home Page em Ordem de Funil -->
      <HomeHeroSection />
      <HomeScheduleSection />
      
      <!-- Espaço Meditativo e Devocional Interativo -->
      <section class="py-12 px-6 bg-white border-b border-slate-150">
        <InteractiveVersiculoDoDia />
      </section>
  
      <HomeVisitorWelcome />
      <HomeSocialImpact />
      <HomeLatestMessages />
    </div>
  </template>
  
  <script setup lang="ts">
  useSeoMeta({
    title: 'PIB de São Paulo — Primeira Igreja Batista de São Paulo',
    description: 'Uma igreja histórica no coração de São Paulo, viva para a cidade.'
  })
  </script>