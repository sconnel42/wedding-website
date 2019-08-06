import { shallowMount } from '@vue/test-utils'
import RSVPForm from '../../components/RSVPForm.vue'

describe('RSVPForm', () => {
  test('should render content correctly', () => {
    const wrapper = shallowMount(RSVPForm, {})
    expect(wrapper.exists()).toBe(true)
    expect(wrapper.find('[id="form-header"]').text()).toEqual(expect.stringContaining('wedding'))
  })

  test('accept generates expected request', () => {
    const fetchMock = jest.fn()
    global.fetch = fetchMock.mockImplementation(() => {
      return new Promise((resolve, reject) => {
        resolve({ status: 200 })
      })
    })

    const wrapper = shallowMount(RSVPForm, {})
    expect(wrapper.exists()).toBe(true)

    // Expected values
    let expectedName = 'Guest 1'
    let expectedEmail = 'guest@email.com'
    let expectedMeal = 'Pork' // TODO: Change when meal selection is fixed
    let expectedRequestData = {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: expectedName,
        email: expectedEmail,
        meal: expectedMeal,
        isComing: true
      })
    }

    // Fill out form
    let nameInput = wrapper.find('input[id="rsvpName"]')
    nameInput.setValue(expectedName)
    let emailInput = wrapper.find('input[id="rsvpEmail"]')
    emailInput.setValue(expectedEmail)
    let mealSelect = wrapper.find('select[id="rsvpMeal"]')
    mealSelect.setValue(expectedMeal)

    // Click submit
    wrapper.find('button[id="accept-button"]').trigger('click')

    // Check what fetch was called with
    expect(fetchMock).toHaveBeenCalledTimes(1)
    expect(fetchMock).toBeCalledWith('/api/rsvp', expectedRequestData)
  })

  test('decline generates expected request', () => {
    const fetchMock = jest.fn()
    global.fetch = fetchMock.mockImplementation(() => {
      return new Promise((resolve, reject) => {
        resolve({ status: 200 })
      })
    })

    const wrapper = shallowMount(RSVPForm, {})
    expect(wrapper.exists()).toBe(true)

    // Expected values
    let expectedName = 'Guest 1'
    let expectedEmail = 'guest@email.com'
    let expectedMeal = 'Chicken'
    let expectedRequestData = {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: expectedName,
        email: expectedEmail,
        meal: expectedMeal,
        isComing: false
      })
    }

    // Fill out form
    let nameInput = wrapper.find('input[id="rsvpName"]')
    nameInput.setValue(expectedName)
    let emailInput = wrapper.find('input[id="rsvpEmail"]')
    emailInput.setValue(expectedEmail)
    let mealSelect = wrapper.find('select[id="rsvpMeal"]')
    mealSelect.setValue(expectedMeal)

    // Click submit
    wrapper.find('button[id="decline-button"]').trigger('click')

    // Check what fetch was called with
    expect(fetchMock).toHaveBeenCalledTimes(1)
    expect(fetchMock).toBeCalledWith('/api/rsvp', expectedRequestData)
  })
})
