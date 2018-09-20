<template>
  <div v-if='track.name' class="vu-player">
    <div>
      <img :src='track.album.images[2].url' />
    </div>
    <div>
      <h6>{{ track.name }}</h6>
      <small>{{ track.duration_ms | ms-to-min }}</small>
    </div>
    <div v-if='track.preview_url'>
      <audio controls :src='track.preview_url'></audio>
    </div>
    <div v-else>
      <span>No existe audio disponible</span>
    </div>
  </div>
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
  .vu-player
    position: fixed;
    z-index: 10;
    background: #20bfc5;
    color: #fff;
    display: flex;
    max-width: 98%;
    width: 600px;
    height: 90px;
    border-radius: 90px;
    left: calc(50vw - 200px);
    bottom: 20px;
    align-items: center;
    justify-content: space-around;
    box-shadow: 0px 0px 10px -2px #000;
  img 
    border-radius: 50%;

</style>