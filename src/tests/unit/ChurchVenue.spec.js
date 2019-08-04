import { shallowMount } from '@vue/test-utils'
import ChurchVenue from '../../components/ChurchVenue.vue'

describe('ChurchVenue', () => {
  test('should render content correctly', () => {
    const wrapper = shallowMount(ChurchVenue, {})
    expect(wrapper).not.toBeNull()
  })
})
