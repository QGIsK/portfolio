<template>
  <div class="bg-dark" style="margin-top: 17.5vh">
    <v-container class="my-5 fill-height">
      <v-fade-transition mode="out-in" appear>
        <v-row style="margin-top: -17.5vh">
          <v-col
            v-for="(item, index) in items"
            :key="index"
            :cols="
              $vuetify.breakpoint.mdAndDown
                ? `${item.md_down}`
                : `${item.md_up}`
            "
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
                        <v-btn :href="item.url" target="_blank"
                          >View Website</v-btn
                        >
                      </v-overlay>
                    </v-fade-transition>
                  </div>
                </template>
              </v-hover>
              <v-card-title>{{ item.name }}</v-card-title>
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
  components: {},
  data: () => {
    return {
      items: [
        {
          md_up: 8,
          md_down: 10,
          name: 'Bassen Met Lasse',
          about: 'Website for Bassen Met Lasse, Made with VueJS and NodeJS',
          image: 'https://cdn.demiann.dev/images/portfolio/BassenMetLasse.WebP',
          url: 'https://bassenmetlasse.nl',
        },
        {
          md_up: 7,
          md_down: 10,
          name: 'Reviews By Me',
          about:
            'Reviews By Me is a Blog Application <br />Made with Vue, Express, NodeJS and MongoDB',
          image: 'https://cdn.demiann.dev/images/portfolio/ReviewsByMe.WebP',
          url: 'https://reviewsbyme.demiann.dev',
        },
        {
          md_up: 4,
          md_down: 10,
          name: 'Shadow Bot',
          about:
            'Website for the Shadow Discord bot <br />Made with Vue and NodeJS',
          image: 'https://cdn.demiann.dev/images/portfolio/ShadowBot.WebP',
          url: 'https://shadowbot.demiann.dev',
        },
      ],
    }
  },
}
</script>
