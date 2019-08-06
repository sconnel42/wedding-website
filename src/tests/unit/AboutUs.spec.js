import { shallowMount } from '@vue/test-utils'
import AboutUs from '../../components/AboutUs.vue'

describe('AboutUs', () => {
  test('should render content correctly', () => {
    const wrapper = shallowMount(AboutUs, {})
    expect(wrapper.exists()).toBe(true)
    expect(wrapper.find('[id="about"]').text()).toEqual(expect.stringContaining('spelunking'))
  })
})
