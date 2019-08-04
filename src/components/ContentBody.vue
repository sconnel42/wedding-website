<template>
  <div id="content-body">
    <AboutUs/>
    <GalleryHeader/>
    <GalleryContent/>
    <ChurchVenue/>
    <RSVPForm/>
    <RegistryList/>
    <ContactForm/>
  </div>
</template>

<script>
import AboutUs from './AboutUs.vue'
import GalleryHeader from './GalleryHeader.vue'
import GalleryContent from './GalleryContent.vue'
import ChurchVenue from './ChurchVenue.vue'
import RSVPForm from './RSVPForm.vue'
import RegistryList from './RegistryList.vue'
import ContactForm from './ContactForm.vue'

export default {
  name: 'ContentBody',
  components: {
    AboutUs,
    GalleryHeader,
    GalleryContent,
    ChurchVenue,
    RSVPForm,
    RegistryList,
    ContactForm
  }
}
</script>
