<template>
  <div class="home">
    <app-banner></app-banner>
    <app-photo-gallery></app-photo-gallery>
    <app-quality></app-quality>
    <app-news-letter></app-news-letter>
  </div>
</template>
<script>
  import Banner from '@/components/Banner.vue'
  import Quality from '@/components/Quality.vue'
  import Featured from '@/components/Featured.vue'
  import MainSlider from '@/components/MainSlider.vue'
  import NewsLetter from '@/components/NewsLetter.vue'
  import PhotoGallery from '@/components/PhotoGallery.vue'
  import Sale from '@/components/Sale.vue'

  export default {
    name: 'home',
    components: {
      AppBanner: Banner,
      AppQuality: Quality,
      AppFeatured: Featured,
      AppMainSlider: MainSlider,
      AppNewsLetter: NewsLetter,
      AppPhotoGallery: PhotoGallery,
      AppSale: Sale,
    }
  }
</script>
