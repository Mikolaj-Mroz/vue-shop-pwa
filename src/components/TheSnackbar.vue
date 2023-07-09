<template>
  <v-snackbar 
    v-model="snackbarStore.snackbar.show"
    :timeout="1500"
    location="top"
  >
    {{ snackbarStore.snackbar.text }}

    <template v-slot:actions>
      <v-btn variant="text" @click="snackbarStore.snackbar.show = false"> Close </v-btn>
    </template>
  </v-snackbar>
</template>

<script setup>
import { useSnackbarStore } from '../stores/functionality'

const snackbarStore = useSnackbarStore()
</script>
