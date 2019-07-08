<template>
  <article class="product-card">
    <img src="" alt="product-card" class="product-card__img">
    <v-rating
      v-model="rating"
      color="yellow"
    >
    </v-rating>
    <p class="product-card__name">name</p>
    <p class="product-card__price">price</p>
    <button class="product-card__btn">add to cart</button>
  </article>
</template>
<script>
  export default {
    data () {
      return {
        rating: 5
      }
    }
  }
</script>
