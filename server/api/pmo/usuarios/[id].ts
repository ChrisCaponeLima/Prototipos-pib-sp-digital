import { prisma } from '~/server/utils/prisma'

export default defineEventHandler(async (event) => {
  const method = getMethod(event)
  const id = getRouterParam(event, 'id')

  if (!id) {
    throw createError({ statusCode: 400, statusMessage: 'ID não informado.' })
  }

  // PUT / PATCH: Atualizar usuário
  if (method === 'PUT' || method === 'PATCH') {
    const body = await readBody(event)

    try {
      const updateData: Record<string, any> = {}

      if (body.nome) updateData.nome = body.nome.trim()
      if (body.email) updateData.email = body.email.trim().toLowerCase()
      if (body.login) updateData.login = body.login.trim()
      if (body.funcao) updateData.funcao = body.funcao
      if (body.password) updateData.password_hash = body.password

      const usuarioAtualizado = await prisma.pmo_usuarios.update({
        where: { id },
        data: updateData,
        select: {
          id: true,
          nome: true,
          email: true,
          login: true,
          funcao: true,
          created_at: true
        }
      })

      return { success: true, data: usuarioAtualizado }
    } catch (error: any) {
      console.error(`❌ Erro no PATCH /api/pmo/usuarios/${id}:`, error)
      throw createError({
        statusCode: 500,
        statusMessage: 'Erro ao atualizar dados do usuário.'
      })
    }
  }

  // DELETE: Remover usuário
  if (method === 'DELETE') {
    try {
      await prisma.pmo_usuarios.delete({
        where: { id }
      })

      return { success: true, message: 'Usuário removido com sucesso.' }
    } catch (error: any) {
      console.error(`❌ Erro no DELETE /api/pmo/usuarios/${id}:`, error)
      throw createError({
        statusCode: 500,
        statusMessage: 'Não foi possível excluir o usuário. Verifique se ele possui tarefas vinculadas.'
      })
    }
  }

  throw createError({
    statusCode: 405,
    statusMessage: `Método ${method} não permitido.`
  })
})