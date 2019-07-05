<template>
  <div id="app">
    <app-page-header></app-page-header>
    <router-view/>
    <app-page-footer></app-page-footer>
  </div>
</template>
<script>
  import PageHeader from '@/components/PageHeader.vue'
  import PageFooter from '@/components/PageFooter.vue'

  export default {
    name: 'app',
    components: {
      AppPageHeader: PageHeader,
      AppPageFooter: PageFooter
    }
  }
</script>
