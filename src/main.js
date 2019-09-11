import Vue from 'vue'
import Vuelidate from 'vuelidate'
import Vuex from 'vuex';
import store from './store/store'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import App from './App.vue'
import router from './router'
import '@/assets/scss/style.scss'
import SvgIcon from '@/components/SvgIcon.vue'

Vue.use(Vuex);
Vue.use(Vuelidate)
Vue.component('svgicon', SvgIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
