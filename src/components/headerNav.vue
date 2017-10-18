<template>
  <header class="header__container">
    <div class="header__logo">
      <img src="../assets/logo.svg">
    </div>

    <nav class="nav__container hidden-xxs">
      <div class="nav__item">
        <div class="nav__icon nav__icon--blue"></div>
        <router-link to="/projects">Projects</router-link>
      </div>

      <div class="nav__item">
        <div class="nav__icon nav__icon--green"></div>
        <router-link to="/process">Process</router-link>
      </div>

      <div class="nav__item">
        <div class="nav__icon nav__icon--orange"></div>
        <router-link to="/about">About</router-link>
      </div>

      <div class="nav__item">
        <div class="nav__icon nav__icon--purple"></div>
        <router-link to="/contact">Contact</router-link>
      </div>
    </nav>

    <div class="mdc-menu-anchor visible-xxs">
      <a @click="triggerMenu" href="#" class="button button--accent">Menu</a>
      <div class="mdc-simple-menu" tabindex="-1">
        <ul class="mdc-simple-menu__items mdc-list" role="menu" aria-hidden="true">
          <li class="mdc-list-item nav__item" role="menuitem" tabindex="0">
            <div class="nav__icon nav__icon--blue"></div>
            <router-link to="/projects">Projects</router-link>
          </li>
          <li class="mdc-list-item nav__item" role="menuitem" tabindex="0">
            <div class="nav__icon nav__icon--green"></div>
            <router-link to="/process">Process</router-link>
          </li>
          <li class="mdc-list-item nav__item" role="menuitem" tabindex="0">
            <div class="nav__icon nav__icon--orange"></div>
            <router-link to="/about">About</router-link>
          </li>
          <li class="mdc-list-item nav__item" role="menuitem" tabindex="0">
            <div class="nav__icon nav__icon--purple"></div>
            <router-link to="/contact">Contact</router-link>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
import {MDCSimpleMenu} from '@material/menu'

export default {
  name: 'headerNav',
  data () {
    return {
      initMenu: false,
      menu: undefined
    }
  },

  mounted () {
    this.menu = new MDCSimpleMenu(document.querySelector('.mdc-simple-menu'))
  },

  methods: {
    triggerMenu () {
      this.menu.show()
      console.log('menu triggered')
    }
  }
}
</script>

<style lang="scss">
@import '../styles/partials';

.header {
  &__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
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

    & a {
      font-family: 'Dosis', sans-serif;
      font-weight: 600;
      font-size: 14px;
      color: $text-color;
      letter-spacing: 0.65px;
      text-transform: uppercase;
      &:hover,
      &:active,
      &:focus {
        color: lighten($text-color, 20%);
      }
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

.mdc-menu-anchor {
  & .fa-bars {
    font-size: 2em;
  }
}
</style>
