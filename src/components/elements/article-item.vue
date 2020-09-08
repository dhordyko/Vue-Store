<template>
  <article class="product">
    <div class="img-container">
      <img :src="require('../../assets/images/' + image)" class="product-img" />
      <button class="bag-btn" data-id:="id" v-on:click="$emit('addtocart', product_data)">
        <i class="fas fa-shopping-cart"></i>
        add to bag
      </button>
      <h3>{{ title }}</h3>
      <h4>{{ price }}</h4>
    </div>
  </article>
</template>
<script>
export default {
  name: "articleItem",
  mounted() {
    this.image = this.product_data.fields.image.fields.file.url;
    this.id = this.product_data.sys.id;
    this.price = this.product_data.fields.price;
    this.title = this.product_data.fields.title;
  },
  data() {
    return {
      image: "",
      id: "",
      price: "",
      title: "",
    };
  },

  props: {
    product_data: {
      type: Object,
    },
  },
};
</script>
