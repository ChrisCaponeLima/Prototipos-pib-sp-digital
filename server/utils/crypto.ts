import { createCipheriv, createDecipheriv, randomBytes } from 'node:crypto'

const ALGORITHM = 'aes-256-gcm'
// Utiliza a variável do .env ou uma chave padrão de desenvolvimento (32 bytes)
const SECRET_KEY = Buffer.from(
  (process.env.ENCRYPTION_SECRET || 'pib_sp_digital_secret_key_32_ch').padEnd(32, '0').slice(0, 32)
)

export function encryptText(text: string): string {
  if (!text) return ''
  const iv = randomBytes(12)
  const cipher = createCipheriv(ALGORITHM, SECRET_KEY, iv)
  let encrypted = cipher.update(text, 'utf8', 'hex')
  encrypted += cipher.final('hex')
  const authTag = cipher.getAuthTag().toString('hex')
  
  // Retorna iv:authTag:texto_criptografado
  return `${iv.toString('hex')}:${authTag}:${encrypted}`
}

export function decryptText(cipherText: string): string {
  if (!cipherText || !cipherText.includes(':')) return cipherText
  try {
    const [ivHex, authTagHex, encryptedHex] = cipherText.split(':')
    const iv = Buffer.from(ivHex, 'hex')
    const authTag = Buffer.from(authTagHex, 'hex')
    const decipher = createDecipheriv(ALGORITHM, SECRET_KEY, iv)
    decipher.setAuthTag(authTag)
    let decrypted = decipher.update(encryptedHex, 'hex', 'utf8')
    decrypted += decipher.final('utf8')
    return decrypted
  } catch (err) {
    return '[Erro ao descriptografar]'
  }
}
