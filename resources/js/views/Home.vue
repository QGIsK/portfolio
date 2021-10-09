<template>
  <header class="bg-main">
    <Particles />
    <div class="content h-100 w-100">
      <div class="d-block">
        <Navbar />
      </div>
      <div class="h-75 d-flex align-items-center justify-content-start">
        <h3 class="text-white">I'm a <b>Web Developer</b><br />Based in <b>The Netherlands.</b></h3>
      </div>
    </div>
  </header>
  <section id="portfolio" class="bg-secondary">
    <div class="row h-100 justify-content-center align-items-center">
      <PortfolioItem
        size="col col-md-8"
        image="https://demiann.dev/static/images/BassenMetLasse.WebP"
        href="/"
        header="bassen"
        paragraph="hello"
      />
      <PortfolioItem
        size="col col-md-6"
        image="https://demiann.dev/static/images/BassenMetLasse.WebP"
        href="/"
        header="bassen"
        paragraph="hello"
      />
      <PortfolioItem
        size="col col-md-4"
        image="https://demiann.dev/static/images/BassenMetLasse.WebP"
        href="/"
        header="bassen"
        paragraph="hello"
      />
    </div>
  </section>
</template>

<script setup>
import Navbar from '../components/layout/Navbar'
import Particles from '../components/Particles'

import PortfolioItem from '../components/PortfolioItem'
</script>

<style lang="scss" scoped>
header {
  height: 80vh;

  position: relative;
  .particles {
    position: absolute;
    z-index: 1;
    height: 80vh;
  }

  .content {
    width: 85%;
    z-index: 2;
    position: absolute;
  }
  h3 {
    margin-left: 7.5vw;
  }
}

.bg-main {
  background-color: #171717;
}

.bg-secondary {
  background-color: #1b1a1a !important;
}

h3 {
  line-height: 1.5;
}

#portfolio > .row > div:first-child {
  margin-top: -17.5vh;
  z-index: 10;
}

#portfolio {
  img {
    cursor: pointer;
  }
}
</style>
