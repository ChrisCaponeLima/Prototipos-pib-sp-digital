import { prisma } from '~/server/utils/prisma'

export default defineEventHandler(async (event) => {
  const method = getMethod(event)

  if (method !== 'POST') {
    throw createError({
      statusCode: 405,
      statusMessage: `Método ${method} não permitido`
    })
  }

  const body = await readBody(event)
  const loginInput = body.login?.trim()
  const passwordInput = body.password

  if (!loginInput || !passwordInput) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Informe o login/e-mail e a senha.'
    })
  }

  // Captura IP e User-Agent do evento de forma segura no Nuxt 3
  const headers = getRequestHeaders(event)
  const ip = (
    headers['cf-connecting-ip'] ||
    headers['x-forwarded-for']?.toString().split(',')[0] ||
    getRequestIP(event) ||
    '0.0.0.0'
  ).trim()
  const userAgent = headers['user-agent'] || null

  // Função interna para salvar o log sem interromper a resposta da API
  const registrarLog = async (
    status: 'SUCESSO' | 'FALHA' | 'BLOQUEADO',
    usuarioId: string | null = null,
    detalhes: string | null = null
  ) => {
    try {
      await prisma.pmo_logs_login.create({
        data: {
          email: loginInput,
          status,
          usuario_id: usuarioId,
          ip,
          user_agent: userAgent,
          detalhes
        }
      })
    } catch (err) {
      console.error('⚠️ Falha ao salvar log de login no banco:', err)
    }
  }

  try {
    // Busca o usuário pelo campo login ou pelo email
    const usuario = await prisma.pmo_usuarios.findFirst({
      where: {
        OR: [
          { login: loginInput },
          { email: loginInput }
        ]
      }
    })

    if (!usuario) {
      await registrarLog('FALHA', null, 'Usuário/Login não encontrado.')
      throw createError({
        statusCode: 401,
        statusMessage: 'Credenciais inválidas.'
      })
    }

    // Comparação simples ou via hash se já estiver criptografado no banco
    // Se a senha estiver salva pura em password_hash durante os testes:
    const senhaValida = usuario.password_hash === passwordInput

    if (!senhaValida) {
      await registrarLog('FALHA', usuario.id, 'Senha incorreta.')
      throw createError({
        statusCode: 401,
        statusMessage: 'Credenciais inválidas.'
      })
    }

    // Log de Sucesso
    await registrarLog('SUCESSO', usuario.id, 'Autenticação realizada com sucesso.')

    return {
      success: true,
      usuario: {
        id: usuario.id,
        nome: usuario.nome,
        email: usuario.email,
        funcao: usuario.funcao
      }
    }
  } catch (error: any) {
    // Se for o próprio erro 401/400 criado acima, re-lança para o cliente receber o status correto
    if (error.statusCode) {
      throw error
    }

    console.error('❌ Erro no POST /api/pmo/auth/login:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Erro ao autenticar usuário.'
    })
  }
})