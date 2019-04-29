<template>
  <b-container fluid class="py-4">
    <b-row>
      <b-col cols="12" md="10" xl="8">
        <h2>What is Nuxtify?</h2>
        <p>Nuxtify is a personal project to show singers and songs using Spotify API and Nuxt.js.</p>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12" md="10" xl="8">
        <h2>Is Nuxtify used for commercial purposes?</h2>
        <p>No, it was only created for educational reasons. You can take a gander at the code <a href="https://github.com/lagapog/Nuxtify">here</a>.</p>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12" md="10" xl="8">
        <h2>Can I use the information showed in this page?</h2>
        <p>If you have to show this information, you probably wanna go to Spotify API and consume it.</p>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12" md="10" xl="8">
        <h2>I am wasting my time in this FAQ section?</h2>
        <p>Maybe. I recommend you to <nuxt-link to="/">come back</nuxt-link> and play your fav song!</p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  
}
</script>

<style lang="sass" scoped>
  @import '~assets/sass/variables'
  h2
    color: $primary-color
  .container-fluid
    margin-top: 57px
</style>
