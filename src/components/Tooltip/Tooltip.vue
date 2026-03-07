<template>
  <div class="ro-tooltip" v-on="outerEvents" ref="popperContainerNode">
    <div class="ro-tooltip__trigger" ref="triggerNode" v-on="events">
      <slot></slot>
    </div>
    <transition :name="transition" @after-leave="destroyPopperInstance">
      <div v-if="isOpen" class="ro-tooltip__content" ref="popperNode">
        <slot name="content">{{ content }}</slot>
      </div>
    </transition>
  </div>
</template>
<script setup lang="ts">
import { ref, watch, reactive, onUnmounted, computed } from 'vue'
import type { TooltipProps, TooltipEmits, TooltipInstance } from './types'
import type { Instance } from '@popperjs/core'
import { createPopper } from '@popperjs/core'
import useClickOutSide from '@/hooks/useClickOutSide'
const isOpen = ref(false)
const popperNode = ref<HTMLElement>()
const triggerNode = ref<HTMLElement>()
const popperContainerNode = ref<HTMLElement>()
defineOptions({
  name: 'RoTooltip',
})

const props = withDefaults(defineProps<TooltipProps>(), {
  placement: 'bottom',
  trigger: 'hover',
  transition: 'fade',
})
const emit = defineEmits<TooltipEmits>()
useClickOutSide(popperContainerNode, () => {
  if (props.trigger === 'click' && isOpen.value && !props.manual) {
    close()
  }
})
let popperInstance: Instance | null = null
let events: Record<string, any> = reactive({})
let outerEvents: Record<string, any> = reactive({})
const popperOptions = computed(() => ({
  placement: props.placement,
  modifiers: [
    {
      name: 'computeStyles',
      options: {
        gpuAcceleration: false, // 禁用 GPU 加速，使用 top/left 定位
        adaptive: false, // 禁用自适应
      },
    },
  ],
  ...props.popperOptions,
}))
const open = () => {
  isOpen.value = true
  emit('visible-change', true)
}
const close = () => {
  isOpen.value = false
  emit('visible-change', false)
}
const togglePopper = () => {
  isOpen.value = !isOpen.value
  emit('visible-change', isOpen.value)
}
const attachEvents = () => {
  if (props.trigger === 'hover') {
    events['mouseenter'] = open
    outerEvents['mouseleave'] = close
  } else if (props.trigger === 'click') {
    events['click'] = togglePopper
  }
}
if (!props.manual) {
  attachEvents()
}

watch(
  () => props.manual,
  (isManual) => {
    if (isManual) {
      events = reactive({})
      outerEvents = reactive({})
    } else {
      attachEvents()
    }
  },
)
watch(
  () => props.trigger,
  (newTrigger, oldTrigger) => {
    if (newTrigger !== oldTrigger) {
      events = reactive({})
      outerEvents = reactive({})
      attachEvents()
    }
  },
)

watch(
  isOpen,
  (newValue) => {
    if (newValue) {
      if (triggerNode.value && popperNode.value) {
        popperInstance = createPopper(triggerNode.value, popperNode.value, popperOptions.value)
      }
    } else {
      //   popperInstance?.destroy()
    }
  },
  { flush: 'post' },
)
// 1. 新增一个专门销毁实例的方法
const destroyPopperInstance = () => {
  popperInstance?.destroy()
  popperInstance = null
}
onUnmounted(() => {
  popperInstance?.destroy()
})
defineExpose<TooltipInstance>({
  show: open,
  hide: close,
})
</script>
