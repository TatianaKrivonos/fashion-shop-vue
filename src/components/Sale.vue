<template>
<section class="sale">
  <div class="sale__container">
    <h2 class="sale__title">sale poducts</h2>
    <div class="sale__card-wrap">
      <app-card
        v-for="card in saleCards"
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
      ...mapGetters(['saleCards']),
      ...mapState(['cards'])
    },
    created() {
      this.fetchCards();
    }
  }
</script>
