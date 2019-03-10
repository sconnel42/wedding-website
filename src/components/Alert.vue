<template>
  <div v-if="active" v-bind:class="alertClasses[this.alertType]" role=alert>
    {{ alertText }}
    <button type="button" class="close" v-if="dismissable" v-on:click="hideAlert">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'Alert',
  props: {
    isActive: {
      type: Boolean,
      default: false,
    },
    dismissable: {
      type: Boolean,
      default: false,
    },
    activeLength: {
      type: Number,
      default: 5
    },
    alertType: {
      type: String,
      default: "success"
    }

  },
  data() {
    return {
      active: this.isActive,
      alertClasses: {
        "success": "alert alert-success",
        "error": "alert alert-danger",
      },
    }
  },
  methods: {
    showAlert() {
      // Show the alert. If the activeLength is greater
      // than 0, set a timeout so it disappears after
      // that many seconds
      this.active = true;
      if (this.activeLength > 0) {
        setTimeout(() => {
          this.active = false;
        }, this.activeLength*1000);
      }
    },
    hideAlert() {
      this.active = false;
    }
  },
  computed: {
    alertText: function() {
      if (this.alertType == "success") {
        return "RSVP submitted successfully!";
      }
      else {
        return "An error occurred while submitting the RSVP. Please try again";
      }
    }
  }
}
</script>
