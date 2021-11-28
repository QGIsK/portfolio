<template>
  <div class="bg-dark" style="margin-top: 17.5vh">
    <v-container class="my-5 fill-height">
      <v-fade-transition mode="out-in" appear>
        <v-row style="margin-top: -17.5vh">
          <v-col
            v-for="(item, index) in items"
            :key="index"
            :cols="$vuetify.breakpoint.mdAndDown ? item.md_down : item.md_up"
            class="mx-auto"
            style="margin-bottom: 10vh; z-index: 6"
          >
            <v-card style="background: transparent" flat>
              <v-hover>
                <template #default="{ hover }">
                  <div style="position: relative">
                    <v-img
                      :src="item.image"
                      class="grey darken-4"
                      :alt="item.name"
                    ></v-img>
                    <v-fade-transition>
                      <v-overlay v-if="hover" absolute color="grey darken">
                        <v-btn
                          :href="item.url"
                          target="_blank"
                          rel="noopener noreferrer"
                          >View Website</v-btn
                        >
                      </v-overlay>
                    </v-fade-transition>
                  </div>
                </template>
              </v-hover>
              <v-card-title
                >{{ item.name }} <v-spacer></v-spacer>
                <i
                  v-for="icon in item.icons"
                  :key="icon"
                  :class="icon"
                  class="fab mx-2"
                  hint="hi"
                ></i>
                {{ icons }}</v-card-title
              >
              <!-- eslint-disable-next-line vue/no-v-html -->
              <v-card-text v-html="item.about"></v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-fade-transition>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Portfolio',
  data: () => {
    return {
      items: [
        {
          md_up: 8,
          md_down: 10,
          name: 'Groene Marketeers',
          icons: [
            'fa-laravel',
            'fa-php',
            'fa-vuejs',
            'fa-sass',
            'fa-bootstrap',
          ],
          about:
            'I worked on the team that created the new website for Groene Marketeers, Made with a PHP/Laravel + MySQL Backend, vite-plugin-ssr vue frontend',
          image:
            'https://cdn.demiann.dev/images/portfolio/GroeneMarketeers.WebP',
          // TODO
          url: '#',
        },
        {
          md_up: 7,
          md_down: 10,
          name: 'Bassen Met Lasse',
          icons: ['fa-vuejs', 'fa-sass', 'fa-node'],
          about:
            'Simple portfolio website for Lasse, Made with Vue & Vuetify and a Express/NodeJS backend.',
          image: 'https://cdn.demiann.dev/images/portfolio/BassenMetLasse.WebP',
          url: 'https://bassenmetlasse.nl',
        },
        {
          md_up: 4,
          md_down: 10,
          name: 'Reviews By Me',
          icons: ['fa-vuejs', 'fa-node', 'fa-css3'],
          about:
            'Reviews by me was initially made as a practice project but has also been used for real-world purposes since.',
          image: 'https://cdn.demiann.dev/images/portfolio/ReviewsByMe.WebP',
          url: 'https://reviewsbyme.demiann.dev',
        },
      ],
    }
  },
}
</script>
