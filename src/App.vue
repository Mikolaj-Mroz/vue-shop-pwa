<script setup>
import { RouterView } from 'vue-router'
import TheTopNav from './components/TheTopNav.vue'
import TheBottomNav from './components/TheBottomNav.vue'
import TheSnackbar from './components/TheSnackbar.vue'
</script>

<template>
  <v-app>
    <TheTopNav />
    <v-main class="px-4 my-16 py-4">
      <TheSnackbar />
      <RouterView />
    </v-main>
    <TheBottomNav />
  </v-app>
</template>
