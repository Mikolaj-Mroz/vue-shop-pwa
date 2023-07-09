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

export const useUserStore = defineStore('user', () => {
  const user = ref({
    name: 'Mikołaj Mróz',
    email: 'mikolajmroz.biz@gmail.com',
    github: 'https://github.com/Mikolaj-Mroz',
    avatar: '/user/avatar.png'
  })

  return { user }
})
