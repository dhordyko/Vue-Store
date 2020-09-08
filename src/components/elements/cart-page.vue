<template>
  <div class="products-center">
    <cartItem
      v-for="product of CART"
      :key="product.sys.id"
      v-bind:product_cart_data="product"
    />
  </div>
</template>
<script>
export default {
  name: "cart",
};
</script>
