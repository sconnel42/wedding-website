import { shallowMount } from '@vue/test-utils'
import GalleryHeader from '../../components/GalleryHeader.vue'

describe('GalleryHeader', () => {
  test('should render content correctly', () => {
    const wrapper = shallowMount(GalleryHeader, {})
    expect(wrapper).not.toBeNull()
  })
})
