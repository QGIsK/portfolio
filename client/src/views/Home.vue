<template>
  <div class="home">
    <Header />
    <Portfolio />
    <Contact />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Portfolio from "@/components/Portfolio.vue";
import Contact from "@/components/Contact.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "home",
  data: () => ({}),

  components: {
    Header,
    Portfolio,
    Contact,
    Footer,
  },
};
</script>
