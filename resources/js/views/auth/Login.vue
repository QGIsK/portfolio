<template>
  <div id="contact">
    <v-container>
      <v-row>
        <v-col :cols="$vuetify.breakpoint.mdAndDown ? 12 : 8" class="mx-auto">
          <v-card
            elevation="0"
            style="background: transparent; font-size: 1.5em; margin-top: 10vh; line-height: 1.5em"
          >
            <v-card-title>
              <h2>Authentication</h2>
            </v-card-title>
            <v-card-text>
              <v-text-field
                ref="email"
                label="Email"
                hint="Your email"
                v-model="email"
                :rules="[() => !!email || 'This field is required']"
                required
              ></v-text-field>

              <v-text-field
                ref="password"
                v-model="password"
                :rules="[() => !!password || 'This field is required']"
                label="Password"
                hint="Your password"
                type="password"
                required
              ></v-text-field>
            </v-card-text>
            <v-divider class="mt-5"></v-divider>
            <v-card-actions>
              <v-btn @click="resetForm" text>Reset form</v-btn>
              <v-spacer></v-spacer>

              <v-btn color="primary" v-if="!password || !password" disabled text @click="submit"
                >Login</v-btn
              >
              <v-btn color="primary" v-else text :disabled="sending" @click="submit">Login</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { setCookie, getCookie } from '../../services/cookie'

import {
  VContainer,
  VRow,
  VCol,
  VCard,
  VBtn,
  VSpacer,
  VCardTitle,
  VCardText,
  VTextField,
  VTextarea,
  VSubheader,
  VCardActions,
  VDivider,
  VSlider,
} from 'vuetify/lib'

export default {
  name: 'Authenticated',
  components: {
    VContainer,
    VRow,
    VCol,
    VCard,
    VBtn,
    VSpacer,
    VCardTitle,
    VCardText,
    VTextField,
    VTextarea,
    VSubheader,
    VCardActions,
    VDivider,
    VSlider,
  },
  data: () => ({
    show: true,
    email: '',
    password: '',
    sending: false,
  }),
  methods: {
    toggle() {
      this.show = !this.show
      this.about = !this.about
    },
    resetForm() {
      this.email = ''
      this.password = ''

      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    },
    async submit() {
      this.sending = true
      const data = {
        email: this.email,
        password: this.password,
      }

  this.$http({
    url: '/api/auth/login',
    data,
    method: 'POST'
  }).then(() => {
    await this.$store.dispatch('Authentication/Login')

  })
      try {



        let payload = {
          type: 'green',
          text: 'Successfully authenticated.',
        }
        this.$store.dispatch('toggleSnackBar', payload)

        this.$router.go('/dashboard')
      } catch (e) {
        let payload = {
          type: 'danger',
          text: "Something doens't seem quite right, Please try again.",
        }
        this.$store.dispatch('toggleSnackBar', payload)

      } finally {
        this.sending = false
      }
    },
  },
}
</script>
