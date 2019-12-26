<template>
  <div>
    <particles-bg
      type="cobweb"
      :bg="true"
      num="100"
      :color="white"
      style=" z-index:5; max-height: 85vh"
    />
    <v-container my-5>
      <v-row>
        <v-col cols="6">
          <v-card
            style="margin-top: 27.5vh; margin-bottom:15vh; background:transparent; font-size: 2em; line-height: 1.5em"
            flat
          >
            <b>Lorem ipsum</b> dolor sit amet, consectetur
            <b>adipiscing elit,</b> sed do
            <b>eiusmod.</b>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>