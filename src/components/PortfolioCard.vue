
<script setup lang="ts">

defineProps({
  img: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  href: {
    type: String,
    required: false,
    default: () => '#',
  },
  description: {
    type: String,
    required: false,
    default: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati facere consectetur quis sequi necessitatibus rem, cum, dolor architecto illum minus accusamus, sed dicta corrupti distinctio? Ab numquam est enim consequatur ipsam ratione fugit nostrum aperiam qui libero consequuntur, quo asperiores sequi quidem delectus voluptatum perspiciatis repudiandae dicta commodi voluptates. Doloribus?',
  },

  lazy: {
    type: String,
    default: 'lazy',
  },

})
</script>
<template>
  <div class="my-14">
    <a :href="href" target="_blank" rel="noopener noreferrer" w="full" flex="lg:~" space="lg:x-8">
      <div
        h="auto" w="w-full lg:90rem"
        data-aos="fade-right"
        data-aos-delay="100"
      >
        <img w="full" mb="6 lg:0" h="auto" :src="img" :alt="name" border="rounded sm:rounded-lg" shadow="sm:lg" :loading="lazy">
      </div>
      <div>
        <h4
          text="xl lowercase" font="bold" mb="4"
          data-aos="fade-left"
          data-aos-delay="300"
        >
          {{ name }}
        </h4>
        <p
          text="lowercase"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          {{ description }}
        </p>
      </div>
    </a>
  </div>
</template>
