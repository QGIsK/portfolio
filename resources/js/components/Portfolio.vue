<template>
  <div class="bg-dark" style="margin-top: 17.5vh">
    <v-container class="my-5 fill-height">
      <v-fade-transition mode="out-in" appear>
        <v-row style="margin-top: -17.5vh">
          <v-col
            v-for="(item, index) in items"
            :key="index"
            :cols="$vuetify.breakpoint.mdAndDown ? `${item.size.mdDown}` : `${item.size.mdUp}`"
            class="mx-auto"
            style="margin-bottom: 10vh; z-index: 6"
          >
            <v-card style="background: transparent" flat>
              <v-hover>
                <template v-slot:default="{ hover }">
                  <div style="position: relative">
                    <v-img :src="item.image" class="grey darken-4" :alt="item.name"></v-img>
                    <v-fade-transition>
                      <v-overlay v-if="hover" absolute color="grey darken">
                        <v-btn :href="item.url" target="_blank">View Website</v-btn>
                      </v-overlay>
                    </v-fade-transition>
                  </div>
                </template>
              </v-hover>
              <v-card-title>{{ item.name }}</v-card-title>
              <v-card-text v-html="item.about"></v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-fade-transition>
    </v-container>
  </div>
</template>

<script>
import {
  VContainer,
  VRow,
  VCol,
  VCard,
  VHover,
  VImg,
  VFadeTransition,
  VOverlay,
  VBtn,
  VCardTitle,
  VCardText,
} from 'vuetify/lib'

/* eslint-disable */
import { mapGetters } from 'vuex'

export default {
  name: 'Portfolio',
  components: {
    VContainer,
    VRow,
    VCol,
    VCard,
    VHover,
    VImg,
    VFadeTransition,
    VOverlay,
    VBtn,
    VCardTitle,
    VCardText,
  },
  computed: {
    ...mapGetters({
      items: 'items',
    }),
  },
}
</script>
