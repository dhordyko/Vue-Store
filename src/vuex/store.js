import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    products: [],
    cart: [],
  },

  mutations: {
    SET_PRODUCTS_TO_STATE: (state, products) => {
      console.log(products);
      state.products = products;
    },
    ADD_TO_CART: (state, product) => {
      state.cart.push(product);
      console.log(state.cart);
    },
  },
  actions: {
    GET_PRODUCTS_FROM_API({ commit }) {
      return axios("http://localhost:3000/items", {
        method: "GET",
      }).then((products) => {
        commit("SET_PRODUCTS_TO_STATE", products.data);

        return products;
      });
    },
    ADD_TO_CART({ commit }, product) {
      console.log("product");
      commit("ADD_TO_CART", product);
    },
  },
  getters: {
    PRODUCTS(state) {
      return state.products;
    },
    CART(state) {
      return state.cart;
    },
  },
});
export default store;
