import { shallowMount } from '@vue/test-utils'
import GalleryContent from '../../components/GalleryContent.vue'

describe('GalleryContent', () => {
  test('should render content correctly', () => {
    const wrapper = shallowMount(GalleryContent, {})
    expect(wrapper).not.toBeNull()
  })
})
