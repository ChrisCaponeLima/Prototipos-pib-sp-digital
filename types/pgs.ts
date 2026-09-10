// types/pgs.ts

export type RegiaoSP = 'Centro' | 'Zona Norte' | 'Zona Sul' | 'Zona Leste' | 'Zona Oeste' | 'Grande SP';

export interface PequenoGrupo {
  id: string;
  nome: string;
  lider: string;
  regiao: RegiaoSP;
  bairro: string;
  diaSemana: 'Segunda' | 'Terça' | 'Quarta' | 'Quinta' | 'Sexta' | 'Sábado' | 'Domingo';
  horario: string;
  perfil: 'Jovens' | 'Casais' | 'Homens' | 'Mulheres' | 'Misto' | '3ª Idade';
  modalidade: 'Presencial' | 'Online' | 'Híbrido';
  contato: string; // Número de WhatsApp do líder ou secretaria para conexão rápida
}