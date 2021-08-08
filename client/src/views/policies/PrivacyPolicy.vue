<template>
  <v-app>
    <!-- <Navbar /> -->
    <ReadMe :title="title" :data="data" />
  </v-app>
</template>

<script>
import ReadMe from '../../components/policies/Readme';
import ReadMD from '../../assets/policies/PrivacyPolicy.md';
export default {
  name: 'PrivacyPolicy',
  components: {
    ReadMe,
  },
  data() {
    return {
      title: 'Privacy Policy',
      data: '',
    };
  },
  created() {
    this.data = ReadMD;
  },
};
</script>
