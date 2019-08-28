<template>
<header class="page-header">
  <div class="page-header__container">
    <router-link to="/" class="page-header__logo">
      <svgicon width="191" height="40" :name="`logo`"/>
    </router-link>
    <nav class="page-header__main-nav main-nav">
      <ul class="main-nav__list">
        <li v-for="link in links" class="main-nav__item">
          <router-link :to="link.path" class="main-nav__link" :key="link.name">{{ link.name }}</router-link>
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
