<script setup lang="ts">
const navItems: { name: string; href: string }[] = [
  {
    name: 'portfolio',
    href: '#portfolio',
  },
  // {
  //   name: 'recent projects',
  //   href: '#recent-projects',
  // },
  {
    name: 'contact',
    href: '#contact',
  },
]

const goTo = (hash) => {
  const el = document.querySelector(hash).offsetTop
  window.scrollTo({ top: el - 60, behavior: 'smooth' })
}
</script>
<template>
  <div
    display="hidden md:block" pos="fixed left-5" z="50"
    data-aos="fade-right"
    data-aos-delay="300"
  >
    <RouterLink to="/">
      <img src="/logo.png" h="16" w="16" border="rounded-lg" shadow="xl">
    </RouterLink>
  </div>
  <Container>
    <div mt="2 md:8" border="0 gray-300" pb="3" flex="sm:~" justify="center sm:between" align="sm:items-center">
      <div
        h="12 sm:16" w="12 sm:16" mx="auto" display="block md:hidden"
        data-aos="fade-right"
        data-aos-delay="300"
      >
        <RouterLink to="/">
          <img src="/logo.png" h="12 sm:16" w="12 sm:16" border="rounded-lg" shadow="xl">
        </RouterLink>
      </div>
      <div w="full" mt="4 sm:0" flex="~" justify="center sm:end" space="x-4 sm:x-12">
        <button
          v-for="item in navItems"
          :key="item.href"
          :href="item.href"
          class="nav-link lowercase text-gray-600 hover:text-black"
          @click="goTo(item.href)"
        >
          {{ item.name }}
        </button>
      </div>
    </div>
  </Container>
</template>
