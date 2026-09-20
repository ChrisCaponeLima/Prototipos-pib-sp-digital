export default defineEventHandler(async (event) => {
  const method = getMethod(event)

  // GET: Listar todos os ativos e descriptografar senhas
  if (method === 'GET') {
    try {
      const ativos = await prisma.cofreAtivo.findMany({
        orderBy: { categoria: 'asc' }
      })

      const ativosFormatados = ativos.map((ativo: any) => ({
        ...ativo,
        senha: ativo.senhaCriptografada ? decryptText(ativo.senhaCriptografada) : null
      }))

      return { success: true, data: ativosFormatados }
    } catch (error) {
      throw createError({ statusCode: 500, statusMessage: 'Erro ao buscar ativos do cofre.' })
    }
  }

  // POST: Cadastrar novo ativo no cofre com senha encriptada
  if (method === 'POST') {
    const body = await readBody(event)

    if (!body.nomeAtivo || !body.categoria) {
      throw createError({ statusCode: 400, statusMessage: 'Nome do ativo e Categoria são obrigatórios.' })
    }

    try {
      const novoAtivo = await prisma.cofreAtivo.create({
        data: {
          categoria: body.categoria,
          nomeAtivo: body.nomeAtivo,
          plataforma: body.plataforma || null,
          urlAcesso: body.urlAcesso || null,
          loginUsuario: body.loginUsuario || null,
          senhaCriptografada: body.senha ? encryptText(body.senha) : null,
          emailResgate: body.emailResgate || null,
          responsavelAtual: body.responsavelAtual || null,
          status2fa: body.status2fa || null,
          observacoes: body.observacoes || null
        }
      })

      return { success: true, data: novoAtivo }
    } catch (error) {
      throw createError({ statusCode: 500, statusMessage: 'Erro ao salvar ativo no cofre.' })
    }
  }
})
