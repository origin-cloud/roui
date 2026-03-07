<template>
  <button
    ref="_ref"
    class="ro-button"
    :class="{
      [`ro-button--${type}`]: type,
      [`ro-button--${size}`]: size,
      'is-plain': plain,
      'is-disabled': disabled,
      'is-round': round,
      'is-circle': circle,
      'is-loading': loading,
    }"
    :disabled="disabled || loading"
    :type="nativeType"
    :autofocus="autofocus"
  >
    <Icon icon="spinner" spin v-if="loading" />
    <Icon v-if="icon" :icon="icon" />
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import type { ButtonProps } from './types'
import Icon from '../Icon/Icon.vue'
import { ref } from 'vue'
defineOptions({
  name: 'RoButton',
})
withDefaults(defineProps<ButtonProps>(), { nativeType: 'button' })
const _ref = ref<HTMLButtonElement>()

defineExpose({
  ref: _ref,
})
</script>

<style></style>
