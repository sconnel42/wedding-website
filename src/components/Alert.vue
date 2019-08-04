<template>
  <div v-bind:class="alertClass">
    {{ alertText }}
  </div>
</template>

<script>
export default {
  name: 'Alert',
  props: {
    isActive: {
      type: Boolean,
      default: false
    },
    alertType: {
      type: String,
      default: 'success'
    }

  },
  data () {
    let classes = ''
    if (this.alertType === 'success') {
      classes = 'myalert alert-success not-visible'
    } else {
      classes = 'myalert alert-danger not-visible'
    }

    return {
      alertClass: classes
    }
  },
  methods: {
    getAlertClasses (wasVisible) {
      if (this.alertType === 'success') {
        if (this.isActive) {
          return 'myalert alert-success appear'
        } else if (!this.isActive && wasVisible) {
          return 'myalert alert-success disappear'
        }
        return 'myalert alert-success not-visible'
      } else {
        if (this.isActive) {
          return 'myalert alert-danger appear'
        } else if (!this.isActive && wasVisible) {
          return 'myalert alert-danger disappear'
        }
        return 'myalert alert-danger not-visible'
      }
    }
  },
  watch: {
    isActive: function (newVal, oldVal) {
      if (newVal !== oldVal) {
        this.alertClass = this.getAlertClasses(oldVal)
      }
    }
  },
  computed: {
    alertText: function () {
      if (this.alertType === 'success') {
        return 'Submit successful!'
      }
      return 'An error occurred while submitting. Please try again.'
    }
  }
}
</script>
<style scoped>
.myalert {
  height: 0;
  max-height: 100px;
  border-radius: 0.25rem;
}

.not-visible {
  padding: 0;
  margin: 0;
  opacity: 0;
}

.appear {
  overflow: hidden;
  height: auto;
  padding: 0.75rem 1.25rem;
  margin-bottom: 1rem;
  animation-duration: 1s;
  animation-name: appearAnimation;
}

.disappear {
  overflow: hidden;
  height: auto;
  max-height: 0;
  animation-duration: 1s;
  animation-name: disappearAnimation;
}

@keyframes appearAnimation {
  from {
    opacity: 0;
    max-height: 0;
    padding: 0;
    margin-bottom: 0;
  }

  to {
    opacity: 1;
    max-height: 100px;
  }
}

@keyframes disappearAnimation {
  from {
    opacity: 1;
    max-height: 100px;
    padding: 0.75rem 1.25rem;
    margin-bottom: 1rem;
  }

  to {
    opacity: 0;
    max-height: 0;
    padding: 0;
    margin-bottom: 0;
  }
}
</style>
