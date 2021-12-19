<template>
    <div class="bg-dark" style="margin-top: 17.5vh">
        <v-container class="my-5 fill-height">
            <v-fade-transition mode="out-in" appear>
                <v-row style="margin-top: -17.5vh">
                    <v-col
                        v-for="(item, index) in items"
                        :key="index"
                        :cols="$vuetify.breakpoint.mdAndDown ? item.size.down : item.size.up"
                        class="mx-auto"
                        style="margin-bottom: 10vh; z-index: 6"
                    >
                        <v-card style="background: transparent" flat>
                            <v-hover>
                                <template #default="{hover}">
                                    <div style="position: relative">
                                        <v-img
                                            :src="item.images.desktop"
                                            class="grey darken-4"
                                            :alt="item.title"
                                        ></v-img>
                                        <v-fade-transition>
                                            <v-overlay v-if="hover" absolute color="grey darken">
                                                <v-btn :href="item.path">More information</v-btn>
                                            </v-overlay>
                                        </v-fade-transition>
                                    </div>
                                </template>
                            </v-hover>
                            <v-card-title>
                                {{ item.title }}
                                <v-spacer></v-spacer>
                                <i
                                    v-for="icon in item.icons.split(' ')"
                                    :key="icon"
                                    :class="`fa-${icon}`"
                                    class="fab mx-2"
                                ></i>
                            </v-card-title>
                            <!-- eslint-disable-next-line vue/no-v-html -->
                            <v-card-text v-html="item.description"></v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </v-fade-transition>
        </v-container>
    </div>
</template>

<script>
export default {
    name: 'Portfolio',
    props: {
        items: {
            type: Array,
            required: true,
        },
    },
};
</script>
