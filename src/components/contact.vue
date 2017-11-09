<template>
  <div class="container">
    <headerNav></headerNav>
    <div class="page__intro">
      <h1>Contact Us</h1>
      <p>We're here to help. Use the handy contact form or email us to get in touch. We'll get back to you as soon as we can.</p>
    </div>

    <div class="page__content page__pad">
      <form method="POST" action="http://formspree.io/jose@source.parts">
        <div class="mdc-form-field">
          <div class="mdc-textfield" data-mdc-auto-init="MDCTextfield">
            <input v-model="name" id="name" name="name" type="text" class="mdc-textfield__input">
            <label for="name" class="mdc-textfield__label">
              Name
            </label>
          </div>
        </div>

        <div class="mdc-form-field">
          <div class="mdc-textfield" data-mdc-auto-init="MDCTextfield">
            <input v-model="email" id="email" name="email" type="email" class="mdc-textfield__input">
            <label for="email" class="mdc-textfield__label">
              Email Address
            </label>
          </div>
        </div>

        <div class="mdc-textfield mdc-textfield--textarea">
          <textarea v-model="message" id="message" name="message" class="mdc-textfield__input" rows="8" placeholder="Message"></textarea>
        </div>

        <button type="submit" class="button button--accent">
          Send
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import * as mdc from 'material-components-web'
import headerNav from './headerNav'

export default {
  name: 'contact',
  data () {
    return {
      email: undefined,
      name: undefined,
      message: undefined
    }
  },

  mounted () {
    mdc.autoInit()
  },

  components: {
    headerNav: headerNav
  }
}
</script>

<style lang="scss">
@import '../styles/partials';

// Override mdc
.mdc {
  &-form-field {
    position: relative;
  }

  &-form-field,
  &-textfield,
  &-textfield__input {
    width: 100%;
    font-family: 'Open Sans', Helvetica, Arial, sans-serif;
    font-weight: 400;
    color: $text-color;
  }
  &-textfield__input {
    border-bottom: 1px solid $text-color;
    &:hover {
      border-color: $accent-color;
    }
  }
  &-textfield--textarea {
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 0.9em;
    border: 1px solid $text-color;
    border-radius: 1px;

    & .mdc-textfield__input {
      padding: 10px;
    }
  }
}
</style>
