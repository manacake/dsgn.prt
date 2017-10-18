<template>
  <div class="container">
    <headerNav></headerNav>
    <div class="page__intro">
      <h1>Contact Us</h1>
      <p>We're here to help. Use the handy contact form or email us to get in touch. We'll get back to you as soon as we can.</p>
    </div>
    <div class="page__content">
      <form id="form--contact" @submit.prevent="submitForm">
        <div class="mdc-form-field">
          <div class="mdc-textfield" data-mdc-auto-init="MDCTextfield">
            <input v-model="name" id="name" type="text" class="mdc-textfield__input">
            <label for="email" class="mdc-textfield__label">
              Name
            </label>
          </div>
        </div>

        <div class="mdc-form-field">
          <div class="mdc-textfield" data-mdc-auto-init="MDCTextfield">
            <input v-model="email" id="email" type="text" class="mdc-textfield__input">
            <label for="email" class="mdc-textfield__label">
              Email Address
            </label>
          </div>
          <p v-if="!emailIsValid" class="mdc-textfield-helptext mdc-textfield-helptext--persistent textfield__message">
            Enter a valid email
          </p>
        </div>

        <div class="mdc-textfield mdc-textfield--textarea" data-demo-no-auto-js="">
          <textarea v-model="message" id="message" class="mdc-textfield__input" rows="8" placeholder="Message"></textarea>
        </div>

        <button type="submit" class="button button--accent">
          Submit
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
      emailIsValid: true,
      email: undefined,
      name: undefined,
      message: undefined
    }
  },

  mounted () {
    mdc.autoInit()
  },

  methods: {
    async submitForm () {
      const emailValid = await this.validateEmail(this.email)
      if (emailValid) {
        this.emailIsValid = true
        // this.tokenSent = await auth.sendLoginToken(this.email)
      } else {
        this.emailIsValid = false
      }
    },

    validateEmail (email) {
      const regex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/g
      const validity = regex.test(email)
      return validity
    }
  },

  components: {
    headerNav: headerNav
  }
}
</script>

<style lang="scss">
@import '../styles/partials';

.page {
  &__intro {
    display: inline-flex;
    flex-flow: column nowrap;
    margin: 0 70px;
    padding: 0 175px;
    text-align: center;
    border-radius: 1px;
    background: $text-color;
    color: #fff;
    font-family: 'Open Sans', Helvetica, Arial, sans-serif;

    & h1 {
      margin-top: 16px;
      margin-bottom: 0;
      font-family: 'Dosis', sans-serif;
      font-size: 1.5em;
      font-weight: 600;
    }
  }

  &__content {
    margin: 0 70px;
    padding: 0 175px;
  }
}

.textfield {
  &__message {
    position: absolute;
    bottom: 10px;
    width: 100%;
    text-align: right;
    pointer-events: none;
    color: $accent-color;
    font-weight: 600;
  }
}

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
