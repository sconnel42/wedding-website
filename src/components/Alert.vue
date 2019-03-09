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
          <div v-if="showSuccessAlert" class="alert alert-success" role=alert>
            RSVP submitted successfully!
            <button type="button" class="close" v-on:click="hideSuccessAlert">
              <span aria-hidden="true">&times;</span>
            </button>
           </div>
          <div v-if="showFailureAlert" class="alert alert-danger alert-dismissible fade show" role=alert>
            An error occurred while submitting the RSVP. Please try again.
            <button type="button" class="close" v-on:click="hideFailureAlert">
              <span aria-hidden="true">&times;</span>
            </button>
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
      showSuccessAlert: false,
      showFailureAlert: false,
    }
  },
  methods: {
    handleRSVPSubmit() {
      // Handle submit
      // TODO: AJAX call to BE endpoint
      var success = false;

      if (success) {
        // Show success message for 2s
        this.showSuccessAlert = true;
        setTimeout(() => {
          this.showSuccessAlert = false;
        }, 3000);

        // Clear form
        this.rsvpData.name = "";
        this.rsvpData.email = "";
        this.rsvpData.meal = this.mealOptions[0];
      } else {
        this.showFailureAlert = true;
      }
    },
    hideSuccessAlert() {
        this.showSuccessAlert = false;
    },
    hideFailureAlert() {
        this.showFailureAlert = false;
    }
  }
}
</script>
