<template>
  <v-container fluid fill-height>
    <snackbar/>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card class="elevation-12">
          <v-toolbar dark>
            <v-toolbar-title>Shorten</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-card-text>
            <v-form @submit.prevent="Shorten()">
              <v-text-field id="url" v-model="longUrl" label="Shorten url" type="name"></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn @click="Shorten()" dark>Shorten</v-btn>
          </v-card-actions>
        </v-card>
        <v-card class="mt-4 mb-3" v-if="show">
          <v-toolbar dark>
            <v-toolbar-title>History</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-card-text>
            <div v-for="hist in history" :key="hist.shortCode">
              <span v-text="hist.shortUrl"></span>
              <v-btn text-lg-right small v-clipboard="hist.shortUrl" @click="Copy()">Copy</v-btn>
              <v-btn text-lg-right small @click="Open(hist.shortUrl)">Open</v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import snackbar from "./snackbars/snackbar.vue";

export default {
  name: "Home",
  components: {
    snackbar
  },
  data() {
    return {
      longUrl: this.url,
      history: [],
      show: false
    };
  },
  
  methods: {
    Shorten() {
      this.$http({
        url: "/api/url/shorten",
        crossDomain: true,
        data: {
          longUrl: this.longUrl
        },
        method: "POST"
      })
        .then(res => {
          let payload = {
            type: "success",
            text: "Successfully shortened"
          };
          this.$store.dispatch("toggleSnackBar", payload);
          this.show = true;
          this.history.push({
            _id: res.data._id,
            longUrl: res.data.longUrl,
            shortUrl: res.data.shortUrl,
            shortCode: res.data.shortCode
          });
        })
        .catch(e => {
          let payload = {
            type: "error",
            text: "An error occured, Please try again later."
          };
          this.$store.dispatch("toggleSnackBar", payload);
        });
    },
    Copy() {
      let payload = {
        type: "success",
        text: "Successfully coppied to clipboard"
      };
      this.$store.dispatch("toggleSnackBar", payload);
    },
    Open(url) {
      window.open(url, "_blank");
    }
  }
};
</script>
