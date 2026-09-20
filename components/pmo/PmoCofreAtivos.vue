<template>
    <div class="space-y-4">
      <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-2">
        <div>
          <h2 class="text-xl font-bold text-white">Cofre de Credenciais Criptografado</h2>
          <p class="text-xs text-slate-400">Senhas e tokens protegidos via AES-256-GCM</p>
        </div>
        <button class="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-xl shadow-lg">+ Cadastrar Ativo</button>
      </div>
  
      <div class="bg-slate-800/60 border border-slate-700/50 rounded-2xl overflow-hidden shadow-xl">
        <table class="w-full text-left text-sm">
          <thead class="bg-slate-800 text-slate-400 text-xs uppercase tracking-wider border-b border-slate-700">
            <tr>
              <th class="p-4">Ativo</th>
              <th class="p-4">Categoria</th>
              <th class="p-4">Login</th>
              <th class="p-4">Senha</th>
              <th class="p-4">Resgate</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-700/50">
            <tr v-for="ativo in ativosCofre" :key="ativo.id" class="hover:bg-slate-800/40">
              <td class="p-4 font-semibold text-white">{{ ativo.nomeAtivo }}</td>
              <td class="p-4"><span class="px-2 py-0.5 bg-slate-700 text-amber-300 text-xs rounded">{{ ativo.categoria }}</span></td>
              <td class="p-4 font-mono text-xs text-slate-300">{{ ativo.loginUsuario || '—' }}</td>
              <td class="p-4 font-mono text-xs">
                <span class="px-2 py-1 bg-slate-900 rounded border border-slate-700">{{ exibeSenha[ativo.id] ? ativo.senha : '••••••••' }}</span>
                <button @click="toggleSenha(ativo.id)" class="ml-2 text-xs text-slate-400 hover:text-amber-400">{{ exibeSenha[ativo.id] ? 'Ocultar' : 'Ver' }}</button>
              </td>
              <td class="p-4 text-xs text-slate-400">{{ ativo.emailResgate || '—' }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue'
  
  const ativosCofre = ref<any[]>([])
  const exibeSenha = ref<Record<string, boolean>>({})
  
  function toggleSenha(id: string) {
    exibeSenha.value[id] = !exibeSenha.value[id]
  }
  
  async function carregarCofre() {
    try {
      const res: any = await $fetch('/api/pmo/cofre')
      if (res?.success) ativosCofre.value = res.data
    } catch (err) {
      console.error('Erro ao carregar cofre', err)
    }
  }
  
  onMounted(() => {
    carregarCofre()
  })
  </script>