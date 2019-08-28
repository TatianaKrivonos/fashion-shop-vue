<template>
<section class="quality">
  <div class="quality__container">
    <ul class="quality__list">
      <li class="quality__item" v-for="item of items">
        <svgicon :name="item.icon" :width="item.width" height="48"/>
        <p>{{ item.descr }}</p>
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
          {descr: 'money back guarantee', icon: 'money', width: 71},
          {descr: 'product quality', icon: 'quality', width: 53},
          {descr: 'fast shipping', icon: 'shipping', width: 48},
          {descr: 'online support', icon: 'support', width: 43}
        ]
      }
    }
  }
</script>

