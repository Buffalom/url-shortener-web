<template>
  <div>
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
</template>

<script>
import globalErrorHandler from '../utils/globalErrorHandler'

export default {
  name: 'home',
  mounted () {
    this.axios.get('/shorts').catch(globalErrorHandler(this))
  }
}
</script>
