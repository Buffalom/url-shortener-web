<template>
  <div :class="{ 'input-field': true, 'active': localValue }">
    <fa-icon v-if="icon" class="icon" :icon="icon" fixed-width></fa-icon>
    <label :for="name">{{ label }}</label>
    <input v-model="localValue" :type="type" :name="name" :placeholder="label" />
  </div>
</template>

<script>
export default {
  name: 'u-input',
  props: {
    name: { type: String, default: 'input' },
    type: { type: String, default: 'text' },
    label: { type: String, default: 'Label' },
    value: { type: String },
    icon: { type: undefined }
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
    padding: 4px 12px 4px 35px;
    margin-top: 4px;
    margin-bottom: 4px;

    outline: none;
    border: 3px solid #eee;
    border-radius: 24px;
    background-color: #eee;

    font-family: inherit;
    font-size: inherit;
    color: black;

    &:hover {
      border-color: #f6f6f6;
      background-color: #f6f6f6;
    }

    &:active, &:focus {
      outline: none;
      border-color: #eee;
      background-color: #fff;
    }
  }

  .icon, label {
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translate(0, -50%);
  }

  label {
    z-index: -1;
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
