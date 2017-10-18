<template>
  <div class="container">
    <headerNav></headerNav>
    <div class="page__intro">
      <h1>About Design.Parts</h1>
      <p>You have a great idea, we have people who can make it real. Let’s make something together!</p>
    </div>
  </div>
</template>

<script>
import headerNav from './headerNav'
export default {
  name: 'about',
  components: {
    headerNav: headerNav
  }
}
</script>

<style lang="scss">
</style>
