import { shallowMount } from '@vue/test-utils'
import ContactForm from '../../components/ContactForm.vue'

describe('ContactForm', () => {
  test('should render content correctly', () => {
    const wrapper = shallowMount(ContactForm, {})
    expect(wrapper).not.toBeNull()
    expect(wrapper.find('[id="form-header"]').text()).toEqual(expect.stringContaining('questions'))
  })

  test.only('submit generates expected request', () => {
    const fetchMock = jest.fn()
    global.fetch = fetchMock.mockImplementation(() => {
      return new Promise((resolve, reject) => {
        resolve({ status: 200 })
      })
    })

    const wrapper = shallowMount(ContactForm, {})
    expect(wrapper).not.toBeNull()

    // Expected values
    let expectedName = 'Guest 1'
    let expectedEmail = 'guest@email.com'
    let expectedMessage = 'What time is it?'
    let expectedRequestData = {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: expectedName,
        email: expectedEmail,
        message: expectedMessage
      })
    }

    // Fill out form
    let nameInput = wrapper.find('input[id="contactName"]')
    nameInput.setValue(expectedName)
    let emailInput = wrapper.find('input[id="contactEmail"]')
    emailInput.setValue(expectedEmail)
    let messageTextArea = wrapper.find('textarea[id="contactMessage"]')
    messageTextArea.setValue(expectedMessage)

    // Click submit
    wrapper.find('form').trigger('submit.prevent')

    // Check what fetch was called with
    expect(fetchMock).toHaveBeenCalledTimes(1)
    expect(fetchMock).toBeCalledWith('/api/contact', expectedRequestData)
  })
})
