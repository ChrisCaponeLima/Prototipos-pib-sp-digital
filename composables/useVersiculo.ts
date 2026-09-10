// composables/useVersiculo.ts
import { computed } from 'vue'
import { useFetch } from '#app'

export const useVersiculo = () => {
  // Realiza a chamada do endpoint SSR com cache persistente por chave [7, 10]
  const { data, pending, error, refresh } = useFetch('/api/versiculo', {
    key: 'versiculo-do-dia',
    lazy: true,
    server: true
  })

  return {
    versiculo: computed(() => data.value?.data),
    carregando: pending,
    erro: error,
    atualizar: refresh
  }
}
