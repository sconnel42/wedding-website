<template>
  <div
    id="contact"
    class="row"
  >
    <div class="col-sm">
      <div class="text-center">
        <h3 class="padded">
          Contact
        </h3>
      </div>
      <div class="text-center">
        <h5
          id="form-header"
          class="padded-bottom"
        >
          Got some questions? Send us a message!
        </h5>
        <form @submit.prevent="handleContactSubmit">
          <div class="form-group row">
            <div class="col-sm-3" />
            <label
              for="contactName"
              class="col-sm-1 col-form-label text-align-sm"
            >Name</label>
            <div class="col-sm-4">
              <input
                id="contactName"
                v-model="contactData.name"
                type="name"
                class="form-control"
                placeholder="Name"
              >
            </div>
            <div class="col-sm-4" />
          </div>
          <div class="form-group row">
            <div class="col-sm-3" />
            <label
              for="contactEmail"
              class="col-sm-1 col-form-label text-align-sm"
            >Email</label>
            <div class="col-sm-4">
              <input
                id="contactEmail"
                v-model="contactData.email"
                type="email"
                class="form-control"
                placeholder="Email"
              >
            </div>
            <div class="col-sm-4" />
          </div>
          <div class="form-group row">
            <div class="col-sm-3" />
            <label
              for="contactMessage"
              class="col-sm-1 col-form-label text-align-sm"
            >Message</label>
            <div class="col-sm-4">
              <textarea
                id="contactMessage"
                v-model="contactData.message"
                placeholder="Put your message here!"
                class="form-control"
              />
              <div class="col-sm-4" />
            </div>
          </div>
          <span class="padded">
            <button
              id="submit-button"
              type="submit"
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
  name: 'ContactForm',
  components: {
    Alert
  },
  data () {
    return {
      contactData: {
        name: '',
        email: '',
        message: ''
      },
      contactFormUrl: 'http://localhost:9000/send-message',
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
      }, 5000)

      // Clear form
      this.contactData.name = ''
      this.contactData.email = ''
      this.contactData.message = ''
    },
    showFailure () {
      // Activate failure alert
      this.showFailureAlert = true
      setTimeout(() => {
        this.showFailureAlert = false
      }, 5000)
    },
    handleContactSubmit () {
      // Submit request to send contact message from backend
      fetch('/api/contact', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: this.contactData.name,
          email: this.contactData.email,
          message: this.contactData.message
        })
      }).then(
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
