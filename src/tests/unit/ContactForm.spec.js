import { shallowMount } from '@vue/test-utils'
import ContactForm from '../../components/ContactForm.vue'

describe('ContactForm', () => {
  test('should render content correctly', () => {
    const wrapper = shallowMount(ContactForm, {})
    expect(wrapper).not.toBeNull()
  })
})
