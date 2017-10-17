<template>
  <header class="header__container">
    <div class="header__logo">
      <img src="../assets/logo.svg">
    </div>

    <nav class="nav__container">
      <router-link to="/projects">
        <div class="nav__item">
          <div class="nav__icon nav__icon--blue"></div>
          Projects
        </div>
      </router-link>

      <router-link to="/process">
        <div class="nav__item">
          <div class="nav__icon nav__icon--green"></div>
          Process
        </div>
      </router-link>

      <router-link to="/about">
        <div class="nav__item">
          <div class="nav__icon nav__icon--orange"></div>
          About
        </div>
      </router-link>

      <router-link to="/contact">
        <div class="nav__item">
          <div class="nav__icon nav__icon--purple"></div>
          Contact
        </div>
      </router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'headerNav'
}
</script>

<style lang="scss">
@import '../styles/partials';

.header {
  &__container {
    display: flex;
    justify-content: space-between;
    overflow-x: hidden;
  }

  &__logo {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 70px;
    height: 70px;
    background: $accent-color;
    font-size: 2.2em;
    color: #fff;

    & img {
      width: 45px;
    }
  }
}

.nav {
  &__container {
    display: flex;
    align-items: center;
    margin-right: 70px;

    font-family: 'Dosis', sans-serif;
    font-weight: 600;
    font-size: 14px;
    color: $text-color;
    letter-spacing: 0.65px;
    text-transform: uppercase;
  }

  &__item {
    display: flex;
    align-items: center;
    padding: 0 15px;
    transition: all .15s ease;

    &:hover {
      & .nav__icon--blue {background: darken($lite-blue, 5%);}
      & .nav__icon--green {background: darken($lite-green, 5%);}
      & .nav__icon--orange {background: darken($lite-orange, 5%);}
      & .nav__icon--purple {background: darken($lite-purple, 5%);}
    }
  }

  &__icon {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    margin-right: 12px;

    &--blue {background: $lite-blue;}
    &--green {background: $lite-green;}
    &--orange {background: $lite-orange;}
    &--purple {background: $lite-purple;}
  }
}
</style>
