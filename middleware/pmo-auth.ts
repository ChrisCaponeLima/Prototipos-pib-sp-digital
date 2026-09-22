export default defineNuxtRouteMiddleware((to) => {
    const { estaAutenticado, initAuth } = usePmoAuth()
  
    // Inicializa o estado se executado no client
    initAuth()
  
    // Permite acesso à tela de login
    if (to.path === '/pmo/login') {
      if (estaAutenticado.value) {
        return navigateTo('/pmo')
      }
      return
    }
  
    // Redireciona para o login caso tente acessar rotas restritas sem estar autenticado
    if (!estaAutenticado.value) {
      return navigateTo('/pmo/login')
    }
  })