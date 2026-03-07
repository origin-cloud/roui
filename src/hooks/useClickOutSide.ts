import type { Ref } from 'vue'
import { onMounted, onUnmounted } from 'vue'
const useClickOutSide = (
  elementRef: Ref<HTMLElement | undefined>,
  callback: (e: MouseEvent) => void,
) => {
  const handleClick = (e: MouseEvent) => {
    if (elementRef.value && e.target) {
      if (elementRef.value) {
        if (!elementRef.value.contains(e.target as HTMLElement)) {
          callback(e)
        }
      }
    }
  }
  onMounted(() => {
    document.addEventListener('click', handleClick)
  })
  onUnmounted(() => {
    document.removeEventListener('click', handleClick)
  })
}
export default useClickOutSide
