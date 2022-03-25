<script setup lang="ts">
import axios from 'axios'

const items = ref()

onMounted(async() => {
  // const { data } = await axios.get('https://api.demiann.dev/gh/pinned?username=qgisk')

  items.value = [
    {
      name: 'portfolio',
      owner: 'QGIsK',
      repo: '/QGIsK/portfolio',
      repository: 'https://github.com/QGIsK/portfolio',
      about: '✨ Portfolio currently made with NuxtJS, this does change, alot.',
      language: 'Vue',
      languageColor: '#41b883',
    },
    {
      name: 'jokeapi-wrapper',
      owner: 'QGIsK',
      repo: '/QGIsK/jokeapi-wrapper',
      repository: 'https://github.com/QGIsK/jokeapi-wrapper',
      bout: 'Unofficial API Wrapper for JokeAPI',
      language: 'JavaScript',
      languageColor: '#f1e05a',
    },
    {
      name: 'faceit-wrapper',
      owner: 'cstools-app',
      repo: '/cstools-app/faceit-wrapper',
      repository: 'https://github.com/cstools-app/faceit-wrapper',
      about: 'Unofficial Faceit data api wrapper',
      language: 'JavaScript',
      languageColor: '#f1e05a',
    },
    {
      name: 'steamResolver',
      owner: 'QGIsK',
      repo: '/QGIsK/steamResolver',
      repository: 'https://github.com/QGIsK/steamResolver',
      about:
        'Steam Resolver, ID to Custom URL and Custom URL to ID, For users and groups',
      language: 'TypeScript',
      languageColor: '#2b7489',
    },
    {
      name: 'kv',
      owner: 'QGIsK',
      repo: '/QGIsK/kv',
      repository: 'https://github.com/QGIsK/kv',
      about: 'Simple kv-store for mongodb',
      language: 'TypeScript',
      languageColor: '#2b7489',
    },
    {
      name: 'api',
      owner: 'QGIsK',
      repo: '/QGIsK/api',
      repository: 'https://github.com/QGIsK/api',
      about: 'Github pinned, Faceit elo, Steam transformers & more.',
      language: 'TypeScript',
      languageColor: '#2b7489',
    },
  ]
})
</script>

<template>
  <div grid="~ cols-1 md:cols-2 gap-6" my="12">
    <a
      v-for=" ({name, repository, about, language}, index) in items"
      :key="name"
      :data-aos="index % 2 === 0 ? 'fade-right' : 'fade-left'"
      data-aos-delay="300"
      target="_blank"
      rel="noopener noreferrer"
      :href="repository"
    >
      <div
        p="4"
        border="~ gray-300 rounded-md "
        shadow="~ hover:lg"
        class="transition-all duration-300"
        h="full"
        text="gray-600"
      >
        <h1 text="lg bold" font="bold">{{ name }}</h1>
        <p mt="1" text="sm">{{ about }}</p>

        <div class="flex mt-4">
          <span
            p="x-4 y-2"
            border="rounded-full"
            shadow="md"
            text="sm white lowercase"
            class="bg-gray-600"
          >{{ language }}</span>
        </div>
      </div>
    </a>
  </div>
</template>
