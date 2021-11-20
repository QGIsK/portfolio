<template>
  <div class="home">
      <ClientOnly>
        <particles-bg type="cobweb" :bg="true" num="20" style="z-index: 1; max-height: 80vh" />
      </ClientOnly>
      <Navbar />
      <Header />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>

<style lang="scss" scoped>
.page-enter-active,
.page-leave-active {
  transition-property: opacity;
  transition-timing-function: ease-in-out;
  transition-duration: 250ms;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>
