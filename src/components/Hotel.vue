<template>
  <div id="hotel" class="row bottom-line">
    <div class="col-sm-12">
      <div class="text-center">
        <h3 class="padded">Hotel</h3>
      </div>
      <div class="text-center pb-3">
        <h5>
          To reserve rooms in our block, please go <a class="text-link" v-bind:href='reservationLink'>here</a>.
        </h5>
      </div>
    </div>
    <div id="hotel-image" class="col-sm-6 text-center">
      <img
        v-bind:src="hotelImg.src"
        v-bind:alt="hotelImg.alt"
        v-bind:title="hotelImg.alt"
        class="img-fluid padded rounded"
      >
    </div>
    <div id="hotel-info" class="col-sm-6 flex-center">
      <h3>Aloft Bolingbrook</h3>
      <p>500 North Janes Ave</p>
      <p>Bolingbrook, IL 60440</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hotel',
  data: function () {
    return {
      reservationLink: 'https://www.marriott.com/events/start.mi?id=1578698232316&key=GRP',
      hotelImg: {
        src: `${process.env.BASE_URL}imgs/hotel.jpg`,
        alt: 'Aloft Bolingbrook'
      }
    }
  }
}
</script>

<style scoped>
</style>
