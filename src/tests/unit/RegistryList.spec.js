import { shallowMount } from '@vue/test-utils'
import RegistryList from '../../components/RegistryList.vue'

describe('RegistryList', () => {
  test('should render content correctly', () => {
    const wrapper = shallowMount(RegistryList, {})
    expect(wrapper).not.toBeNull()
  })
})
