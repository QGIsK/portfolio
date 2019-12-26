<template>
  <div class="home">
    <div>
      <Header />
    </div>
    <Portfolio />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Portfolio from "@/components/Portfolio.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "home",
  components: {
    Header,
    Portfolio,
    Footer,
  },
};
</script>
