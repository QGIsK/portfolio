<template>
  <div>
    <v-toolbar flat style="cursor:pointer; background: transparent; z-index:10;">
      <!-- <v-app-bar-nav-icon class="ml-2"></v-app-bar-nav-icon> -->

      <v-toolbar-title @click="redirect('/');" style="margin-left:7.5vh">Portfolio</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-toolbar-items style="margin-right:7.5vh">
        <v-btn text rounded v-scroll-to="'#portfolio'">Portfolio</v-btn>
        <v-btn text rounded to="/about">About</v-btn>
        <v-btn text rounded to="/contact">Contact</v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    redirect(path) {
      this.$router.push(path).catch(() => {
        return;
      });
    },
  },
};
</script>