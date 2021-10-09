<template>
  <div :class="size" class="mb-5">
    <div class="image h-100 w-100">
      <div class="image-overlay h-100 w-100 d-flex justify-content-center align-items-center">
        <a class="btn btn-secondary bg-dark border-0" :href="href">Visit page</a>
      </div>
      <img :src="image" class="h-100 w-100 rounded-3" />
    </div>
    <h4 class="text-white my-2">{{ header }}</h4>
    <p class="text-white mb-5">{{ paragraph }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  size: {
    type: String,
    default: 'col col-md-8',
  },
  image: {
    type: String,
    required: true,
  },
  href: {
    type: String,
    default: '#',
  },
  header: {
    type: String,
    required: true,
  },
  paragraph: {
    type: String,
    required: true,
  },
})
</script>

<style lang="scss" scoped>
.image {
  position: relative;
}

.image > .image-overlay {
  position: absolute;
  opacity: 0;
  background: rgba(15, 32, 39, 0.6);

  transition: opacity 0.2s ease-in-out;
}

.image:hover > .image-overlay {
  opacity: 1;
}
</style>
