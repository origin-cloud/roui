import { describe, test, expect } from 'vitest'
import { h } from 'vue'
import { mount } from '@vue/test-utils'
import Collapse from './Collapse.vue'
import CollapseItem from './CollapseItem.vue'
describe('Collapse', () => {
  test('basic collapse', async () => {
    const wrapper = mount(
      () => (
        <Collapse modelValue={['a']}>
          <CollapseItem name="a" title="a">
            a content
          </CollapseItem>
          <CollapseItem name="b" title="b">
            b content
          </CollapseItem>
          <CollapseItem name="c" title="c" disabled>
            c content
          </CollapseItem>
        </Collapse>
      ),
      {
        global: {
          stubs: ['Icon'],
        },
        attachTo: document.body,
      },
    )
    const headers = wrapper.findAll('.ro-collapse-item__header')
    const content = wrapper.findAll('.ro-collapse-item__content')
    expect(headers.length).toBe(3)
    expect(content.length).toBe(3)

    const firstHeader = headers[0]
    expect(firstHeader?.text()).toBe('a')

    const firstContent = content[0]
    const secondContent = content[1]
    expect(firstContent?.isVisible()).toBe(true)
    expect(secondContent?.isVisible()).toBe(false)

    await firstHeader?.trigger('click')
    expect(firstContent?.isVisible()).toBeFalsy()
  })
})
