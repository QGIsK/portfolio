<template>
  <div id="contact">
    <v-container>
      <v-row>
        <v-col cols="6" class="mx-auto" v-if="!contacted">
          <v-card
            elevation="0"
            style="margin-top: 12.5vh; margin-bottom:12.5vh; background:transparent; font-size: 1.25em; line-height: 1.5em"
          >
            <v-card-title>
              <h2>Contact me</h2>
            </v-card-title>
            <v-card-text>
              <v-text-field
                v-if="show"
                ref="name"
                label="How do I address you?"
                v-model="from"
                :rules="[() => !!from || 'This field is required']"
                required
              ></v-text-field>
              <!-- placeholder="How do I address you?" -->
              <v-text-field
                v-if="show"
                ref="email"
                v-model="email"
                :rules="[() => !!email || 'This field is required']"
                placeholder="How do I contact you?"
                required
              ></v-text-field>
              <!-- <v-text-field
                v-if="show"
                label="What "
                ref="subject"
                v-model="subject"
                :rules="[() => !!subject || 'This field is required']"
                placeholder
                required
              ></v-text-field>-->

              <v-textarea
                label="Message"
                v-if="show"
                v-model="body"
                counter
                placeholder="Tell me about your project"
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

              <v-btn
                color="primary"
                v-if="!from  || !email || !body"
                disabled
                text
                @click="submit"
              >Send</v-btn>
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
            <v-card-text class="text-center">I'll get back to you as soon as I can!</v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Contact",
  data: () => ({
    show: true,
    timeTicks: ["Yesterday", "1 Month", "3 Months", "6 Months", "1 Year"],
    contacted: false,
    white: null,
    time: "",
    from: "",
    email: "",
    subject: "",
    body: "",
  }),
  methods: {
    resetForm() {
      this.from = "";
      this.email = "";
      this.subject = "";
      this.body = "";
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
    submit() {
      // Object.keys(this.form).forEach(f => {
      //   if (!this.form[f]) this.formHasErrors = true;
      //   this.$refs[f].validate(true);
      const data = {
        from: this.from,
        email: this.email,
        time: this.timeTicks[this.time],
        body: this.body,
      };
      this.$http({
        url: "http://localhost:3000/api/contact",
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