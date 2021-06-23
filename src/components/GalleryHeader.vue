<template>
  <div
    id="gallery"
    :class="{'row': true, 'bottom-line': !galleryOpen}"
  >
    <div class="col-sm-12">
      <div class="row">
        <div
          id="pic-button"
          class="col-3 col-sm-4 col-lg-5 d-flex justify-content-center padded"
        >
          <button
            type="button"
            class="btn btn-info"
            data-toggle="collapse"
            data-target="#gallery-pictures"
            @click="galleryOpen = !galleryOpen"
          >
            {{ toggleText() }}
          </button>
        </div>
        <div class="col-9 col-sm-8 col-lg-7 padded">
          <h3 id="pic-header">
            Picture Gallery
          </h3>
        </div>
      </div>
      <div class="text-center">
        <h5 class="padded-top">
          Here's some pictures showing our adventures!
        </h5>
        <h6 class="padded-bottom">
          Credit goes to Caitlin & Luke for our wonderful engagement and wedding photos!
          See
          <a
            class="text-link"
            href="https://caitlinandluke.com/2019/07/sean-rebecca-fransen-nature-area-engagement-photos/"
          >this link</a>
          for all of our engagement photos. and
          <a
            class="text-link"
            href="https://caitlinandluke.client-gallery.com/gallery/becca-and-sean"
          >this link</a>
          for all our wedding photos.
        </h6>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GalleryHeader',
  data () {
    return {
      galleryOpen: false
    }
  },
  methods: {
    toggleText: function () {
      if (this.galleryOpen) {
        return 'Hide'
      }
      return 'Show'
    }
  }
}
</script>
<style scoped>
#pic-header {
  padding-top: 2.2vmin;
  padding-left: 5px;
}

#pic-button {
  padding: 3.5vmin;
}

.padded-top {
  padding-top: 10px;
}

.padded-bottom {
  padding-bottom: 20px;
}
</style>
