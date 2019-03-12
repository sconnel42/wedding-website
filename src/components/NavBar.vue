<template>
  <div class="dark-gray">
    <nav id="wedding-nav" class="navbar navbar-default" role="navigation">
      <div class="navbar-collapse">
        <ul class="nav nav-justified">
          <li class="nav-item flex-center">
            <a class="nav-link" href="#about">About Us</a>
          </li>
          <li class="nav-item flex-center">
            <a class="nav-link" href="#gallery">Picture Gallery</a>
          </li>
          <li class="nav-item flex-center">
            <a class="nav-link" href="#venue">Church/Venue</a>
          </li>
          <li class="nav-item disabled">
            <a class="nav-link"></a>
          </li>
          <li class="flex-center">
              <a class="navbar-brand fancy-font">Becca & Sean</a>
          </li>
          <li class="nav-item disabled">
            <a class="nav-link"></a>
          </li>
          <li class="nav-item flex-center">
            <a class="nav-link" href="#rsvp">RSVP</a>
          </li>
          <li class="nav-item flex-center">
            <a class="nav-link" href="#registry">Registry</a>
          </li>
          <li class="nav-item flex-center">
            <a class="nav-link" href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style scoped>
.navbar-brand {
  font-size: calc(10px + 2.1vmin);
}
</style>
