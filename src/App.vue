<template>
  <div
    id="app"
    class="fadeIn"
  >
    <NavBar />
    <ContentHeader />
    <ContentBody />
    <div class="credits">
      Icons made by
      <a
        href="https://www.flaticon.com/<?=_('authors').'/'?>roundicons"
        title="Roundicons"
      >Roundicons</a> from
      <a
        href="https://www.flaticon.com/"
        title="Flaticon"
      >www.flaticon.com</a>
      is licensed by
      <a
        href="http://creativecommons.org/licenses/by/3.0/"
        title="Creative Commons BY 3.0"
        target="_blank"
      > CC 3.0 BY</a>
    </div>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import ContentHeader from './components/ContentHeader.vue'
import ContentBody from './components/ContentBody.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    ContentHeader,
    ContentBody
  },
  mounted: function () {
    this.$nextTick(function () {
      let element = document.getElementById('initial-container')
      element.classList.add('hide-container')
    })
  }
}
</script>

<style>
/* Styles on page elements */
html {
  scroll-behavior: smooth;
}

body {
  background: #035d65;
}

h1, h2, h3, h4, h5, h6, p, li, a, label {
  color: white;
}

h1 {
  font-size: calc(16px + 3.2vmin);
}

h3 {
  font-size: calc(12px + 2.5vmin);
}

h5 {
  font-size: calc(10px + 1.5vmin);
}

p {
  font-size: calc(8px + 1.2vmin);
}

/* Styles applied to components separately */
#app {
  font-family: 'Arima Madurai', Helvetica, Arial, cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#content-header {
  margin: 0 auto;
  width: 90%;
}

#content-body {
  margin: 0 auto;
  width: 90%;
}

#wedding-nav {
  font-size: calc(8px + 1.0vmin);
}

/* Useful classes used in multiple components */
.fancy-font {
  font-family: 'Cedarville Cursive', cursive;
}

.credits {
  color: white;
  text-align: right;
  font-size: calc(4px + 0.9vmin);
}

.padded {
    padding-top: 2vmin;
    padding-bottom: 2vmin;
}

.padded-sm {
    padding-top: 1vmin;
    padding-bottom: 1vmin;
}

.bottom-line {
    border-bottom: 2px solid rgb(105,130,129, 0.2);
}

.text-link {
  color: #9e9e9e;
}

.img-fluid {
    max-width: 80%;
}

.flex-center {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.flex-center p {
    text-align: center;
    margin: 1vmin auto;
}

.flex-center h3 {
    text-align: center;
    margin: 1vmin auto;
}
</style>
