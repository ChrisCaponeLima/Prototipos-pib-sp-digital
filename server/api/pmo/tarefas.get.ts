export default defineEventHandler(async (event) => {
  try {
    // Busca todas as tarefas ordenadas pela data de atualização
    const tarefas = await prisma.pmoTarefa.findMany({
      include: {
        responsavel: {
          select: { nome: true, email: true, funcao: true }
        }
      },
      orderBy: { updatedAt: 'desc' }
    })

    return {
      success: true,
      data: tarefas
    }
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Erro ao carregar tarefas do PMO'
    })
  }
})