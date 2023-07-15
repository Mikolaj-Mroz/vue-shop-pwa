<template>
  <v-bottom-navigation tag="footer" active color="primary">
    <v-btn to="/">
      <v-icon>mdi-home-outline</v-icon>
      <div v-if="route.path === '/'" class="active"></div>
    </v-btn>

    <v-btn to="/wishlist">
      <v-icon>mdi-heart-outline</v-icon>
      <div v-if="route.path === '/wishlist'" class="active"></div>
    </v-btn>

    <v-btn to="/cart">
      <v-icon>mdi-cart-outline</v-icon>
      <div v-if="route.path === '/cart'" class="active"></div>
    </v-btn>

    <v-btn to="/account">
      <v-icon>mdi-account-outline</v-icon>
      <div v-if="route.path === '/account'" class="active"></div>
    </v-btn>
  </v-bottom-navigation>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<style scoped>

@keyframes active-animation {
  0% {
    transform: scaleX(0);
  }
  100% {
    transform: scaleX(1);
  }
}
  
.active {
  position: absolute; 
  top:0;
  width:100%; 
  height:2px; 
  background-color: rgb(var(--v-theme-primary));
  transform-origin: left center;
  animation-name: active-animation;
  animation-duration: 0.3s;
}
</style>