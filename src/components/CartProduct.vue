<template>
  <tr>
    <td>{{ this.product.name }}</td>
    <td>{{ this.product.price }}</td>
    <td>
      <button type="button">+</button>
      <button type="button">-</button>
      <button type="button">⨯</button>
    </td>
    <td>tbd</td>
  </tr>
</template>

<script>
export default {
  name: 'CartProduct',
  props: {
    product: Object
  },
  methods: {
    // add() {
    //   this.$store.commit('addProduct', this.product.id)
    // }
  }
}
</script>
