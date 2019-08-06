<template>
  <div id="rsvp" class="row">
    <div class="col-sm padded-bottom bottom-line">
      <div class="text-center">
        <h3 class="padded">RSVP</h3>
      </div>
      <div class="text-center">
        <h5 id="form-header" class="padded-bottom-xs">
          Let us know if you will be coming to our wedding!
        </h5>
        <p class="padded-bottom-sm">
          (Please fill out once for each guest)
        </p>
        <form action="javascript:void(0);">
          <div class="form-group row">
            <div class="col-sm-3"></div>
            <label for="rsvpName" class="col-sm-1 col-form-label text-align-sm">Name</label>
            <div class="col-sm-4">
              <input type="name" class="form-control" id="rsvpName" v-model="rsvpData.name" placeholder="Name">
            </div>
            <div class="col-sm-4"></div>
          </div>
          <div class="form-group row">
            <div class="col-sm-3"></div>
            <label for="rsvpEmail" class="col-sm-1 col-form-label text-align-sm">Email</label>
            <div class="col-sm-4">
              <input type="email" class="form-control" id="rsvpEmail" v-model="rsvpData.email" placeholder="Email">
            </div>
            <div class="col-sm-4"></div>
          </div>
          <div class="form-group row">
            <div class="col-sm-3"></div>
            <label for="rsvpMeal" class="col-sm-1 col-form-label text-align-sm">Meal</label>
            <div class="col-sm-4">
              <select id="rsvpMeal" v-model="rsvpData.meal" @change="setMeal($event.target.selectedIndex)" class="form-control">
                <option selected hidden>Choose...</option>
                <option v-for="meal in mealOptions" v-bind:key="meal">
                  {{ meal }}
                </option>
              </select>
            <div class="col-sm-4"></div>
            </div>
          </div>
          <span class="padded" style="margin: 20px;">
            <button @click="handleRSVPSubmit('accept')" id="accept-button" class="btn btn-primary" v-bind:disabled="showSuccessAlert || showFailureAlert">Accept</button>
          </span>
          <span class="padded" style="margin: 20px;">
            <button @click="handleRSVPSubmit('decline')" id="decline-button" class="btn btn-danger" v-bind:disabled="showSuccessAlert || showFailureAlert">Decline</button>
          </span>
          <div class="padded-top">
            <Alert v-bind:isActive="showSuccessAlert" alertType="success"/>
            <Alert v-bind:isActive="showFailureAlert" alertType="error"/>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Alert from './Alert.vue'

export default {
  name: 'RSVPForm',
  components: {
    Alert
  },
  data () {
    return {
      mealOptions: ['Chicken', 'Pork'],
      rsvpData: {
        name: '',
        email: '',
        meal: 'Chicken',
        isComing: false
      },
      showSuccessAlert: false,
      showFailureAlert: false
    }
  },
  methods: {
    setMeal (idx) {
      // Subtract 1 since the first element is a message, not
      // an option
      this.rsvpData.meal = this.mealOptions[idx - 1]
    },
    showSuccess () {
      // Activate success alert
      this.showSuccessAlert = true
      setTimeout(() => {
        this.showSuccessAlert = false
      }, 5000)

      // Clear form
      this.rsvpData.name = ''
      this.rsvpData.email = ''
      this.rsvpData.meal = this.mealOptions[0]
      this.rsvpData.isComing = false
    },
    showFailure () {
      // Activate failure alert
      this.showFailureAlert = true
      setTimeout(() => {
        this.showFailureAlert = false
      }, 5000)
    },
    handleRSVPSubmit (submitType) {
      this.rsvpData.isComing = (submitType === 'accept')

      // Submit request to create RSVP to backend
      fetch('/api/rsvp', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: this.rsvpData.name,
          email: this.rsvpData.email,
          meal: this.rsvpData.meal,
          isComing: this.rsvpData.isComing
        })
      }).then(
        // eslint-disable-next-line
        (response) => {
          // Show the correct help text
          if (response.status < 300) {
            this.showSuccess()
          } else {
            this.showFailure()
          }
        }
      ).catch(
        (err) => {
          // eslint-disable-next-line
          console.log(err);
          this.showFailure()
        }
      )
    }
  }
}
</script>
<style scoped>
.padded-top {
  padding-top: 10px;
}

.padded-bottom {
  padding-bottom: 20px;
}

.padded-bottom-sm {
  padding-bottom: 10px;
}

.padded-bottom-xs {
  padding-bottom: 10px;
}

.text-align-sm {
  text-align: center;
}

/* Small devices (tablets, 768px and up) */
@media (max-width: 768px) {
  .text-align-sm {
    text-align: left;
  }
}
</style>
