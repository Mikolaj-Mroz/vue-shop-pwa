<template>
  <v-row no-gutters>
    <v-col cols="12" class="mb-4">
        <h1 v-if="products[0]" class="text-body-2 text-center">Search results for "{{ route.params.search }}"</h1>
        <h2 v-if="!products[0]" class="text-body-2 text-center">No results found for "{{ route.params.search }}"</h2>
    </v-col>
    <v-col cols="6"
      v-for="(product, i) in products"
      :key="i"
      :class="i % 2 === 0 ? 'pr-2' : 'pl-2'"
    >
      {{ product.id }}
      <ProductComponent :product="product" />
    </v-col>
  </v-row>
</template>

<script setup>
import { ref, watch } from 'vue';
import ProductComponent from '../components/ProductComponent.vue'
import { useProductsStore } from '../stores/products'
import { useRoute } from 'vue-router';

const store = useProductsStore()
const route = useRoute()
const products = ref(store.searchProducts(route.params.search))

watch(() => route.params.search, (newVal) => {
  products.value = store.searchProducts(newVal)
})

</script>