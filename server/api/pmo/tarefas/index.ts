import { prisma } from '~/server/utils/prisma'

export default defineEventHandler(async (event) => {
  const method = getMethod(event)

  // GET: Listar tarefas
  if (method === 'GET') {
    try {
      const tarefas = await prisma.pmo_tarefas.findMany({
        include: {
          pmo_usuarios: {
            select: { id: true, nome: true, email: true, funcao: true }
          }
        },
        orderBy: { updated_at: 'desc' }
      })

      return { success: true, data: tarefas }
    } catch (error: any) {
      console.error('❌ Erro no GET /api/pmo/tarefas:', error)
      throw createError({
        statusCode: 500,
        statusMessage: 'Erro ao carregar tarefas do PMO.',
        data: error.message
      })
    }
  }

  // POST: Criar nova tarefa
  if (method === 'POST') {
    const body = await readBody(event)

    if (!body.titulo || !body.fase) {
      throw createError({ 
        statusCode: 400, 
        statusMessage: 'Título e Fase são obrigatórios.' 
      })
    }

    try {
      const responsavelId = body.responsavel_id || body.usuario_id || body.responsavelId || null

      const novaTarefa = await prisma.pmo_tarefas.create({
        data: {
          titulo: body.titulo.trim(),
          descricao: body.descricao || null,
          fase: body.fase,
          status: body.status || 'a_fazer',
          prioridade: body.prioridade || 'media',
          responsavel_id: responsavelId,
          Impeditivo: Boolean(body.Impeditivo), // <-- ADICIONADO PARA O IMPEDITIVO
          updated_at: new Date()
        }
      })

      return { success: true, data: novaTarefa }
    } catch (error: any) {
      console.error('❌ Erro no POST /api/pmo/tarefas:', error)
      throw createError({ 
        statusCode: 500, 
        statusMessage: 'Erro ao criar nova tarefa.',
        data: error.message 
      })
    }
  }

  throw createError({
    statusCode: 405,
    statusMessage: `Método ${method} não permitido.`
  })
})