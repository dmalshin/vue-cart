<template>
  <section class="product-list">
    <h2>Product List</h2>
    <Product
      v-bind:key="product.name"
      v-for="product in this.products"
      :product="product"
    >
    </Product>
  </section>
</template>

<script>
import Product from './Product.vue'
export default {
  name: 'ProductList',
  components: {
    Product
  },
  computed: {
    products() {
      return this.$store.state.products
    }
  }
}
</script>
