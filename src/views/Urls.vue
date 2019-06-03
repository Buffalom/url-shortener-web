<template>
  <div>
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
</template>

<script>
import { mapState } from 'vuex'
import globalErrorHandler from '../utils/globalErrorHandler'

export default {
  name: 'urls',
  mounted () {
    this.$store.dispatch('fetchShorts').catch(globalErrorHandler(this))
  },
  computed: {
    ...mapState(['shorts'])
  }
}
</script>
