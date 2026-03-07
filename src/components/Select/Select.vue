<template>
  <div
    class="ro-select"
    :class="{ 'is-disabled': disabled }"
    @click="toggleDropdown"
    ref="selectContainerRef"
  >
    <Tooltip placement="bottom-start" ref="tooltipRef" :popperOptions="popperOptions" manual>
      <Input
        v-model="states.inputValue"
        :disabled="disabled"
        :placeholder="placeholder"
        ref="inputRef"
        readonly
      >
        <template #suffix>
          <Icon icon="angle-down" class="header-angle" :class="{ 'is-active': isDropdownShow }" />
        </template>
      </Input>
      <template #content>
        <ul class="ro-select__menu">
          <template v-for="(item, index) in options" :key="index">
            <li
              class="ro-select__menu-item"
              :class="{
                'is-disabled': item.disabled,
                'is-selected': states.selectedOption?.value === item.value,
              }"
              :id="`select-item-${item.value}`"
              @click.stop="itemSelect(item)"
            >
              {{ item.label }}
            </li>
          </template>
        </ul>
      </template>
    </Tooltip>
  </div>
</template>
<script setup lang="ts">
import { ref, reactive, onMounted, onUnmounted } from 'vue'
import type { Ref } from 'vue'
import type { SelectProps, SelectEmits, SelectOption, SelectStates } from './types'
import Tooltip from '../Tooltip/Tooltip.vue'
import type { TooltipInstance } from '../Tooltip/types'
import Input from '../Input/Input.vue'
import Icon from '../Icon/Icon.vue'
import type { InputInstance } from '../Input/types'

const findOption = (value: string) => {
  if (!props.options) return null
  const option = props.options.find((option) => option.value === value)
  return option ? option : null
}
defineOptions({
  name: 'RoSelect',
})
const props = defineProps<SelectProps>()
const emits = defineEmits<SelectEmits>()
const initialOption = findOption(props.modelValue)
const tooltipRef = ref() as Ref<TooltipInstance>
const inputRef = ref() as Ref<InputInstance>
const selectContainerRef = ref() as Ref<HTMLElement>
const states = reactive<SelectStates>({
  inputValue: initialOption ? initialOption.label : '',
  selectedOption: initialOption,
})
const isDropdownShow = ref(false)
const popperOptions: any = {
  modifiers: [
    {
      name: 'offset',
      options: {
        offset: [0, 9],
      },
    },
    {
      name: 'sameWidth',
      enabled: true,
      fn: ({ state }: { state: any }) => {
        state.styles.popper.width = `${state.rects.reference.width}px`
      },
      phase: 'beforeWrite',
      requires: ['computeStyles'],
    },
  ],
}

// 点击外部关闭功能
const handleClickOutside = (e: MouseEvent) => {
  if (isDropdownShow.value && selectContainerRef.value && e.target) {
    if (!selectContainerRef.value.contains(e.target as HTMLElement)) {
      controlDropdown(false)
    }
  }
}

const controlDropdown = (show: boolean) => {
  if (show) {
    tooltipRef.value.show()
  } else {
    tooltipRef.value.hide()
  }
  isDropdownShow.value = show
  emits('visible-change', show)
}

const toggleDropdown = () => {
  if (props.disabled) return
  if (isDropdownShow.value) {
    controlDropdown(false)
  } else {
    controlDropdown(true)
  }
}

const itemSelect = (e: SelectOption) => {
  if (e.disabled) return
  states.inputValue = e.label
  states.selectedOption = e
  emits('change', e.value)
  emits('update:modelValue', e.value)
  controlDropdown(false)
  inputRef.value.ref.focus()
}

// 添加事件监听
onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>
