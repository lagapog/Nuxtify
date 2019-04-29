<template>
  <b-card :title="track.name"
          :img-src="track.album.images[1].url"
          img-alt="Artist image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2">
    <p class="card-text">
      {{track.artists[0].name}}
    </p>
    <b-row align-h="around">
      <b-button variant="outline-info" @click='setTrack({ track })'>
        <icon name="play"></icon>
      </b-button>
      <b-button variant="outline-info" :to="`/tracks/${track.id}`">
        <icon name="link"></icon>
      </b-button>
      <div 
        :class="{'like': true, 'is-liked': isLiked}"
        @click="likear"
      ></div>
    </b-row>
  </b-card>
</template>

<script>
  import { mapMutations } from 'vuex'
  export default {
    name: 'nuTrack',
    props: {
      track: { type: Object, required: true }
    },
    data () {
      return {
        isLiked: false
      }
    },
    methods: {
      ...mapMutations(['setTrack']),
      likear () {
        this.isLiked = !this.isLiked
      }
    }
  }
</script>

<style lang="sass" scoped>
  .btn-outline-info
    width: 3rem
    height: 3rem
    display: flex
    justify-content: center
    align-items: center

  .like
    border: 1px solid #17a2b8
    border-radius: 0.25rem
    cursor: pointer
    width: 3rem
    height: 3rem
    background-image: url('~assets/images/corazon.png')
    background-size: 2030px 70px
    background-position: -12px -12px

    &.is-liked
      animation-name: like
      animation-duration: .8s
      animation-timing-function: steps(28)
      animation-fill-mode: forwards
    
  @keyframes like
    0%
      background-position: -12px -12px
    100%
      background-position: -1972px -12px
</style>