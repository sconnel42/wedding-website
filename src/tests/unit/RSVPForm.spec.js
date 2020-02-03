import { shallowMount } from '@vue/test-utils'
import RSVPForm from '../../components/RSVPForm.vue'

describe('RSVPForm', () => {
  test('should render content correctly when rsvp enabled', () => {
    const wrapper = shallowMount(RSVPForm, {
      propsData: {
        rsvpEnabled: true
      }
    })
    expect(wrapper.exists()).toBe(true)
    expect(wrapper.find('[id="form-header-enabled"]').text()).toEqual(expect.stringContaining('Let us know if you will be coming to our wedding!'))
  })

  test('should render content correctly when rsvp disabled', () => {
    const wrapper = shallowMount(RSVPForm, {
      propsData: {
        rsvpEnabled: false
      }
    })
    expect(wrapper.exists()).toBe(true)
    expect(wrapper.find('[id="form-header-disabled"]').text()).toEqual(expect.stringContaining('Come back when you receive your invitation!'))
  })

  test('generates expected search request', () => {
    const fetchMock = jest.fn()
    global.fetch = fetchMock.mockImplementation(() => {
      return Promise.resolve({
        status: 200,
        json: () => Promise.resolve({
          data: {}
        })
      })
    })

    const wrapper = shallowMount(RSVPForm, {
      attachToDocument: true,
      propsData: {
        rsvpEnabled: true
      }
    })
    expect(wrapper.exists()).toBe(true)

    // Fill out form
    let expectedName = 'Guest 1'
    let searchInput = wrapper.find('input[id="searchName"]')
    searchInput.setValue(expectedName)

    // Click submit
    wrapper.find('button[id="search-submit"]').trigger('click')

    // Check what fetch was called with
    expect(fetchMock).toHaveBeenCalledTimes(1)
    expect(fetchMock).toBeCalledWith(`/api/rsvp?key=${expectedName}`)

    // Cleanup
    wrapper.destroy()
    fetchMock.mockClear()
  })

  test.only('generates expected submit request', () => {
    // Mock out submit
    const fetchMock = jest.fn()
    global.fetch = fetchMock.mockImplementation(() => {
      return Promise.resolve({
        status: 200,
        json: () => Promise.resolve({
          data: {}
        })
      })
    })

    // Expected values
    let expectedId = 'foobar'
    let expectedName = 'Guest 1'
    let expectedMeal = 'Pork'
    let expectedIsComing = true
    let expectedRequestData = {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        rsvps: [{
          id: expectedId,
          name: expectedName,
          isComing: expectedIsComing.toString(),
          meal: expectedMeal
        }]
      })
    }

    const wrapper = shallowMount(RSVPForm, {
      attachToDocument: true,
      propsData: {
        rsvpEnabled: true
      },
      data () {
        return {
          searchData: {
            name: expectedName,
            rsvps: [{
              id: expectedId,
              name: expectedName,
              isComing: false,
              meal: null
            }]
          }
        }
      }
    })
    expect(wrapper.exists()).toBe(true)

    // Fill out form
    let nameField = wrapper.find('input[id="rsvpName-foobar"]')
    expect(nameField.element.value).toEqual(expectedName)
    let isComingField = wrapper.find('select[id="rsvpIsComing-foobar"]')
    isComingField.setValue(expectedIsComing)
    let mealField = wrapper.find('select[id="rsvpMeal-foobar"]')
    mealField.setValue(expectedMeal)

    // Click submit
    wrapper.find('button[id="accept-button"]').trigger('click')

    // Check what fetch was called with
    expect(fetchMock).toHaveBeenCalledTimes(1)
    expect(fetchMock).toBeCalledWith('/api/rsvp', expectedRequestData)

    // Cleanup
    wrapper.destroy()
    fetchMock.mockClear()
  })
})
