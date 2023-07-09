<template>
  <v-sheet>
    <v-img
      :src="image"
      cover
      :height="200"
      @click="$router.push('/featured')"
      gradient="to top, rgba(0,0,0,.5), rgba(0,0,0,0), rgba(0,0,0,0x)"
    >
      <template v-slot:placeholder>
        <v-row class="fill-height ma-0" align="center" justify="center">
          <v-progress-circular indeterminate color="grey-lighten-5"></v-progress-circular>
        </v-row>
      </template>
      <div
        class="text-center font-weight-bold text-body-1"
        style="position: absolute; bottom: 4px; width: 100%"
        :style="color === 'white' ? 'color: white' : 'color: black'"
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
    default: ''
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
