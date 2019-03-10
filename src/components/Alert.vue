<template>
  <div v-if="visible" v-bind:class="alertClasses[this.alertType]" role=alert>
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
      visible: this.isActive,
      alertClasses: {
        "success": "alert alert-success",
        "error": "alert alert-danger",
      },
    }
  },
  methods: {
    showAlert() {
      this.visible = true;
      if (this.activeLength > 0) {
        setTimeout(() => {
          this.visible = false;
        }, this.activeLength*1000);
      }
    },
    hideAlert() {
      this.visible = false;
    }
  },
  watch: {
    isActive: function(newVal, oldVal) {
      if (newVal !== oldVal && newVal === true) {
        this.showAlert();
      }
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
