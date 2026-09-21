import { prisma } from '~/server/utils/prisma'

export default defineEventHandler(async (event) => {
  const method = getMethod(event)

  if (method === 'GET') {
    try {
      const usuarios = await prisma.pmo_usuarios.findMany({
        select: {
          id: true,
          nome: true,
          email: true,
          funcao: true,
          login: true,
          created_at: true
        },
        orderBy: {
          nome: 'asc'
        }
      })

      return {
        success: true,
        data: usuarios
      }
    } catch (error: any) {
      console.error('❌ Erro no GET /api/pmo/usuarios:', error)
      throw createError({
        statusCode: 500,
        statusMessage: 'Erro ao buscar a lista de usuários do PMO.',
        data: error.message
      })
    }
  }

  throw createError({
    statusCode: 405,
    statusMessage: `Método ${method} não permitido em /api/pmo/usuarios`
  })
})