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
        <p class="padded-bottom-sm" v-if="searchData.rsvps.length === 0">
          Please enter your last name to search for your RSVP.
        </p>
        <p class="padded-bottom-sm" v-if="searchData.rsvps.length > 0">
          Please select guests that are coming.
        </p>

        <form @submit.prevent="handleRSVPSearch" v-if="searchData.rsvps.length === 0">
          <div class="form-row align-items-center">
            <div class="col-sm-4"></div>
            <div class="col-sm-3">
              <label class="sr-only" for="searchName">Search</label>
              <input type="text" class="form-control mb-2" id="searchName" v-model="searchData.name" placeholder="Search" aria-label="Search">
            </div>
            <div class="col-sm-1">
              <button type="submit" class="btn btn-primary mb-2">Submit</button>
            </div>
            <div class="col-sm-2"></div>
          </div>
        </form>

        <form v-if="searchData.rsvps.length > 0" @submit.prevent="handleRSVPSubmit">
          <div class="form-row align-items-center" v-for="rsvp in searchData.rsvps" v-bind:key="rsvp.id">
            <div class="col-sm-12 form-inline d-flex justify-content-center">
              <div class="input-group mb-2">
                <div class="input-group-prepend">
                  <div class="input-group-text">
                    <input type="checkbox" v-model="rsvp.isComing" aria-label="Person is coming">
                  </div>
                </div>
                <input type="text" class="form-control" id="rsvpName" v-model="rsvp.name" placeholder="Name" aria-label="Name" disabled>
                <div class="input-group-append">
                  <select id="rsvpMeal" v-model="rsvp.meal" class="form-control round-right">
                    <option selected disabled hidden>Choose meal...</option>
                    <option v-for="meal in mealOptions" v-bind:key="meal">
                      {{ meal }}
                    </option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <span class="padded mt-4">
            <button @click="handleRSVPSubmit('accept')" id="accept-button" class="btn btn-primary" v-bind:disabled="showSuccessAlert || showFailureAlert">Submit</button>
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
      searchData: {
        name: '',
        rsvps: []
      },
      showSuccessAlert: false,
      showFailureAlert: false
    }
  },
  methods: {
    showSuccess () {
      // Activate success alert
      this.showSuccessAlert = true
      setTimeout(() => {
        this.showSuccessAlert = false
        this.searchData.rsvps = []
      }, 5000)
    },
    showFailure () {
      // Activate failure alert
      this.showFailureAlert = true
      setTimeout(() => {
        this.showFailureAlert = false
      }, 5000)
    },
    handleRSVPSubmit (submitType) {
      // Submit request to create RSVP to backend
      fetch('/api/rsvp', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          rsvps: this.searchData.rsvps
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
    },
    handleRSVPSearch () {
      // Submit request to create RSVP to backend
      fetch(
        `/api/rsvp?key=${this.searchData.name}`
      ).then(
        // eslint-disable-next-line
        (response) => {
          response.json().then(data => {
            console.log(data.rsvps)
            this.searchData.rsvps = data.rsvps
          })
        }
      ).catch(
        (err) => {
          // eslint-disable-next-line
          console.log(err);
        }
      )
      this.searchData.name = ''

      // TODO: Make search section disappear and select-people section appear
    }
  }
}
</script>
<style scoped>
.round-right {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;

}
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
