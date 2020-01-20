<template>
  <div class="bg-dark" style="margin-top:17.5vh">
    <v-container class="my-5 fill-height">
      <v-fade-transition mode="out-in" appear>
        <v-row style="margin-top:-5vh" v-if="$vuetify.breakpoint.mdAndDown1">
          <v-col id="portfolio" class="mx-auto" cols="10" style="z-index:6; margin-bottom: 10vh;">
            <v-card style="background:transparent" flat>
              <v-hover>
                <template v-slot:default="{ hover }">
                  <div style="position:relative">
                    <v-img
                      src="/public/images/ReviewsByMe.WebP"
                      class="grey darken-4"
                      alt="Image of Reviews By Me"
                    ></v-img>
                    <v-fade-transition>
                      <!-- #036358 -->
                      <v-overlay v-if="hover" absolute color="grey darken">
                        <v-btn href="https://reviewsbyme.demiann.xyz" target="_blank"
                          >View Website</v-btn
                        >
                      </v-overlay>
                    </v-fade-transition>
                  </div>
                </template>
              </v-hover>
              <v-card-title>Reviews by Me</v-card-title>
              <v-card-text
                >Reviews By Me is a Blog Application <br />Made with Vue, Express, NodeJS and
                MongoDB</v-card-text
              >
            </v-card>
          </v-col>

          <!-- row -->
          <v-col cols="10" class="mx-auto" style="margin-bottom: 10vh;">
            <v-card style="background:transparent" flat>
              <v-hover>
                <template v-slot:default="{ hover }">
                  <div style="position:relative">
                    <v-img
                      src="/public/images/ShadowBot.WebP"
                      class="grey darken-4"
                      alt="Image of template one"
                    ></v-img>
                    <v-fade-transition>
                      <v-overlay v-if="hover" absolute color="grey darken">
                        <v-btn href="https://shadow.demiann.xyz" target="_blank"
                          >View Website</v-btn
                        >
                      </v-overlay>
                    </v-fade-transition>
                  </div>
                </template>
              </v-hover>

              <v-card-title>Shadow bot</v-card-title>
              <v-card-text
                >Website for the Shadow Discord bot <br />
                Made with Vue and NodeJS</v-card-text
              >
            </v-card>
          </v-col>

          <v-col cols="10" class="mx-auto" style="margin-bottom: 10vh;">
            <v-card style="background:transparent" flat>
              <v-hover>
                <template v-slot:default="{ hover }">
                  <div style="position:relative">
                    <v-img
                      src="/public/images/TemplateOne.WebP"
                      class="grey darken-4"
                      alt="Image of template one"
                    ></v-img>
                    <v-fade-transition>
                      <v-overlay v-if="hover" absolute color="grey darken">
                        <v-btn href="https://template-one.demiann.xyz" target="_blank"
                          >View Website</v-btn
                        >
                      </v-overlay>
                    </v-fade-transition>
                  </div>
                </template>
              </v-hover>
              <v-card-title>Template One</v-card-title>
              <v-card-text>Is Made with Vue, Express, NodeJS and MongoDB</v-card-text>
            </v-card>
          </v-col>

          <!-- row -->

          <v-col cols="10" class="mx-auto" style="margin-bottom: 10vh;">
            <v-card style="background:transparent" flat>
              <v-hover>
                <template v-slot:default="{ hover }">
                  <div style="position:relative">
                    <v-img
                      src="https://images.unsplash.com/photo-1468366141642-e5ea3a6738f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                      class="grey darken-4"
                      alt="Temp image"
                    ></v-img>
                    <v-fade-transition>
                      <v-overlay v-if="hover" absolute color="grey darken">
                        <v-btn href="#" disabled target="_blank">View Website</v-btn>
                      </v-overlay>
                    </v-fade-transition>
                  </div>
                </template>
              </v-hover>
              <v-card-title>Portfolio</v-card-title>
              <v-card-text>Made with Vue and NodeJS</v-card-text>
            </v-card>
          </v-col>

          <!-- row -->

          <v-col cols="10" class="mx-auto" style="margin-bottom: 10vh;">
            <v-card style="background:transparent" flat>
              <v-hover>
                <template v-slot:default="{ hover }">
                  <div style="position:relative">
                    <v-img
                      src="https://images.unsplash.com/photo-1468366141642-e5ea3a6738f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                      class="grey darken-4"
                      alt="Temp image"
                    ></v-img>
                    <v-fade-transition>
                      <v-overlay v-if="hover" absolute color="grey darken">
                        <v-btn href="#" disabled target="_blank">View Website</v-btn>
                      </v-overlay>
                    </v-fade-transition>
                  </div>
                </template>
              </v-hover>
              <v-card-title>Portfolio</v-card-title>
              <v-card-text>Made with Vue and NodeJS</v-card-text>
            </v-card>
          </v-col>

          <v-col cols="10" class="mx-auto" style="margin-bottom: 10vh;">
            <v-card style="background:transparent" flat>
              <v-hover>
                <template v-slot:default="{ hover }">
                  <div style="position:relative">
                    <v-img
                      src="https://images.unsplash.com/photo-1468366141642-e5ea3a6738f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                      class="grey darken-4"
                      alt="Temp image"
                    ></v-img>
                    <v-fade-transition>
                      <v-overlay v-if="hover" absolute color="grey darken">
                        <v-btn href="#" disabled target="_blank">View Website</v-btn>
                      </v-overlay>
                    </v-fade-transition>
                  </div>
                </template>
              </v-hover>
              <v-card-title>Portfolio</v-card-title>
              <v-card-text>Made with Vue and NodeJS</v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row style="margin-top:-17.5vh">
          <v-col id="portfolio" class="mx-auto" cols="8" style="z-index:6; margin-bottom: 10vh;">
            <v-card style="background:transparent" flat>
              <v-hover>
                <template v-slot:default="{ hover }">
                  <div style="position:relative">
                    <v-img
                      src="/public/images/ReviewsByMe.WebP"
                      class="grey darken-4"
                      alt="Image of Reviews By Me"
                    ></v-img>
                    <v-fade-transition>
                      <!-- #036358 -->
                      <v-overlay v-if="hover" absolute color="grey darken">
                        <v-btn href="https://reviewsbyme.demiann.xyz" target="_blank"
                          >View Website</v-btn
                        >
                      </v-overlay>
                    </v-fade-transition>
                  </div>
                </template>
              </v-hover>
              <v-card-title>Reviews by Me</v-card-title>
              <v-card-text
                >Reviews By Me is a Blog Application <br />Made with Vue, Express, NodeJS and
                MongoDB</v-card-text
              >
            </v-card>
          </v-col>

          <!-- row -->
          <v-col cols="7" class="mx-5" style="margin-bottom: 10vh;">
            <v-card style="background:transparent" flat>
              <v-hover>
                <template v-slot:default="{ hover }">
                  <div style="position:relative">
                    <v-img
                      src="/public/images/ShadowBot.WebP"
                      class="grey darken-4"
                      alt="Image of template one"
                    ></v-img>
                    <v-fade-transition>
                      <v-overlay v-if="hover" absolute color="grey darken">
                        <v-btn href="https://shadow.demiann.xyz" target="_blank"
                          >View Website</v-btn
                        >
                      </v-overlay>
                    </v-fade-transition>
                  </div>
                </template>
              </v-hover>

              <v-card-title>Shadow bot</v-card-title>
              <v-card-text
                >Website for the Shadow Discord bot <br />
                Made with Vue and NodeJS</v-card-text
              >
            </v-card>
          </v-col>

          <v-col cols="4" class="mx-auto" style="margin-bottom: 10vh;">
            <v-card style="background:transparent" flat>
              <v-hover>
                <template v-slot:default="{ hover }">
                  <div style="position:relative">
                    <v-img
                      src="/public/images/TemplateOne.WebP"
                      class="grey darken-4"
                      alt="Image of template one"
                    ></v-img>
                    <v-fade-transition>
                      <v-overlay v-if="hover" absolute color="grey darken">
                        <v-btn href="https://template-one.demiann.xyz" target="_blank"
                          >View Website</v-btn
                        >
                      </v-overlay>
                    </v-fade-transition>
                  </div>
                </template>
              </v-hover>
              <v-card-title>Template One</v-card-title>
              <v-card-text>Is Made with Vue, Express, NodeJS and MongoDB</v-card-text>
            </v-card>
          </v-col>

          <!-- row -->

          <v-col cols="8" class="mx-auto" style="margin-bottom: 10vh;">
            <v-card style="background:transparent" flat>
              <v-hover>
                <template v-slot:default="{ hover }">
                  <div style="position:relative">
                    <v-img
                      src="https://images.unsplash.com/photo-1468366141642-e5ea3a6738f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                      class="grey darken-4"
                      alt="Temp image"
                    ></v-img>
                    <v-fade-transition>
                      <v-overlay v-if="hover" absolute color="grey darken">
                        <v-btn href="#" disabled target="_blank">View Website</v-btn>
                      </v-overlay>
                    </v-fade-transition>
                  </div>
                </template>
              </v-hover>
              <v-card-title>Portfolio</v-card-title>
              <v-card-text>Made with Vue and NodeJS</v-card-text>
            </v-card>
          </v-col>

          <!-- row -->

          <v-col cols="5" class="mx-auto" style="margin-bottom: 10vh;">
            <v-card style="background:transparent" flat>
              <v-hover>
                <template v-slot:default="{ hover }">
                  <div style="position:relative">
                    <v-img
                      src="https://images.unsplash.com/photo-1468366141642-e5ea3a6738f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                      class="grey darken-4"
                      alt="Temp image"
                    ></v-img>
                    <v-fade-transition>
                      <v-overlay v-if="hover" absolute color="grey darken">
                        <v-btn href="#" disabled target="_blank">View Website</v-btn>
                      </v-overlay>
                    </v-fade-transition>
                  </div>
                </template>
              </v-hover>
              <v-card-title>Portfolio</v-card-title>
              <v-card-text>Made with Vue and NodeJS</v-card-text>
            </v-card>
          </v-col>

          <v-col cols="6" class="mx-auto" style="margin-bottom: 10vh;">
            <v-card style="background:transparent" flat>
              <v-hover>
                <template v-slot:default="{ hover }">
                  <div style="position:relative">
                    <v-img
                      src="https://images.unsplash.com/photo-1468366141642-e5ea3a6738f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                      class="grey darken-4"
                      alt="Temp image"
                    ></v-img>
                    <v-fade-transition>
                      <v-overlay v-if="hover" absolute color="grey darken">
                        <v-btn href="#" disabled target="_blank">View Website</v-btn>
                      </v-overlay>
                    </v-fade-transition>
                  </div>
                </template>
              </v-hover>
              <v-card-title>Portfolio</v-card-title>
              <v-card-text>Made with Vue and NodeJS</v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-fade-transition>
    </v-container>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "Portfolio",
  data: () => ({}),
};
</script>
