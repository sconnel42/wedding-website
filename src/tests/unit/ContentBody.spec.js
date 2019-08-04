import { shallowMount } from '@vue/test-utils'
import ContentBody from '../../components/ContentBody.vue'

describe('ContentBody', () => {
  test('should render content correctly', () => {
    const wrapper = shallowMount(ContentBody, {})
    expect(wrapper).not.toBeNull()
  })
})
