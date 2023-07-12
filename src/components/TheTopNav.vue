<template>
  <v-app-bar flat>
    <v-toolbar app>

      <template v-slot:prepend>
        <v-btn @click="drawer = !drawer" icon="mdi-menu"></v-btn>
      </template>

      <v-form @submit.prevent="$router.push({name: 'search', params: { search: searchData } })">
        <v-text-field 
          v-if="searchBar"
          single-line 
          hide-details
          solo
          rounded
          density="compact"
          label="Search"
          required
          v-model="searchData"
        >
        </v-text-field>
      </v-form>

      <template v-slot:append>
        <v-btn @click="searchBar = !searchBar" icon="mdi-magnify"></v-btn>
      </template>

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

  // search bar logic
  const searchBar = ref(false)
  const searchData = ref(null)
  
</script>

<style scoped>
.v-list-group__items .v-list-item {
  padding-inline-start: 20px !important;
}
</style>

<style>

/* Remove outline from v-text-field */
.v-field__outline::before {
  border-style: none !important;
}
.v-field__outline::after {
  border-style: none !important;
}

.v-field.v-field--focused::before {
  border-style: none !important;
}

.v-field.v-field--focused::after {
  border-style: none !important;
}
</style>
