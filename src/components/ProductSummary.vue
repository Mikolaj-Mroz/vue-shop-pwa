<template>
  <v-sheet color="grey-lighten-5" class="mb-4">
    <v-row no-gutters>
      <v-col cols="6" class="pa-4 pr-2">
        <v-img :width="150" :height="150" cover :src="product.image">
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular indeterminate color="grey-lighten-5"></v-progress-circular>
            </v-row>
          </template>
          <wishlist-icon 
            v-if="iconLeft"
            @click="$emit('remove')"
            :wishlisted="true" 
            style="position: absolute; right: 4px; bottom: 4px"
          />
        </v-img>
      </v-col>
      <v-col cols="6" class="pa-4 pl-2 d-flex flex-column">
        <h3 class="text-caption text-truncate" style="line-height: 1rem">{{ product.name }}</h3>
        <span 
          class="text-caption mt-4" 
          style="line-height: 1rem"
        >
          Price: <strong>${{ product.price }}</strong><br>
          Size: <strong>{{ product.size }}</strong><br>
          Color: <strong>{{ product.color }}</strong>
        </span>
        <v-row class="d-flex align-end justify-end">
          <v-btn
            v-if="!iconLeft"
            @click="$emit('remove')"
            size="x-small"
            flat
            icon
            color="transparent"
          >
            <v-icon size="x-large" color="black">mdi-{{icon}}</v-icon>
          </v-btn>
        </v-row>
      </v-col>
    </v-row>
  </v-sheet>
</template>

<script setup>
import WishlistIcon from './WishlistIcon.vue';

// eslint-disable-next-line no-unused-vars
const props = defineProps({
  product: {
    type: Object,
    required: true
  },
  icon: {
    type: String,
    required: true
  },
  iconLeft: {
    type: Boolean,
    default: false
  }
})

// eslint-disable-next-line no-unused-vars
const emits = defineEmits(['remove'])
</script>
