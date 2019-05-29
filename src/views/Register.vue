<template>
  <div>
    <h1>Register</h1>
    <form onSubmit="return false">
      <div class="flex">
        <u-input v-model="email" name="email" label="Email" :icon="['far', 'envelope']"></u-input>
      </div>
      <div class="flex">
        <u-input v-model="password" name="password" type="password" label="Password" :icon="['far', 'lock']"></u-input>
      </div>
      <div class="flex">
        <u-input v-model="passwordConfirm" name="passwordConfirm" type="password" label="Confirm Password" :icon="['far', 'lock']"></u-input>
      </div>
      <div class="flex">
        <div class="layout">
          <div class="flex">
            <p>
              <router-link :to="{ name: 'login' }">Already have an account?</router-link>
            </p>
          </div>
          <div class="flex">
            <p>
              <u-button color="blue">Register</u-button>
            </p>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'register',
  data () {
    return {
      email: '',
      password: '',
      passwordConfirm: ''
    }
  }
}
</script>
