<template>
<section class="quality">
  <div class="quality__container">
    <ul class="quality__list">
      <li class="quality__item" v-for="item of items">
        <svg :width="item.width" height="48">
          <use v-bind="{'xlink:href': item.icon}"></use>
        </svg>
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
          {descr: 'money back guarantee', icon: '', width: 71},
          {descr: 'product quality', icon: '', width: 53},
          {descr: 'fast shipping', icon: '', width: 48},
          {descr: 'online support', icon: '', width: 43}
        ]
      }
    }
  }
</script>

