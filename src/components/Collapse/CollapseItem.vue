<template>
  <div class="ro-collapse-item" :class="{ 'is-disabled': disabled }">
    <div
      class="ro-collapse-item__header"
      :class="{ 'is-disabled': disabled, 'is-active': isActive }"
      :id="`item-header-${name}`"
      @click="handleClick"
    >
      <slot name="title">
        {{ title }}
      </slot>
      <Icon icon="arrow-right" class="header-angle" :class="{ 'header-angle--rotate': isActive }" />
    </div>
    <transition v-on="transitionEvents" name="slide">
      <div class="ro-collapse-item__wrapper" v-show="isActive">
        <div class="ro-collapse-item__content" :id="`item-content-${name}`">
          <slot></slot>
        </div>
      </div>
    </transition>
  </div>
</template>
<script setup lang="ts">
import type { CollapseItemProps } from './types'
import { inject, computed } from 'vue'
import { collapseContextKey } from './types'
import Icon from '../Icon/Icon.vue'
defineOptions({
  name: 'RoCollapseItem',
})
const props = defineProps<CollapseItemProps>()
const collapseContext = inject(collapseContextKey)
const isActive = computed(() => {
  return collapseContext?.activeNames.value.includes(props.name)
})
const handleClick = () => {
  if (props.disabled) {
    return
  }
  collapseContext?.handleItemClick(props.name)
}

const transitionEvents: Record<string, (el: HTMLElement) => void> = {
  beforeEnter: (el: HTMLElement) => {
    el.style.height = '0px'
  },
  enter(el: HTMLElement) {
    el.style.overflow = 'hidden'
    el.style.height = `${el.scrollHeight}px`
  },
  afterEnter(el: HTMLElement) {
    el.style.height = ''
    el.style.overflow = ''
  },
  beforeLeave: (el: HTMLElement) => {
    el.style.height = `${el.scrollHeight}px`
  },
  leave(el: HTMLElement) {
    el.style.height = '0px'
    el.style.overflow = 'hidden'
  },
  afterLeave(el: HTMLElement) {
    el.style.height = ''
    el.style.overflow = ''
  },
}
</script>
