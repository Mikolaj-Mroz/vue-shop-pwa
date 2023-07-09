<template>
  <BannerComponent
    text="30% off all products in the store 🔥"
    icon="mdi-information-outline"
    backgroundColor="warning"
  />

  <ImageBanner
    text="Our choice for this season"
    image="/homepage/banner-1-photo.jpg"
    color="white"
    class="mt-8"
  />

  <TheFeaturedCategories class="mt-8" />

  <ImageBanner
    text="Do what you want to do"
    image="/homepage/banner-2-photo.jpg"
    color="white"
    class="mt-8"
  />
</template>

<script setup>
import BannerComponent from '../components/BannerComponent.vue'
import TheFeaturedCategories from '../components/TheFeaturedCategories.vue'
import ImageBanner from '../components/ImageBanner.vue'
import TheNewProducts from '../components/TheNewProducts.vue';
</script>
