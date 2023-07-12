<template>
  <v-btn
    @click="$emit('click')"
    size="x-small"
    flat
    icon
    :ripple="false"
    color="transparent"
    style="position: absolute; right: 4px; bottom: 4px"
  >
    <v-icon size="x-large" :color="wishlisted?'important' : 'white' ">{{wishlisted? 'mdi-heart':'mdi-heart-outline' }}</v-icon>
  </v-btn>
</template>

<script setup>

// eslint-disable-next-line no-unused-vars
const emits = defineEmits(['click'])

// eslint-disable-next-line no-unused-vars
const props = defineProps({
  wishlisted: {
    type: Boolean,
    required: true
  },
})
</script>