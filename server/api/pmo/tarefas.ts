export default defineEventHandler(async (event) => {
  const method = getMethod(event)

  if (method === 'GET') {
    try {
      const tarefas = await prisma.pmoTarefa.findMany({
        include: {
          responsavel: {
            select: { nome: true, email: true, funcao: true }
          }
        },
        orderBy: { updatedAt: 'desc' }
      })

      return { success: true, data: tarefas }
    } catch (error) {
      throw createError({ statusCode: 500, statusMessage: 'Erro ao carregar tarefas do Kanban.' })
    }
  }

  if (method === 'POST') {
    const body = await readBody(event)

    if (!body.titulo || !body.fase) {
      throw createError({ statusCode: 400, statusMessage: 'Título e Fase são obrigatórios.' })
    }

    try {
      const novaTarefa = await prisma.pmoTarefa.create({
        data: {
          titulo: body.titulo,
          descricao: body.descricao || '',
          fase: body.fase,
          status: body.status || 'a_fazer',
          prioridade: body.prioridade || 'media',
          responsavelId: body.responsavelId || null
        }
      })

      return { success: true, data: novaTarefa }
    } catch (error) {
      throw createError({ statusCode: 500, statusMessage: 'Erro ao criar tarefa.' })
    }
  }
})
