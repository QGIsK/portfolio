<template>
  <div>
    <particles-bg
      type="cobweb"
      :bg="true"
      num="100"
      :color="white"
      style=" z-index:5; max-height: 100vh"
    />
    <v-container>
      <v-row>
        <v-col cols="6"></v-col>
        <v-col cols="6" class="mx-auto">
          <v-card
            style="text-align:right; z-index:20;margin-right:5em;margin-top: 27.5vh; margin-bottom:15vh; background:transparent; font-size: 1.25em; line-height: 1.5em"
            flat
          >
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
          </v-card>
        </v-col>
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