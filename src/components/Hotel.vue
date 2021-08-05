<template>
  <div
    id="hotel"
    class="row bottom-line"
  >
    <div class="col-sm-12">
      <div class="text-center">
        <h3 class="padded">
          Hotel
        </h3>
      </div>
      <div
        v-if="hotelEnabled"
        class="text-center pb-3"
      >
        <h5>
          To reserve rooms in our block, please go <a
            class="text-link"
            :href="reservationLink"
          >here</a>. The block will be active until September 9th, 2021, so
          reserve your rooms early!
        </h5>
      </div>
      <div
        v-if="!hotelEnabled"
        class="text-center pb-3"
      >
        <h5>
          This will be active once we finalize more details about our
          wedding reception. <br> Please check back soon!
        </h5>
      </div>
    </div>
    <div
      v-if="hotelEnabled"
      id="hotel-image"
      class="col-sm-6 text-center"
    >
      <img
        :src="hotelImg.src"
        :alt="hotelImg.alt"
        :title="hotelImg.alt"
        class="img-fluid padded rounded"
      >
    </div>
    <div
      v-if="hotelEnabled"
      id="hotel-info"
      class="col-sm-6 flex-center"
    >
      <h3>Aloft Bolingbrook</h3>
      <p>500 North Janes Ave</p>
      <p>Bolingbrook, IL 60440</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hotel',
  props: {
    hotelEnabled: {
      type: Boolean,
      default: true
    }
  },
  data: function () {
    return {
      reservationLink: 'https://www.marriott.com/events/start.mi?id=1626473480776&key=GRP',
      hotelImg: {
        src: 'https://www.dropbox.com/s/ktr81ftuj76h61v/hotel.jpg?raw=1',
        alt: 'Aloft Bolingbrook'
      }
    }
  }
}
</script>

<style scoped>
</style>
