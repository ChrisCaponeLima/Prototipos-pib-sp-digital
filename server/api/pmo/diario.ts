// server/api/pmo/diario.ts
import { prisma } from '~/server/utils/prisma'

export default defineEventHandler(async (event) => {
  try {
    const apontamentos = await prisma.pmo_diario_bordo.findMany({
      orderBy: {
        created_at: 'desc'
      },
      include: {
        pmo_usuarios: {
          select: {
            nome: true,
            email: true
          }
        }
      }
    })

    return {
      success: true,
      data: apontamentos
    }
  } catch (error: any) {
    // 🔍 Imprime o erro REAL completo no terminal do servidor
    console.error('--- ERRO DETALHADO DO PRISMA ---')
    console.error(error)
    console.error('--------------------------------')

    throw createError({
      statusCode: 500,
      statusMessage: error.message || 'Erro ao conectar ao banco de dados',
      data: error
    })
  }
})