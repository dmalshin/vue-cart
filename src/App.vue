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
  color: #1a1a1a;
  margin-top: 50px;
}

button {
  background: #1a1a1a;
  border: 0;
  border-radius: 2px;
  color: #fff;
  font-weight: 700;
  line-height: 1;
  padding: 0.8em;
  text-transform: uppercase;
  cursor: pointer;
}

button.minor-action {
  font-size: 14px;
  padding: 4px 7px 2px;
  margin-right: 4px;
}

button:hover {
  background: #007acc;
}

table {
  border-collapse: separate;
  border-spacing: 0;
  border-width: 1px 0 0 1px;
  margin: 0 0 1.75em;
  table-layout: fixed;
  border-collapse: collapse;
}

th, td {
  padding: 0.4375em;
  border: 1px solid #d1d1d1;
}
</style>
