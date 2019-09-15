<template>
<section class="photo-gallery">
  <div class="photo-gallery__container">
    <h2 class="photo-gallery__header"><span>#</span>fashionshop</h2>
    <p class="photo-gallery__descr">Tag your photos a chance to be featured i our instagram</p>
    <ul class="photo-gallery__list">
      <li class="photo-gallery__item"
          v-for="item of allGalleryImg"
          :key="item.id"
          :item = "item">
        <img :src="require(`@/assets/img${item.img}`)" alt="photo">
      </li>
    </ul>
  </div>
</section>
</template>
<script>
  import { mapGetters, mapActions, mapState } from 'vuex'
  export default {
    props: {
      item: Object
    },
    methods: {
      ...mapActions(['fetchGalleryImg'])
    },
    computed: {
      ...mapGetters(['allGalleryImg']),
      ...mapState(['gallery'])
    },
    created() {
      this.fetchGalleryImg();
    }
  }
</script>
