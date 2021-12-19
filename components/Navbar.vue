<template>
    <div style="z-index: 10">
        <v-toolbar flat style="cursor: pointer; background: transparent; z-index: 10">
            <v-toolbar-title
                v-if="!$vuetify.breakpoint.xsOnly"
                style="margin-left: 7.5vw"
                class="headline"
                @click="redirect('/')"
            >
                Demiann
            </v-toolbar-title>

            <v-spacer></v-spacer>
            <v-toolbar-items :style="$vuetify.breakpoint.smAndUp ? 'margin-right: 7.5vw' : ''">
                <v-btn v-scroll-to="'#portfolio'" text rounded>Home</v-btn>
                <v-btn v-scroll-to="'#contact'" text rounded>Contact</v-btn>
            </v-toolbar-items>
        </v-toolbar>
    </div>
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
