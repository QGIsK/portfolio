<template>
  <div id="contact">
    <v-container>
      <v-col cols="12" v-if="!about">
        <v-layout justify-center>
          <v-btn @click="toggle()" outlined>About me</v-btn>
        </v-layout>
      </v-col>
      <v-col cols="12" v-if="about">
        <v-layout justify-center>
          <v-btn @click="toggle()" outlined>Contact me</v-btn>
        </v-layout>
      </v-col>
      <v-row v-if="show">
        <v-col cols="6" class="mx-auto" v-if="!contacted">
          <v-card
            elevation="0"
            style="margin-top:10vh; margin-bottom:10vh; background:transparent; font-size: 1.5em; line-height: 1.5em"
          >
            <v-card-title>
              <h2>Contact</h2>
            </v-card-title>
            <v-card-text>
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

              <v-textarea
                v-model="body"
                label="Tell me about your project"
                counter
                maxlength="500"
                single-line
              ></v-textarea>

              <v-subheader style="margin-left: -1.5vh">How long will this take?</v-subheader>

              <v-slider
                v-model="time"
                :tick-labels="timeTicks"
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

              <v-btn color="primary" v-if="!from || !email || !body" disabled text @click="submit"
                >Send</v-btn
              >
              <v-btn color="primary" v-else text @click="submit">Send</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>

        <v-col cols="6" class="mx-auto" text v-else>
          <v-card
            elevation="0"
            style="background: transparent; margin-top:25vh; margin-bottom: 25vh"
          >
            <v-card-title class="mx-auto headline">
              <h2 class="mx-auto">Thanks for Contacting me.</h2>
            </v-card-title>
            <v-card-text class="text-center">I'll get back to you as soon as I can.</v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row v-else>
        <v-col cols="6" class="mx-auto">
          <v-card
            elevation="0"
            style="margin-top: 10vh; margin-bottom:10vh; background:transparent; font-size: 1.5em; line-height: 1.5em"
          >
            <v-card-title>
              <h2>About</h2>
            </v-card-title>
            <v-card-text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis labore sapiente
              suscipit impedit maiores perspiciatis nihil eveniet fugit illo dicta itaque nulla,
              dolorum enim ea repudiandae culpa voluptate? In ut repellendus, esse recusandae ab
              dolorem suscipit labore at rem dolores minima omnis vel voluptatum nisi porro placeat
              est reprehenderit laboriosam?
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <About v-if="about" />
  </div>
</template>

<script>
import Axios from "axios";

import About from "@/components/About.vue";

if (!process.env.NODE_ENV || process.env.NODE_ENV == "development") {
  Axios.baseURL = "http://localhost:3000";
}

export default {
  name: "Contact",
  components: {
    About,
  },
  data: () => ({
    show: true,
    timeTicks: ["Yesterday", "1 Month", "3 Months", "6 Months", "1 Year"],
    contacted: false,
    about: false,
    white: null,
    time: "",
    from: "",
    email: "",
    subject: "",
    body: "",
  }),
  methods: {
    toggle() {
      this.show = !this.show;
      this.about = !this.about;
    },
    resetForm() {
      this.from = "";
      this.email = "";
      this.subject = "";
      this.body = "";
      this.time = "";
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
    submit() {
      const data = {
        from: this.from,
        email: this.email,
        time: this.timeTicks[this.time],
        body: this.body,
      };
      Axios({
        url: "/api/contact",
        data,
        method: "POST",
      })
        .then(() => {
          this.resetForm();
          let payload = {
            type: "green",
            text: "Message has been send!",
          };
          this.$store.dispatch("toggleSnackBar", payload);

          this.show = false;

          this.contacted = true;
        })
        .catch(() => {
          let payload = {
            type: "red",
            text: "Please check all fields and try again.",
          };
          this.$store.dispatch("toggleSnackBar", payload);
        });
      // });
    },
  },
};
</script>
