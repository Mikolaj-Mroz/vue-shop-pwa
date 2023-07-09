<template>
  <CartProduct
    v-for="product in store.cart"
    :product="product"
    :key="product.name"
    @remove="
      store.removeFromCart(product);
      snackbarStore.showSnackbar('Product removed from cart', 'success')
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
