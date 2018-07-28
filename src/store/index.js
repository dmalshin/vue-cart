import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cart: {},
    products: [
      {
        id: 'product-id-1',
        name: 'Product 1',
        price: 36
      },
      {
        id: 'product-id-2',
        name: 'Product 2',
        price: 9
      },
      {
        id: 'product-id-3',
        name: 'Product 3',
        price: 15
      },
    ]
  },

  getters: {
    productsInCartCount: state => {
      return Object
        .keys(state.cart)
        .reduce((sum, objectId) => sum + state.cart[objectId], 0)
    },
    totalCartPrice: state => {
      return Object.keys(state.cart).reduce((sum, id) => {
        const product = state.products.find(product => product.id === id)
        const productTotalSum = state.cart[id] * product.price
        return sum + productTotalSum
      }, 0)
    },
    productsInCart: state => {
      return Object.keys(state.cart).map(id => ({
        quantity: state.cart[id],
        ...state.products.find(product => product.id === id)
      }))
    }
  },

  mutations: {
    addProduct: (state, id) => {
      state.cart = {
        ...state.cart,
        [id]: state.cart[id] ? state.cart[id] + 1 : 1
      }
    },
    removeProduct: (state, id) => {
      // Enabling vuex to detect changes
      const tempObj = state.cart;
      delete tempObj[id];
      state.cart = {
        ...tempObj
      }
    },
    incrementProductQuantity: (state, id) => {
      state.cart[id] = state.cart[id] + 1
    },
    decrementProductQuantity: (state, id) => {
      state.cart[id] = state.cart[id] - 1
    }
  }
})
