<template>
  <div>
    <v-row justify="end" class="mr-1">
      <v-col cols="4">
        <v-select
          :items="[
            { text: 'Rosnąco', value: 'asc' },
            { text: 'Malejąco', value: 'desc' },
          ]"
          v-model="ascDesc"
          clearable
          item-text="text"
          item-value="value"
          @change="setSort()"
          label="Sortowanie"
        />
      </v-col>
      <v-col cols="4">
        <v-autocomplete
          :items="categories"
          v-model="category"
          clearable
          item-text="name"
          item-value="id"
          @change="setCategory()"
          label="Kategorie"
        />
      </v-col>
    </v-row>
    <v-row class="mt-5">
      <v-col
        v-for="(product, index) in products"
        :key="index"
        cols="12"
        sm="6"
        md="4"
        lg="2"
        class="d-flex justify-center"
      >
        <v-card>
          <v-img :src="product.image" width="200" height="200" />
          <v-divider />
          <div class="mx-4 my-2">
            <v-card-title style="margin:0;padding:0;">{{
              product.name
            }}</v-card-title>
            <div>
              <span>{{ `Kategoria: ${product.category_name}` }}</span>
            </div>

            <div style="width: 100%" class="d-flex">
              <span class="mt-2">{{ `${product.price} zł` }}</span>

              <v-spacer />
              <v-btn @click="addToCart(product)" color="green" icon
                ><v-icon>mdi-cart-plus</v-icon></v-btn
              >
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>
    <v-row justify="center" class="mt-7">
      <v-pagination
        v-model="page"
        :length="count"
        :total-visible="7"
        @input="setPage"
      />
    </v-row>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      products: [],
      count: 0,
      limit: 10,
      page: 1,
      category: null,
      categories: [],
      ascDesc: "",
    };
  },
  async created() {
    // const products = await axios.get(
    //   process.env.VUE_APP_ROOT_API + "/products.php"
    // );
    // // .then((response) => {
    // //   console.log(response);
    // // });
    // this.products = products?.data?.products || [];
    // this.count = products?.data?.count || 0;
    // console.log(products.data);
    await this.getCategories();
    await this.get();
  },
  async mounted() {},
  computed: {
    ...mapGetters(["getCart"]),
  },
  methods: {
    ...mapActions(["setCart"]),
    setPage() {
      console.log("changes");
      // this.page = page;
      this.get();
    },
    async getCategories() {
      const categories = await axios.get(
        process.env.VUE_APP_ROOT_API + "/categories.php"
      );
      console.log(categories?.data, "categories?.data");
      this.categories = categories?.data || [];
    },
    setSort() {
      this.page = 1;
      this.get();
    },
    setCategory() {
      this.page = 1;
      this.get();
    },
    addToCart(item) {
      console.log(item, "hm");

      this.setCart(item);
    },
    async get(page = this.page, perPage = this.limit, ascDesc = this.ascDesc) {
      const startAt = perPage * (page - 1);

      const form = new FormData();
      form.append("startAt", startAt);
      form.append("perPage", perPage);
      if (ascDesc) {
        form.append("orderBy", "price");
        form.append("ascDesc", ascDesc);
      }

      if (this.category) form.append("category", this.category);

      const products = await axios({
        method: "post",
        url: process.env.VUE_APP_ROOT_API + "/products.php",
        data: form,
        headers: {
          "Content-Type": `multipart/form-data; boundary=${form._boundary}`,
        },
      });

      const prod = products?.data?.products || [];
      if (prod?.length > 0) {
        for (let p of prod) {
          const find = this.categories.find((v) => v.id === p.category_id);
          if (find?.name) p.category_name = find.name;
        }
      }

      this.products = products?.data?.products || [];
      this.count = products?.data?.count
        ? Math.floor(products?.data?.count / perPage) +
          (products.data.count % perPage === 0 ? 0 : 1)
        : 0;
    },
  },
};
</script>
