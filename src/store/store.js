import Vue from 'vue'
import Vuex from 'vuex'
import cards from './modules/cards'
import gallery from './modules/gallery'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    cards,
    gallery
  }
})
