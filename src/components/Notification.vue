<template>
  <div :class="'notification ' + type">
    <p>{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: 'u-notification',
  props: {
    type: {
      type: String,
      default: 'success',
      validator: (val) => ['success', 'warning', 'error'].includes(val)
    },
    text: String
  }
}
</script>

<style lang="scss" scoped>
.notification {

  &.success {
    background-color: green;
  }
  &.warning {
    background-color: yellow;
  }
  &.error {
    background-color: red;
  }
}
</style>
