<template>
  <div id="app">
    <NavBar/>
    <ContentHeader/>
    <ContentBody/>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import ContentHeader from './components/ContentHeader.vue'
import ContentBody from './components/ContentBody.vue'

export default {
  name: 'app',
  components: {
    NavBar,
    ContentHeader,
    ContentBody
  }
}
</script>

<style>
body {
    background: #035d65;
}

h1, h2, h3, h4, h5, h6, p, li, a, label {
    color: white;
}

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

.fancy-font {
  font-family: 'Cedarville Cursive', cursive;
}

.credits {
  color: white;
  text-align: right;
  font-size: calc(4px + 0.9vmin);
}

.teal {
    background: #035d65;
}

.bold-orange {
    background: #FF6C08;
}

.raspberry {
    background: #D01E5C;
}

.dark-red {
    background: #8E151E;
}

.emerald {
    background: #115E58;
}

.dark-blue {
    background: #0B0365;
}

.purple {
    background: #65035D;
}

.dark-gray {
    background: #629a9f;
}

.dark-gold {
    background: #D4B47B;
}

.padded {
    padding-top: 2vmin;
    padding-bottom: 2vmin;
}

.top-padded {
    padding-top: 50px;
}

.padded-sm {
    padding-top: 1vmin;
    padding-bottom: 1vmin;
}

.bottom-line {
    border-bottom: 2px solid rgb(105,130,129, 0.2);
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

@media screen and (min-width: 1450px) {
    .rwd-break { display: none; }
}

#wedding-nav {
  font-size: calc(8px + 1.0vmin);
}

.navbar-brand {
  font-size: calc(10px + 2.1vmin);
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
</style>
