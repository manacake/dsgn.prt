<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
@import './styles/partials';
@import './styles/font';

html,
body {
  margin: 0;
  padding: 0;
  height: 100%;

  font-family: 'Open Sans', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $text-color;
  font-size: 16px;
}

a {
  text-decoration: none;
  color: $text-color;

  &:hover,
  &:active,
  &:focus {
    color: lighten($text-color, 20%);
  }
}

.hidden-xxs {
  @include media(xxs) {
    display: none !important;
  }
}
.visible-xxs {
  @include media(xs) {
    display: none !important;
  }
}

.container {
  max-width: 1024px;
  margin: 0 auto;
  position: relative;
}

.button {
  display: inline-block;
  height: 40px;
  line-height: 40px;
  padding: 0 14px;
  border: 0;
  border-radius: 3px;
  box-shadow: 0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08);
  font-size: 15px;
  font-weight: 600;
  letter-spacing: .025em;
  text-transform: uppercase;
  text-decoration: none;
  transition: all .15s ease;
  outline: none;
  white-space: nowrap;

  &:hover {
    cursor: pointer;
    transform: translateY(-1px);
    box-shadow: 0 7px 14px rgba(50,50,93,.1), 0 3px 6px rgba(0,0,0,.08);
  }
  &--accent {
    margin-right: 15px;
    background: $accent-color;
    color: #fff;
    text-shadow: 0 1px 2px lighten($text-color, 5%);
    &:hover {
      color: #fff;
    }
  }
  &--vanilla {
    background: #fff;
    color: $text-color;
    text-shadow: 0 1px 2px lighten($text-color, 30%);
    &:hover {
      color: $text-color;
    }
  }
}
</style>
