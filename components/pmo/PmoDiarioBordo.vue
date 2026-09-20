<template>
  <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
    <!-- LOG CRONOLÓGICO DE DECISÕES & ATAS -->
    <div class="lg:col-span-2 bg-slate-800/60 border border-slate-700/50 rounded-2xl p-5 space-y-4">
      <div class="flex items-center justify-between pb-3 border-b border-slate-700/60">
        <h2 class="text-base font-bold text-white flex items-center gap-2">
          <span>📖</span> Diário de Bordo & Atas de Alinhamento
        </h2>
        
        <!-- Legenda do Semáforo -->
        <div class="hidden sm:flex items-center gap-3 text-[11px] text-slate-400">
          <span class="flex items-center gap-1.5"><span class="w-2 h-2 rounded-full bg-emerald-500"></span> Aprovado / Ok</span>
          <span class="flex items-center gap-1.5"><span class="w-2 h-2 rounded-full bg-amber-500"></span> Em Investigação</span>
          <span class="flex items-center gap-1.5"><span class="w-2 h-2 rounded-full bg-red-500"></span> Crítico</span>
        </div>
      </div>

        <div class="bg-slate-900/90 border border-red-500/40 rounded-xl p-4 space-y-2 shadow-sm transition-all hover:border-amber-500/60">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
            <div class="flex items-center gap-2">
              <!-- Indicador Semáforo Amarelo -->
              <span class="w-3 h-3 rounded-full bg-red-500 animate-pulse ring-4 ring-amber-500/20"></span>
              <span class="px-2 py-0.5 bg-red-500/20 text-red-300 text-[10px] font-extrabold rounded border border-amber-500/30 uppercase tracking-wider">
                Atenção / ação impeditiva
              </span>
            </div>
            <span class="text-slate-400 text-xs font-mono">18/Set/2026</span>
          </div>

          <h3 class="font-bold text-white text-sm pt-1">
            Precisamos recuperar o acesso ao provedor de hospedagem do site
          </h3>

          <p class="text-xs text-slate-300 leading-relaxed">
            Caminhos possíveis: <br><br>
            1) Tentar acesso utilizdo pela Prover (A empresa acessa o site para configuração. Para isso, deve ter acesso ao provedor de hospedagem mas nos disseram que não têm. A Nany tentou esse argumento mas não obteve sucesso. Tentei falar com eles e não me responderam).<br><br>
            2) Tentar outro e-mail utilizado pela igreja (talvez: comun.comunicacao@pib.org.br ou primeiradesaopaulo@gmail.com?)<br><br>
            3) O responsável pelo domínio consta: Eurico Kawazoe (a informação que tenho é que ele não está mais na igreja)<br><br>
            4) Drástico (não recomendado) Migrar o site para uma nova conta <strong class="text-red-300 font-semibold"> Ponto de Atenção:</strong> Pode implicar em custos, perda de histórico e SEO, além de demandar tempo para reconfiguração.            
          </p>
        </div>

        <div class="bg-slate-900/90 border border-emerald-500/30 rounded-xl p-4 space-y-2 shadow-sm transition-all hover:border-emerald-500/50">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
            <div class="flex items-center gap-2">
              <!-- Indicador Semáforo Verde -->
              <span class="w-3 h-3 rounded-full bg-emerald-500"></span>
              <span class="px-2 py-0.5 bg-emerald-500/20 text-emerald-300 text-[10px] font-extrabold rounded border border-emerald-500/30 uppercase tracking-wider">
                Concluído
              </span>
            </div>
            <span class="text-slate-400 text-xs font-mono">18/Set/2026</span>
          </div>

          <h3 class="font-bold text-white text-sm pt-1">
            Identificamos a necessidade de um ambiente seguro institucionalizado para o armazenamento de ativos digitais da igreja
          </h3>

          <p class="text-xs text-slate-300 leading-relaxed">
            Necessidade de um ambiente seguro institucionalizado para o armazenamento de ativos digitais da igreja 
            <strong class="text-emerald-300 font-semibold"> Ação:</strong> Criar um cofre digital seguro, com acesso controlado e backup automático, para garantir a preservação e integridade dos acessos, senhas, certificados, tokens e demais ativos digitais da igreja.
          </p>
        </div>

      <div class="bg-slate-900/90 border border-emerald-500/30 rounded-xl p-4 space-y-2 shadow-sm transition-all hover:border-emerald-500/50">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
            <div class="flex items-center gap-2">
              <!-- Indicador Semáforo Verde -->
              <span class="w-3 h-3 rounded-full bg-emerald-500"></span>
              <span class="px-2 py-0.5 bg-emerald-500/20 text-emerald-300 text-[10px] font-extrabold rounded border border-emerald-500/30 uppercase tracking-wider">
                Acessos recuperados
              </span>
            </div>
            <span class="text-slate-400 text-xs font-mono">18/Set/2026</span>
          </div>

          <h3 class="font-bold text-white text-sm pt-1">
            Acesso a alguns ambientes (Fonte: Patricia)
          </h3>

          <p class="text-xs text-slate-300 leading-relaxed">
            Apple Developer Account, Registro .BR, Cadastro e acesso ao App da Igreja (Chris), Acesso ao e-mail institucional (midiasoc.pibsp@gmail.com), 
          </p>
        </div>

      <div class="bg-slate-900/90 border border-emerald-500/30 rounded-xl p-4 space-y-2 shadow-sm transition-all hover:border-emerald-500/50">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
            <div class="flex items-center gap-2">
              <!-- Indicador Semáforo Verde -->
              <span class="w-3 h-3 rounded-full bg-emerald-500"></span>
              <span class="px-2 py-0.5 bg-emerald-500/20 text-emerald-300 text-[10px] font-extrabold rounded border border-emerald-500/30 uppercase tracking-wider">
                Concluído / Token recebido
              </span>
            </div>
            <span class="text-slate-400 text-xs font-mono">18/Set/2026</span>
          </div>

          <h3 class="font-bold text-white text-sm pt-1">
            Acesso à API Prover (Fonte: Nany)
          </h3>

          <p class="text-xs text-slate-300 leading-relaxed">
            Token recebido com sucesso. Agora é possível realizar chamadas autenticadas à API da Prover para obter dados de cultos, eventos e pessoas.
          </p>
        </div>

        <div class="space-y-3">
        <!-- CARD 1: REUNIÃO PROVER — SINALIZADOR AMARELO -->
        <div class="bg-slate-900/90 border border-amber-500/40 rounded-xl p-4 space-y-2 shadow-sm transition-all hover:border-amber-500/60">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
            <div class="flex items-center gap-2">
              <!-- Indicador Semáforo Amarelo -->
              <span class="w-3 h-3 rounded-full bg-amber-500 animate-pulse ring-4 ring-amber-500/20"></span>
              <span class="px-2 py-0.5 bg-amber-500/20 text-amber-300 text-[10px] font-extrabold rounded border border-amber-500/30 uppercase tracking-wider">
                Atenção / Investigação
              </span>
            </div>
            <span class="text-slate-400 text-xs font-mono">15/Set/2026</span>
          </div>

          <h3 class="font-bold text-white text-sm pt-1">
            Reunião Técnica com a Plataforma Prover
          </h3>

          <p class="text-xs text-slate-300 leading-relaxed">
            Alinhamento dos endpoints da API (Cultos, Eventos e Pessoas) e definição do token Bearer. 
            <strong class="text-amber-300 font-semibold"> Ponto de Atenção:</strong> Descobrimos que a hospedagem do site não é feita pela Prover, ao contrário do informado inicialmente. Estamos em busca de quem possui esse acesso, que segundo apuração preliminar, pertence a um ex-membro da igreja.
          </p>
        </div>

        <!-- CARD 2: REUNIÃO INICIAL — SINALIZADOR VERDE -->
        <div class="bg-slate-900/90 border border-emerald-500/30 rounded-xl p-4 space-y-2 shadow-sm transition-all hover:border-emerald-500/50">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
            <div class="flex items-center gap-2">
              <!-- Indicador Semáforo Verde -->
              <span class="w-3 h-3 rounded-full bg-emerald-500"></span>
              <span class="px-2 py-0.5 bg-emerald-500/20 text-emerald-300 text-[10px] font-extrabold rounded border border-emerald-500/30 uppercase tracking-wider">
                Concluído / Aprovado
              </span>
            </div>
            <span class="text-slate-400 text-xs font-mono">09/Set/2026</span>
          </div>

          <h3 class="font-bold text-white text-sm pt-1">
            Reunião com Pastor e Equipe de Comunicação: Pauta Campus Digital PIBSP
          </h3>

          <p class="text-xs text-slate-300 leading-relaxed">
            Projeto aprovado formalmente. Início do levantamento de informações sobre a API e os acessos da empresa Prover agendado para o dia 15/09.
          </p>
        </div>
      </div>
    </div>

    <!-- REPOSITÓRIO DE POPS & ENTREVISTAS -->
    <div class="bg-slate-800/60 border border-slate-700/50 rounded-2xl p-5 space-y-4">
      <h2 class="text-base font-bold text-white flex items-center gap-2">
        <span>🎙️</span> Entrevistas & POPs das Áreas
      </h2>
      <p class="text-xs text-slate-400">Procedimentos Operacionais Padrão mapeados com os líderes.</p>

      <div class="space-y-2">
        <div class="bg-slate-900 p-3 rounded-xl border border-slate-700/80 flex items-center justify-between text-xs">
          <span class="text-slate-200">POP 01 — Acolhimento e Recepção</span>
          <span class="text-amber-400 font-semibold cursor-pointer hover:underline">Ver Resumo</span>
        </div>
        <div class="bg-slate-900 p-3 rounded-xl border border-slate-700/80 flex items-center justify-between text-xs">
          <span class="text-slate-200">POP 02 — Triagem de Visitantes 48h</span>
          <span class="text-amber-400 font-semibold cursor-pointer hover:underline">Ver Resumo</span>
        </div>
      </div>
    </div>
  </div>
</template>
