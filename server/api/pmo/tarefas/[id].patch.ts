import { prisma } from '~/server/utils/prisma'

export default defineEventHandler(async (event) => {
  const method = getMethod(event)
  const id = getRouterParam(event, 'id')

  if (!id) {
    throw createError({ statusCode: 400, statusMessage: 'ID da tarefa é obrigatório.' })
  }

  if (method === 'PATCH' || method === 'PUT') {
    const body = await readBody(event)

    try {
      const updateData: Record<string, any> = {
        updated_at: new Date()
      }

      if (body.status) updateData.status = body.status
      if (body.fase) updateData.fase = body.fase
      if (body.prioridade) updateData.prioridade = body.prioridade
      if (body.titulo) updateData.titulo = body.titulo.trim()
      if (body.descricao !== undefined) updateData.descricao = body.descricao
      if (body.Impeditivo !== undefined) updateData.Impeditivo = Boolean(body.Impeditivo) // <-- ADICIONADO PARA O IMPEDITIVO
      
      if (body.responsavel_id !== undefined || body.usuario_id !== undefined) {
        updateData.responsavel_id = body.responsavel_id || body.usuario_id || null
      }

      const tarefaAtualizada = await prisma.pmo_tarefas.update({
        where: { id },
        data: updateData,
        include: {
          pmo_usuarios: {
            select: { id: true, nome: true, email: true, funcao: true }
          }
        }
      })

      return { success: true, data: tarefaAtualizada }
    } catch (error: any) {
      console.error(`❌ Erro no PATCH /api/pmo/tarefas/${id}:`, error)
      throw createError({
        statusCode: 500,
        statusMessage: 'Erro ao atualizar tarefa.',
        data: error.message
      })
    }
  }

  throw createError({
    statusCode: 405,
    statusMessage: `Método ${method} não permitido.`
  })
})