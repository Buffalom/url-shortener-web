<template>
  <div class="input-field">
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
