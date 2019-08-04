import { shallowMount } from '@vue/test-utils'
import NavBar from '../../components/NavBar.vue'

describe('NavBar', () => {
  test('should render content correctly', () => {
    const wrapper = shallowMount(NavBar, {})
    expect(wrapper).not.toBeNull()
  })
})
