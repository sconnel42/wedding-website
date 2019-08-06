import { shallowMount } from '@vue/test-utils'
import GalleryHeader from '../../components/GalleryHeader.vue'

describe('GalleryHeader', () => {
  test('should render content correctly', () => {
    const wrapper = shallowMount(GalleryHeader, {})
    expect(wrapper.exists()).toBe(true)

    // Check if data is set correctly
    const component = wrapper.vm
    expect(component.galleryOpen).toBe(false)
    expect(component.toggleText()).toEqual('Show')
  })

  test('toggle button opens and closes gallery', () => {
    const wrapper = shallowMount(GalleryHeader, {})
    expect(wrapper.exists()).toBe(true)

    // Click the toggle button
    wrapper.find('button').trigger('click')

    // Check if data is set correctly
    const component = wrapper.vm
    expect(component.galleryOpen).toBe(true)
    expect(component.toggleText()).toEqual('Hide')

    // Click the toggle button
    wrapper.find('button').trigger('click')

    // Check if data is set correctly
    expect(component.galleryOpen).toBe(false)
    expect(component.toggleText()).toEqual('Show')
  })
})
