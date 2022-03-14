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
      <div>
        <component :is="Component" />
      </div>
    </Transition>
  </router-view>
</template>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.75s ease-in-out;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
