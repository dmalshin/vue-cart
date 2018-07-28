<template>
  <section class="cart">
    <h2>Cart</h2>

    <div v-if="!this.products.length">
      The cart is empty
    </div>

    <button
      type="button"
      v-if="this.products.length"
      @click="empty"
    >
      Empty Cart
    </button>

    <table v-if="this.products.length">
      <thead>
        <tr>
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
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

    <CartTotal v-if="this.products.length"></CartTotal>
  </section>
</template>

<script>
import CartProduct from './CartProduct.vue';
import CartTotal from './CartTotal.vue';
export default {
  name: 'Cart',
  components: {
    CartProduct,
    CartTotal
  },
  computed: {
    products() {
      return this.$store.getters.productsInCart
    }
  },
  methods: {
    empty() {
      this.$store.commit('emptyCart')
    }
  }
}
</script>
