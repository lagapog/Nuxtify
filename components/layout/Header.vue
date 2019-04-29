<template>
  <b-navbar toggleable="md" fixed="top" class="nuHeader">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <b-navbar-brand to="/" class="nuHeader-title">NUXTIFY</b-navbar-brand>
    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav>
        <b-nav-item to="/about">about</b-nav-item>
        <b-nav-item to="/author">author</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
  export default {
    name: 'nuHeader'
  }
</script>
<style lang="sass" scoped>
  @import '~assets/sass/variables'

  .nuHeader
    background-color: $white-color
    border-bottom: 1px solid $primary-color
    &-title
      color: $primary-color
</style>
