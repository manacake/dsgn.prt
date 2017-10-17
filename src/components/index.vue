<template>
  <div class="container">
    <headerNav></headerNav>
    <main class="index__container">
      <div class="index__drawing--mini">
        <div class="index__drawing--mini__cord"></div>
        <i class="fa fa-lightbulb"></i>
      </div>

      <div class="index__callout">
        <h1>design.parts</h1>
        <p>
          You have a great idea,<br>
          We have people who can make it real.<br>
          Let’s make something together!
        </p>
        <router-link to="/process" class="button button--accent">See Our Process</router-link>
        <router-link to="/contact" class="button button--vanilla">Contact Us</router-link>
      </div>

      <div class="index__drawing hidden-xxs">
        <i class="fa fa-cog index__drawing__cog--animate"></i>
        <img src="../assets/teamwork.png">
      </div>
    </main>
  </div>
</template>

<script>
import headerNav from './headerNav'

export default {
  name: 'index',

  components: {
    headerNav: headerNav
  }
}
</script>

<style lang="scss">
@import '../styles/partials';

.index {
  &__container {
    position: relative;
    background: $text-color;
    color: #fff;
    overflow: hidden;

    // 100vh - the height of the header * 2
    @include media(xxs) {
      height: calc(100vh - 70px);
    }
    @include media(xs) {
      margin: 0 70px;
      height: calc(100vh - 140px);
    }
  }

  &__callout {
    position: absolute;
    left: 48px;
    top: 200px;

    & h1 {
      margin: 13px 0;
      font-family: 'Dosis', sans-serif;
      font-weight: 600;
      font-size: 2.4em;
      color: #fff;
      letter-spacing: 1px;
    }

    & p {
      margin-bottom: 30px;
      font-family: 'Open Sans', Helvetica, Arial, sans-serif;
      font-weight: 400;
      font-size: 18px;
      letter-spacing: 0.23px;
      line-height: 23px;
    }
  }

  &__drawing {
    position: absolute;
    bottom: 40px;
    @include media(xs) {
      right: -150px;
    }
    @include media(sm) {
      right: 48px;
    }

    & img {
      width: 383px;
    }

    &__cog--animate {
      position: absolute;
      right: 124px;
      bottom: 227px;
      animation: rotation 5s infinite linear;
      font-size: 3em;
    }

    &--mini {
      position: relative;
      & .fa-lightbulb {
        position: absolute;
        top: 135px;
        left: 49px;
        transform: rotate(180deg);
        font-size: 3em;
      }

      &__cord {
        position: absolute;
        top: 0;
        left: 65px;
        width: 3px;
        height: 135px;
        background: #fff;
      }
    }
  }
}

@-webkit-keyframes rotation {
  from {
    -webkit-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(359deg);
  }
}
</style>
