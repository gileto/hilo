import { defineStore } from 'pinia'
import {ref} from 'vue'
export const useStore = defineStore('state', () => {
	const isStarted = ref(false)
	const isOptionChoosed = ref(false)
	const isChanging = ref(false)
	const userPoints = ref(10000)
	const choice = ref('')
	const isEnded = ref(false)
  function start() {
			isStarted.value = true
		}
  return { isStarted, isEnded, userPoints, choice, isOptionChoosed, start, isChanging }
})