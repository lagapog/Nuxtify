import axios from 'axios'

const spoServices = axios.create({
  baseURL: 'http://nuxtifyapi.local/api'
})

const trackService = {
  search: function (q) {
    const type = 'track'
    return spoServices.get(`/search/${type}/${q}`)
      .then(res => res.data)
  },
  getById: function (id) {
    return spoServices.get(`/track/${id}`)
      .then(res => res.data)
  }
}

export default trackService
