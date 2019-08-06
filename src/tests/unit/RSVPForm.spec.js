import { shallowMount } from '@vue/test-utils'
import RSVPForm from '../../components/RSVPForm.vue'

describe('RSVPForm', () => {
  test('should render content correctly', () => {
    const wrapper = shallowMount(RSVPForm, {})
    expect(wrapper.exists()).toBe(true)
  })
})
