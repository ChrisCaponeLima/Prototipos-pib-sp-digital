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
      throw createError({
        statusCode: 401,
        statusMessage: 'Credenciais inválidas.'
      })
    }

    // Comparação simples ou via hash se já estiver criptografado no banco
    // Se a senha estiver salva pura em password_hash durante os testes:
    const senhaValida = usuario.password_hash === passwordInput

    if (!senhaValida) {
      throw createError({
        statusCode: 401,
        statusMessage: 'Credenciais inválidas.'
      })
    }

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
    console.error('❌ Erro no POST /api/pmo/auth/login:', error)
    throw createError({
      statusCode: error.statusCode || 500,
      statusMessage: error.statusMessage || 'Erro ao autenticar usuário.'
    })
  }
})