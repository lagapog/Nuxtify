<template>
  <b-container fluid class="py-4">
    <b-row>
      <nu-loader v-if="isLoading"></nu-loader>
      <div v-else>
        <b-col v-if="track.name" cols="12" md="10" xl="8">
          <b-button variant="outline-info" to="/">
            <icon name="long-arrow-left"></icon>
          </b-button>
          <h2>{{ track.name }}</h2>
          <div v-if="track.album">
            <img :src="track.album.images[1].url" :alt="track.album.name">
            <p>Album: {{ track.album.name }}</p>
          </div>
          <div v-if="track.artists">
            <p>Artists</p>
            <ul >
              <li v-for="artist in track.artists" :key="artist.id">
                {{ artist.name }}
              </li>
            </ul>  
          </div>
        </b-col>
      </div>
    </b-row>
  </b-container>
</template>

<script>
import nuLoader from '~/components/shared/Loader.vue'
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  components: {
    nuLoader
  },
  computed: {
    ...mapState(['track','isLoading'])
  },
  methods: {
    ...mapActions(['goToTrack']),
    ...mapMutations(['startLoading', 'clearTrack'])
  },
  beforeCreate() {
    this.startLoading
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.goToTrack({ id: to.params.id })
    })
  },
  beforeRouteLeave (to, from, next) {
    this.clearTrack()
    next()
  }
}
</script>

<style lang="sass" scoped>
  @import '~assets/sass/variables'
  h2
    color: $primary-color
  .container-fluid
    margin-top: 57px
</style>
