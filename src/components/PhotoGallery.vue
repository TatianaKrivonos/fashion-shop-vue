<template>
<section class="photo-gallery">
  <div class="photo-gallery__container">
    <h2 class="photo-gallery__header"><span>#</span>fashionshop</h2>
    <p class="photo-gallery__descr">Tag your photos a chance to be featured i our instagram</p>
    <ul class="photo-gallery__list">
      <li class="photo-gallery__item" v-for="item of items">
        <img :src="item.src" alt="photo">
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
          {
            src: require('../assets/img/gallery/gallery1.jpg')
          },
          {
            src: require('../assets/img/gallery/gallery2.jpg')
          },
          {
            src: require('../assets/img/gallery/gallery3.jpg')
          },
          {
            src: require('../assets/img/gallery/gallery4.jpg')
          },
          {
            src: require('../assets/img/gallery/gallery5.jpg')
          },
          {
            src: require('../assets/img/gallery/gallery6.jpg')
          }
        ]
      }
    }
  }
</script>
