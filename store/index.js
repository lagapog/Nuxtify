import Vuex from 'vuex'
import trackService from '~/plugins/axios.js'

const createStore = () => {
  return new Vuex.Store({
    state: {
      tracks: [],
      track: {},
      selectedTrack: '',
      isLoading: false,
      showNotification: false
    },
    mutations: {
      setTrack (state, payload) {
        state.track = payload.track
        state.selectedTrack = payload.track.id
      },
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