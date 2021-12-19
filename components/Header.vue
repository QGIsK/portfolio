<template>
    <div>
        <ClientOnly>
            <particles-bg type="cobweb" :bg="true" num="100" style="z-index: 1; max-height: 80vh" />
        </ClientOnly>
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
                        <br />
                        Based in
                        <b>The Netherlands</b>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
export default {
    name: 'Header',
};
</script>
