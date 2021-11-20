<template>
  <div id="contact">
    <v-container>
      <v-row>
        <v-col
          :cols="$vuetify.breakpoint.mdAndDown ? 12 : 8"
          class="mx-auto mt-10 mb-15"
          :class="$vuetify.breakpoint.mdAndDown ? ' text-center' : ''"
        >
          <h1 class="display-1 mb-3">Contact</h1>
          <h3 class="mb-5">
            Looking for a web developer for your next project, or a recruiter,
            well trying to recruit?
          </h3>

          <v-row>
            <v-col
              :cols="$vuetify.breakpoint.mdAndDown ? 8 : 6"
              :class="
                $vuetify.breakpoint.mdAndDown ? 'mx-auto text-center' : ''
              "
            >
              <a href="mailto:qgisk@pm.me" style="text-decoration: none">
                <v-card elevation="0">
                  <v-card-text>
                    <i class="fa fa-envelope fa-lg mx-3"></i>

                    Send me an email
                    <span class="underline"> qgisk@pm.me </span>
                  </v-card-text>
                </v-card>
              </a>
            </v-col>
          </v-row>

          <h3 class="my-5">Prefer something a little less formal?</h3>
          <v-row>
            <v-col
              :cols="$vuetify.breakpoint.mdAndDown ? 8 : 6"
              class="mx-auto"
            >
              <v-card elevation="0">
                <v-card-text>
                  <i class="fab fa-telegram fa-lg mx-3"></i>

                  @Demiann
                </v-card-text>
              </v-card>
            </v-col>
            <v-col
              :cols="$vuetify.breakpoint.mdAndDown ? 8 : 6"
              class="mx-auto"
            >
              <v-card elevation="0">
                <v-card-text>
                  <i class="fab fa-discord fa-lg mx-3"></i>
                  Demian#6666
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  components: {},
  data: () => ({}),
  mounted() {},
}
</script>

<style>
span.underline {
  text-decoration: underline;
}
</style>
