<template>
  <section class="product-list">
    <h2>Product List</h2>
    <div class="products-list">
      <Product
        class="product"
        v-bind:key="product.id"
        v-for="product in this.products"
        :product="product"
      >
      </Product>
    </div>
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

<style scoped>
.products-list {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.product {
  margin: 0 20px;
}
</style>

