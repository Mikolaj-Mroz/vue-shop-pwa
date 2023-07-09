<template>
  <v-bottom-navigation tag="footer" active color="primary">
    <v-btn to="/">
      <v-icon>mdi-home-outline</v-icon>
    </v-btn>

    <v-btn to="/wishlist">
      <v-icon>mdi-heart-outline</v-icon>
    </v-btn>

    <v-btn to="/cart">
      <v-icon>mdi-cart-outline</v-icon>
    </v-btn>

    <v-btn to="/account">
      <v-icon>mdi-account-outline</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>
