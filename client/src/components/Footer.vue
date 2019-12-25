<template>
  <v-footer color="transparent darken-1" padless>
    <v-row justify="center" no-gutters>
      <v-btn color="white" text rounded class="my-2">Github</v-btn>
      <v-btn color="white" text rounded class="my-2">Discord</v-btn>
      <v-btn color="white" text rounded class="my-2">Instagram</v-btn>
      <v-btn color="white" text rounded class="my-2">Teleram</v-btn>
      <v-btn color="white" text rounded class="my-2">Linkedin</v-btn>
      <v-col class="lighten-2 py-4 text-center white--text" cols="12">
        <strong>
          Name Agency
          &copy;
          {{ new Date().getFullYear() }}
        </strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>