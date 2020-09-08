<template>
  <div class="cart">
    <span class="close-cart" v-on:click="$emit('close')">
      <i class="fas fa-window-close"></i>
    </span>
    <div class="cart-content">
      <h3>Client Cart</h3>

      <cartItem
        v-for="product of cart"
        :key="product.sys.id"
        v-bind:product_cart_data="product"
      />

      <h3>
        Total cost:
        <span>{{ total }} 0$</span>
      </h3>
    </div>
  </div>
</template>
<script>
import cartItem from "../elements/cart-item";
import { mapGetters } from "vuex";
export default {
  name: "sideBar",
  mounted() {},
  computed: {
    total() {
      var total = 0;

      total = this.cart.reduce((acc, item) => acc + item.fields.price, 0);
      return Number(total).toFixed(2);
    },
    ...mapGetters({
      cart: "CART",
    }),
  },
  components: {
    cartItem,
  },

  data() {
    return {};
  },
};
</script>
