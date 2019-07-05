import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/components/pages/Home'
import Blog from '@/components/pages/Blog'
import AboutUs from '@/components/pages/AboutUs'
import Contacts from '@/components/pages/Contacts'
import Shop from '@/components/pages/Shop'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '',
      name: 'home',
      component: Home
    },
    {
      path: '/blog',
      name: 'blog',
      component: Blog
    },
    {
      path: '/about',
      name: 'aboutUs',
      component: AboutUs
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: Contacts
    },
    {
      path: '/shop',
      name: 'shop',
      component: Shop
    }
  ],
  mode: 'history'
})
