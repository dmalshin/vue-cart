<template>
  <div id="app">
    <Cart/>
    <ProductList/>

    <br><br><br><br><br><br><br><br><br>
    <img src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>

import HelloWorld from './components/HelloWorld.vue'
import Cart from './components/Cart.vue'
import ProductList from './components/ProductList.vue'
export default {
  name: 'app',
  components: {
    HelloWorld,
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
