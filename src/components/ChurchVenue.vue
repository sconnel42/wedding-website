<template>
  <div
    id="venue"
    class="row bottom-line"
  >
    <div class="col-sm-12">
      <div class="text-center">
        <h3 class="padded">
          Venue
        </h3>
      </div>
      <div class="text-center">
        <h5 class="padded">
          Here's the location of the venue:
        </h5>
      </div>
    </div>
    <div
      id="venue-image"
      class="col-sm-6 text-center"
    >
      <img
        :src="venueImg.src"
        :alt="venueImg.alt"
        :title="venueImg.alt"
        class="img-fluid padded rounded"
      >
    </div>
    <div
      id="venue-info"
      class="col-sm-6 flex-center"
    >
      <h3>The Monte Bello Estate</h3>
      <p>16501 West 135th Street</p>
      <p>Lemont, IL 60439</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChurchVenue',
  data: function () {
    return {
      venueImg: {
        src: 'https://www.dropbox.com/s/sp0kgsywutawfuq/venue.jpg?raw=1',
        alt: 'Monte Bello Estate'
      }
    }
  }
}
</script>

<style scoped>
@media screen and (min-width: 1450px) {
    .rwd-break { display: none; }
}
</style>
