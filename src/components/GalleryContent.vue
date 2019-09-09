<template>
  <div id="gallery-pictures" class="row bottom-line collapse">
    <div class="col-sm-4 text-center" v-for="i in imageCols" v-bind:key="i">
      <div v-for="j in imageRows" v-bind:key="j">
        <img
          v-if="(3*(j-1) + (i-1)) < images.length"
          v-bind:src="images[3*(j-1) + (i-1)].src"
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
  },
  computed: {
    imageRows: function () {
      return Math.ceil(this.images.length / this.imageCols)
    }
  }
}
</script>

<style scoped>
.collapse.show {
    display: inline-flex;
}
</style>
