import { H3Event } from 'h3'
import { prisma } from '~/server/utils/prisma'

interface LogLoginParams {
  event: H3Event
  email: string
  status: 'SUCESSO' | 'FALHA' | 'BLOQUEADO'
  usuarioId?: string | null
  detalhes?: string | null
}

export async function registrarLogLogin({
  event,
  email,
  status,
  usuarioId = null,
  detalhes = null
}: LogLoginParams) {
  try {
    // Extrai IP respeitando proxies/Cloudflare ou fallback Nitro
    const headers = getRequestHeaders(event)
    const ip = (
      headers['cf-connecting-ip'] ||
      headers['x-forwarded-for']?.toString().split(',')[0] ||
      getRequestIP(event, { xForwardedFor: true }) ||
      '0.0.0.0'
    ).trim()

    const userAgent = headers['user-agent'] || null

    await prisma.pmo_logs_login.create({
      data: {
        email: email.trim().toLowerCase(),
        status,
        usuario_id: usuarioId,
        ip,
        user_agent: userAgent,
        detalhes
      }
    })
  } catch (error) {
    // Evita que a falha no log interrompa o fluxo principal de autenticação
    console.error('❌ Erro ao gravar log de login:', error)
  }
}