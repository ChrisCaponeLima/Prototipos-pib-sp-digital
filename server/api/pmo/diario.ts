import { prisma } from '~/server/utils/prisma'

export default defineEventHandler(async (event) => {
  const method = getMethod(event)

  // GET: Listar anotações do diário de bordo
  if (method === 'GET') {
    try {
      const apontamentos = await prisma.pmo_diario_bordo.findMany({
        include: {
          pmo_usuarios: {
            select: {
              id: true,
              nome: true,
              funcao: true
            }
          }
        },
        orderBy: {
          created_at: 'desc'
        }
      })

      const data = apontamentos.map((item) => ({
        ...item,
        nome_usuario: item.pmo_usuarios?.nome || 'Usuário PMO'
      }))

      return { success: true, data }
    } catch (error: any) {
      console.error('❌ Erro no GET /api/pmo/diario:', error)
      throw createError({
        statusCode: 500,
        statusMessage: 'Erro ao buscar dados do diário de bordo.'
      })
    }
  }

  // POST: Cadastrar novo item no diário de bordo
  if (method === 'POST') {
    const body = await readBody(event)

    if (!body.titulo || !body.resumo_decisao) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Título e Resumo/Decisão são obrigatórios.'
      })
    }

    try {
      // Aceita usuario_id ou autor_id do body e grava em autor_id no banco
      const autorId = body.autor_id || body.usuario_id || null

      const novoItem = await prisma.pmo_diario_bordo.create({
        data: {
          titulo: body.titulo.trim(),
          resumo_decisao: body.resumo_decisao.trim(),
          status: body.status || 'concluido',
          autor_id: autorId, // CORRIGIDO: nome correto do campo no schema do Prisma
          created_at: new Date()
        }
      })

      return { success: true, data: novoItem }
    } catch (error: any) {
      console.error('❌ Erro no POST /api/pmo/diario:', error)
      throw createError({
        statusCode: 500,
        statusMessage: 'Erro ao salvar novo registro no diário de bordo.',
        message: error.message
      })
    }
  }
})