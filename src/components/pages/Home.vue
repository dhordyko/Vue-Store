<template>
  <section class="home-page">
    <mainBanner />
    <section class="products">
      <div class="section-title">
        <h2>our products</h2>
      </div>
      <div class="products-center">
        <articleItem
          v-for="product of items"
          :key="product.sys.id"
          v-bind:product_data="product"
          v-on:addtocart="addToCart"
        />
        {{articles}}
      </div>
    </section>
  </section>
</template>
<script>
import mainBanner from "../elements/main-banner";
import articleItem from "../elements/article-item";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "HomePage",
  mounted() {
    this.GET_PRODUCTS_FROM_API();
  },

  components: {
    mainBanner,
    articleItem,
  },
  computed: {
    ...mapGetters(["PRODUCTS"]),
  },
  methods: {
    ...mapActions(["GET_PRODUCTS_FROM_API", "ADD_TO_CART"]),
    addToCart(data) {
      this.ADD_TO_CART(data);
    },
  },
  data() {
    return {
      items: [
        {
          sys: {
            id: "1",
          },
          fields: {
            title: "queen panel bed",
            price: 10.99,
            image: {
              fields: {
                file: {
                  url: "product-1.jpeg",
                },
              },
            },
          },
        },
        {
          sys: {
            id: "2",
          },
          fields: {
            title: "king panel bed",
            price: 12.99,
            image: {
              fields: {
                file: {
                  url: "product-2.jpeg",
                },
              },
            },
          },
        },
        {
          sys: {
            id: "3",
          },
          fields: {
            title: "single panel bed",
            price: 12.99,
            image: {
              fields: {
                file: {
                  url: "product-3.jpeg",
                },
              },
            },
          },
        },
        {
          sys: {
            id: "4",
          },
          fields: {
            title: "twin panel bed",
            price: 22.99,
            image: {
              fields: {
                file: {
                  url: "product-4.jpeg",
                },
              },
            },
          },
        },
        {
          sys: {
            id: "5",
          },
          fields: {
            title: "fridge",
            price: 88.99,
            image: {
              fields: {
                file: {
                  url: "product-5.jpeg",
                },
              },
            },
          },
        },
        {
          sys: {
            id: "6",
          },
          fields: {
            title: "dresser",
            price: 32.99,
            image: {
              fields: {
                file: {
                  url: "product-6.jpeg",
                },
              },
            },
          },
        },
        {
          sys: {
            id: "7",
          },
          fields: {
            title: "couch",
            price: 45.99,
            image: {
              fields: {
                file: {
                  url: "product-7.jpeg",
                },
              },
            },
          },
        },
        {
          sys: {
            id: "8",
          },
          fields: {
            title: "table",
            price: 33.99,
            image: {
              fields: {
                file: {
                  url: "product-8.jpeg",
                },
              },
            },
          },
        },
      ],
    };
  },
};
</script>
