<template>
  <div class="container">
    <headerNav></headerNav>
    <div class="page__intro">
      <h1>Our Projects</h1>
      <p>Here are the projects we've helped bring to life.</p>
    </div>

    <div class="page__content page__content--flex page__content__border">
      <div class="project__card">
        <div class="project__icon project__icon--orange"><i class="fa fa-crosshairs"></i></div>
        <h4>U2FToken</h4>
        <p>Oat cake cake donut tart jelly marshmallow donut cookie. Sugar plum toffee dessert fruitcake. Croissant candy oat cake biscuit ice cream chocolate cake. Fruitcake caramels halvah dessert gummi bears powder tart.</p>
      </div>

      <div class="project__card project__card--padded">
        <div class="project__icon project__icon--blue"><i class="fa fa-moon"></i></div>
        <h4>OpenTPM</h4>
        <p>Oat cake cake donut tart jelly marshmallow donut cookie. Sugar plum toffee dessert fruitcake. Croissant candy oat cake biscuit ice cream chocolate cake. Fruitcake caramels halvah dessert gummi bears powder tart.</p>
      </div>

      <div class="project__card">
        <div class="project__icon project__icon--purple"><i class="fa fa-bicycle"></i></div>
        <h4>Alexa's Playground</h4>
        <p>Oat cake cake donut tart jelly marshmallow donut cookie. Sugar plum toffee dessert fruitcake. Croissant candy oat cake biscuit ice cream chocolate cake. Fruitcake caramels halvah dessert gummi bears powder tart.</p>
      </div>
    </div>

    <div class="page__content page__content--flex">
      <div class="project__card">
        <div class="project__icon project__icon--yellow"><i class="fa fa-fire-extinguisher"></i></div>
        <h4>USB Firewall</h4>
        <p>Oat cake cake donut tart jelly marshmallow donut cookie. Sugar plum toffee dessert fruitcake. Croissant candy oat cake biscuit ice cream chocolate cake. Fruitcake caramels halvah dessert gummi bears powder tart.</p>
      </div>

      <div class="project__card project__card--padded">
        <div class="project__icon project__icon--pink"><i class="fa fa-gamepad"></i></div>
        <h4>USB Game Boy Cartridge</h4>
        <p>Oat cake cake donut tart jelly marshmallow donut cookie. Sugar plum toffee dessert fruitcake. Croissant candy oat cake biscuit ice cream chocolate cake. Fruitcake caramels halvah dessert gummi bears powder tart.</p>
      </div>

      <div class="project__card">
        <div class="project__icon project__icon--green"><i class="fa fa-coffee"></i></div>
        <h4>Rampage Robots</h4>
        <p>Oat cake cake donut tart jelly marshmallow donut cookie. Sugar plum toffee dessert fruitcake. Croissant candy oat cake biscuit ice cream chocolate cake. Fruitcake caramels halvah dessert gummi bears powder tart.</p>
      </div>
    </div>
  </div>
</template>

<script>
import headerNav from './headerNav'
export default {
  name: 'projects',
  components: {
    headerNav: headerNav
  }
}
</script>

<style lang="scss">
@import '../styles/partials';

.project {
  &__card {
    padding-top: 30px;
    padding-bottom: 30px;
    padding: 30px;
    width: 290px;

    &--padded {
      // padding: 30px;
      border-right: 1px solid lighten($text-color, 40%);
      border-left: 1px solid lighten($text-color, 40%);
    }
    & h4 {
      margin: 12px 0;
    }
    & p {
      margin: 0;
    }
  }

  &__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    box-shadow: 2px 2px 2px 0 rgba(0,0,0,0.10);
    font-size: 2em;

    &--blue {background: $lite-blue;}
    &--orange {background: $lite-orange;}
    &--purple {background: $lite-purple;}
    &--yellow {background: $lite-yellow;}
    &--pink {background: $lite-pink;}
    &--green {background: $lite-green;}
  }
}
</style>
