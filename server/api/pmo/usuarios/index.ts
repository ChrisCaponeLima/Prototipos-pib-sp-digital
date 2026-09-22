import { prisma } from '~/server/utils/prisma'

export default defineEventHandler(async (event) => {
  const method = getMethod(event)

  // GET: Listar todos os usuários
  if (method === 'GET') {
    try {
      const usuarios = await prisma.pmo_usuarios.findMany({
        select: {
          id: true,
          nome: true,
          email: true,
          login: true,
          funcao: true,
          created_at: true
        },
        orderBy: { nome: 'asc' }
      })

      return { success: true, data: usuarios }
    } catch (error: any) {
      console.error('❌ Erro no GET /api/pmo/usuarios:', error)
      throw createError({
        statusCode: 500,
        statusMessage: 'Erro ao listar usuários.'
      })
    }
  }

  // POST: Cadastrar novo usuário
  if (method === 'POST') {
    const body = await readBody(event)

    if (!body.nome || !body.email || !body.login || !body.password) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Nome, E-mail, Login e Senha são obrigatórios.'
      })
    }

    try {
      // Verifica se login ou e-mail já existem
      const existente = await prisma.pmo_usuarios.findFirst({
        where: {
          OR: [
            { email: body.email.trim() },
            { login: body.login.trim() }
          ]
        }
      })

      if (existente) {
        throw createError({
          statusCode: 400,
          statusMessage: 'E-mail ou Login já cadastrado no sistema.'
        })
      }

      const novoUsuario = await prisma.pmo_usuarios.create({
        data: {
          nome: body.nome.trim(),
          email: body.email.trim().toLowerCase(),
          login: body.login.trim(),
          password_hash: body.password, // Em prod, aplicar bcrypt/argon2
          funcao: body.funcao || 'Membro',
          created_at: new Date()
        },
        select: {
          id: true,
          nome: true,
          email: true,
          login: true,
          funcao: true,
          created_at: true
        }
      })

      return { success: true, data: novoUsuario }
    } catch (error: any) {
      console.error('❌ Erro no POST /api/pmo/usuarios:', error)
      throw createError({
        statusCode: error.statusCode || 500,
        statusMessage: error.statusMessage || 'Erro ao cadastrar usuário.'
      })
    }
  }

  throw createError({
    statusCode: 405,
    statusMessage: `Método ${method} não permitido.`
  })
})