import { shallowMount } from '@vue/test-utils'
import GalleryContent from '../../components/GalleryContent.vue'

describe('GalleryContent', () => {
  test('should render content correctly', () => {
    const wrapper = shallowMount(GalleryContent, { attachToDocument: true })
    expect(wrapper.exists()).toBe(true)
  })
})
