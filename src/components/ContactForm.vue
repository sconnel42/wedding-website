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
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactForm',
  data() {
    return {
      contactData: {
        name: '',
        email: '',
        message: ''
      },
      contactFormUrl: 'http://localhost:9000/send-message',
    }
  },
  methods: {
    handleContactSubmit() {
      // Handle submit
      // TODO: Send AJAX call to server

      // Clear form
      this.contactData.name = "";
      this.contactData.email = "";
      this.contactData.message = "";
    }
  }
}
</script>
