import Vue from 'vue'
import Vuelidate from 'vuelidate'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import App from './App.vue'
import router from './router'
import './assets/scss/style.scss'

Vue.use(Vuelidate)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
