import { prisma } from '~/server/utils/prisma'
import { encryptText, decryptText } from '~/server/utils/crypto'

export default defineEventHandler(async (event) => {
  const method = getMethod(event)

  // GET: Listar ativos do cofre
  if (method === 'GET') {
    try {
      const ativos = await prisma.cofre_ativos.findMany({
        orderBy: { categoria: 'asc' }
      })

      // Busca usuários para mapear o id (responsavel_atual) para o nome
      const usuarios = await prisma.pmo_usuarios.findMany({
        select: { id: true, nome: true }
      })
      const mapaUsuarios = new Map(usuarios.map(u => [u.id, u.nome]))

      const ativosFormatados = ativos.map((ativo) => ({
        ...ativo,
        senha: ativo.senha_criptografada ? decryptText(ativo.senha_criptografada) : null,
        nome_responsavel: ativo.responsavel_atual ? mapaUsuarios.get(ativo.responsavel_atual) || 'Não encontrado' : null
      }))

      return { success: true, data: ativosFormatados }
    } catch (error: any) {
      console.error('❌ Erro no GET /api/pmo/cofre:', error)
      throw createError({ 
        statusCode: 500, 
        statusMessage: 'Erro ao buscar ativos do cofre.' 
      })
    }
  }

  // POST: Cadastrar novo ativo no cofre
  if (method === 'POST') {
    const body = await readBody(event)

    const nomeAtivo = body.nome_ativo || body.nomeAtivo
    const categoria = body.categoria

    if (!nomeAtivo || !categoria) {
      throw createError({ 
        statusCode: 400, 
        statusMessage: 'Nome do ativo e Categoria são obrigatórios.' 
      })
    }

    try {
      const novoAtivo = await prisma.cofre_ativos.create({
        data: {
          categoria: categoria,
          nome_ativo: nomeAtivo,
          plataforma: body.plataforma || null,
          url_acesso: body.url_acesso || null,
          login_usuario: body.login_usuario || null,
          senha_criptografada: body.senha ? encryptText(body.senha) : null,
          email_resgate: body.email_resgate || null,
          responsavel_atual: body.responsavel_atual || null,
          status_2fa: body.status_2fa || null,
          observacoes: body.observacoes || null,
          updated_at: new Date()
        }
      })

      return { success: true, data: novoAtivo }
    } catch (error: any) {
      console.error('❌ Erro no POST /api/pmo/cofre:', error)
      throw createError({ 
        statusCode: 500, 
        statusMessage: 'Erro ao salvar ativo no cofre.',
        data: error.message
      })
    }
  }
})