import { shallowMount } from '@vue/test-utils'
import GalleryContent from '../../components/GalleryContent.vue'

describe('GalleryContent', () => {
  test('should render content correctly', () => {
    const wrapper = shallowMount(GalleryContent, {})
    expect(wrapper.exists()).toBe(true)

    let componentDataNumber = wrapper.vm.images.length
    let domNumber = wrapper.findAll('img').length
    expect(componentDataNumber).toEqual(domNumber)
  })
})
