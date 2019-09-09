import axios from 'axios'

export default {
  state: {
    cards: []
  },
  mutations: {
    setCards (state, cards) {
      state.cards = cards
    }
  },
  actions: {
    async fetchCards ({ commit }) {
      const response = await axios.get('http://localhost:3000/cards')

      commit('setCards', response.data)
    }
  },
  getters: {
    allCards (state) {
      return state.cards
    }
  }
}

