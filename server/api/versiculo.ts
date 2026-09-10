// server/api/versiculo.ts
import { defineEventHandler } from 'h3'

export default defineEventHandler(() => {
  // Banco de dados em memória de versículos para validação e uso diário [8]
  const versiculos = [
    { 
      texto: "Porque pela graça sois salvos, por meio da fé; e isto não vem de vós, é dom de Deus.", 
      referencia: "Efésios 2:8" 
    },
    { 
      texto: "O Senhor é o meu pastor, nada me faltará.", 
      referencia: "Salmos 23:1" 
    },
    { 
      texto: "Lâmpada para os meus pés é tua palavra, e luz para o meu caminho.", 
      referencia: "Salmos 119:105" 
    },
    { 
      texto: "Não fui eu que lhe ordenei? Seja forte e corajoso! Não se apavore, nem desanime, pois o Senhor, o seu Deus, estará com você por onde você andar.", 
      referencia: "Josué 1:9" 
    }
  ]

  // Calcula o dia do ano corrente para rotacionar os versículos de forma dinâmica a cada 24h [8]
  const agora = new Date()
  const inicioDoAno = new Date(agora.getFullYear(), 0, 0)
  const diferenca = agora.getTime() - inicioDoAno.getTime()
  const dayOfYear = Math.floor(diferenca / (1000 * 60 * 60 * 24))

  return {
    success: true,
    data: versiculos[dayOfYear % versiculos.length],
    timestamp: agora.toISOString()
  }
})