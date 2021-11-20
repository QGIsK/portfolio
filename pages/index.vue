<template>
  <div class="home">
      <particles-bg
        type="cobweb"
        :bg="true"
        num="100"
        style="z-index: 1; max-height: 100vh"
      />
      <Navbar />
      <Header />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Navbar from '../components/Navbar'
import Header from '../components/Header.vue'
import Portfolio from '../components/Portfolio.vue'
import Contact from '../components/Contact.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'Home',

  components: {
    Navbar,
    Header,
    Portfolio,
    Contact,
    Footer,
  },

  data: () => ({}),

  computed: {
    ...mapGetters({
      status: 'status',
      items: 'items',
    }),
  },

  created() {
    this.$store.dispatch('getPortfolioItems')
  },
}
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition-property: opacity;
  transition-timing-function: ease-in-out;
  transition-duration: 250ms;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
