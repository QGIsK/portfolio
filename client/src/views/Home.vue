<template>
  <div class="home">
    <Header />
    <Portfolio />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Portfolio from "@/components/Portfolio.vue";

export default {
  name: "home",
  components: {
    Header,
    Portfolio,
  },
};
</script>
