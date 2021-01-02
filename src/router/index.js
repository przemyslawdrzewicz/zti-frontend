import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Products from '../views/Products.vue'
import Cart from '../views/Cart.vue'
import Panel from '../views/Panel.vue'
import Sum from '../views/Sum.vue'






Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Products',
    component: Products
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/panel',
    name: 'Panel',
    component: Panel
  },
  {
    path: '/sum',
    name: 'Sum',
    component: Sum
  }
]

const router = new VueRouter({
  routes
})

export default router
