<template>
  <v-app>
    <v-card>
      <v-snackbar v-model="show" color="blue-grey" shaped :timeout="-1" right="right">
        This website may use cookies. <v-btn text to="/policy/cookie-statement">Read More</v-btn>
        <v-btn color text @click="toggleSnackBar">Close</v-btn>
      </v-snackbar>
    </v-card>
    <Snackbar />
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </v-app>
</template>

<script>
import Snackbar from "@/components/Snackbar";

export default {
  name: "App",

  components: { Snackbar },

  data: () => ({ show: true }),
  methods: {
    toggleSnackBar() {
      this.show = !this.show;
    },
  },
};
</script>

<style>
.theme--dark.v-application {
  background: #171717 !important;
  font-family: "Comfortaa" !important;
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
