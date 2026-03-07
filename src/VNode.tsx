import { ref, h, defineComponent } from 'vue'
export default defineComponent({
  name: 'VNode',
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const count = ref(1)
    return () => <h1>{props.msg + count.value}</h1>
  },
})
