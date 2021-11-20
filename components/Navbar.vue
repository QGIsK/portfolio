<template>
  <div style="z-index: 10">
    <v-toolbar
      flat
      style="cursor: pointer; background: transparent; z-index: 10"
    >
      <!-- <v-app-bar-nav-icon class="ml-2"></v-app-bar-nav-icon> -->

      <v-toolbar-title
        style="margin-left: 7.5vh"
        class="headline"
        @click="redirect('/')"
        >Demiann</v-toolbar-title
      >

      <v-spacer></v-spacer>
      <v-toolbar-items style="margin-right: 7.5vh">
        <v-btn v-scroll-to="'#portfolio'" text rounded>Home</v-btn>
        <v-btn v-scroll-to="'#contact'" text rounded>Contact</v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    redirect(path) {
      this.$router.push(path)
    },
  },
}
</script>
