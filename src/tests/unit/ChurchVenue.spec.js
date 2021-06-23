import { shallowMount } from '@vue/test-utils'
import ChurchVenue from '../../components/ChurchVenue.vue'

describe('ChurchVenue', () => {
  test('should render content correctly', () => {
    const wrapper = shallowMount(ChurchVenue, {})
    expect(wrapper.exists()).toBe(true)

    let venueInfo = wrapper.find('[id="venue-info"]')
    expect(venueInfo.text()).toEqual(expect.stringContaining('Monte Bello'))
  })
})
