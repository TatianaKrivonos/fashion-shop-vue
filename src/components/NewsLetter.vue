<template>
<section class="news">
  <div class="news__container">
    <p class="news__text">subscribe to newsletter</p>
    <p class="news__text">Get updated on new product releases and promotions</p>
  </div>
  <form
    action="post"
    class="news__form"
    @submit.prevent="onSubmit"
  >
    <input type="email"
           v-model="email"
           @blur="$v.email.$touch()"
           placeholder="email address"
           name="email"
           class="news__form-input news__form-input--email"
    >
    <input
      type="submit"
      value="submit"
      class="news__form-input news__form-input--btn"
      :disabled="$v.$invalid"
    >
  </form>
</section>
</template>
<script>
  import { required, email } from 'vuelidate/lib/validators'
  export default {
    data () {
      return {
        email: '',
        valid: false
      }
    },
    methods: {
      onSubmit () {

      }
    },
    validations: {
      email: {
        required,
        email
      }
    }
  }
</script>
