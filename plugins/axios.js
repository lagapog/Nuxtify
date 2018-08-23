import axios from 'axios'

const spoServices = axios.create({
  baseURL: 'https://platzi-music-api.now.sh'
})

const trackService = {
  search: function (q) {
    const type = 'track'
    return spoServices.get('/search', {
      params: {q, type}
    })
      .then(res => res.data)
  },
  getById: function (id) {
    return spoServices.get(`/tracks/${id}`)
      .then(res => res.data)
  }
}

export default trackService
