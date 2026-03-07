<script setup lang="ts">
import { computed } from 'vue'
import type { IconProps } from './types'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { omit } from 'lodash-es'
defineOptions({
  name: 'RoIcon',
  inheritAttrs: false,
})

const props = defineProps<IconProps>()
const filteredProps = computed(() => {
  return omit(props, ['type', 'color'])
})
const customStyles = computed(() => {
  return props.color ? { color: props.color } : {}
})
</script>

<template>
  <i class="ro-icon" v-bind="$attrs" :style="customStyles" :class="{ [`ro-icon--${type}`]: type }">
    <font-awesome-icon v-bind="filteredProps" />
  </i>
</template>
<style></style>
