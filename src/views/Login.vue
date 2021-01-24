<template>
  <div>
    <v-row justify="center" style="height: 90vh;">
      <v-col
        style="max-width: 450px;"
        class="align-self-center justify-center d-flex"
      >
        <div style="width: 100%;">
          <v-form ref="form">
            <v-card outlined class="py-5 px-6">
              <v-text-field
                :rules="rules"
                label="Username"
                v-model="form.login"
              ></v-text-field>
              <v-text-field
                :rules="rules"
                label="Password"
                type="password"
                v-model="form.password"
              ></v-text-field>
              <div class="d-flex justify-center mt-2">
                <v-btn @click="login(form.login, form.password)" outlined tile
                  >Zaloguj</v-btn
                >
              </div>
              <v-row justify="center" class="mt-4" v-if="error">
                <v-alert color="error">Wystąpił błąd logowania</v-alert>
              </v-row>
            </v-card>
          </v-form>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import axios from "axios";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      form: {
        login: "",
        password: "",
      },
      rules: [(v) => !!v || "Field is required"],
      error: false,
    };
  },
  methods: {
    ...mapActions(["setLogin", "setUser"]),
    async login(login, password) {
      this.error = false;
      if (this.$refs.form.validate()) {
        const form = new FormData();
        form.append("login", login);
        form.append("password", password);

        const response = await axios({
          method: "post",
          url: process.env.VUE_APP_ROOT_API + "/login.php",
          data: form,
          headers: {
            "Content-Type": `multipart/form-data; boundary=${form._boundary}`,
          },
        });
        const user = response.data[0];
        console.log(user);
        console.log(typeof user);

        if (response && response.data && user && user !== "0") {
          this.setLogin(true);
          this.setUser(user);
          this.$router.push("/");
        } else {
          this.setLogin(false);
          this.error = true;
        }
      }
    },
  },
};
</script>
