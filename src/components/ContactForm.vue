<template>
  <div id="contact" class="row">
    <div class="col-sm">
      <div class="text-center">
        <h3 class="padded">Contact</h3>
      </div>
      <div class="text-center">
        <h5>
          Got some questions? Send us a message!
        </h5>
        <form @submit.prevent="handleContactSubmit">
          <div class="padded-sm">
            <label for="contactName">Name</label>
            <input v-model="contactData.name" id="contactName" placeholder="Name">
          </div>
          <div class="padded-sm">
            <label for="contactEmail">Email</label>
            <input v-model="contactData.email" id="contactEmail" placeholder="Email">
          </div>
          <div class="padded-sm">
            <label for="contactMessage">Message</label>
            <textarea
              id="contactMessage"
              v-model="contactData.message"
              placeholder="Put your message here!"
            ></textarea>
          </div>
          <div class="padded-sm">
            <input type="submit" value="Submit">
          </div>
          <Alert v-bind:isActive="showSuccessAlert" v-bind:activeLength=5 alertType="success"/>
          <Alert v-bind:isActive="showFailureAlert" alertType="error" dismissable/>
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
  data() {
    return {
      contactData: {
        name: '',
        email: '',
        message: ''
      },
      contactFormUrl: 'http://localhost:9000/send-message',
      showSuccessAlert: false,
      showFailureAlert: false,
    }
  },
  methods: {
    handleContactSubmit() {
      // Handle submit
      // TODO: Send AJAX call to server
      var success = false;

      if (success) {
        // Activate success alert
        this.showSuccessAlert = true;

        // Clear form
        this.contactData.name = "";
        this.contactData.email = "";
        this.contactData.message = "";
      } else {
        // Activate failure alert
        this.showFailureAlert = true;
      }
    }
  }
}
</script>
