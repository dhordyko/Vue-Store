import Vue from "vue";
import App from "./App.vue";
import store from "./vuex/store";
import router from './router'
Vue.config.productionTip = false;

new Vue({
  el: "#app",
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");