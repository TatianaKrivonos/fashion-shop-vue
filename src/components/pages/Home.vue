<template>
  <div class="">

  </div>
</template>
<script>
  import Banner from '@/components/Banner.vue'
  import EcommerceSigns from '@/components/EcommerceSigns.vue'
  import Featured from '@/components/Featured.vue'
  import MainSlider from '@/components/MainSlider.vue'
  import NewsLetter from '@/components/NewsLetter.vue'
  import PhotoGallery from '@/components/PhotoGallery.vue'
  import Sale from '@/components/Sale.vue'

  export default {
    name: 'home',
    components: {
      AppBanner: Banner,
      AppEcommerceSigns: EcommerceSigns,
      AppFeatured: Featured,
      AppMainSlider: MainSlider,
      AppNewsLetter: NewsLetter,
      AppPhotoGallery: PhotoGallery,
      AppSale: Sale,
    }
  }
</script>
