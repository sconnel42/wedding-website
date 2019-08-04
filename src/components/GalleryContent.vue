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
      images: [
        {
          src: `${process.env.BASE_URL}imgs/IMG_20181019.jpg`
        },
        {
          src: `${process.env.BASE_URL}imgs/IMG_20181021.jpg`
        },
        {
          src: `${process.env.BASE_URL}imgs/IMG_20181118.jpg`
        },
        {
          src: `${process.env.BASE_URL}imgs/IMG_20181122.jpg`
        },
        {
          src: `${process.env.BASE_URL}imgs/IMG_20181201.jpg`
        },
        {
          src: `${process.env.BASE_URL}imgs/IMG_20190102.jpg`
        }
      ]
    }
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
