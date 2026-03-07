<template>
  <div class="ro-collapse">
    <slot></slot>
  </div>
</template>
<script setup lang="ts">
import { ref, provide, watch } from 'vue'
import type { NameType, CopllapseProps, CollapseEmits } from './types'
import { collapseContextKey } from './types'

defineOptions({
  name: 'RoCollapse',
})
const props = defineProps<CopllapseProps>()
const emit = defineEmits<CollapseEmits>()
const activeNames = ref<NameType[]>(props.modelValue || [])

watch(
  () => props.modelValue,
  (newVal) => {
    activeNames.value = newVal || []
  },
)

if (props.accordion && activeNames.value.length > 1) {
  console.warn('accordion mode only support one item open at a time')
}

const handleItemClick = (item: NameType) => {
  if (props.accordion) {
    activeNames.value = [activeNames.value[0] === item ? '' : item]
  } else {
    const index = activeNames.value.indexOf(item)
    if (index > -1) {
      activeNames.value.splice(index, 1)
    } else {
      activeNames.value.push(item)
    }
    emit('update:modelValue', activeNames.value)
    emit('change', activeNames.value)
  }
}
provide(collapseContextKey, {
  activeNames,
  handleItemClick,
})
</script>
