<template>
  <v-row v-if="store.wishlist.length === 0" align="center" justify="center">
    <v-col cols="12" class="text-center">
      <span class="text-h6">Your wishlist is empty</span>
    </v-col>
  </v-row>
  <ProductSummary
    v-for="product in store.wishlist"
    :product="product"
    icon="heart"
    iconLeft
    :key="product.name"
    @remove="
      store.removeFromWishlist(product);
      snackbarStore.showSnackbar('Product removed from wishlist')
    "
  />
</template>

<script setup>
import ProductSummary from '../components/ProductSummary.vue';

import { useSnackbarStore } from '../stores/functionality'
import { useWishlistStore } from '../stores/products'

const store = useWishlistStore()

const snackbarStore = useSnackbarStore()
</script>
