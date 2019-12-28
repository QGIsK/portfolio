<template>
  <div id="footer" class="bg-dark">
    <v-footer color="transparent darken-1" padless>
      <v-row justify="center" no-gutters>
        <v-btn
          color="white"
          text
          rounded
          class="my-2"
          rel="noreferrer"
          target="_blank"
          href="https://github.com/qgisk"
        >Github</v-btn>
        <v-btn
          color="white"
          rel="noreferrer"
          text
          rounded
          class="my-2"
          target="_blank"
          href="#"
        >Discord</v-btn>
        <v-btn
          color="white"
          rel="noreferrer"
          text
          rounded
          class="my-2"
          target="_blank"
          href="#"
        >Instagram</v-btn>
        <v-btn
          color="white"
          rel="noreferrer"
          text
          rounded
          class="my-2"
          target="_blank"
          href="#"
        >Telegram</v-btn>
        <v-btn
          color="white"
          rel="noreferrer"
          text
          rounded
          class="my-2"
          target="_blank"
          href="#"
        >Linkedin</v-btn>
        <v-col class="lighten-2 py-4 text-center white--text" cols="12">
          <strong>
            Portfolio
            &copy;
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