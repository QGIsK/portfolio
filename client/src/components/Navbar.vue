<template>
  <div>
    <v-toolbar flat style="background: #171717">
      <!-- <v-app-bar-nav-icon class="ml-2"></v-app-bar-nav-icon> -->

      <v-toolbar-title style="margin-left:7.5vh">Shadow Agency</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-toolbar-items style="margin-right:7.5vh">
        <v-btn text>About</v-btn>
        <v-btn text href="#portfolio">Portfolio</v-btn>
        <v-btn text>Contact</v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>