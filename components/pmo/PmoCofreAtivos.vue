<template>
  <div class="space-y-4">
    <!-- Tela de Autenticação / Bloqueio do Cofre -->
    <div 
      v-if="!autenticado" 
      class="bg-slate-800/80 border border-slate-700/60 rounded-2xl p-8 max-w-md mx-auto shadow-2xl backdrop-blur-md text-center space-y-6 my-12"
    >
      <div class="w-16 h-16 bg-amber-500/10 border border-amber-500/30 rounded-2xl flex items-center justify-center mx-auto text-amber-400 text-3xl shadow-inner">
        🔒
      </div>

      <div>
        <h2 class="text-xl font-bold text-white">Cofre de Credenciais Bloqueado</h2>
        <p class="text-xs text-slate-400 mt-1">
          Informe seu usuário e senha do PMO para ter acesso às senhas e ativos.
        </p>
      </div>

      <form @submit.prevent="autenticarCofre" class="space-y-4 text-left">
        <div>
          <label class="block text-xs font-semibold text-slate-400 mb-1">Login ou E-mail</label>
          <input 
            v-model="loginForm.login" 
            type="text" 
            placeholder="Seu login ou e-mail" 
            class="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-amber-500 transition-all"
            required 
          />
        </div>

        <div>
          <label class="block text-xs font-semibold text-slate-400 mb-1">Senha</label>
          <input 
            v-model="loginForm.password" 
            type="password" 
            placeholder="••••••••" 
            class="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-amber-500 transition-all"
            required 
          />
        </div>

        <div v-if="erroAuth" class="p-3 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-xs text-center font-medium">
          {{ erroAuth }}
        </div>

        <button 
          type="submit" 
          :disabled="carregandoAuth"
          class="w-full py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm rounded-xl shadow-lg transition-all cursor-pointer disabled:opacity-50 flex items-center justify-center gap-2"
        >
          <span v-if="carregandoAuth">🔓 Verificando...</span>
          <span v-else>Desbloquear Cofre</span>
        </button>
      </form>
    </div>

    <!-- Conteúdo do Cofre (Visível apenas após autenticar) -->
    <template v-else>
      <!-- Cabeçalho -->
      <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-2">
        <div>
          <div class="flex items-center gap-2">
            <h2 class="text-xl font-bold text-white">Cofre de Credenciais Criptografado</h2>
            <span class="text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded-full font-semibold">
              🔓 Desbloqueado por {{ usuarioLogado?.login }}
            </span>
          </div>
          <p class="text-xs text-slate-400">Senhas e tokens protegidos via AES-256-GCM</p>
        </div>

        <div class="flex items-center gap-3">
          <button 
            @click="bloquearCofre"
            class="px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 font-semibold text-xs rounded-xl shadow-md transition-all cursor-pointer flex items-center gap-1.5"
            title="Bloquear Acesso"
          >
            🔒 Bloquear
          </button>

          <button 
            @click="abrirModal"
            class="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-xl shadow-lg transition-all cursor-pointer flex items-center gap-1.5"
          >
            <span>+</span> Cadastrar Ativo
          </button>
        </div>
      </div>

      <!-- Tabela de Ativos -->
      <div class="bg-slate-800/60 border border-slate-700/50 rounded-2xl overflow-hidden shadow-xl">
        <div v-if="carregandoCofre" class="p-8 text-center text-slate-400 text-xs">
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
    </template>
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
  login: string
}

// Estados de Autenticação
const autenticado = ref(false)
const usuarioLogado = ref<Usuario | null>(null)
const carregandoAuth = ref(false)
const erroAuth = ref('')
const loginForm = ref({ login: '', password: '' })

// Estados do Cofre
const carregandoCofre = ref(false)
const ativosCofre = ref<AtivoCofre[]>([])
const usuarios = ref<Usuario[]>([])
const exibeSenha = ref<Record<string, boolean>>({})

// Estados do Form de Cadastro
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

// Função de Autenticação
async function autenticarCofre() {
  erroAuth.value = ''
  carregandoAuth.value = true

  try {
    const response: any = await $fetch('/api/pmo/auth/login', {
      method: 'POST',
      body: loginForm.value
    })

    if (response?.success) {
      usuarioLogado.value = response.usuario
      autenticado.value = true
      await carregarDadosCofre()
    }
  } catch (err: any) {
    console.error('Erro na autenticação do cofre:', err)
    erroAuth.value = err.data?.statusMessage || 'Credenciais inválidas.'
  } finally {
    carregandoAuth.value = false
  }
}

// Carrega os dados apenas APÓS o login com sucesso
async function carregarDadosCofre() {
  carregandoCofre.value = true
  try {
    const [resCofre, resUsers]: any = await Promise.all([
      $fetch('/api/pmo/cofre'),
      $fetch('/api/pmo/usuarios')
    ])

    if (resCofre?.success) ativosCofre.value = resCofre.data
    if (resUsers?.success) usuarios.value = resUsers.data
  } catch (err) {
    console.error('Erro ao carregar dados do cofre:', err)
  } finally {
    carregandoCofre.value = false
  }
}

function bloquearCofre() {
  autenticado.value = false
  usuarioLogado.value = null
  ativosCofre.value = []
  loginForm.value = { login: '', password: '' }
}

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
    responsavel_atual: usuarioLogado.value?.id || null, // Define o próprio usuário como responsável padrão
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
      await carregarDadosCofre()
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