<script setup lang="ts">
import { GITHUB, INSTAGRAM, TWITTER } from '~/constants'

import InstagramIcon from '~icons/ph/instagram-logo-bold.vue'
import TwitterIcon from '~icons/ph/twitter-logo-bold.vue'
import GithubIcon from '~icons/ph/github-logo-bold.vue'

const policyItems: { name: string; href: string; component: 'a' | 'router-link' }[] = [
  {
    name: 'Uptime',
    href: 'https://uptime.demiann.dev/status/portfolio',
    component: 'a',
  },
  {
    name: 'Cookie Statement',
    href: '/policy/cookie-statement',
    component: 'router-link',
  },
  {
    name: 'Disclaimer',
    href: '/policy/disclaimer',
    component: 'router-link',
  },
  {
    name: 'Privacy Policy',
    href: '/policy/privacy-policy',
    component: 'router-link',
  },
]
</script>

<template>
  <div border="t gray-200" flex="sm:~" justify="sm:between" mt="24" p="4 sm:12">
    <h5 font="semibold text-center xs:text-left">
      Demian &copy; {{ new Date().getFullYear() }}
    </h5>

    <div mt="4 sm:0">
      <div class="xs:flex xs:justify-center xs:space-x-6 space-y-2 sm:space-y-0">
        <div v-for="policy in policyItems" :key="policy.name">
          <component :is="policy.component" :href="policy.href" :to="policy.href" class="nav-link">
            {{ policy.name }}
          </component>
        </div>
      </div>
      <div class="flex space-x-6 xs:space-x-12" justify="xs:end" mt="4">
        <a :href="INSTAGRAM" target="_blank" rel="noopener noreferrer">
          <InstagramIcon text="xl text-black hover:gray-500" transition="~ duration-300" />
        </a>
        <a :href="TWITTER" target="_blank" rel="noopener noreferrer">
          <TwitterIcon text="xl text-black hover:gray-500" transition="~ duration-300" />
        </a>
        <a :href="GITHUB" target="_blank" rel="noopener noreferrer">
          <GithubIcon text="xl text-black  hover:gray-500" transition="~ duration-300" />
        </a>
      </div>
    </div>
  </div>
</template>
