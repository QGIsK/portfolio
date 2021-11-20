<template>
  <div>
    <div class="container mt-5vh" style="position: relative">
      <FloatingHomeBTN />
      <h2 class="display-2">
        {{ title }}
      </h2>
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div class="mt-5vh readme-container" v-html="data"></div>
    </div>
  </div>
</template>

<script>
import FloatingHomeBTN from '../FloatingHomeButton.vue'

export default {
  name: 'Readme',
  components: {
    FloatingHomeBTN,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    data: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss">
.mt-5vh {
  margin-top: 5vh;
}

.readme-container {
  h1,
  h2 {
    margin-top: 2.5rem;
  }
}
</style>
