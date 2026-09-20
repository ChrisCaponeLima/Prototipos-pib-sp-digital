<template>
    <div class="bg-red-950/30 border border-red-500/30 rounded-2xl p-4 shadow-lg">
      <div class="flex items-center justify-between mb-3">
        <div class="flex items-center gap-2">
          <span class="px-2 py-0.5 bg-red-500 text-white font-bold text-[10px] rounded uppercase">Gargalos Críticos</span>
          <h3 class="text-sm font-bold text-red-200">Central de Impedimentos & Bloqueadores Externos</h3>
        </div>
        <span class="text-xs text-red-400/80">Atenção imediata requerida do responsável</span>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div class="bg-slate-900/90 border border-red-500/40 rounded-xl p-3 flex justify-between items-center">
          <div>
            <p class="text-xs font-semibold text-white">Aguardando liberação do Bearer Token na API Prover</p>
            <p class="text-[11px] text-slate-400">Pendente envio do token de produção pela equipe de suporte da Prover.</p>
          </div>
          <span class="px-2.5 py-1 bg-red-500/20 text-red-300 text-[10px] font-bold rounded border border-red-500/30">TI / Prover</span>
        </div>
        <div class="bg-slate-900/90 border border-red-500/40 rounded-xl p-3 flex justify-between items-center">
          <div>
            <p class="text-xs font-semibold text-white">Recuperação de Acesso Máster no Registro.br</p>
            <p class="text-[11px] text-slate-400">Aguardando validação do e-mail institucional pela secretaria.</p>
          </div>
          <span class="px-2.5 py-1 bg-amber-500/20 text-amber-300 text-[10px] font-bold rounded border border-amber-500/30">Secretaria</span>
        </div>
      </div>
    </div>
  </template>