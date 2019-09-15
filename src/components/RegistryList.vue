<template>
  <div id="registry" class="row bottom-line">
    <div class="col-sm-12 text-center">
      <h3 class="padded">Registry</h3>
      <h5>
        Want to get us a gift? Check out our registry here:
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
  data () {
    return {
      registries: [
        {
          src: `${process.env.BASE_URL}imgs/zola.png`,
          link: 'https://www.zola.com/'
        }
      ]
    }
  }
}
</script>
<style scoped>
img {
  border-radius: 50px;
}
</style>
