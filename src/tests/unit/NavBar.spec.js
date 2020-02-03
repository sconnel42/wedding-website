import { shallowMount } from '@vue/test-utils'
import NavBar from '../../components/NavBar.vue'

describe('NavBar', () => {
  test('should render content correctly', () => {
    const wrapper = shallowMount(NavBar, {})
    expect(wrapper.exists()).toBe(true)

    // Check that there are the expected number of nav-links
    let numNavLinks = wrapper.findAll('p.nav-link').length
    expect(numNavLinks).toEqual(7)
  })
})
