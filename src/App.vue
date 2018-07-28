<template>
  <div id="app">
    <Cart/>
    <ProductList/>
  </div>
</template>

<script>
import store from './store'
import Cart from './components/Cart.vue'
import ProductList from './components/ProductList.vue'

export default {
  name: 'app',
  store,
  components: {
    Cart,
    ProductList
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
