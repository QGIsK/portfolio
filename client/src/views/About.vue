<template>
  <div style="height: 70vh;color:#fff;">
    <particles-bg
      type="cobweb"
      :bg="true"
      num="100"
      :color="white"
      style=" z-index:5; max-height: 100vh"
    />
    <v-container>
      <v-row>
        <v-col cols="6" class="mx-auto">
          <v-card
            style=" z-index:20;margin-right:5em;margin-top: 22.5vh; margin-bottom:15vh; background:transparent; font-size: 1.25em; line-height: 1.5em"
            flat
          >
            <v-card-title class="headline">About me</v-card-title>
            <v-card-text class="grey-text">
              <b>Lorem ipsum</b> dolor sit amet, consectetur
              <br />
              <b>adipiscing elit,</b> sed do
              <b>eiusmod.</b>
              <br />
              <b>Lorem ipsum</b> dolor sit amet, consectetur
              <br />
              <b>adipiscing elit,</b> sed do
              <b>eiusmod.</b>
              <br />
              <b>Lorem ipsum</b> dolor sit amet, consectetur
              <br />
              <b>adipiscing elit,</b> sed do
              <b>eiusmod.</b>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="6"></v-col>
      </v-row>
    </v-container>
    <Footer class="mt-5" />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";

export default {
  name: "About",
  components: {
    Footer,
  },
  data: () => ({ white: null }),
};
</script>

<style scoped>
</style>