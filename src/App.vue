<script setup lang="ts">
import { createToastMessage } from '~/services/toast'

useHead({
  meta: [
    { name: 'description', content: 'Demian - Full stack web developer, based in the netherlands.' },
  ],
})

onMounted(() => {
  setTimeout(() => {
    // createToastMessage('This site uses functionality cookies.', 'info')
  }, 5000,
  )
})
</script>

<template>
  <router-view v-slot="{ Component }">
    <Transition name="fade" mode="out-in">
      <component :is="Component" />
    </Transition>
  </router-view>
</template>

<style lang="scss">

</style>
