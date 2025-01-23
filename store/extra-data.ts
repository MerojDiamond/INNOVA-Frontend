import {ref, computed} from 'vue'
import {defineStore} from 'pinia'

export const useExtraDataStore = defineStore('extra-data', () => {
    const internetOnline = computed(() => navigator.onLine)
    return {internetOnline}
})
