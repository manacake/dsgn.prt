<template>
  <div class="container">
    <headerNav></headerNav>
    <div class="page__intro">
      <h1>Our Process</h1>
      <p>Our process has 4 steps, and the length and complexity of each depend on you and your project. They are: 1. Introduction, 2. Design, 3. Manufacturing (source, assemble, test), and 4. End of life.</p>
    </div>
  </div>
</template>

<script>
import headerNav from './headerNav'
export default {
  name: 'process',
  components: {
    headerNav: headerNav
  }
}
</script>

<style lang="scss" scoped>
</style>
