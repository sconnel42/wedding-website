<template>
  <div class="dark-gray sticky-top">
    <nav class="navbar navbar-expand-lg">
      <p
        class="navbar-brand fancy-font"
        data-toggle="collapse"
        data-target="#navLinkList"
        @click="goTo('content-header')"
      >
        Sean & Becca
      </p>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navLinkList"
        aria-controls="navLinkList"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fas fa-bars" />
      </button>
      <div
        id="navLinkList"
        class="collapse navbar-collapse"
      >
        <div class="navbar-nav">
          <p
            class="nav-link"
            data-toggle="collapse"
            data-target="#navLinkList"
            @click="goTo('about')"
          >
            About Us
          </p>
          <p
            class="nav-link"
            data-toggle="collapse"
            data-target="#navLinkList"
            @click="goTo('gallery')"
          >
            Picture Gallery
          </p>
          <p
            class="nav-link"
            data-toggle="collapse"
            data-target="#navLinkList"
            @click="goTo('venue')"
          >
            Venue
          </p>
          <p
            class="nav-link"
            data-toggle="collapse"
            data-target="#navLinkList"
            @click="goTo('hotel')"
          >
            Hotel
          </p>
          <p
            class="nav-link"
            data-toggle="collapse"
            data-target="#navLinkList"
            @click="goTo('rsvp')"
          >
            RSVP
          </p>
          <p
            class="nav-link"
            data-toggle="collapse"
            data-target="#navLinkList"
            @click="goTo('contact')"
          >
            Contact
          </p>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  methods: {
    goTo: function (elementID) {
      // Because we have a sticky header, manually scroll to element
      let element = document.getElementById(elementID)
      let rect = element.getBoundingClientRect()
      let factor = 80
      if (element.clientWidth < 1000) {
        factor = 160
      }
      let scrollPos = rect.top + window.scrollY - factor
      window.scrollTo(0, scrollPos)
    }
  }
}
</script>

<style scoped>
p.nav-link:hover {
  color: #BBBBBB;
  cursor: pointer;
}

p.navbar-brand:hover {
  color: #BBBBBB;
  cursor: pointer;
}

.nav-link {
  transition: color 0.3s ease-out;
  padding: 0;
  margin: 0 2%;
}

.navbar-brand {
  font-size: calc(10px + 2.1vmin);
  transition: color 1s ease-out;
  padding: 0;
  margin: 0 2%;
}

.navbar-nav {
  display: -webkit-box;
}

.navbar-toggler {
  outline: none;
}

.fa-bars {
  color: white;
}

@media only screen and (max-width: 761px) {
  .nav-link {
    font-size: calc(10px + 1.5vmin);
  }
}
</style>
