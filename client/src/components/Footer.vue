<template>
  <div id="footer" class="bg-dark">
    <v-footer class="mt-3" color="transparent" padless>
      <v-row justify="center" no-gutters class="mt-4">
        <v-btn
          color="white"
          text
          rounded
          class="my-2 mr-1"
          rel="noreferrer"
          target="_blank"
          href="https://github.com/qgisk"
          >Github</v-btn
        >
        <v-hover v-slot:default="{ hover }" close-delay="175" open-delay="175">
          <v-btn
            color="white"
            rel="noreferrer"
            text
            rounded
            class="my-2 mx-1"
            target="_blank"
            href="#"
          >
            <v-expand-transition>
              <div v-if="hover" class="d-flex darken-2 white--text" style="height: 100%;">
                Demian#6666
              </div>
              <div v-else>Discord</div>
            </v-expand-transition>
          </v-btn>
        </v-hover>
        <v-btn
          color="white"
          rel="noreferrer"
          text
          rounded
          class="my-2 mx-1"
          target="_blank"
          href="#"
          >Instagram</v-btn
        >
        <v-btn
          color="white"
          rel="noreferrer"
          text
          rounded
          class="my-2 mx-1"
          target="_blank"
          href="#"
          >Telegram</v-btn
        >
        <v-btn
          color="white"
          rel="noreferrer"
          text
          rounded
          class="my-2 mx-1"
          target="_blank"
          href="#"
          >Linkedin</v-btn
        >
        <v-col class="lighten-2 my-3 py-4 text-center white--text" cols="12">
          <strong>
            Demiann &copy;
            {{ new Date().getFullYear() }}
          </strong>
        </v-col>
      </v-row>
    </v-footer>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>
