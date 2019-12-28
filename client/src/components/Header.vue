<template>
  <div>
    <particles-bg
      type="cobweb"
      :bg="true"
      num="100"
      :color="white"
      style=" z-index:5; max-height: 90vh"
    />
    <v-container my-5>
      <v-row>
        <v-col cols="6">
          <v-card
            class="ml-3"
            style="z-index:6;margin-top: 27.5vh; margin-bottom:15vh; background:transparent; font-size: 2em; line-height: 1.5em"
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
  data: () => ({ white: null }),
};
</script>