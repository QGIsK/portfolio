<template>
  <v-app>
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

  components: {  Snackbar },

  data: () => ({}),
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
