import { shallowMount } from '@vue/test-utils'
import GalleryContent from '../../components/GalleryContent.vue'

describe('GalleryContent', () => {
  test('should render content correctly', () => {
    // Mock out the fetching of images
    const fetchMock = jest.fn()
    global.fetch = fetchMock.mockImplementation(() => {
      return Promise.resolve({
        'status': 200,
        'json': () => Promise.resolve({ 'images': [] })
      })
    })

    const wrapper = shallowMount(GalleryContent, { attachToDocument: true })
    expect(wrapper.exists()).toBe(true)

    // Verify that the images were fetched
    expect(fetchMock).toHaveBeenCalledTimes(1)
    expect(fetchMock).toBeCalledWith('/api/adventure-images')
  })
})
