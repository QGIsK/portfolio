<script setup lang="ts">

useHead({
  title: 'Home | Demian - Full stack web developer',
})

const portfolioItems: { img: string; name: string; description?: string }[] = [
  {
    img: '/images/GroeneMarketeers.WebP',
    name: 'Groene Marketeers',
  },

  {
    img: '/images/BassenMetLasse.WebP',
    name: 'Bassen met lasse',
  },

  {
    img: '/images/Discounted.WebP',
    name: 'Discounted.gg',
  },

  {
    img: '/images/ReviewsByMe.WebP',
    name: 'ReviewsByMe',
  },
]

</script>

<template>
  <!-- <Container> -->
  <div class="h-80 sm:h-120 md:h-160 px-8" flex="~" justify="center" align="items-center">
    <div>
      <h1
        class="text-4xl sm:text-5xl md:text-7xl lg:text-9xl uppercase text-gr-purple-dark"
        data-aos="fade-right"
        data-aos-delay="200"
      >
        Modern web development
      </h1>
      <h2
        class="text-3xl sm:text-4xl md:text-6xl uppercase text-gr-sunset mt-4 sm:mt-8 sm:text-right"
        data-aos="fade-left"
        data-aos-delay="300"
      >
        Based in the netherlands
      </h2>
    </div>
  </div>
  <!-- </Container> -->

  <Container id="portfolio">
    <div class="min-h-120">
      <SectionHeader class="text-right">
        Portfolio
      </SectionHeader>

      <PortfolioCard
        v-for="item in portfolioItems"
        :key="item.name"
        :img="item.img"
        :name="item.name"
        :description="item.description"
      />
    </div>
  </Container>

  <Container id="recent-projects">
    <div class="min-h-80">
      <SectionHeader text="center">
        Recent Projects
      </SectionHeader>

      <GithubProjects />
    </div>
  </Container>

  <Container id="contact">
    <div class="min-h-80">
      <SectionHeader>Contact</SectionHeader>
      <Contact />
    </div>
  </Container>
</template>
