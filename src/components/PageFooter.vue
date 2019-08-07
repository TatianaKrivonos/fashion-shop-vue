<template>
<footer class="page-footer">
  <div class="page-footer__container">
    <div class="page-footer__col">
      <router-link to="/" class="page-footer__logo">
        <svg width="191" height="40">
          <use xlink:href=""></use>
        </svg>
      </router-link>
      <ul class="page-footer__payment payment">
        <li class="payment__item"></li>
      </ul>
      <p class="page-footer__copyright">© 2018 ARTBEES All rights reserved.</p>
    </div>
    <div class="page-footer__col">
      <h2 class="page-footer__col-title">Customer service</h2>
      <ul>
        <li v-for="service of services">
          <a href="#">{{ service.name }}</a>
        </li>
      </ul>
    </div>
    <div class="page-footer__col">
      <h2 class="page-footer__col-title">Socials</h2>
      <ul>
        <li v-for="social of socials">
          <a href="#">{{ social.name }}</a>
        </li>
      </ul>
    </div>
    <div class="page-footer__col page-footer__col--contact">
      <h2 class="page-footer__col-title">Contact us</h2>
      <ul>
        <li v-for="contact of contacts">
          <svg width="16" height="20">
            <use v-bind="{'xlink:href': contact.icon}"></use>
          </svg>
          <p class="page-footer__col-descr">{{ contact.name }}</p>
        </li>
      </ul>
    </div>
  </div>
</footer>
</template>
<script>
  export default {
    data () {
      return {
        services: [
          {name: 'about us'},
          {name: 'f.a.q'},
          {name: 'my account'},
          {name: 'contact us'}
        ],
        socials: [
          {name: 'instagram'},
          {name: 'twitter'},
          {name: 'facebook'},
          {name: 'pinterest'}
        ],
        contacts: [
          {name: 'patricia c. amedee 4401', icon: 'img/'},
          {name: '+99 (0) 101 0000 888', icon: 'img/'},
          {name: 'info@yourdomain.com', icon: 'img/'}
        ]
      }
    }
  }
</script>
