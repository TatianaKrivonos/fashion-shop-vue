<template>
<div class="sale__card-col">
  <article class="product-card">
    <div class="product-card__img">
       <img src="../assets/img/sale/sale1.jpg" alt="product-card">
    </div>
    <v-rating
      v-model="rating"
      color="yellow"
    >
    </v-rating>
    <p class="product-card__name">name</p>
    <p class="product-card__price">$price</p>
    <button class="product-card__btn">add to cart</button>
  </article>
</div>
</template>
<script>
  export default {
    data () {
      return {
        rating: 5
        // cards: [
        //   {
        //    img: '../img/sale/sale1.jpg',
        //    name: 'Embroidered Linen Shirt',
        //    price: 30.50
        //   },
        //   {
        //    img: '../img/sale/sale2.jpg',
        //    name: 'Embroidered Linen Shirt',
        //    price: 30.50
        //   },
        //   {
        //    img: '../img/sale/sale3.jpg',
        //    name: 'Embroidered Linen Shirt',
        //    price: 30.50
        //   },
        //   {
        //    img: '../img/sale/sale4.jpg',
        //    name: 'Embroidered Linen Shirt'
        //    price: 30.50
        //   }
        // ]
      }
    }
  }
</script>
