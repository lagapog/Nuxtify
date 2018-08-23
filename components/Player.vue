<template>
  <b-row>
    <b-col>
      <h4>{{ track.name }}</h4>
    </b-col>
    <b-col>
      <audio controls :src='track.preview_url'>
    </b-col>
  </b-row>
  <!-- .content(v-if='track.name')
    p.is-128x128
      img(:src='track.album.images[2].url') -->
      
</template>
<script>
import { mapState } from 'vuex'

export default {
  name: 'nuPlayer',
  computed: {
    ...mapState(['track'])
  }
}
</script>

<style lang="sass" scoped>
  .content
    min-width: 300px;
    text-align: center
  
  p {
    margin-bottom: .5em !important;
  }
  img {
    border-radius: 50%;
  }
</style>