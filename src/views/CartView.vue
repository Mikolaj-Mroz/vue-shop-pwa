<template>
  <CartProduct
    v-for="product in store.cart"
    :product="product"
    :key="product.name"
    @remove="store.removeFromCart(product)"
  />
</template>

<script setup>
import CartProduct from '../components/CartProduct.vue'

import { useCartStore } from '../stores/products'

const store = useCartStore()
</script>
