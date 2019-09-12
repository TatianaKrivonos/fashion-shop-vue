<template>
<header class="page-header">
  <div class="page-header__top">
    <div class="page-header__container">
      <ul class="page-header__top-list top-list">
        <li class="top-list__item">
          <svgicon :name="`telephone`" width="16" height="20"/>
          <a href="tel:+9901010000888">+99 (0) 101 0000 888</a>
        </li>
        <li class="top-list__item">
          <svgicon :name="`envelope`" width="16" height="20"/>
          <a href="mailto:info@yourmain.com">info@yourmain.com</a>
        </li>
      </ul>
    </div>
  </div>
  <div class="page-header__bottom">
    <div class="page-header__container">
      <router-link to="/" class="page-header__logo">
        <svgicon width="191" height="40" :name="`logo`"/>
      </router-link>
      <nav class="page-header__main-nav main-nav">
        <ul class="main-nav__list">
          <li v-for="link in links" class="main-nav__item" :key="link.name">
            <router-link :to="link.path" class="main-nav__link">{{ link.name }}</router-link>
          </li>
        </ul>
        <div class="page-header__icons">
          <a href="#">
            <svgicon width="16" height="20" :name="`user`"/>
          </a>
          <button>
            <svgicon width="16" height="20" :name="`search`"/>
          </button>
          <a href="#">
            <svgicon width="16" height="20" :name="`bag`"/>
          </a>
        </div>
      </nav>
    </div>
  </div>
</header>
</template>
<script>
  export default {
    data (){
      return {
        links: [
          {path: '/', name: 'home'},
          {path: '/shop', name: 'shop'},
          {path: '/blog', name: 'blog'},
          {path: '/about', name: 'about us'},
          {path: '/contacts', name: 'contact us'},
        ]
      }
    }
  }
</script>
