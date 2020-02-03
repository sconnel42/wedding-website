<template>
  <div
    id="venue"
    class="row bottom-line"
  >
    <div class="col-sm-12">
      <div class="text-center">
        <h3 class="padded">
          Church/Venue
        </h3>
      </div>
      <div class="text-center">
        <h5 class="padded">
          Here's the location of the church and venue:
        </h5>
      </div>
    </div>
    <div
      id="church-image"
      class="col-sm-6 text-center"
    >
      <img
        :src="churchImg.src"
        :alt="churchImg.alt"
        :title="churchImg.alt"
        class="img-fluid padded rounded"
      >
    </div>
    <div
      id="church-info"
      class="col-sm-6 flex-center"
    >
      <h3>St. Elizabeth Ann Seton <br class="rwd-break">Catholic Church</h3>
      <p>9300 West 167th Street</p>
      <p>Orland Hills, IL 60487</p>
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
      churchImg: {
        src: `${process.env.BASE_URL}imgs/church.jpg`,
        alt: 'St Elizabeth Seton'
      },
      venueImg: {
        src: `${process.env.BASE_URL}imgs/venue.jpg`,
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
