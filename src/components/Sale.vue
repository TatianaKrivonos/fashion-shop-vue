<template>
<section class="sale">
  <div class="sale__container">
    <h2 class="sale__title">sale poducts</h2>
    <div class="sale__card-wrap">
       <appCard></appCard>
    </div>
  </div>
</section>
</template>
<script>
  import Card from '@/components/Card.vue'
  export default {
    components:{
      AppCard: Card
    }
  }
</script>
