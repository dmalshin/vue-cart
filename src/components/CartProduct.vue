<template>
  <tr>
    <td>{{ this.product.name }}</td>
    <td>${{ this.product.price }}</td>
    <td>{{ this.product.quantity }}
      <button
        type="button"
        class="minor-action"
        @click="incrementProductQuantity"
      >
        +
      </button>

      <button
        type="button"
        class="minor-action"
        @click="decrementProductQuantity"
        v-if="this.product.quantity > 1"
      >
        -
      </button>

      <button
        type="button"
        class="minor-action"
        @click="removeProduct"
      >
        ⨯
      </button>
    </td>
    <td>
      ${{ this.product.price * this.product.quantity }}
    </td>
  </tr>
</template>

<script>
export default {
  name: 'CartProduct',
  props: {
    product: Object
  },
  methods: {
    removeProduct() {
      this.$store.commit('removeProduct', this.product.id)
    },
    incrementProductQuantity() {
      this.$store.commit('incrementProductQuantity', this.product.id)
    },
    decrementProductQuantity() {
      this.$store.commit('decrementProductQuantity', this.product.id)
    }
  }
}
</script>
