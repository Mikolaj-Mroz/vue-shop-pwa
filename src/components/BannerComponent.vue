<template>
  <v-sheet
    class="pa-4"
    :color="backgroundColor"
  >
  <v-row>
    <v-col cols="2" class="d-flex align-center justify-center">
      <v-icon>{{ icon }}</v-icon>
    </v-col>
    <v-col cols="8"
      class="text-center text-uppercase text-body-1 font-weight-bold"
    >
      <span>{{ text }}</span>
    </v-col>
  </v-row>
  </v-sheet>
</template>

<script setup>

// eslint-disable-next-line no-unused-vars
const props = defineProps({
  text: {
    type: String,
    default: ''
  },
  icon: {
    type: String,
    default: ''
  },
  backgroundColor: {
    type: String,
    default: ''
  }
})

</script>