<template>
  <v-app>
    <Portfolio/>
    <Contact/>
  </v-app>
</template>

<script>
import Contact from "./Contact";
import Portfolio from "./Portfolio";

export default {
  name: "Home",
  components: {
    Contact,
    Portfolio
  },
  data() {
    return {};
  }
};
</script>