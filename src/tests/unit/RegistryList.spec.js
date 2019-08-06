import { shallowMount } from '@vue/test-utils'
import RegistryList from '../../components/RegistryList.vue'

describe('RegistryList', () => {
  test('should render content correctly', () => {
    const wrapper = shallowMount(RegistryList, {})
    expect(wrapper.exists()).toBe(true)

    let componentDataNumber = wrapper.vm.registries.length
    let domNumber = wrapper.findAll('img').length
    expect(componentDataNumber).toEqual(domNumber)
  })
})
