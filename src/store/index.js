import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cart: [],
    products: [
      {
        name: 'Product 1',
        price: 36.99
      },
      {
        name: 'Product 2',
        price: 9.99
      },
      {
        name: 'Product 3',
        price: 15.49
      },
    ]
  },
  getters: {
    total: state => {
      return state.cart.length
    }
  },
  mutations: {
    addProduct: state => {
      state.cart.push(1)
    }
  }
})

