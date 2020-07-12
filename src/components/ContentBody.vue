<template>
  <div id="content-body">
    <COVIDUpdates />
    <AboutUs />
    <GalleryHeader />
    <GalleryContent />
    <ChurchVenue />
    <Hotel />
    <RSVPForm />
    <RegistryList />
    <ContactForm />
  </div>
</template>

<script>
import COVIDUpdates from './COVIDUpdates.vue'
import AboutUs from './AboutUs.vue'
import GalleryHeader from './GalleryHeader.vue'
import GalleryContent from './GalleryContent.vue'
import ChurchVenue from './ChurchVenue.vue'
import Hotel from './Hotel.vue'
import RSVPForm from './RSVPForm.vue'
import RegistryList from './RegistryList.vue'
import ContactForm from './ContactForm.vue'

export default {
  name: 'ContentBody',
  components: {
    COVIDUpdates,
    AboutUs,
    GalleryHeader,
    GalleryContent,
    ChurchVenue,
    Hotel,
    RSVPForm,
    RegistryList,
    ContactForm
  }
}
</script>
