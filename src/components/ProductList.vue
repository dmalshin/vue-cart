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
  data: () => ({
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
  })
}
</script>
