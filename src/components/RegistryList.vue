<template>
  <div id="registry" class="row bottom-line">
    <div class="col-sm-12 text-center">
      <h3 class="padded">Registry</h3>
      <h5 v-if="registryEnabled">
        Want to get us a gift? Check out our registry here:
      </h5>
      <h4 v-if="!registryEnabled">
        This will be active once we finalize more details about the wedding. <br> Come back when you receive your invitation!
      </h4>
    </div>
    <div class="col-sm-12 text-center" v-for="registry in registries" v-bind:key="registry.src">
      <a v-bind:href="registry.link">
        <img
          v-bind:src="registry.src"
          class="img-fluid padded"
        >
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegistryList',
  data () {
    return {
      registryEnabled: true,
      defaultLink: 'https://www.zola.com/',
      baseRegistries: [
        {
          src: `${process.env.BASE_URL}imgs/zola.png`,
          link: 'https://www.zola.com/registry/rebeccaandseanoctober10'
        }
      ]
    }
  },
  computed: {
    registries: function () {
      if (!this.registryEnabled) {
        this.baseRegistries.forEach((item) => {
          item.link = this.defaultLink
        })
      }
      return this.baseRegistries
    }
  }
}
</script>
<style scoped>
img {
  border-radius: 50px;
}
</style>
