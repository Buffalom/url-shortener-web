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
