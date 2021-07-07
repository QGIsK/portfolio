<template>
  <v-app>
    <!-- <Navbar /> -->
    <ReadMe :title="title" :data="data" />
  </v-app>
</template>

<script>
import ReadMe from "../../components/policies/Readme";
import ReadMD from "../../assets/policies/CookieStatement.md";
export default {
  name: "CookieStatement",
  components: {
    ReadMe,
  },
  data() {
    return {
      title: "Cookie Verklaring",
      data: "",
    };
  },
  created() {
    this.data = ReadMD;
  },
};
</script>
