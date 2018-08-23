import Vuex from 'vuex'
import trackService from '~/plugins/axios.js'

const createStore = () => {
  return new Vuex.Store({
    state: {
      tracks: [],
      isLoading: false,
      showNotification: false
    },
    mutations: {
      search (state, payload) {
        if (!payload.searchQuery) { return }
        state.isLoading = true
        trackService.search(payload.searchQuery)
          .then(res => {
            state.showNotification = res.tracks.total === 0
            state.tracks = res.tracks.items
            state.isLoading = false
          })
      }
    }
  })
}

export default createStore