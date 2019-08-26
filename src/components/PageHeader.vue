<template>
<header class="page-header">
  <div class="page-header__container">
    <router-link to="/" class="page-header__logo">
      <LogoSvg width="191" height="40"/>
    </router-link>
    <nav class="page-header__main-nav main-nav">
      <ul class="main-nav__list">
        <li v-for="link in links" class="main-nav__item">
          <router-link :to="link.path" class="main-nav__link" :key="link.name">{{ link.name }}</router-link>
        </li>
      </ul>
      <div class="page-header__icons">
        <a href="#">
          <UserSvg width="16" height="20"/>
        </a>
        <button>
          <SearchSvg width="16" height="20"/>
        </button>
        <a href="#">
          <BagSvg width="16" height="20"/>
        </a>
      </div>
    </nav>
  </div>
</header>
</template>
<script>
import LogoSvg from '@/assets/svg/logo.svg';
import UserSvg from '@/assets/svg/user.svg';
import SearchSvg from '@/assets/svg/search.svg';
import BagSvg from '@/assets/svg/bag.svg';

  export default {
    components: {
      LogoSvg,
      UserSvg,
      SearchSvg,
      BagSvg
    },
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
