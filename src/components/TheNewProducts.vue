<template>
  <v-sheet>
    <h2 class="text-h6 font-weight-bold">New products</h2>

    <template>
      <!--Choose Filter-->
    </template>
    <v-chip-group v-model="filter" @update:modelValue="filterProducts()">
      <v-chip filter :variant="filter === 0 ? 'elevated' : 'outlined' " color="primary">For Him</v-chip>
      <v-chip filter :variant="filter === 1 ? 'elevated' : 'outlined' " color="primary">For Her</v-chip>
      <v-chip filter :variant="filter === 2 ? 'elevated' : 'outlined' " color="primary">For Kids</v-chip>
    </v-chip-group>

    <template>
      <!--Swiper-->
    </template>
    <swiper class="mt-2" :slides-per-view="3" :space-between="12">
        <swiper-slide v-for="product in filtered" :key="product.name">
          <v-sheet class="pa-0">
            <v-row no-gutters class="d-flex align-center justify-center">
                <v-img :src="product.image" :width="100" :height="170" cover>
                  <template v-slot:placeholder>
                    <v-row class="fill-height ma-0" align="center" justify="center">
                      <v-progress-circular
                        indeterminate
                        color="grey-lighten-5"
                      ></v-progress-circular>
                    </v-row>
                  </template>

                  <template>
                    <!--Add, or remove wishlist button-->
                  </template>
                  <v-btn
                    @click="changeWishlist(product)"
                    size="x-small"
                    flat
                    icon
                    :ripple="false"
                    color="transparent"
                    style="position: absolute; right: 4px; bottom: 4px"
                  >
                    <v-icon size="x-large" color="red">{{wishlist.wishlist.includes(product)? 'mdi-heart':'mdi-heart-outline' }}</v-icon>
                  </v-btn>

                </v-img>
            </v-row>
            <v-row no-gutters class="mt-2 text-capitalize text-caption" style="line-height:0.8rem">
              <v-col cols="12">
                {{ product.name }}
              </v-col>
            </v-row>
            <v-row no-gutters class="text-caption">
              <v-col cols="12">
                ${{ product.price }}
              </v-col>
            </v-row>
          </v-sheet>
        </swiper-slide>
    </swiper>
  </v-sheet>
</template>

<script setup>
import { ref } from 'vue'
import { useProductsStore } from '../stores/products'
import { useWishlistStore } from '../stores/products'

const productsStore = useProductsStore()

import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'

const products = productsStore.products

const filtered = ref(products)
const filter = ref(null)
const filtersList = ['For Him', 'For Her', 'For Kids']

const filterProducts = () => {
  let filterx = filtersList[filter.value]
  if(filterx) {
    filtered.value = products.filter(product => product.category === filterx)
  } else {
    filtered.value = products
  }
}

const wishlist = useWishlistStore()

const changeWishlist = (product) => {
  if (wishlist.wishlist.includes(product)) {
    wishlist.removeFromWishlist(product)
  } else {
    wishlist.addToWishlist(product)
  }
}

</script>
