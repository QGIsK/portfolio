<template>
  <div id="contact">
    <v-container>
      <v-row>
        <v-col :cols="$vuetify.breakpoint.mdAndDown ? 12 : 8" class="mx-auto" v-if="!contacted">
          <v-card
            elevation="0"
            style="margin-top: 10vh; margin-bottom: 10vh; background: transparent; font-size: 1.5em; line-height: 1.5em"
          >
            <v-card-title>
              <h2>Contact</h2>
            </v-card-title>
            <v-card-text v-if="show">
              <v-text-field
                ref="name"
                label="What's your name?"
                hint="Your first name"
                v-model="from"
                :rules="[() => !!from || 'This field is required']"
                required
              ></v-text-field>

              <v-text-field
                ref="email"
                v-model="email"
                :rules="[() => !!email || 'This field is required']"
                label="How do I contact you?"
                hint="Your email"
                required
              ></v-text-field>

              <v-textarea v-model="text" label="Tell me about your project" counter maxlength="500" single-line></v-textarea>

              <v-subheader style="margin-left: -1.5vh">What's your deadline like?</v-subheader>

              <v-slider
                v-model="time"
                :tick-labels="$vuetify.breakpoint.mdAndDown ? smallTicks : timeTicks"
                :max="4"
                step="1"
                ticks="always"
                tick-size="4"
              ></v-slider>
            </v-card-text>
            <v-divider class="mt-5"></v-divider>
            <v-card-actions>
              <v-btn @click="resetForm" text>Reset form</v-btn>
              <v-spacer></v-spacer>

              <v-btn color="primary" v-if="!from || !email || !text" disabled text @click="submit">Send</v-btn>
              <v-btn color="primary" v-else text :disabled="sending" @click="submit">Send</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="12" class="mx-auto" text v-else>
          <v-card elevation="0" style="background: transparent; margin-top: 25vh; margin-bottom: 25vh">
            <v-card-title class="mx-auto headline">
              <h2 class="mx-auto">Thanks for Contacting me.</h2>
            </v-card-title>
            <v-card-text class="text-center">I'll get back to you as soon as I can.</v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { setCookie, getCookie } from '../services/cookie';

const contactCookie = 'contacted';

export default {
  name: 'Contact',
  components: {},
  data: () => ({
    show: true,
    timeTicks: ['7 Days', '1 Month', '3 Months', '6 Months', '1 Year', 'More than 1 Year'],
    smallTicks: ['7D', '1M', '3M', '6M', '1Y', '1Y+'],
    time: '7 Days',
    contacted: false,
    from: '',
    email: '',
    subject: '',
    text: '',
    sending: false,
  }),
  mounted() {
    const contacted = getCookie(contactCookie);

    this.contacted = !!contacted;
  },
  methods: {
    toggle() {
      this.show = !this.show;
      this.about = !this.about;
    },
    resetForm() {
      this.from = '';
      this.email = '';
      this.subject = '';
      this.text = '';
      this.time = this.timeTicks[0];

      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
    submit() {
      this.sending = true;
      const data = {
        from: this.from,
        email: this.email,
        time: this.timeTicks[this.time],
        text: this.text,
      };
      this.$http({
        url: '/contact',
        data,
        method: 'POST',
      })
        .then(() => {
          this.resetForm();
          let payload = {
            type: 'green',
            text: 'Message has been send!',
          };

          setCookie(contactCookie, true, 604800);

          this.$store.dispatch('toggleSnackBar', payload);

          this.show = false;
          this.contacted = true;
        })
        .catch(() => {
          let payload = {
            type: 'red',
            text: 'Please check all fields and try again.',
          };
          this.$store.dispatch('toggleSnackBar', payload);
          this.sending = false;
        });
    },
  },
};
</script>
