// types/inscricoes.ts

export type InscricaoStatus = 'Pendente' | 'Confirmada' | 'Cancelada' | 'ListaDeEspera';
export type PagamentoStatus = 'Pendente' | 'Aprovado' | 'Estornado' | 'Não Requerido';
export type PagamentoMetodo = 'PIX' | 'CartaoCredito' | 'Boleto' | 'Dinheiro' | 'Isento';
export type ParticipantePerfil = 'Membro' | 'Congregado' | 'Visitante';

export type TransporteOpcao = 'OnibusIgreja' | 'CarroProprio' | 'OfereceCarona' | 'PrecisaCarona' | 'Não Requerido';
export type AcomodacaoOpcao = 'QuartoCasal' | 'AlojamentoColetivo' | 'SemHospedagem';
export type RestricaoAlimentar = 'Nenhuma' | 'Vegetariano' | 'Vegano' | 'SemGluten' | 'SemLactose' | 'AlergicoEspecifico';

/**
 * Interface completa para inscrições em eventos da PIB de São Paulo.
 * Desenvolvida para apoiar tanto eventos simples (cursos) quanto complexos (acampamentos/retiros).
 */
export interface DetalhesInscricao {
  id: string;
  eventoId: string;
  eventoTitulo: string; // Redundância para otimizar exibições em listas e painéis de BI
  
  // Informações do Participante
  nomeCompleto: string;
  email: string;
  whatsapp: string;
  dataNascimento: string; // Formato YYYY-MM-DD
  perfil: ParticipantePerfil;
  membroPIBSP: boolean;
  
  // Logística (Essencial para Acampamentos de Jovens / Casais)
  transporte: TransporteOpcao;
  acomodacao?: AcomodacaoOpcao;
  restricaoAlimentar: RestricaoAlimentar;
  alergiasOuObservacoesMedicas?: string; // Informação de saúde altamente confidencial
  
  // Dados Financeiros e de Transação
  valorInscricao: number; // 0 se gratuito
  metodoPagamento: PagamentoMetodo;
  statusPagamento: PagamentoStatus;
  comprovanteUrl?: string; // Caminho ou imagem do comprovante PIX anexado
  codigoTransacao?: string; // Id gerado pelo gateway ou ERP (Atos29/inChurch)
  
  // Controle e Segurança (LGPD & Smart Church)
  status: InscricaoStatus;
  dataInscricao: string; // ISO Timestamp
  dataCheckIn?: string; // ISO Timestamp (Preenchido no Totem físico de check-in - Fase 3)
  consentimentoLGPD: boolean; // Obrigatório ser true
}

/**
 * Filtros de pesquisa para a triagem administrativa de inscrições.
 */
export interface FiltrosInscricao {
  eventoId?: string;
  status?: InscricaoStatus;
  statusPagamento?: PagamentoStatus;
  buscaRapida?: string; // Nome, email ou whatsapp
  perfilParticipante?: ParticipantePerfil;
  necessitaAtencaoEspecial?: boolean; // Filtra quem tem alergias ou precisa de carona
  checkInRealizado?: boolean;
}

/**
 * Consolidação estatística de inscrições de um evento específico.
 */
export interface MetricasInscricaoEvento {
  eventoId: string;
  totalInscritos: number;
  confirmados: number;
  pendentes: number;
  listaEspera: number;
  receitaTotalPrevista: number;
  receitaConfirmada: number;
  porcentagemOcupacao: number;
  necessidadesAlimentaresCount: Record<RestricaoAlimentar, number>;
  precisamCaronaCount: number;
}
