<template>
  <div>
    <particles-bg
      type="cobweb"
      :bg="true"
      num="100"
      :color="white"
      style=" z-index:5; max-height: 100vh"
    />
    <v-container>
      <v-row>
        <v-col cols="6">
          <v-card
            style="z-index:20;margin-top: 5vh; margin-bottom:2.5vh; background:transparent; font-size: 1.25em; line-height: 1.5em"
            flat
          >
            <!-- <v-card-title justify-center text-xs-center>
              <h2>Contact me</h2>
            </v-card-title>-->
            <!-- <v-form> -->
            <!-- <v-textarea
                label="Message"
                counter
                maxlength="120"
                full-width
                single-line
            ></v-textarea>-->
            <!-- </v-form> -->
            <v-card-text>
              <v-text-field
                ref="name"
                label="Your name"
                v-model="from"
                :rules="[() => !!from || 'This field is required']"
                placeholder="Your name"
                required
              ></v-text-field>
              <v-text-field
                ref="email"
                label="Your email"
                v-model="email"
                :rules="[() => !!email || 'This field is required']"
                placeholder="Your email"
                required
              ></v-text-field>
              <v-text-field
                label="Subject"
                ref="subject"
                v-model="subject"
                :rules="[() => !!subject || 'This field is required']"
                placeholder="Contact subject"
                required
              ></v-text-field>

              <v-textarea label="Message" v-model="body" counter maxlength="500" single-line></v-textarea>
            </v-card-text>
            <v-divider class="mt-5"></v-divider>
            <v-card-actions>
              <v-btn @click="resetForm" flat>Reset form</v-btn>
              <v-spacer></v-spacer>

              <v-btn
                color="primary"
                v-if="!from || !email || !subject || !body"
                disabled
                flat
                @click="submit"
              >Send</v-btn>
              <v-btn color="primary" v-else flat @click="submit">Send</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <Footer class="mt-5" />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";

export default {
  name: "About",
  components: {
    Footer,
  },
  data: () => ({ white: null, from: "", email: "", subject: "", body: "" }),
  methods: {
    resetForm() {
      this.from = "";
      this.email = "";
      this.subject = "";
      this.body = "";
    },
    submit() {
      // Object.keys(this.form).forEach(f => {
      //   if (!this.form[f]) this.formHasErrors = true;
      //   this.$refs[f].validate(true);
      const data = {
        from: this.from,
        email: this.email,
        subject: this.subject,
        body: this.body,
      };
      this.$http({
        url: "http://localhost:3000/contact",
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