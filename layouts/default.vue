<template>
  <div id="app">
    <nu-header/>
    <nuxt/>
    <nu-footer/>
  </div>
</template>
<script>
  import nuHeader from '~/components/layout/Header.vue'
  import nuFooter from '~/components/layout/Footer.vue'

  export default {
    components: { nuHeader, nuFooter }
  }
</script>

<style lang="sass" scoped>
  #app
    min-height: 100vh
    display: flex
    flex-direction: column
    align-items: flex-start
</style>
