// types/eventos.ts

export type EventoCategoria = 'Jovens' | 'Casais' | 'Família' | 'Ação Social' | 'Ensino' | 'Geral';

export interface Evento {
  id: string;
  titulo: string;
  descricao: string;
  data: string; // Formato YYYY-MM-DD para fácil manipulação
  horario: string; // Ex: "19:30h"
  local: string; // Ex: "Templo Principal", "Salão Social", "Chácara Atibaia"
  categoria: EventoCategoria;
  requerInscricao: boolean;
  vagasLimitadas: boolean;
  totalVagas?: number;
  vagasPreenchidas: number;
  valor?: number; // Valor em reais, 0 ou undefined se for gratuito
  imagemUrl?: string;
  status: 'Ativo' | 'Encerrado' | 'Cancelado';
}

export interface InscricaoEvento {
  id: string;
  eventoId: string;
  nomeCompleto: string;
  email: string;
  whatsapp: string;
  dataNascimento: string;
  membroPIBSP: boolean;
  observacoes?: string; // Restrições alimentares, alergias, necessidades de transporte, etc.
  dataInscricao: string;
  statusPagamento?: 'Pendente' | 'Confirmado' | 'Não Requerido';
}

export interface MetricasEventos {
  totalInscritosGeral: number;
  vagasRestantesCampanha: number;
  arrecadacaoInscricoes: number;
}
