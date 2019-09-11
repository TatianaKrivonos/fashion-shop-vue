<template>
<section class="featured">
  <div class="featured__container">
    <h2 class="featured__title">featured poducts</h2>
    <div class="featured__card-wrap">
      <app-card
        v-for="card in featuredCards"
        :key="card.id"
        :card="card"/>
    </div>
  </div>
</section>
</template>
<script>
  import Card from '@/components/Card.vue'
  import { mapGetters, mapActions, mapState } from 'vuex'
  export default {
    components:{
      AppCard: Card
    },
     methods: {
      ...mapActions(['fetchCards'])
    },
    computed: {
      ...mapGetters(['featuredCards']),
      ...mapState(['cards'])
    },
    created() {
      this.fetchCards();
    }
  }
</script>
