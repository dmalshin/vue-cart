<template>
  <section class="cart">
    <h2>Cart</h2>
    {{ total }}
  </section>
</template>

<script>
export default {
  name: 'Cart',
  computed: {
    total() {
      return this.$store.getters.total
    }
  }
}
</script>
