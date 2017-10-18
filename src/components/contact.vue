<template>
  <div class="container">
    <headerNav></headerNav>
    contact

    <form id="form--contact" @submit.prevent="derp">
      <div class="mdc-form-field">
        <div class="mdc-textfield" data-mdc-auto-init="MDCTextfield">
          <input v-model="email" id="email" type="text" class="mdc-textfield__input">
          <label for="email" class="mdc-textfield__label">
            Email Address
          </label>
        </div>
        <p v-if="!emailIsValid" id="email-validation-msg" class="mdc-textfield-helptext mdc-textfield-helptext--persistent">
          Enter a valid email
        </p>
      </div>

      <button type="submit" class="mdc-button mdc-button--raised mdc-button--primary mdc-ripple-surface" data-mdc-auto-init="MDCRipple">
        Submit
      </button>
      <button type="submit" class="button button--accent" data-mdc-auto-init="MDCRipple">
        Submit
      </button>
    </form>
  </div>
</template>

<script>
import {MDCTextfield} from '@material/textfield'
import headerNav from './headerNav'

export default {
  name: 'contact',
  data () {
    return {
      emailIsValid: true,
      email: undefined,
      textfield: undefined
    }
  },

  mounted () {
    const textfield = new MDCTextfield(document.querySelector('.mdc-textfield'))
    this.textfield = textfield
  },

  methods: {
    derp () {
      console.log('form submit')
    }
  },

  components: {
    headerNav: headerNav
  }
}
</script>

<style lang="scss">
</style>
