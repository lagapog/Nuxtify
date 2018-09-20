<template>
  <b-container fluid class="py-4">
    <b-row align-h="center">
      <b-col cols="12" md="10" xl="8">
        <b-input-group size="lg">
          <b-form-input
            placeholder="Find your fav songs"
            v-model="searchQuery"
            @keyup.enter.native="search({ searchQuery })"
          ></b-form-input>
          <b-input-group-append>
            <b-btn 
              @click="search({ searchQuery })"
              @keyup.enter="search({ searchQuery })"
              variant="outline-info"
            >
              Search
            </b-btn>
          </b-input-group-append>
        </b-input-group>
      </b-col>
    </b-row>
    <nu-player></nu-player>
    <b-row class="mt-5">
      <nu-loader v-if="isLoading"></nu-loader>
      <b-col v-else cols="12" md="4" xl="3" v-for="t in tracks" :key="t.id">
        <nuTrack 
          :class="['mx-auto', { 'is-selected': selectedTrack === t.id }]"
          :track="t"
        />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import nuLoader from '~/components/shared/Loader.vue'
import nuTrack from '~/components/Track.vue'
import nuPlayer from '~/components/Player.vue'
import { mapState, mapMutations } from 'vuex'

export default {
  components: {
    nuLoader, nuTrack, nuPlayer
  },
  computed: {
    ...mapState([ 'tracks', 'isLoading', 'selectedTrack' ])
  },
  data () {
    return {
      searchQuery: ''
    }
  },
  methods: {
    ...mapMutations(['search'])
  }
}
</script>

<style lang="sass" scoped>
  .container-fluid
    margin-top: 57px
  .is-selected 
    border: 2px solid #20bfc5;
</style>
