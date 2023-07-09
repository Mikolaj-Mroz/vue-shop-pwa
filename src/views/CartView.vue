<template>
  <h2 class="text-h6 font-weight-bold">Cart</h2>
  <v-divider class="my-4"></v-divider>
  <v-row v-if="store.cart.length === 0" align="center" justify="center">
    <v-col cols="12" class="text-center">
      <span class="text-h6">Your cart is empty</span>
    </v-col>
  </v-row>
  <CartProduct
    v-for="product in store.cart"
    :product="product"
    :key="product.name"
    @remove="
      store.removeFromCart(product);
      snackbarStore.showSnackbar('Product removed from cart')
    "
  />
</template>

<script setup>
import CartProduct from '../components/CartProduct.vue'

import { useSnackbarStore } from '../stores/functionality'
import { useCartStore } from '../stores/products'

const store = useCartStore()

const snackbarStore = useSnackbarStore()
</script>
