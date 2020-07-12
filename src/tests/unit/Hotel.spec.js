import { shallowMount } from '@vue/test-utils'
import Hotel from '../../components/Hotel.vue'

describe('Hotel', () => {
  test('should render content correctly', () => {
    const wrapper = shallowMount(Hotel, {
      propsData: {
        hotelEnabled: true
      }
    })
    expect(wrapper.exists()).toBe(true)

    let hotelInfo = wrapper.find('[id="hotel-info"]')
    expect(hotelInfo.text()).toEqual(expect.stringContaining('Aloft Bolingbrook'))
  })
})
