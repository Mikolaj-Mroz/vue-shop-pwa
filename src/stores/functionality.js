import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useSnackbarStore = defineStore('snackbar', () => {
  const snackbar = ref({
    show: false,
    text: ''
  })

  const showSnackbar = (text) => {
    snackbar.value.show = true
    snackbar.value.text = text
  }

  return { snackbar, showSnackbar }
})
