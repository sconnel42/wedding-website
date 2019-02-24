<template>
  <div id="rsvp" class="row">
    <div class="col-sm bottom-line">
      <div class="text-center">
        <h3 class="padded">RSVP</h3>
      </div>
      <div class="text-center">
        <h5>
          Let us know if you will be coming to our wedding!
        </h5>
        <form @submit.prevent="handleRSVPSubmit">
          <div class="padded-sm">
            <label for="rsvpName">Name</label>
            <input v-model="rsvpData.name" id="rsvpName" placeholder="Name">
          </div>
          <div class="padded-sm">
            <label for="rsvpEmail">Email</label>
            <input v-model="rsvpData.email" id="rsvpEmail" placeholder="Email">
          </div>
          <div class="padded-sm">
            <label for="rsvpMeal">Meal Choice</label>
            <select id="rsvpMeal" v-model="rsvpData.meal">
              <option v-for="meal in mealOptions" v-bind:key="meal" v-bind:value="meal">
                {{ meal }}
              </option>
            </select>
          </div>
          <div class="padded-sm">
            <input type="submit" value="Submit">
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RSVPForm',
  data() {
    return {
      mealOptions: ['Chicken', 'Pork'],
      rsvpData: {
        name: '',
        email: '',
        meal: 'Chicken',
        isComing: false
      },
      rsvpFormUrl: 'http://localhost:9000/submit-rsvp',
    }
  },
  methods: {
    handleRSVPSubmit() {
      // Handle submit
      // TODO: AJAX call to BE endpoint

      // Clear form
      this.rsvpData.name = "";
      this.rsvpData.email = "";
      this.rsvpData.meal = this.mealOptions[0];
    }
  }
}
</script>
