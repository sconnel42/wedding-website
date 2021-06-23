import { shallowMount } from '@vue/test-utils'
import ContentHeader from '../../components/ContentHeader.vue'

describe('ContentHeader', () => {
  test('should render content correctly', () => {
    const wrapper = shallowMount(ContentHeader, {})
    expect(wrapper.exists()).toBe(true)
    expect(wrapper.find('h1').text()).toEqual(expect.stringContaining('2021'))
    expect(wrapper.find('img').exists()).toBe(true)
  })
})
