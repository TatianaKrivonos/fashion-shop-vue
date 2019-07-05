<template>

</template>
<script>
  import PageHeader from '@/components/PageHeader.vue'
  import Banner from '@/components/Banner.vue'
  import EcommerceSigns from '@/components/EcommerceSigns.vue'
  import Featured from '@/components/Featured.vue'
  import MainSlider from '@/components/MainSlider.vue'
  import NewsLetter from '@/components/NewsLetter.vue'
  import PhotoGallery from '@/components/PhotoGallery.vue'
  import Sale from '@/components/Sale.vue'
  import PageFooter from '@/components/PageFooter.vue'

  export default {
    name: 'home',
    components: {
      AppPageHeader: PageHeader,
      AppBanner: Banner,
      AppEcommerceSigns: EcommerceSigns,
      AppFeatured: Featured,
      AppMainSlider: MainSlider,
      AppNewsLetter: NewsLetter,
      AppPhotoGallery: PhotoGallery,
      AppSale: Sale,
      AppPageFooter: PageFooter
    }
  }
</script>
