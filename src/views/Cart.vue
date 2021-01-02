<template>
  <v-card flat>
    <v-row>
      <v-col cols="12">
        <v-card-title>Twój koszyk</v-card-title>

        <div>
          <v-card flat>
            <v-divider />
            <v-row>
              <v-col cols="1"> </v-col>
              <v-col cols="5">
                Nazwa
              </v-col>
              <v-col cols="3">
                Cena
              </v-col>
              <v-col cols="3">
                Ilość
              </v-col>
            </v-row>
          </v-card>
          <v-card flat v-for="(product, index) in getCart" :key="index">
            <v-row>
              <v-col cols="1" class="d-flex justify-center">
                <v-img
                  class="align-self-center"
                  :src="product.item.image"
                  max-width="40"
                  max-height="40"
                />
              </v-col>
              <v-col cols="5" class="d-flex">
                <div class="align-self-center">{{ product.item.name }}</div>
              </v-col>
              <v-col cols="3" class="d-flex">
                <div class="align-self-center">
                  {{ `${product.item.price} zł` }}
                </div>
              </v-col>
              <v-col cols="3" class="d-flex">
                <div class="align-self-center">{{ product.quantity }}</div>
              </v-col>
            </v-row>
            <v-divider class="mt-3" />
          </v-card>
        </div>
      </v-col>
      <v-col cols="6" class="pl-7">Łączna kwota</v-col>
      <v-col cols="6" class="d-flex justify-end pr-7">{{
        `${getTotalPrice} zł`
      }}</v-col>
    </v-row>
    <!-- <v-row>
      <v-col cols="12">
        <v-card-title>Dane kontaktowe</v-card-title>
        <div>
          <v-card flat>
            <v-divider />
            <v-row justify="center">
              <v-col cols="5">
                <v-text-field
                  dense
                  style="max-height: 45px; border-radius: 20px;"
                  class="my-1 mt-5"
                  outlined
                  label="Imię"
                ></v-text-field>
                <v-text-field
                  dense
                  style="max-height: 45px; border-radius: 20px;"
                  class="my-1"
                  outlined
                  label="Nazwisko"
                ></v-text-field>
                <v-text-field
                  dense
                  class="my-1"
                  style="max-height: 45px; border-radius: 20px;"
                  outlined
                  label="Adres dostawy"
                ></v-text-field>
                <v-text-field
                  dense
                  class="my-1"
                  style="max-height: 45px; border-radius: 20px;"
                  outlined
                  label="Numer telefonu"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-card>
        </div>
      </v-col>
    </v-row> -->
    <v-row class="mt-4">
      <v-col cols="12" class="d-flex justify-center">
        <v-btn
          v-if="getCart && getCart.length > 0 && getUser"
          @click="order(getCart)"
          color="black"
          style="border-radius: 20px;"
          ><span class="white--text">Złóż zamówienie</span></v-btn
        >
      </v-col>
    </v-row>
    <v-row justify="center" v-if="error">
      <v-alert color="error">Wystąpił błąd</v-alert>
    </v-row>
  </v-card>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import axios from "axios";

export default {
  data() {
    return {
      products: [],
      error: false,
    };
  },
  computed: {
    ...mapGetters(["getCart", "getUser"]),
    getTotalPrice() {
      let total = 0;
      this.getCart?.forEach((v) => {
        total += v.quantity * v?.item.price;
      });
      return total;
    },
  },
  methods: {
    ...mapActions(["setCart", "clearCart"]),
    async order(cart) {
      this.error = false;
      if (!this.getUser || !cart || !cart.length > 0) return;
      console.log(this.getUser);
      //   const order = [];
      //   cart.forEach((v) => {
      //     order.push({ id: v.item.id, quantity: v.quantity });
      //   });
      //   console.log(order, "order");

      let product_id = [];
      let quantity = [];

      cart.forEach((v) => {
        product_id.push(v.item.id);
        quantity.push(v.quantity);
      });

      product_id = product_id.toString();
      quantity = quantity.toString();

      const form = new FormData();

      form.append("user_id", this.getUser.id);
      form.append("product_id", product_id);
      form.append("quantity", quantity);

      const response = await axios({
        method: "post",
        url: process.env.VUE_APP_ROOT_API + "/order.php",
        data: form,
        headers: {
          "Content-Type": `multipart/form-data; boundary=${form._boundary}`,
        },
      });
      console.log(response, "response");
      if (response?.data === "true") {
        this.clearCart();
        this.$router.push("/sum");
      } else {
        this.error = true;
      }
    },
  },
};
</script>
