<template>
  <section class="product">
    <h3>{{ this.product.name }}</h3>
    <div>
      <span>{{ this.product.price }}</span>
      <button type="button">Add To Cart</button>
    </div>
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
