<template>
<div class="product-card-wrap">
  <article class="product-card" >
  <div class="product-card__img">
   <img :src="addImg" alt="product-card">
  </div>
  <star-rating v-model="rating"
               :star-size="15"
               :show-rating="false"
  ></star-rating>
  <p class="product-card__name">{{ card.name }}</p>
  <p class="product-card__price">$ {{ card.price }}</p>
  <button class="product-card__btn">add to cart</button>
</article>
</div>
</template>
<script>
  import StarRating from 'vue-star-rating'
  export default {
    name: 'cards',
    components: {
      StarRating
    },
    data () {
      return {
        rating: 5,
        cards: []
      }
    },
    props: {
      card: Object
    },
    computed: {
      addImg () {
        return require('@/assets/img' + this.card.img)
      }
    }
  }
</script>
<style scoped>
  .vue-star-rating {
    justify-content: center;
  }
</style>
