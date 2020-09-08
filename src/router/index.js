import Vue from 'vue'
import Router from 'vue-router'
import cart from "../components/elements/cart-page"
import home_page from '../components/pages/Home'
Vue.use(Router)

export default new Router({
 routes: [{
   path: '/',
   name: 'main',
   component: home_page

  },


  {
   path: '/cart',
   name: 'cart',
   component: cart

  }
 ]
})