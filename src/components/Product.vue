<template>
  <section class="product">
    <h3>{{ this.product.name }}</h3>
  </section>
</template>

<script>
export default {
  name: 'Product',
  props: {
    product: Object
  }
}
</script>
