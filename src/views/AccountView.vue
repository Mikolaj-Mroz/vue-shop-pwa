<template>
  <v-sheet color="grey-lighten-5" class="pa-4 mb-12">
    <v-row no-gutters class="d-flex justify-center">
      <v-avatar size="128px">
        <v-img :src="userStore.user.avatar"></v-img>
      </v-avatar>
    </v-row>
    <v-row no-gutters class="mt-2">
      <v-col cols="12" class="text-center">
        <h2 class="font-weight-bold text-h5">{{ userStore.user.name }}</h2>
      </v-col>
    </v-row>
    <v-row no-gutters class="d-flex align-center justify-center">
      <v-col cols="6" class="text-center">
        <v-btn :href="userStore.user.github" color="transparent" flat icon="mdi-github"></v-btn>
        <v-divider class="mb-n1" style="height: 24px" vertical></v-divider>
        <v-btn
          :href="'mailto:' + userStore.user.email"
          color="transparent"
          flat
          icon="mdi-email"
        ></v-btn>
      </v-col>
    </v-row>
  </v-sheet>
  <v-btn
    style="justify-content: start"
    :color="index % 2 === 0 ? 'grey-lighten-5' : 'grey-lighten-4'"
    :rounded="0"
    flat
    block
    v-for="(button, index) in buttons"
    :key="button.title"
  >
    <v-icon>{{ button.icon }}</v-icon>
    <span class="ml-2">{{ button.title }}</span>
  </v-btn>
</template>

<script setup>
import { useUserStore } from '../stores/functionality'

const userStore = useUserStore()

const buttons = [
  {
    title: 'My orders',
    icon: 'mdi-package-variant-closed'
  },
  {
    title: 'My wishlist',
    icon: 'mdi-heart-outline'
  },
  {
    title: 'My reviews',
    icon: 'mdi-star-outline'
  },
  {
    title: 'My addresses',
    icon: 'mdi-map-marker-outline'
  },
  {
    title: 'My account',
    icon: 'mdi-account-outline'
  },
  {
    title: 'My settings',
    icon: 'mdi-cog-outline'
  },
  {
    title: 'Customer service',
    icon: 'mdi-headset'
  },
  {
    title: 'Logout',
    icon: 'mdi-logout'
  }
]
</script>
