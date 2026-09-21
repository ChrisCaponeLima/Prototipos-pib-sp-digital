import { createCipheriv, createDecipheriv, randomBytes, createHash } from 'node:crypto'

const ALGORITHM = 'aes-256-gcm'

// Obtém a chave do .env (ou fallback)
const rawSecret = process.env.ENCRYPTION_SECRET || 'pib_sp_digital_secret_key_32_ch'

// O Hash SHA-256 gera SEMPRE exatamente 32 bytes (256 bits),
// mesmo que a chave tenha acentos (como 'ç'), seja maior ou menor.
const SECRET_KEY = createHash('sha256').update(rawSecret).digest()

export function encryptText(text: string): string {
  if (!text) return ''
  try {
    const iv = randomBytes(12)
    const cipher = createCipheriv(ALGORITHM, SECRET_KEY, iv)
    let encrypted = cipher.update(text, 'utf8', 'hex')
    encrypted += cipher.final('hex')
    const authTag = cipher.getAuthTag().toString('hex')
    
    return `${iv.toString('hex')}:${authTag}:${encrypted}`
  } catch (err) {
    console.error('❌ Erro ao criptografar:', err)
    return ''
  }
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