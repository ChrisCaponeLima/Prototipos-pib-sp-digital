import { prisma } from '~/server/utils/prisma'
import { encryptText } from '~/server/utils/crypto'

export default defineEventHandler(async (event) => {
  const method = getMethod(event)
  const id = getRouterParam(event, 'id')

  if (!id) {
    throw createError({ statusCode: 400, statusMessage: 'ID do ativo não informado.' })
  }

  // PATCH / PUT: Atualizar ativo
  if (method === 'PATCH' || method === 'PUT') {
    const body = await readBody(event)

    try {
      const updateData: Record<string, any> = {
        updated_at: new Date()
      }

      if (body.categoria !== undefined) updateData.categoria = body.categoria
      if (body.nomeAtivo !== undefined || body.nome_ativo !== undefined) {
        updateData.nome_ativo = body.nomeAtivo || body.nome_ativo
      }
      if (body.plataforma !== undefined) updateData.plataforma = body.plataforma
      if (body.urlAcesso !== undefined || body.url_acesso !== undefined) {
        updateData.url_acesso = body.urlAcesso || body.url_acesso
      }
      if (body.loginUsuario !== undefined || body.login_usuario !== undefined) {
        updateData.login_usuario = body.loginUsuario || body.login_usuario
      }
      if (body.senha) {
        updateData.senha_criptografada = encryptText(body.senha)
      }
      if (body.emailResgate !== undefined || body.email_resgate !== undefined) {
        updateData.email_resgate = body.emailResgate || body.email_resgate
      }
      if (body.responsavelAtual !== undefined || body.responsavel_atual !== undefined) {
        updateData.responsavel_atual = body.responsavelAtual || body.responsavel_atual
      }
      if (body.status2fa !== undefined || body.status_2fa !== undefined) {
        updateData.status_2fa = body.status2fa || body.status_2fa
      }
      if (body.observacoes !== undefined) updateData.observacoes = body.observacoes

      const ativoAtualizado = await prisma.cofre_ativos.update({
        where: { id },
        data: updateData
      })

      return { success: true, data: ativoAtualizado }
    } catch (error: any) {
      throw createError({ statusCode: 500, statusMessage: 'Erro ao atualizar ativo no cofre.' })
    }
  }

  // DELETE: Remover ativo
  if (method === 'DELETE') {
    try {
      await prisma.cofre_ativos.delete({ where: { id } })
      return { success: true, message: 'Ativo removido com sucesso.' }
    } catch (error: any) {
      throw createError({ statusCode: 500, statusMessage: 'Erro ao excluir ativo do cofre.' })
    }
  }
})