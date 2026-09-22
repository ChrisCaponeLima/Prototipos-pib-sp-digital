import { ref, computed } from 'vue'

export interface UsuarioPmo {
  id: string
  nome: string
  email: string
  login: string
  funcao: string
}

export const usePmoAuth = () => {
  const usuario = useState<UsuarioPmo | null>('pmo_usuario', () => null)
  const carregando = ref(false)

  // Inicializa a sessão lendo do localStorage no client-side
  const initAuth = () => {
    if (import.meta.client && !usuario.value) {
      const sessaoSalva = localStorage.getItem('pmo_user_session')
      if (sessaoSalva) {
        try {
          usuario.value = JSON.parse(sessaoSalva)
        } catch {
          localStorage.removeItem('pmo_user_session')
        }
      }
    }
  }

  const estaAutenticado = computed(() => !!usuario.value)

  const login = async (loginInput: string, passwordInput: string) => {
    carregando.value = true
    try {
      const response: any = await $fetch('/api/pmo/auth/login', {
        method: 'POST',
        body: { login: loginInput, password: passwordInput }
      })

      if (response?.success && response?.usuario) {
        usuario.value = response.usuario
        if (import.meta.client) {
          localStorage.setItem('pmo_user_session', JSON.stringify(response.usuario))
        }
        return { success: true }
      }
      return { success: false, message: 'Credenciais inválidas' }
    } catch (err: any) {
      return {
        success: false,
        message: err.data?.statusMessage || 'Erro ao comunicar com o servidor.'
      }
    } finally {
      carregando.value = false
    }
  }

  const logout = () => {
    usuario.value = null
    if (import.meta.client) {
      localStorage.removeItem('pmo_user_session')
    }
    navigateTo('/pmo/login')
  }

  return {
    usuario,
    estaAutenticado,
    carregando,
    initAuth,
    login,
    logout
  }
}