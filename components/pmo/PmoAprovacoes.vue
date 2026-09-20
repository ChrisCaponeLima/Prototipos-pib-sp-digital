<template>
    <div class="bg-slate-800/60 border border-slate-700/50 rounded-2xl p-5 space-y-4">
      <div>
        <h2 class="text-base font-bold text-white">Hub de Validação & Aprovações do Conselho</h2>
        <p class="text-xs text-slate-400">Aprovação direta dos layouts e textos pelo Pastor responsável e conselheiros.</p>
      </div>
  
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="bg-slate-900/90 border border-slate-700/80 rounded-xl p-4 space-y-3">
          <div class="flex justify-between items-center">
            <span class="text-xs font-bold text-white">Layout da Home Page & Hero Section</span>
            <span class="px-2 py-0.5 bg-amber-500/20 text-amber-300 text-[10px] font-bold rounded">Pendente</span>
          </div>
          <p class="text-xs text-slate-400">Aprovação do conceito visual "Visitor-First UX" com vídeo de fundo e chamadas de ação.</p>
          <div class="flex gap-2 pt-2 border-t border-slate-800">
            <button class="px-3 py-1.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold rounded-lg">✓ Aprovar Layout</button>
            <button class="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs rounded-lg">Solicitar Ajustes</button>
          </div>
        </div>
  
        <div class="bg-slate-900/90 border border-slate-700/80 rounded-xl p-4 space-y-3">
          <div class="flex justify-between items-center">
            <span class="text-xs font-bold text-white">Textos da Landing "Sou Novo"</span>
            <span class="px-2 py-0.5 bg-amber-500/20 text-amber-300 text-[10px] font-bold rounded">Pendente</span>
          </div>
          <p class="text-xs text-slate-400">Aprovação da mensagem acolhedora em vídeo e do formulário de triagem de 3 campos.</p>
          <div class="flex gap-2 pt-2 border-t border-slate-800">
            <button class="px-3 py-1.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold rounded-lg">✓ Aprovar Texto</button>
            <button class="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs rounded-lg">Solicitar Ajustes</button>
          </div>
        </div>
      </div>
    </div>
  </template>