<template>
  <b-row class="footer w-100 mt-auto" align-v="center" no-gutters>
    <b-col cols="12" class="text-center">
      <span class="footer-text" >
        NUXTIFY by 
        <b-link
          href="https://luisagapito.com"
          target="_blank">
          Luis Agapito 
        </b-link>.
      </span>
      <span class="footer-text">
        This app was created just for educational reasons. {{ thisYear }}.
      </span>
    </b-col>
  </b-row>
</template>

<script>
  export default {
    name: 'nuFooter',
    computed: {
      thisYear() {
        return new Date().getFullYear()
      }
    }
  }
</script>

<style lang="sass" scoped>
  @import '~assets/sass/variables'

  .footer
    height: 8vh
    &-text
      font-size: .7rem
      +media-breakpoint-up($md-break)
        font-size: .9rem
</style>
