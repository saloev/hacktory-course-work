<template>
  <v-app id="inspire">
    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <v-card class="elevation-12">
              <v-toolbar
                color="primary"
                dark
                flat
              >
                <v-toolbar-title>Login form</v-toolbar-title>
                <v-spacer />
                <v-tooltip bottom>
                </v-tooltip>
                <v-tooltip right>
                </v-tooltip>
              </v-toolbar>
              <v-card-text>
                <v-form @submit.prevent="submitForm">
                  <v-text-field
                  required
                  v-model="form.login"
                    label="Login"
                    name="login"
                    prepend-icon="person"
                    type="text"
                  />

                  <v-text-field
                  v-model="form.pass"
                  required
                    id="password"
                    label="Password"
                    name="password"
                    prepend-icon="lock"
                    type="password"
                  />
                   <v-btn color="primary" type="submit">Login</v-btn>
                   <v-btn color="secondary" type="reset"
                   @click="errorText = false"
                   class="ml-4">Reset</v-btn>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer />
                     <v-alert
                      :value="errorText"
                      color="pink"
                      dark
                      border="top"
                      transition="scale-transition"
                      style="width: 100%;"
                    >
                      {{text}}
                    </v-alert>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
/* eslint-disable */
export default {
  data: () => ({
    form: {
      login: null,
      pass: null,
    },

    errorText: false,
    text: '',
  }),

   created() {
    this.$store.watch(
      (state, getters) => getters.user,
      (newValue, oldValue) => {
        const {login, id} = this.$store.state.user;
        if (login && id) {
          this.$router.push({name: 'about', query: {login}});
        } else {
          this.text = 'Error login or password';
          this.errorText = true;
          this.hideErrorMessage();
        }
      },
    );
   },
  methods: {
    submitForm() {
      if (!this.form.login || !this.form.pass) {
        this.text = 'Please fill form';
        this.errorText = true;

        this.hideErrorMessage();
      }

      this.$store.dispatch('userAuth', this.form).then((res) => {
      }).catch((err) => {
          this.text = 'User not found';
          this.errorText = true;
          this.hideErrorMessage();
      });
    },

    hideErrorMessage() {
      setTimeout(() => {
          this.errorText = false;
      }, 2500);
    }
  },
};
</script>
