export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  const body = await readBody(event)

  if (!id) {
    throw createError({ statusCode: 400, statusMessage: 'ID da tarefa não fornecido.' })
  }

  try {
    const tarefaAtualizada = await prisma.pmoTarefa.update({
      where: { id },
      data: {
        status: body.status,
        prioridade: body.prioridade,
        responsavelId: body.responsavelId,
        descricao: body.descricao
      }
    })

    return { success: true, data: tarefaAtualizada }
  } catch (error) {
    throw createError({ statusCode: 500, statusMessage: 'Erro ao atualizar status da tarefa.' })
  }
})