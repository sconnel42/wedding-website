<template>
  <div id="registry" class="row bottom-line">
    <div class="col-sm-12 text-center">
      <h3 class="padded">Registries</h3>
      <h5>
        Want to get us a gift but aren't sure what to buy? Check out our registries here for ideas:
      </h5>
    </div>
    <div class="col-sm-12 text-center" v-for="registry in registries" v-bind:key="registry.src">
      <a v-bind:href="registry.link"><img
        v-bind:src="registry.src"
        class="img-fluid padded"
        ></a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegistryList',
  data() {
    return {
      registries: [
        {
          src: `${process.env.BASE_URL}icons/amazon.jpg`,
          link: 'https://www.amazon.com'
        },
        {
          src: `${process.env.BASE_URL}icons/ikea.png`,
          link: 'https://www.ikea.com/us/en/'
        }
      ]
    }
  }
}
</script>
<style scoped>
img {
  border-radius: 15%;
}
</style>
