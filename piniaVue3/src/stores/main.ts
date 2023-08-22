import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useStore = defineStore('main', () => {
    const name = ref<string>('songbaicheng')
    const age = ref<number>(23)

    return { name, age }
})