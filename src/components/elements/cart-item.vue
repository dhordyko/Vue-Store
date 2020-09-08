<template>
  <div class="cart-item-container">
    <div class="cart-item">
      <img :src="require('../../assets/images/' + image)" alt />
      <div class="item-info">
        <h4>{{ title }}</h4>
        <h5>{{ price }}</h5>
      </div>
      <div class="item-qty">
        <i class="fas fa-chevron-up"></i>
        <p>1</p>
        <i class="fas fa-chevron-down"></i>
      </div>
    </div>

    <button class="banner-btn cart-item-btn">Delete</button>
    <hr />
  </div>
</template>

<script>
export default {
  name: "cartItem",
  mounted() {
    this.image = this.product_cart_data.fields.image.fields.file.url;

    this.id = this.product_cart_data.sys.id;
    this.price = this.product_cart_data.fields.price;
    this.title = this.product_cart_data.fields.title;
  },
  props: {
    product_cart_data: {
      type: Object,
    },
  },
  data() {
    return {
      image: "",
      id: "",
      price: "",
      title: "",
    };
  },
};
</script>
<style></style>
