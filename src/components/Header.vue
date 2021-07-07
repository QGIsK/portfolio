<template>
  <div>
    <v-card>
      <v-snackbar v-model="show" color="blue-grey" shaped :timeout="-1" right="right">
        This wesbite uses cookies. <v-btn text to="/policy/cookie-statement">Read More</v-btn>
        <v-btn color text @click="toggleSnackBar">Close</v-btn>
      </v-snackbar>
    </v-card>
    <particles-bg
      type="cobweb"
      :bg="true"
      num="100"
      :color="white"
      style="z-index: 1; max-height: 80vh"
    />
    <v-container my-5>
      <v-row>
        <v-col :cols="$vuetify.breakpoint.sm ? 6 : 12">
          <v-card
            class="ml-5"
            style="
              z-index: 2;
              margin-top: 27.5vh;
              margin-bottom: 15vh;
              background: transparent;
              font-size: 2em;
              line-height: 1.5em;
            "
            flat
          >
            I'm a
            <b>Web Developer</b>
            <br />Based in
            <b>The Netherlands</b>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Header",
  data: () => ({ white: null, show: true }),
  methods: {
    toggleSnackBar() {
      this.show = !this.show;
    },
  },
};
</script>
