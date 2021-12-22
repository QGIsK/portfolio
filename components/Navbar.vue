<template>
    <v-toolbar flat class="nav">
        <v-toolbar-title v-if="!$vuetify.breakpoint.xsOnly" class="headline" @click="redirect('/')">
            Demiann
        </v-toolbar-title>

        <v-spacer></v-spacer>
        <v-toolbar-items :style="$vuetify.breakpoint.smAndUp ? 'margin-right: 7.5vw' : ''">
            <v-btn v-scroll-to="'#portfolio'" text rounded>Home</v-btn>
            <v-btn v-scroll-to="'#contact'" text rounded>Contact</v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
export default {
    name: 'Navbar',
    methods: {
        redirect(path) {
            this.$router.push(path);
        },
    },
};
</script>

<style lang="scss" scoped>
.nav {
    background: transparent !important;

    .headline {
        cursor: pointer;
        margin-left: 7.5vw;
    }

    &,
    * {
        z-index: 10;
    }
}
</style>
