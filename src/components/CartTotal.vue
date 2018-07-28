<template>
  <table>
    <tbody>
      <tr>
        <th>Products in cart</th>
        <td>{{ productsInCartCount }}</td>
      </tr>
      <tr>
        <th>Order Total</th>
        <td class="total-sum">${{ totalCartPrice }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'CartTotal',
  computed: {
    productsInCartCount() {
      return this.$store.getters.productsInCartCount
    },
    totalCartPrice() {
      return this.$store.getters.totalCartPrice
    }
  }
}
</script>

<style scoped>
.total-sum {
  font-weight: 700;
}
</style>
