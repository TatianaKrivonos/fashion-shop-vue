<template>
<section class="photoGallery">
  <div class="photoGallery__container">
    <h2 class="photoGallery__header"><span>#</span>fashionshop</h2>
    <p class="photoGallery__descr">tag your photos a chance to be featured i our instagram</p>
    <ul class="photoGallery__list">
      <li class="photoGallery__item" v-for="item of items">
        <img :src="item" alt="photo">
      </li>
    </ul>
  </div>
</section>
</template>
<script>
  export default {
    data () {
      return {
        items: [
          '',
          '',
          '',
          '',
          '',
          ''
        ]
      }
    }
  }
</script>
