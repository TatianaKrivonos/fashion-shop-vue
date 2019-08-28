import Vue from 'vue'
import Vuelidate from 'vuelidate'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import App from './App.vue'
import router from './router'
import './assets/scss/style.scss'
import SvgIcon from '@/components/SvgIcon.vue'

Vue.use(Vuelidate)
Vue.component('svgicon', SvgIcon)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
