<template>
<div class="deal">
  <div class="deal__container">
    <div class="deal__descr">
      <p class="deal__label">sale</p>
      <p class="deal__text">Deal o the Day 30% on Dresses</p>
      <p class="deal__text">pretty yhing floral skater dress</p>
      <p class="deal__text">$28.00</p>
      <app-timer/>
      <button class="deal__btn">add to cart</button>
    </div>
    <div class="deal__img-wrap">
      <img src="../assets/img/deal.jpg" alt="photo" class="deal__img">
    </div>
  </div>
</div>
</template>
<script>
  import Timer from '@/components/Timer.vue'
  export default {
    name: 'deal',
    components: {
      AppTimer: Timer
    }
  }
</script>
