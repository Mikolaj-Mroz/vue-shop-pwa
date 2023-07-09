<template>
  <v-sheet
    :color="color"
  >
    <v-img 
      :src="image"
      cover
      :height="200"
      @click="$router.push('/featured')"
    >
      <div 
        class="text-center font-weight-bold text-body-1"
        style="position: absolute; bottom: 4px; width: 100%"
      >
        {{ text }}
      </div>
    </v-img>
  </v-sheet>
</template>

<script setup>

// eslint-disable-next-line no-unused-vars
const props = defineProps({
  text: {
    type: String,
    default: ''
  },
  color: {
    type: String,
    default: 'primary'
  },
  image: {
    type: String,
    default: ''
  },
  button: {
    type: Boolean,
    default: false
  }
})

</script>