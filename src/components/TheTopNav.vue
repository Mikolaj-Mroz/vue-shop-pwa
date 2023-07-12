<template>
  <v-app-bar flat>
    <v-toolbar app>
      <v-btn @click="drawer = !drawer" icon="mdi-menu"></v-btn>
    </v-toolbar>
  </v-app-bar>

  <template>
    <!--left side nav panel-->
  </template>
  <v-navigation-drawer
    v-model="drawer"
  >
    <v-list v-model:opened="open">
      <v-list-item 
        v-for="(category, index) in store.categories" 
        :key="index" 
      >
        <v-list-group :value="category.name">
          <template v-slot:activator="{ props }"> 
            <v-list-item v-bind="props">
              <v-list-item-title class="font-weight-bold text-h6">{{ category.name }}</v-list-item-title>
            </v-list-item>
          </template>

          <v-list-item
            v-for="(subcategory, index) in category.subcategories"
            :key="index"
          >
            <template v-slot:prepend>
              <v-img class="rounded-circle" :src="subcategory.image" width="50px" height="50px"></v-img>
            </template>
            <v-list-item-title class="mx-4 font-weight-bold text-h6 text-capitalize">{{ subcategory.name }}</v-list-item-title>
          </v-list-item>
        </v-list-group>
      </v-list-item>
      <v-list-item v-for="(button, i) in buttons" :key="i">
        <v-list-item-title class="text-body-2">{{ button }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
  import { ref } from 'vue'
  import { useProductsStore } from '../stores/products'

  const store = useProductsStore()

  // drawer logic
  const drawer = ref(false)
  const open = ref([])
  const buttons = ['My reviews', 'My addresses', 'My settings', 'Customer service', 'Logout']
  
</script>

<style scoped>
.v-list-group__items .v-list-item {
  padding-inline-start: 20px !important;
}
</style>