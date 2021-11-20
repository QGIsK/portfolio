<template>
  <v-app dark>
    <v-snackbar
      v-model="show"
      color="blue-grey"
      fixed
      bottom
      shaped
      :timeout="-1"
    >
      <div class="text-center mx-auto">
        This website may use cookies.
        <v-btn text to="/policy/cookie-statement">Read More</v-btn>
        <v-btn color text @click="toggleSnackBar">Close</v-btn>
      </div>
    </v-snackbar>
    <Snackbar />
    <Nuxt />
  </v-app>
</template>

<script>
export default {
  data: () => ({ show: false }),
  mounted() {
    setTimeout(() => (this.show = true), 2500)
  },
  methods: {
    toggleSnackBar() {
      this.show = !this.show
    },
  },
}
</script>

<style lang="scss">
.theme--dark.v-application {
  background: #171717 !important;
  font-family: 'Comfortaa' !important;
}
.fade-enter-active,
.fade-leave-active {
  transition-property: opacity;
  transition-timing-function: ease-in-out;
  transition-duration: 250ms;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.bg-dark {
  background: #1b1a1a;
}
</style>
