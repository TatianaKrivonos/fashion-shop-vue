<template>
<footer class="page-footer">
  <div class="page-footer__container">
    <div class="page-footer__col">
      <router-link to="/" class="page-footer__logo">
        <svgicon width="191" height="40" :name="`logo`"/>
      </router-link>
      <ul class="page-footer__payment payment">
        <li class="payment__item" v-for="payment of payments">
          <svgicon :name="payment.icon" :width="payment.width" :height="payment.height"/>
        </li>
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
          <svgicon :name="contact.icon" width="16" height="20"/>
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
        payments: [
          {
           icon: 'mastercard',
           width: 41,
           height: 32
          },
          {
           icon: 'paypal',
           width: 86,
           height: 23
          },
          {
           icon: 'visa',
           width: 56,
           height: 18
          }
        ],
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
          {name: 'patricia c. amedee 4401', icon: 'location'},
          {name: '+99 (0) 101 0000 888', icon: 'phone'},
          {name: 'info@yourdomain.com', icon: 'email'}
        ]
      }
    }
  }
</script>
