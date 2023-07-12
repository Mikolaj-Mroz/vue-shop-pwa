<template>
  <v-sheet class="mb-4">
    <v-row no-gutters>
      <v-col cols="12">
        <v-img :width="160" :height="240" cover :src="product.image">
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular indeterminate color="grey-lighten-5"></v-progress-circular>
            </v-row>
          </template>

          <template>
            <!--Add, or remove wishlist button-->
          </template>
          <wishlist-icon 
            @click="changeWishlist(product)"
            :wishlisted="wishlist.wishlist.includes(product)" 
          />

        </v-img>
      </v-col>
      <v-col cols="12" class="py-2 d-flex flex-column">
        <h3 class="text-caption text-truncate">{{ product.name }}</h3>
        <span class="text-caption" style="line-height: 0.6rem">${{ product.price }}</span>
      </v-col>
    </v-row>
  </v-sheet>
</template>

<script setup>
import WishlistIcon from './WishlistIcon.vue';
import { useWishlistStore } from '../stores/products';


// eslint-disable-next-line no-unused-vars
const props = defineProps(
  {
    product: {
      type: Object,
      required: true
    }
  }
)


// Wishlit logic

const wishlist = useWishlistStore()

const changeWishlist = (product) => {
  if (wishlist.wishlist.includes(product)) {
    wishlist.removeFromWishlist(product)
  } else {
    wishlist.addToWishlist(product)
  }
}

</script>