<template>
  <div>
    <v-fab-transition>
      <v-btn color="white" dark fixed bottom right fab @click="redirect('/')">
        <i class="fa fa-home fa-2x" style="color: black"></i>
      </v-btn>
    </v-fab-transition>
  </div>
</template>

<script>
export default {
  name: "FloatingHomeBTN",
  methods: {
    redirect(path) {
      this.$router.push(path);
    },
  },
};
</script>
