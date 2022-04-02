<template>
  <div display="block" pos="fixed top-5 right-5 z-50">
    <RouterLink to="/">
      <img src="/logo.png" h="16" w="16" border="rounded-lg" shadow="md hover:xl" transition="~ duration-300" loading="lazy">
    </RouterLink>
  </div>

  <router-view />

  <Footer />
</template>
