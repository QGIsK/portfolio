<template>
  <v-app>
    <Navbar />
    <!-- <v-toolbar flat style="background: #171717">

      <v-toolbar-title class="ml-5">Title</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon class="mx-3">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon class="mx-3">
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon class="mx-3">
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-toolbar>
    -->
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar";

export default {
  name: "App",

  components: { Navbar },

  data: () => ({
    //
  }),
};
</script>

<style>
.theme--dark.v-application {
  background: #171717 !important;
}

.fade-enter-active,
.fade-leave-active {
  /* transition: opacity 0.2s; */
  transition-property: opacity;
  transition-timing-function: ease-in-out;
  transition-duration: 250ms;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
body {
  font-family: "Comfortaa" !important;
}
</style>
