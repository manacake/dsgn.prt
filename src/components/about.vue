<template>
  <div class="container">
    <headerNav></headerNav>
    <div class="page__intro">
      <h1>About Design.Parts</h1>
      <p>You have a great idea, we have people who can make it real. Let’s make something together!</p>
    </div>
    <div class="page__content page__content--flex page__content--padded">
      Design.parts is an independent design house, and a division of Source.parts Inc. We are hardware engineers and software engineers who can create custom hardware for your product, provide the software support that you need, or build both from the ground up. We have in house IP for circuit designs that are highly customizable and may make your project easier than you expected. In addition to design, Source.parts can help with part sourcing, assembly and testing. We can help you produce 10 products, or set up mass production that can handle over 10,000.
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

<style lang="scss" scoped>
</style>
