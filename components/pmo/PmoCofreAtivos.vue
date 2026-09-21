<template>
  <div class="space-y-4">
    <!-- Cabeçalho -->
    <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-2">
      <div>
        <h2 class="text-xl font-bold text-white">Cofre de Credenciais Criptografado</h2>
        <p class="text-xs text-slate-400">Senhas e tokens protegidos via AES-256-GCM</p>
      </div>
      <button 
        @click="abrirModal"
        class="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-xl shadow-lg transition-all cursor-pointer flex items-center gap-1.5"
      >
        <span>+</span> Cadastrar Ativo
      </button>
    </div>

    <!-- Tabela de Ativos -->
    <div class="bg-slate-800/60 border border-slate-700/50 rounded-2xl overflow-hidden shadow-xl">
      <div v-if="pending" class="p-8 text-center text-slate-400 text-xs">
        ⏳ Carregando credenciais do cofre...
      </div>

      <div v-else-if="ativosCofre.length === 0" class="p-8 text-center text-slate-400 text-xs">
        Nenhum ativo cadastrado no cofre.
      </div>

      <div v-else class="overflow-x-auto">
        <table class="w-full text-left text-sm">
          <thead class="bg-slate-800 text-slate-400 text-xs uppercase tracking-wider border-b border-slate-700">
            <tr>
              <th class="p-4">Ativo / Plataforma</th>
              <th class="p-4">Categoria</th>
              <th class="p-4">Login</th>
              <th class="p-4">Senha</th>
              <th class="p-4">2FA</th>
              <th class="p-4">Responsável</th>
              <th class="p-4">Ações</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-700/50">
            <tr v-for="ativo in ativosCofre" :key="ativo.id" class="hover:bg-slate-800/40">
              <td class="p-4 font-semibold text-white">
                <div class="flex flex-col">
                  <span>{{ ativo.nome_ativo }}</span>
                  <span v-if="ativo.plataforma" class="text-[11px] text-slate-400 font-normal">
                    {{ ativo.plataforma }}
                  </span>
                </div>
              </td>

              <td class="p-4">
                <span class="px-2 py-0.5 bg-slate-700 text-amber-300 text-xs rounded">
                  {{ ativo.categoria }}
                </span>
              </td>

              <td class="p-4 font-mono text-xs text-slate-300">
                {{ ativo.login_usuario || '—' }}
              </td>

              <td class="p-4 font-mono text-xs">
                <div class="flex items-center gap-2">
                  <span class="px-2 py-1 bg-slate-900 rounded border border-slate-700 select-all">
                    {{ exibeSenha[ativo.id] ? (ativo.senha || 'Sem senha') : '••••••••' }}
                  </span>
                  <button 
                    @click="toggleSenha(ativo.id)" 
                    class="text-xs text-slate-400 hover:text-amber-400 cursor-pointer"
                  >
                    {{ exibeSenha[ativo.id] ? 'Ocultar' : 'Ver' }}
                  </button>
                  <button 
                    v-if="ativo.senha"
                    @click="copiarTexto(ativo.senha)" 
                    class="text-xs text-slate-500 hover:text-white cursor-pointer"
                    title="Copiar senha"
                  >
                    📋
                  </button>
                </div>
              </td>

              <td class="p-4 text-xs">
                <span 
                  v-if="ativo.status_2fa"
                  :class="{
                    'bg-emerald-500/20 text-emerald-400 border-emerald-500/30': ativo.status_2fa === 'Ativo',
                    'bg-amber-500/20 text-amber-400 border-amber-500/30': ativo.status_2fa === 'Pendente',
                    'bg-slate-700 text-slate-400 border-slate-600': ativo.status_2fa === 'Inativo'
                  }"
                  class="px-2 py-0.5 text-[11px] rounded border"
                >
                  {{ ativo.status_2fa }}
                </span>
                <span v-else class="text-slate-500">—</span>
              </td>

              <td class="p-4 text-xs text-slate-300">
                {{ ativo.nome_responsavel || '—' }}
              </td>

              <td class="p-4 text-xs">
                <a 
                  v-if="ativo.url_acesso" 
                  :href="ativo.url_acesso" 
                  target="_blank" 
                  class="text-amber-400 hover:underline"
                >
                  Acessar ↗
                </a>
                <span v-else class="text-slate-500">—</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Modal de Cadastro -->
    <div v-if="modalCadastro" class="fixed inset-0 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 z-50 overflow-y-auto">
      <div class="bg-slate-900 border border-slate-700 rounded-2xl p-6 max-w-lg w-full shadow-2xl space-y-4 my-8">
        <div class="flex justify-between items-center border-b border-slate-800 pb-3">
          <h3 class="text-lg font-bold text-white">Cadastrar Ativo no Cofre</h3>
          <button @click="modalCadastro = false" class="text-slate-400 hover:text-white">✕</button>
        </div>

        <!-- Nome e Categoria -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label class="block text-xs font-semibold text-slate-400 mb-1">Nome do Ativo *</label>
            <input v-model="formAtivo.nome_ativo" type="text" placeholder="Ex: Servidor VPS Principal" class="w-full bg-slate-800 border border-slate-700 rounded-lg p-2.5 text-sm text-white focus:outline-none focus:border-amber-500" />
          </div>

          <div>
            <label class="block text-xs font-semibold text-slate-400 mb-1">Categoria *</label>
            <select v-model="formAtivo.categoria" class="w-full bg-slate-800 border border-slate-700 rounded-lg p-2.5 text-sm text-white focus:outline-none focus:border-amber-500">
              <option value="Servidor">Servidor</option>
              <option value="Dominio">Domínio</option>
              <option value="Banco de Dados">Banco de Dados</option>
              <option value="API">API / Integração</option>
              <option value="Sistemas">Sistemas / Software</option>
              <option value="Rede">Rede / Infraestrutura</option>
              <option value="E-mail">Conta de E-mail</option>
            </select>
          </div>
        </div>

        <!-- Plataforma e URL -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label class="block text-xs font-semibold text-slate-400 mb-1">Plataforma</label>
            <input v-model="formAtivo.plataforma" type="text" placeholder="Ex: AWS / Cloudflare" class="w-full bg-slate-800 border border-slate-700 rounded-lg p-2.5 text-sm text-white focus:outline-none focus:border-amber-500" />
          </div>

          <div>
            <label class="block text-xs font-semibold text-slate-400 mb-1">URL de Acesso</label>
            <input v-model="formAtivo.url_acesso" type="url" placeholder="https://painel.exemplo.com" class="w-full bg-slate-800 border border-slate-700 rounded-lg p-2.5 text-sm text-white focus:outline-none focus:border-amber-500" />
          </div>
        </div>

        <!-- Login e Senha -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label class="block text-xs font-semibold text-slate-400 mb-1">Login / Usuário</label>
            <input v-model="formAtivo.login_usuario" type="text" placeholder="admin@pib.org.br" class="w-full bg-slate-800 border border-slate-700 rounded-lg p-2.5 text-sm text-white focus:outline-none focus:border-amber-500" />
          </div>

          <div>
            <label class="block text-xs font-semibold text-slate-400 mb-1">Senha</label>
            <input v-model="formAtivo.senha" type="password" placeholder="Senha secreta" class="w-full bg-slate-800 border border-slate-700 rounded-lg p-2.5 text-sm text-white focus:outline-none focus:border-amber-500" />
          </div>
        </div>

        <!-- E-mail de Resgate e Responsável -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label class="block text-xs font-semibold text-slate-400 mb-1">E-mail de Resgate</label>
            <input v-model="formAtivo.email_resgate" type="email" placeholder="ti@pib.org.br" class="w-full bg-slate-800 border border-slate-700 rounded-lg p-2.5 text-sm text-white focus:outline-none focus:border-amber-500" />
          </div>

          <div>
            <label class="block text-xs font-semibold text-slate-400 mb-1">Responsável Atual</label>
            <select v-model="formAtivo.responsavel_atual" class="w-full bg-slate-800 border border-slate-700 rounded-lg p-2.5 text-sm text-white focus:outline-none focus:border-amber-500">
              <option :value="null">Nenhum responsável</option>
              <option v-for="user in usuarios" :key="user.id" :value="user.id">
                {{ user.nome }}
              </option>
            </select>
          </div>
        </div>

        <!-- Status 2FA e Observações -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div>
            <label class="block text-xs font-semibold text-slate-400 mb-1">Status 2FA</label>
            <select v-model="formAtivo.status_2fa" class="w-full bg-slate-800 border border-slate-700 rounded-lg p-2.5 text-sm text-white focus:outline-none focus:border-amber-500">
              <option value="Inativo">Inativo</option>
              <option value="Ativo">Ativo</option>
              <option value="Pendente">Pendente</option>
            </select>
          </div>

          <div class="sm:col-span-2">
            <label class="block text-xs font-semibold text-slate-400 mb-1">Observações</label>
            <input v-model="formAtivo.observacoes" type="text" placeholder="Observações e anotações adicionais" class="w-full bg-slate-800 border border-slate-700 rounded-lg p-2.5 text-sm text-white focus:outline-none focus:border-amber-500" />
          </div>
        </div>

        <div v-if="erroForm" class="p-2.5 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-xs">
          {{ erroForm }}
        </div>

        <!-- Botões -->
        <div class="flex justify-end gap-3 pt-4 border-t border-slate-800">
          <button @click="modalCadastro = false" class="px-4 py-2 text-sm text-slate-400 hover:text-white cursor-pointer">
            Cancelar
          </button>
          <button 
            @click="salvarAtivo" 
            :disabled="salvando" 
            class="px-4 py-2 bg-amber-500 text-slate-950 font-bold text-sm rounded-lg hover:bg-amber-400 disabled:opacity-50 cursor-pointer flex items-center gap-2"
          >
            <span v-if="salvando">💾 Salvando...</span>
            <span v-else>Salvar Ativo</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

interface AtivoCofre {
  id: string
  nome_ativo: string
  categoria: string
  plataforma?: string
  url_acesso?: string
  login_usuario?: string
  senha?: string
  email_resgate?: string
  responsavel_atual?: string
  nome_responsavel?: string
  status_2fa?: string
  observacoes?: string
}

interface Usuario {
  id: string
  nome: string
  email: string
}

const exibeSenha = ref<Record<string, boolean>>({})
const modalCadastro = ref(false)
const salvando = ref(false)
const erroForm = ref('')

const formAtivo = ref({
  nome_ativo: '',
  categoria: 'Servidor',
  plataforma: '',
  url_acesso: '',
  login_usuario: '',
  senha: '',
  email_resgate: '',
  responsavel_atual: null as string | null,
  status_2fa: 'Inativo',
  observacoes: ''
})

// Busca ativos no padrão de rota /api/pmo/cofre
const { data: responseCofre, pending, refresh } = await useFetch<{ success: boolean, data: AtivoCofre[] }>('/api/pmo/cofre')
const ativosCofre = computed<AtivoCofre[]>(() => responseCofre.value?.data || [])

// Busca lista de usuários no padrão /api/pmo/usuarios
const { data: responseUsuarios } = await useFetch<{ success: boolean, data: Usuario[] }>('/api/pmo/usuarios')
const usuarios = computed<Usuario[]>(() => responseUsuarios.value?.data || [])

function toggleSenha(id: string) {
  exibeSenha.value[id] = !exibeSenha.value[id]
}

function copiarTexto(texto: string) {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(texto)
  }
}

function abrirModal() {
  erroForm.value = ''
  formAtivo.value = {
    nome_ativo: '',
    categoria: 'Servidor',
    plataforma: '',
    url_acesso: '',
    login_usuario: '',
    senha: '',
    email_resgate: '',
    responsavel_atual: null,
    status_2fa: 'Inativo',
    observacoes: ''
  }
  modalCadastro.value = true
}

async function salvarAtivo() {
  erroForm.value = ''

  if (!formAtivo.value.nome_ativo.trim()) {
    erroForm.value = 'Informe o nome do ativo.'
    return
  }

  salvando.value = true
  try {
    const response: any = await $fetch('/api/pmo/cofre', {
      method: 'POST',
      body: formAtivo.value
    })

    if (response?.success) {
      await refresh()
      modalCadastro.value = false
    }
  } catch (err: any) {
    console.error('Erro ao salvar no cofre:', err)
    erroForm.value = err.data?.statusMessage || 'Erro ao comunicar com o servidor.'
  } finally {
    salvando.value = false
  }
}
</script>