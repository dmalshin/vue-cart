<template>
  <section class="product">
    <h3>{{ this.product.name }}</h3>
    <div class="price">${{ this.product.price }}</div>
    <button type="button" @click="add">Buy</button>
  </section>
</template>

<script>
export default {
  name: 'Product',
  props: {
    product: Object
  },
  methods: {
    add() {
      this.$store.commit('addProduct', this.product.id)
    }
  }
}
</script>

<style scoped>
h3 {
  margin-bottom: 10px;
}
.price {
  font-weight: 700;
  margin-bottom: 15px;
}
</style>
