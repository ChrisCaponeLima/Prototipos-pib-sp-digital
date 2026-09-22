<template>
    <div class="min-h-screen bg-slate-950 flex items-center justify-center p-4 selection:bg-amber-500 selection:text-slate-950">
      <!-- Glow de Fundo -->
      <div class="absolute w-96 h-96 bg-amber-500/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>
  
      <div class="w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl backdrop-blur-xl space-y-6">
        <!-- Marca / Cabeçalho -->
        <div class="text-center space-y-2">
          <div class="w-14 h-14 bg-amber-500/10 border border-amber-500/20 rounded-2xl flex items-center justify-center mx-auto text-amber-400 text-2xl shadow-inner mb-3">
            ⚡
          </div>
          <h1 class="text-2xl font-bold text-white tracking-tight">PIBSP — Painel PMO</h1>
          <p class="text-xs text-slate-400">Acesse com suas credenciais para gerenciar tarefas e cofre</p>
        </div>
  
        <!-- Form de Autenticação -->
        <form @submit.prevent="handleLogin" class="space-y-4">
          <div>
            <label class="block text-xs font-semibold text-slate-300 mb-1.5">Usuário ou E-mail</label>
            <input
              v-model="loginInput"
              type="text"
              placeholder="seu.login ou email@pib.org.br"
              class="w-full bg-slate-950 border border-slate-800 focus:border-amber-500/80 rounded-xl p-3 text-sm text-white placeholder-slate-600 focus:outline-none transition-all shadow-inner"
              required
            />
          </div>
  
          <div>
            <label class="block text-xs font-semibold text-slate-300 mb-1.5">Senha</label>
            <input
              v-model="passwordInput"
              type="password"
              placeholder="••••••••"
              class="w-full bg-slate-950 border border-slate-800 focus:border-amber-500/80 rounded-xl p-3 text-sm text-white placeholder-slate-600 focus:outline-none transition-all shadow-inner"
              required
            />
          </div>
  
          <!-- Alerta de Erro -->
          <div v-if="mensagemErro" class="p-3 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-xs text-center font-medium">
            {{ mensagemErro }}
          </div>
  
          <!-- Botão Entrar -->
          <button
            type="submit"
            :disabled="carregando"
            class="w-full py-3.5 bg-amber-500 hover:bg-amber-400 active:scale-[0.99] text-slate-950 font-bold text-sm rounded-xl shadow-lg shadow-amber-500/10 transition-all cursor-pointer disabled:opacity-50 flex items-center justify-center gap-2 mt-2"
          >
            <span v-if="carregando">⌛ Autenticando...</span>
            <span v-else>Acessar Painel ➔</span>
          </button>
        </form>
  
        <div class="pt-4 border-t border-slate-800/80 text-center">
          <p class="text-[11px] text-slate-500">
            Criptografia ponta a ponta &bull; PIBSP Digital {{ new Date().getFullYear() }}
          </p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  
  definePageMeta({
    layout: false // Desativa o layout padrão com sidebar para tela cheia
  })
  
  const { login, carregando } = usePmoAuth()
  
  const loginInput = ref('')
  const passwordInput = ref('')
  const mensagemErro = ref('')
  
  async function handleLogin() {
    mensagemErro.value = ''
    
    if (!loginInput.value || !passwordInput.value) {
      mensagemErro.value = 'Preencha o login e a senha.'
      return
    }
  
    const res = await login(loginInput.value, passwordInput.value)
  
    if (res.success) {
      navigateTo('/pmo')
    } else {
      mensagemErro.value = res.message || 'Credenciais inválidas.'
    }
  }
  </script>