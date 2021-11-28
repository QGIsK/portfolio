<template>
  <div id="github-projects">
    <v-container>
      <v-row>
        <v-col
          :cols="$vuetify.breakpoint.mdAndDown ? 12 : 8"
          class="mx-auto mt-10 mb-15"
          :class="$vuetify.breakpoint.mdAndDown ? ' text-center' : ''"
        >
          <h1 class="display-1 mb-3">Github Projects</h1>
          <h3 class="mb-5">These are some of my recent github projects.</h3>

          <v-row>
            <v-col
              v-for="item in items"
              :key="item.repo"
              :cols="$vuetify.breakpoint.mdAndDown ? 8 : 6"
              class="mx-auto"
            >
              <a
                :href="item.link"
                rel="noopener norefrerrer"
                style="text-decoration: none"
              >
                <v-card elevation="0">
                  <v-card-text>
                    <h4 class="mb-2">
                      <i
                        class="fa-lg ml-3 mr-2"
                        :class="`${
                          icons[item.language]
                            ? `fab fa-${icons[item.language]}`
                            : 'fa fa-code'
                        }`"
                        :style="{ color: item.languageColor }"
                      ></i>
                      {{ item.repo }}
                    </h4>
                    <p class="text-muted px-4">{{ item.description }}</p>
                  </v-card-text>
                </v-card>
              </a>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'GithubProjects',

  data: () => {
    return {
      items: [],
      icons: {
        Vue: 'vuejs',
        JavaScript: 'js',
        CSS: 'css3',
        PHP: 'php',
        SCSS: 'sass',
        HTML: 'html5',
      },
    }
  },
  async mounted() {
    const items = await this.$axios.$get(
      'https://gh-pinned-repos.egoist.sh/?username=qgisk'
    )

    this.items = items
  },
}
</script>

<style>
span.underline {
  text-decoration: underline;
}
</style>
