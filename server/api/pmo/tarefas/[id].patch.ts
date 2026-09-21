import { prisma } from '~/server/utils/prisma'

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  const body = await readBody(event)

  if (!id) {
    throw createError({ 
      statusCode: 400, 
      statusMessage: 'ID da tarefa não fornecido.' 
    })
  }

  try {
    // Monta o objeto data garantindo o mapeamento correto do snake_case
    const updateData: Record<string, any> = {
      updated_at: new Date()
    }

    if (body.status !== undefined) updateData.status = body.status
    if (body.prioridade !== undefined) updateData.prioridade = body.prioridade
    if (body.descricao !== undefined) updateData.descricao = body.descricao
    if (body.fase !== undefined) updateData.fase = body.fase
    if (body.titulo !== undefined) updateData.titulo = body.titulo
    
    // Mapeia responsavelId / responsavel_id para a coluna exata do Prisma
    if (body.responsavelId !== undefined || body.responsavel_id !== undefined) {
      updateData.responsavel_id = body.responsavelId || body.responsavel_id
    }

    const tarefaAtualizada = await prisma.pmo_tarefas.update({
      where: { id },
      data: updateData,
      include: {
        pmo_usuarios: {
          select: { id: true, nome: true, email: true }
        }
      }
    })

    return { 
      success: true, 
      data: tarefaAtualizada 
    }
  } catch (error: any) {
    console.error(`❌ Erro ao atualizar tarefa ${id}:`, error)

    throw createError({ 
      statusCode: 500, 
      statusMessage: 'Erro ao atualizar tarefa do PMO.',
      data: error.message
    })
  }
})