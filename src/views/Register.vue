<template>
  <div>
    <h1>Register</h1>
    <form onSubmit="return false">
      <div class="flex">
        <u-input v-model="email" rules="required|email" name="email" label="Email" :icon="['far', 'envelope']"></u-input>
      </div>
      <div class="flex">
        <u-input v-model="password" rules="required" name="password" type="password" label="Password" :icon="['far', 'lock']"></u-input>
      </div>
      <div class="flex">
        <u-input v-model="passwordConfirm" rules="required" name="passwordConfirm" type="password" label="Confirm Password" :icon="['far', 'lock']"></u-input>
      </div>
      <div class="flex">
        <div class="layout">
          <div class="flex">
            <p>
              <router-link :to="{ name: 'login', query: { ...this.$route.query } }">Already have an account?</router-link>
            </p>
          </div>
          <div class="flex">
            <p>
              <u-button @click="register" :disabled="!valid" :loading="loading" color="blue">Register</u-button>
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
      passwordConfirm: '',
      loading: false
    }
  },
  computed: {
    valid () {
      return !!this.email && !!this.password && !!this.passwordConfirm && this.errors.items.length <= 0
    }
  },
  methods: {
    register () {
      this.loading = true
      if (this.valid) {
        this.axios.post('/signup', {
          email: this.email,
          password: this.password,
          passwordConfirm: this.passwordConfirm
        }).then(result => {
          this.$router.push({ name: 'login', query: { ...this.$route.query } })
        }).finally(() => {
          this.loading = false
        })
      }
    }
  }
}
</script>
