<template>
<v-sheet 
  class="d-flex flex-column"
>
  <v-img class="mb-4" :src="product.image" :height="500" cover />
  <h2 class="text-body-2 font-weight-bold">{{ product.name }}</h2>
  <v-row no-gutters class="mt-n1 mb-4">
    <v-rating
      v-model="product.rating"
      density="compact"
      readonly
      size="x-small"
      class="mt-n1"
    ></v-rating>
    <span class="ml-1 text-caption">(Reviews: {{ product.reviews }})</span>
  </v-row>
  <span class="text-body-2 mb-2">${{ product.price }}</span>
  <p class="text-body-2 mb-2">
    Color: <strong>{{ product.color }}</strong>
    <br>
    Subcategory: <strong>{{ product.subcategory }}</strong>
  </p>
</v-sheet>
</template>

<script setup>
import { useProductsStore } from '../stores/products';
import { useRoute } from 'vue-router';

const store = useProductsStore();
const route = useRoute();

const product = store.getProductByName(route.params.name);
</script>