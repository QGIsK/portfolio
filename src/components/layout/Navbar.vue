<script setup lang="ts">

const navItems: { name: string; href: string }[] = [
  {
    name: 'portfolio',
    href: '#portfolio',
  },
  {
    name: 'services',
    href: '#services',
  },
  {
    name: 'contact',
    href: '#contact',
  },
]

</script>
<template>
  <Container>
    <div mt="4" border="b gray-200" pb="3" flex="~" justify="between">
      <div w="full md:6/12">
        <div text="2xl" font="semibold">
          Demiann
          <br>
          <span ml="6">
            web development
          </span>
        </div>
      </div>
      <div w="full md:6/12" flex="~" justify="end" space="x-12" align="items-center">
        <a
          v-for="item in navItems" :key="item.href" :href="item.href" class="lowercase text-gray-700 hover:text-black "
        >
          {{ item.name }}
        </a>
      </div>
    </div>
  </Container>
</template>

<style lang="scss" scoped>
a {
background:
  linear-gradient(to right, rgb(27, 24, 77), rgba(0, 100, 200, 1));
  background-size: 0 0.1em;
  background-position: 0 100%;
  background-repeat: no-repeat;
  transition: all 400ms;
}

a:hover,
a:focus {
  background-size:  100% 0.1em;
}
</style>
