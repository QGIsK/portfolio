<template>
  <div class="bg-dark" style="margin-top: 17.5vh">
    <v-container class="my-5 fill-height">
      <v-fade-transition mode="out-in" appear>
        <v-row style="margin-top: -17.5vh">
          <v-col
            v-for="(item, index) in portfolioItems"
            :key="index"
            :cols="$vuetify.breakpoint.mdAndDown ? `${item.mdDown}` : `${item.mdUp}`"
            class="mx-auto"
            style="margin-bottom: 10vh; z-index: 6"
          >
            <v-card style="background: transparent" flat>
              <v-hover>
                <template v-slot:default="{ hover }">
                  <div style="position: relative">
                    <v-img :src="item.image" class="grey darken-4" :alt="item.name"></v-img>
                    <v-fade-transition>
                      <v-overlay v-if="hover" absolute color="grey darken">
                        <v-btn :href="item.link" target="_blank">View Website</v-btn>
                      </v-overlay>
                    </v-fade-transition>
                  </div>
                </template>
              </v-hover>
              <v-card-title>{{ item.name }}</v-card-title>
              <v-card-text v-html="item.about"></v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-fade-transition>
    </v-container>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "Portfolio",
  data: () => ({
    portfolioItems: [
      {
        name: "Bassen Met Lasse",
        about: "Website for Bassen Met Lasse, Made with VueJS and NodeJS",
        mdDown: 10,
        mdUp: 8,
        link: "https://www.bassenmetlasse.nl",
        image: "https://api.demiann.dev/static/images/BassenMetLasse.WebP",
      },
      {
        name: "Reviews by Me",
        about:
          "Reviews By Me is a Blog Application <br />Made with Vue, Express, NodeJS and MongoDB",
        mdDown: 10,
        mdUp: 7,
        link: "https://reviewsbyme.demiann.dev",
        image: "https://api.demiann.dev/static/images/ReviewsByMe.WebP",
      },
      {
        name: "Shadow bot",
        about: "Website for the Shadow Discord bot <br />Made with Vue and NodeJS",
        mdDown: 10,
        mdUp: 4,
        link: "https://shadow.demiann.dev",
        image: "https://api.demiann.dev/static/images/ShadowBot.WebP",
      },
      {
        name: "Template One",
        about: "Is Made with Vue, Express, NodeJS and MongoDB",
        mdDown: 10,
        mdUp: 8,
        link: "https://template-one.demiann.dev",
        image: "https://api.demiann.dev/static/images/TemplateOne.WebP",
      },
      // {
      //   name: "Template One",
      //   about: "Is Made with Vue, Express, NodeJS and MongoDB",
      //   mdDown: 10,
      //   mdUp: 5,
      //   link: "https://shadow.demiann.dev",
      //   image: "https://api.demiann.dev/static/images/TemplateOne.WebP",
      // },
      // {
      //   name: "Template One",
      //   about: "Is Made with Vue, Express, NodeJS and MongoDB",
      //   mdDown: 10,
      //   mdUp: 6,
      //   link: "https://shadow.demiann.dev",
      //   image: "https://api.demiann.dev/static/images/TemplateOne.WebP",
      // },
    ],
  }),
};
</script>
