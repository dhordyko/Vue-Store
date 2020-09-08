<template>
  <div id="app">
    <div class="navbar">
      <div class="navbar-center">
        <div class="icon-container">
          <i class="fas fa-bars"></i>
        </div>
        <div class="logo-container">
          <img src="./assets/images/logo.svg" />
        </div>
        <div class="cart-btn" v-on:click="toggleSideBar()">
          <span class="cart-icon-container">
            <i class="fas fa-cart-plus"></i>
          </span>
          <div class="cart-badge">0</div>
        </div>
      </div>
    </div>
    <sideBar :class="{showCart:active}" v-on:close="close" />
    <router-view />
  </div>
</template>

<script>
import sideBar from "./components/elements/side-bar";
export default {
  name: "App",
  data() {
    return {
      active: false,
    };
  },
  components: {
    sideBar,
  },
  methods: {
    toggleSideBar() {
      this.active = true;
    },
    close: function () {
      this.active = false;
    },
  },
};
</script>

<style>
@import "./assets/app.css";
@import "./assets/all.css";
@import "./assets/bootstrap-grid.css";
@import "./assets/bootstrap.min.css";
</style>
