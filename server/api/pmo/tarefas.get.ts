// server/api/pmo/tarefas.get.ts
import { prisma } from '~/server/utils/prisma'

export default defineEventHandler(async (event) => {
  try {
    // Busca todas as tarefas ordenadas por updated_at
    const tarefas = await prisma.pmo_tarefas.findMany({
      include: {
        pmo_usuarios: {
          select: { 
            id: true,
            nome: true, 
            email: true 
          }
        }
      },
      orderBy: { 
        updated_at: 'desc' 
      }
    })

    return {
      success: true,
      data: tarefas
    }
  } catch (error: any) {
    console.error('❌ Erro na API /api/pmo/tarefas:', error)

    throw createError({
      statusCode: 500,
      statusMessage: 'Erro ao carregar tarefas do PMO',
      data: error.message
    })
  }
})