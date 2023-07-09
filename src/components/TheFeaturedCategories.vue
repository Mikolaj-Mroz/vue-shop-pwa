<template>
  <v-sheet>
    <h2 class="text-h6 font-weight-bold">Featured categories</h2>
    <swiper :slides-per-view="3" :space-between="0">
      <template v-for="category in productsStore.categories">
        <swiper-slide v-for="subcategory in category.subcategories" :key="subcategory.name">
          <v-sheet class="pa-4">
            <v-row no-gutters class="d-flex align-center justify-center">
              <v-avatar size="64px">
                <v-img :src="subcategory.image" cover>
                  <template v-slot:placeholder>
                    <v-row class="fill-height ma-0" align="center" justify="center">
                      <v-progress-circular
                        indeterminate
                        color="grey lighten-5"
                      ></v-progress-circular>
                    </v-row>
                  </template>
                </v-img>
              </v-avatar>
            </v-row>
            <v-row no-gutters class="mt-2 text-capitalize text-center text-caption">
              <v-col cols="12">
                {{ category.name }}
              </v-col>
            </v-row>
            <v-row no-gutters class="font-weight-bold text-capitalize text-center text-body-2">
              <v-col cols="12">
                {{ subcategory.name }}
              </v-col>
            </v-row>
          </v-sheet>
        </swiper-slide>
      </template>
    </swiper>
  </v-sheet>
</template>

<script setup>
import { useProductsStore } from '../stores/products'

const productsStore = useProductsStore()

import { Swiper, SwiperSlide } from 'swiper/vue'

import 'swiper/css'
</script>
