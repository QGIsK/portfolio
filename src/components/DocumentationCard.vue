<script setup lang="ts">

defineProps({
  doc: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <a data-aos-delay="150" data-aos="fade-up" :href="doc.href" target="_blank" bg="gray-100" border="rounded-md " shadow="~ hover:md" transition="~ duration-150" p="4">
    <h1 class="text-lg" border="b gray-200" mb="4" pb="1">{{ doc.name }}</h1>
    <p>{{ doc.description }}</p>
  </a>
</template>
