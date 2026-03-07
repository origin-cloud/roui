import type { App } from 'vue'
import Input from '@/components/Input/Input.vue'

Input.install = (app: App) => {
  app.component('RoInput', Input)
}

export default Input

export * from './types'
