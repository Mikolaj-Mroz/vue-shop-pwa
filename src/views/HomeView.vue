<template>
  <BannerComponent
    text="30% off all products in the store 🔥"
    icon="mdi-information-outline"
    backgroundColor="warning"
  />

  <ImageBanner
    text="Our choice for this season"
    class="mt-12"
    image="/homepage/banner-1-photo.jpg"
    color="white"
  />

  <TheFeaturedCategories class="mt-12" />
</template>

<script setup>
import BannerComponent from '../components/BannerComponent.vue'
import TheFeaturedCategories from '../components/TheFeaturedCategories.vue'
import ImageBanner from '../components/ImageBanner.vue'
</script>
