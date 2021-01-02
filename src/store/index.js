import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cart: [],
    logged: false,
    user: null
  },
  mutations: {
    clearCart(state) {
      state.cart = []
    },
    setCart(state, item) {
      if(state.cart?.length < 1) {
        state.cart.push({
          item,
          quantity: 1
        })      
        return 
      }

        const index = state.cart.findIndex(v => v.item.id === item.id)

        console.log(index, "index")
        if(index !== -1) {
          state.cart[index] = {
            item,
            quantity: state.cart[index]?.quantity + 1 || 1
          }
        } else {
          state.cart.push({
            item,
            quantity: 1
          })
        }
      
      // const [filtered] = state.cart.filter(v => v.id = cart.id)
      // if(filtered) {
        
      // } else {

      // }
      console.log(state.cart, "cart?")
    },
    setLogin(state, login) {
      state.logged = login;
    },
    setUser(state, user) {
      state.user = user;
    },
  },
  actions: {
    clearCart({ commit }) {
      commit('clearCart');
    },
    setCart({ commit }, cart) {
      commit('setCart', cart);
    },
    setUser({ commit }, user) {
      commit('setUser', user);
    },
    setLogin({ commit }, login) {
      commit('setLogin', login);
    },
  },
  getters: {
    getCart: state => {
      return state.cart
    },
    getLogin: state => {
      return state.logged
    },
    getUser: state => {
      return state.user
    }
  },
  modules: {
  }
})
