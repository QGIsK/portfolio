<template>
  <div id="footer">
    <v-footer class="mt-3 pb-5" color="transparent" padless>
      <v-row justify="center" no-gutters class="mt-4">
        <v-col
          cols="12"
          class="d-sm-flex text-center"
          style="justify-content: center"
        >
          <v-hover v-slot="{ hover }" close-delay="175" open-delay="175">
            <v-btn color="white" text rounded class="my-2 mx-1" href="#">
              <v-expand-transition>
                <div
                  v-if="hover"
                  class="d-flex darken-2 white--text"
                  style="height: 100%"
                >
                  Demian#6666
                </div>
                <div v-else>Discord</div>
              </v-expand-transition>
            </v-btn>
          </v-hover>
          <v-btn
            v-for="link in socialLinks"
            :key="link.name"
            color="white"
            text
            rounded
            class="my-2 mx-1"
            target="_blank"
            rel="noopener noreferrer"
            :href="link.path"
            >{{ link.name }}</v-btn
          >
        </v-col>
        <v-col class="lighten-2 my-3 py-4 text-center white--text" cols="12">
          <strong>
            Demiann &copy;
            {{ new Date().getFullYear() }}
          </strong>
        </v-col>
        <v-col
          cols="12"
          class="d-sm-flex text-center"
          style="justify-content: center"
        >
          <v-btn
            v-for="link in legalLinks"
            :key="link.name"
            color="white"
            text
            rounded
            class="my-2 mr-1"
            :to="link.path"
            >{{ link.name }}</v-btn
          >
        </v-col>
      </v-row>
    </v-footer>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      socialLinks: [
        {
          name: 'Github',
          path: 'https://github.com/qgisk',
        },
      ],
      legalLinks: [
        {
          name: 'Cookie Statement',
          path: '/policy/cookie-statement',
        },
        {
          name: 'Disclaimer',
          path: '/policy/disclaimer',
        },
        {
          name: 'Privacy Policy',
          path: '/policy/privacy-policy',
        },
      ],
    }
  },
}
</script>
