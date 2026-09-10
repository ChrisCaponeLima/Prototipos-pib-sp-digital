// types/bi.ts

export interface AlertaFrequenciaFria {
  membroId: string;
  nome: string;
  pgNome: string;
  semanasAusente: number;
  dataUltimaPresenca: string;
  statusAlerta: 'Pendente' | 'Notificado' | 'Acompanhado';
}

export interface VisitanteFunil {
  id: string;
  nome: string;
  dataContato: string;
  origem: 'Site' | 'Instagram' | 'Google' | 'Presencial';
  statusFunil: 'Novo' | 'Contatado' | 'VisitaAgendada' | 'IntegradoPG';
  bairroResidencia: string;
  atendidoEmAte48h: boolean;
}

export interface MetricasGerais {
  totalMembros: number;
  novosVisitantesMes: number;
  taxaRetencao: number;
  pgsAtivos: number;
  arrecadacaoPrevista: number;
}