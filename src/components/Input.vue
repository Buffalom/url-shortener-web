<template>
  <div :class="{ 'input-field': true, 'active': localValue }">
    <label :for="name">{{ label }}</label>
    <input v-model="localValue" :type="type" :name="name" :placeholder="label" />
  </div>
</template>

<script>
export default {
  name: 'input',
  props: {
    name: { type: String, default: 'input' },
    type: { type: String, default: 'text' },
    label: { type: String, default: 'Label' },
    value: { type: String }
  },
  data () {
    return {
      localValue: this.value
    }
  },
  watch: {
    localValue (val) {
      this.$emit('input', val)
    }
  }
}
</script>

<style lang="scss" scoped>
.input-field {
  position: relative;

  input {
    padding: 4px 12px;
    margin-top: 4px;
    margin-bottom: 4px;

    outline: none;
    border: 2px solid #eee;
    border-radius: 24px;
    background-color: #eee;

    font-family: inherit;
    font-size: inherit;
    color: black;

    &:active, &:focus {
      outline: none;
      background-color: white;
    }
  }

  label {
    position: absolute;
    z-index: -1;
    top: 50%;
    left: 10px;
    transform: translate(0, -50%);
    transition: transform .1s ease-in-out, left .1s ease-in-out;
  }

  &.active {
    label {
      left: 0px;
      transform: translate(calc(-100% - 10px), -50%);
    }
  }
}
</style>
