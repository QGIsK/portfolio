<template>
  <div class="home">
    <div v-if="status == 'loading'"></div>
    <div v-else>
      <Header />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Portfolio from "@/components/Portfolio.vue";
import Contact from "@/components/Contact.vue";
import Footer from "@/components/Footer.vue";
import { mapGetters } from "vuex";

export default {
  name: "home",

  data: () => ({}),

  components: {
    Header,
    Portfolio,
    Contact,
    Footer,
  },

  created() {
    this.$store.dispatch("getGeneralSettings");
  },

  computed: {
    ...mapGetters({
      status: "status",
      items: "items",
    }),
  },
};
</script>
