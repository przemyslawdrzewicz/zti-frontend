<template>
  <v-app>
    <v-app-bar app color="black" dark>
      <router-link to="/" style="text-decoration: none;"
        ><v-btn outlined class="title">
          SKLEP INTERNETOWY
        </v-btn></router-link
      >
      <router-link to="/login" style="text-decoration: none;"
        ><v-btn v-if="!getLogin" text>
          Zaloguj
        </v-btn></router-link
      >
      <!-- <v-btn v-if="!getLogin" text>
        Rejestracja
      </v-btn> -->
      <v-spacer></v-spacer>
      <router-link to="/cart" style="text-decoration: none;">
        <v-badge
          v-if="getCart && getCart.length > 0"
          bordered
          color="red"
          :content="getCart.length"
          offset-x="28"
          overlap
        >
          <v-btn color="green" text>
            <div>
              <v-icon>mdi-cart-outline</v-icon>
              <div>Koszyk</div>
            </div>
          </v-btn>
        </v-badge>
        <v-btn v-else color="green" text>
          <div>
            <v-icon>mdi-cart-outline</v-icon>
            <div>Koszyk</div>
          </div>
        </v-btn>
      </router-link>

      <!-- <router-link to="/panel" style="text-decoration: none;"
        ><v-btn
          v-if="getLogin && getUser && getUser.user_role === 'admin'"
          text
        >
          Panel administratora
        </v-btn></router-link
      > -->

      <v-btn
        v-if="getLogin"
        @click="
          setLogin(false);
          setUser(null);
        "
        text
      >
        Wyloguj
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
// import Products from "./components/Products";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "App",

  components: {
    // Products,
  },
  computed: {
    ...mapGetters(["getLogin", "getUser", "getCart"]),
  },
  methods: {
    ...mapActions(["setLogin", "setUser"]),
  },

  data: () => ({
    //
  }),
};
</script>
