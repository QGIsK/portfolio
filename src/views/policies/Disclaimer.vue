<template>
  <v-app>
    <!-- <Navbar /> -->
    <ReadMe :title="title" :data="data" />
  </v-app>
</template>

<script>
import ReadMe from "../../components/policies/Readme";
import ReadMD from "../../assets/policies/Disclaimer.md";
export default {
  name: "Disclaimer",
  components: {
    ReadMe,
  },
  data() {
    return {
      title: "Disclaimer",
      data: "",
    };
  },
  created() {
    this.data = ReadMD;
  },
};
</script>
