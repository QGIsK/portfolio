<script setup lang="ts">
import EmailIcon from '~icons/eva/email-outline.vue'
import TelegramIcon from '~icons/ph/telegram-logo-bold.vue'
import DiscordIcon from '~icons/la/discord.vue'

import { CONTACT_EMAIL } from '~/constants'
</script>

<template>
  <div my="16" text=" gray-800 left" font="semibold" class="w-full">
    <h2
      text="3xl xl:5xl"
      class="text-gr-sunset"
      leading="relaxed 2xl:loose"
      data-aos="fade-right"
      data-aos-delay="300"
    >
      Looking for a developer for your next project?
      <br>
    </h2>
    <h2
      leading="relaxed 2xl:loose"
      text="2xl xl:4xl xs:right"
      class="text-gr-purple-dark"
      data-aos="fade-left"
      data-aos-delay="350"
    >
      or a recruiter, trying to recruit?
    </h2>

    <h2
      mt="2"
      leading="relaxed 2xl:loose"
      text="xl"
      class="text-gr-dark-purple"
      data-aos="fade-left"
      data-aos-delay="600"
    >
      You can reach me via these channels
    </h2>
  </div>

  <div grid="~ cols-1 lg:cols-3 gap-8 md:gap-12" my="16">
    <a
      :href="CONTACT_EMAIL"
      transition="~ duration-300"
      bg="gray-100"
      p="4"
      border="rounded-lg"
      shadow="md hover:lg"
      flex="~"
      space="x-8"
      align="items-center"
      font="semibold"
      data-aos="fade-right"
      data-aos-delay="250"
    >
      <EmailIcon w="16" h="6" />hello@demiann.dev
    </a>
    <div
      p="4"
      text="gray-600"
      transition="~ duration-300"
      border="rounded-lg"
      bg="gray-100"
      shadow="md hover:lg"
      flex="~"
      space="x-8"
      align="items-center"
      font="semibold"
      data-aos="fade-right"
      data-aos-delay="250"
    >
      <TelegramIcon w="16" h="6" />Demiann
    </div>
    <div
      p="4"
      text="gray-600"
      transition="~ duration-300"
      border="rounded-lg"
      bg="gray-100"
      shadow="md hover:lg"
      flex="~"
      space="x-8"
      align="items-center"
      font="semibold"
      data-aos="fade-right"
      data-aos-delay="250"
    >
      <DiscordIcon w="16" h="6" />Demian#6666
    </div>
  </div>
</template>
