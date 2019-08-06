import { shallowMount } from '@vue/test-utils'
import AboutUs from '../../components/AboutUs.vue'
import ChurchVenue from '../../components/ChurchVenue.vue'
import ContactForm from '../../components/ContactForm.vue'
import ContentBody from '../../components/ContentBody.vue'
import GalleryHeader from '../../components/GalleryHeader.vue'
import GalleryContent from '../../components/GalleryContent.vue'
import RegistryList from '../../components/RegistryList.vue'
import RSVPForm from '../../components/RSVPForm.vue'

describe('ContentBody', () => {
  test('should render content correctly', () => {
    const wrapper = shallowMount(ContentBody, {})
    expect(wrapper.exists()).toBe(true)

    // Check that all the expected children exist
    expect(wrapper.find(AboutUs).exists()).toBe(true)
    expect(wrapper.find(GalleryHeader).exists()).toBe(true)
    expect(wrapper.find(GalleryContent).exists()).toBe(true)
    expect(wrapper.find(ChurchVenue).exists()).toBe(true)
    expect(wrapper.find(RSVPForm).exists()).toBe(true)
    expect(wrapper.find(RegistryList).exists()).toBe(true)
    expect(wrapper.find(ContactForm).exists()).toBe(true)
  })
})
