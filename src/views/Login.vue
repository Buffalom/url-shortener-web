<template>
  <div>
    <h1>Login</h1>
    <form onSubmit="return false">
      <div class="flex">
        <u-input v-model="email" name="email" label="Email" :icon="['far', 'envelope']"></u-input>
      </div>
      <div class="flex">
        <u-input v-model="password" name="password" type="password" label="Password" :icon="['far', 'lock']"></u-input>
      </div>
      <div class="flex">
        <div class="layout">
          <div class="flex">
            <p>
              <router-link :to="{ name: 'register' }">New here?</router-link>
            </p>
          </div>
          <div class="flex">
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      email: '',
      password: ''
    }
  }
}
</script>
