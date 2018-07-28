<template>
  <section class="cart">
    <h2>Cart</h2>
    <table>
      <thead>
        <tr>
          <td>Product</td>
          <td>Price</td>
          <td>Quantity</td>
          <td>Total</td>
        </tr>
      </thead>
      <tbody>
        <CartProduct
          v-bind:key="product.id"
          v-for="product in this.products"
          :product="product"
        ></CartProduct>
      </tbody>
    </table>
    <div>Products in cart: {{ productsInCartCount }}</div>
    <div>Order Total: ${{ totalCartPrice }}</div>
  </section>
</template>

<script>
import CartProduct from './CartProduct.vue';
export default {
  name: 'Cart',
  components: {
    CartProduct
  },
  computed: {
    products() {
      return this.$store.state.products
    },
    productsInCartCount() {
      return this.$store.getters.productsInCartCount
    },
    totalCartPrice() {
      return this.$store.getters.totalCartPrice
    }
  }
}
</script>
