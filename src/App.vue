<script setup>
import { RouterView } from 'vue-router'
import TheTopNav from './components/TheTopNav.vue';
import TheBottomNav from './components/TheBottomNav.vue'
</script>

<template>
  <v-app>
    <TheTopNav />
    <v-main class="px-4 mt-16 py-4">
      <RouterView />
    </v-main>
    <TheBottomNav />
  </v-app>
</template>
