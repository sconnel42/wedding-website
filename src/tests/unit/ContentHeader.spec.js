import { shallowMount } from '@vue/test-utils'
import ContentHeader from '../../components/ContentHeader.vue'

describe('ContentHeader', () => {
  test('should render content correctly', () => {
    const wrapper = shallowMount(ContentHeader, {})
    expect(wrapper).not.toBeNull()
    expect(wrapper.find('h1').text()).toEqual(expect.stringContaining('2020'))
    expect(wrapper.find('img').exists()).toBe(true)
  })
})