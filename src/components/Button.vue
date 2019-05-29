<template>
  <button @click="$emit('click')" :class="color ? 'button-' + color : ''">
    <fa-icon v-if="icon" class="icon" :icon="icon" fixed-width></fa-icon>
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'u-button',
  props: {
    color: { type: String },
    icon: { type: undefined }
  }
}
</script>

<style lang="scss" scoped>
@mixin button-color($base, $text: inherit) {
  background-color: $base;
  color: $text;

  &:hover, &:focus {
    background-color: lighten($base, 5%);
  }
}

button {
  cursor: pointer;

  min-width: 100px;
  padding: 4px 12px;
  margin-top: -4px;
  margin-bottom: 4px;

  border: none;
  border-radius: 6px;

  font-family: inherit;
  font-size: inherit;

  @include button-color(#eee);

  &:hover, &:focus {
    outline: none;
  }

  &:active {
    outline: none;
    transform: scale(0.95);
  }

  &.button-blue {
    @include button-color(#1455FF, #fff);
  }
}
</style>
