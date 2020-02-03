<template>
  <div
    id="rsvp"
    class="row"
  >
    <div class="col-sm padded-bottom bottom-line">
      <div class="text-center">
        <h3 class="padded">
          RSVP
        </h3>
      </div>
      <div class="text-center">
        <h5
          v-if="rsvpEnabled"
          id="form-header-enabled"
          class="padded-bottom-xs"
        >
          Let us know if you will be coming to our wedding!
        </h5>
        <h4
          v-if="!rsvpEnabled"
          id="form-header-disabled"
          class="padded-bottom-xs"
        >
          This will be active once we finalize more details about the wedding. <br> Come back when you receive your invitation!
        </h4>
        <p
          v-if="searchData.rsvps.length === 0 && rsvpEnabled"
          class="padded-bottom-sm"
        >
          Please enter your last name to search for your RSVP.
        </p>
        <p
          v-if="searchData.rsvps.length > 0 && rsvpEnabled"
          class="padded-bottom-sm"
        >
          Please select guests that are coming.
        </p>

        <form
          v-if="searchData.rsvps.length === 0 && rsvpEnabled"
          @submit.prevent="handleRSVPSearch"
        >
          <div class="form-row align-items-center">
            <div class="col-sm-4" />
            <div class="col-sm-3">
              <label
                class="sr-only"
                for="searchName"
              >Search</label>
              <input
                id="searchName"
                v-model="searchData.name"
                type="text"
                class="form-control mb-2"
                placeholder="Search"
                aria-label="Search"
              >
            </div>
            <div class="col-sm-1">
              <button
                id="search-submit"
                type="submit"
                class="btn btn-primary mb-2"
              >
                Submit
              </button>
            </div>
            <div class="col-sm-2" />
          </div>
        </form>

        <form
          v-if="searchData.rsvps.length > 0 && rsvpEnabled"
          @submit.prevent="handleRSVPSubmit"
        >
          <div
            v-for="rsvp in searchData.rsvps"
            :key="rsvp.id"
            class="form-row align-items-center"
          >
            <div class="col-sm-12 form-inline d-flex justify-content-center">
              <div class="input-group mb-2">
                <div class="input-group-prepend">
                  <div>
                    <select
                      :id="`rsvpIsComing-${rsvp.id}`"
                      v-model="rsvp.isComing"
                      class="form-control round-left"
                    >
                      <option
                        selected
                        disabled
                        hidden
                      >
                        Attending?
                      </option>
                      <option value="true">
                        Yes
                      </option>
                      <option value="false">
                        No
                      </option>
                    </select>
                  </div>
                </div>
                <input
                  :id="`rsvpName-${rsvp.id}`"
                  v-model="rsvp.name"
                  type="text"
                  class="form-control"
                  placeholder="Name"
                  aria-label="Name"
                  disabled
                >
                <div class="input-group-append">
                  <div>
                    <select
                      :id="`rsvpMeal-${rsvp.id}`"
                      v-model="rsvp.meal"
                      class="form-control round-right"
                    >
                      <option
                        selected
                        disabled
                        hidden
                      >
                        Choose meal...
                      </option>
                      <option
                        v-for="meal in mealOptions"
                        :key="meal"
                      >
                        {{ meal }}
                      </option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <span class="padded mt-4">
            <button
              id="accept-button"
              class="btn btn-primary"
              :disabled="showSuccessAlert || showFailureAlert"
            >Submit</button>
          </span>
          <div class="padded-top">
            <Alert
              :is-active="showSuccessAlert"
              alert-type="success"
            />
            <Alert
              :is-active="showFailureAlert"
              alert-type="error"
            />
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
  props: {
    rsvpEnabled: {
      type: Boolean,
      default: false
    }
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
    handleRSVPSubmit () {
      // Unset default value from dropdown
      this.searchData.rsvps.forEach((item, idx) => {
        if (item.isComing === 'Attending?') {
          this.searchData.rsvps[idx].isComing = null
        }
        if (item.meal === 'Choose meal...') {
          this.searchData.rsvps[idx].meal = null
        }
      })

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
            // Set value of isComing to question so the
            // dropdown is populated correctly
            if (data.rsvps !== null && data.rsvps !== undefined) {
              this.searchData.rsvps = data.rsvps
              this.searchData.rsvps.forEach((item, idx) => {
                if (item.isComing === null) {
                  this.searchData.rsvps[idx].isComing = 'Attending?'
                }
              })
            }
          })
        }
      ).catch(
        (err) => {
          // eslint-disable-next-line
          console.log(err);
        }
      )
      this.searchData.name = ''
    }
  }
}
</script>
<style scoped>
.round-left {
  border-top-left-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
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
