<template>
  <div
    id="gallery-pictures"
    class="row bottom-line collapse"
  >
    <div
      v-for="i in imageCols"
      :key="i"
      class="col-sm-4 text-center"
    >
      <div
        v-for="j in imageRows"
        :key="j"
      >
        <img
          v-if="(3*(j-1) + (i-1)) < images.length"
          :src="images[3*(j-1) + (i-1)].src"
          class="img-fluid padded rounded"
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GalleryContent',
  data () {
    return {
      imageCols: 3,
      images: []
    }
  },
  computed: {
    imageRows: function () {
      return Math.ceil(this.images.length / this.imageCols)
    }
  },
  beforeMount: function () {
    fetch('/api/adventure-images').then(
      (response) => {
        response.json().then((data) => {
          this.images = data.images
        })
      }
    ).catch(
      (err) => {
        console.log(err)
        this.images = []
      }
    )
  }
}
</script>

<style scoped>
.collapse.show {
    display: inline-flex;
}
</style>
