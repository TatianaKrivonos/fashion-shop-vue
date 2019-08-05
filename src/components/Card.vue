<template>
  <article class="product-card">
    <div class="product-card__img">
       <img :src="card.img" alt="product-card">
    </div>
    <v-rating
      v-model="rating"
      color="yellow"
    >
    </v-rating>
    <p class="product-card__name">{{ card.name }}</p>
    <p class="product-card__price">$ {{ card.price }}</p>
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
