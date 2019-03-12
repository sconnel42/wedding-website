<template>
  <div class="dark-gray sticky-top">
    <nav id="wedding-nav" class="navbar navbar-default" role="navigation">
      <div class="navbar-collapse">
        <ul class="nav nav-justified">
          <li class="nav-item flex-center">
            <p class="nav-link" v-on:click="goTo('about')">About Us</p>
          </li>
          <li class="nav-item flex-center">
            <p class="nav-link" v-on:click="goTo('gallery')">Picture Gallery</p>
          </li>
          <li class="nav-item flex-center">
            <p class="nav-link" v-on:click="goTo('venue')">Church/Venue</p>
          </li>
          <li class="nav-item disabled">
            <p class="nav-link"></p>
          </li>
          <li class="flex-center">
            <p class="navbar-brand fancy-font">Becca & Sean</p>
          </li>
          <li class="nav-item disabled">
            <p class="nav-link"></p>
          </li>
          <li class="nav-item flex-center">
            <p class="nav-link" v-on:click="goTo('rsvp')">RSVP</p>
          </li>
          <li class="nav-item flex-center">
            <p class="nav-link" v-on:click="goTo('registry')">Registry</p>
          </li>
          <li class="nav-item flex-center">
            <p class="nav-link" v-on:click="goTo('contact')">Contact</p>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  methods: {
    goTo: function(elementID) {
      // Because we have a sticky header, manually scroll to element 
      let element = document.getElementById(elementID);
      let rect = element.getBoundingClientRect();
      let factor = 40 + (element.clientWidth/25);
      let scrollPos = rect.top + window.scrollY - factor;
      window.scrollTo(0, scrollPos);
    }
  }
}
</script>

<style scoped>
p.nav-link:hover {
  color: #BBBBBB;
  cursor: pointer;
}

.nav-link {
  transition: color 1s ease-out;
}

.navbar-brand {
  font-size: calc(10px + 2.1vmin);
}
</style>
