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
          <v-btn
            @click="$emit('remove')"
            size="x-small"
            flat
            icon
            color="transparent"
            style="position: absolute; right: 4px; bottom: 4px"
          >
            <v-icon size="x-large" color="red">mdi-heart</v-icon>
          </v-btn>
        </v-img>
      </v-col>
      <v-col cols="6" class="pa-4 pl-2">
        <v-row no-gutters>
          <v-col cols="12">
            <h3 class="text-body-2 font-weight-medium">{{ product.name }}</h3>
          </v-col>
        </v-row>
        <v-row no-gutters class="mt-2">
          <v-col cols="12">
            <span class="text-caption" style="line-height: 1rem"
              >Price: <strong>${{ product.price }}</strong></span
            >
          </v-col>
        </v-row>
        <v-row no-gutters class="mt-n2">
          <v-col cols="12">
            <span class="text-caption"
              >Size: <strong>{{ product.size }}</strong></span
            >
          </v-col>
        </v-row>
        <v-row no-gutters class="mt-n2">
          <v-col cols="12">
            <span class="text-caption"
              >Color: <strong>{{ product.color }}</strong></span
            >
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-sheet>
</template>

<script setup>
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})

// eslint-disable-next-line no-unused-vars
const emits = defineEmits(['remove'])
</script>
