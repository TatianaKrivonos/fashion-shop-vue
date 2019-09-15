import axios from 'axios'

export default {
  state: {
    gallery: []
  },
  mutations: {
    setGallery (state, gallery) {
      state.gallery = gallery
    }
  },
  actions: {
    async fetchGalleryImg ({ commit }) {
      const response = await axios.get('http://localhost:3000/gallery')

      commit('setGallery', response.data)
    }
  },
  getters: {
    allGalleryImg (state) {
      return state.gallery
    }
  }
}
