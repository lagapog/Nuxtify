import Vuex from 'vuex'
import trackService from '~/plugins/axios.js'

const createStore = () => {
  return new Vuex.Store({
    state: {
      tracks: [],
      track: {},
      trackToPlay: {},
      selectedTrack: '',
      isLoading: false,
      showNotification: false
    },
    actions: {
      search({commit, state}, payload) {
        if (!payload.searchQuery) { return }
        commit('startLoading')
        trackService.search(payload.searchQuery)
          .then(res => {
            state.showNotification = res.tracks.total === 0
            state.tracks = res.tracks.items
            commit('finishLoading')
          })
      },
      goToTrack ({commit, state}, payload) {
        commit('startLoading')
        trackService.getById(payload.id)
          .then(res => {
            console.log(res)
            state.track = res
            commit('finishLoading')
          })
      }
    },
    mutations: {
      setTrack (state, payload) {
        state.trackToPlay = payload.track
        state.selectedTrack = payload.track.id
      },
      clearTrack (state) {
        state.track = {}
      },
      startLoading(state) {
        state.isLoading = true
      },
      finishLoading(state) {
        state.isLoading = false
      }
    }
  })
}

export default createStore