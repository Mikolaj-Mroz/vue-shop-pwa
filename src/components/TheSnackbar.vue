<template>
  <v-snackbar
    class="px-4" 
    v-model="snackbarStore.snackbar.show"
    :timeout="120500"
    location="top"
    :min-width="304"
    color="important"
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
