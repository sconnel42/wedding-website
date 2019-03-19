<template>
  <div id="gallery" v-bind:class="{'row': true, 'bottom-line': !galleryOpen}">
    <div class="col-sm-12">
      <div class="row">
        <div id="pic-button" class="col-3 col-sm-4 col-lg-5 d-flex justify-content-center padded">
          <button
            type="button"
            class="btn btn-info"
            data-toggle="collapse"
            data-target="#gallery-pictures"
            v-on:click="galleryOpen = !galleryOpen"
          >
            {{toggleText()}}
          </button>
        </div>
        <div class="col-9 col-sm-8 col-lg-7 padded">
          <h3 id="pic-header">Picture Gallery</h3>
        </div>
      </div>
      <div class="text-center">
        <h5 class="padded">Here's some pictures showing our adventures!</h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GalleryHeader',
  data() {
    return {
      galleryOpen: false
    }
  },
  methods: {
    toggleText: function() {
      if (this.galleryOpen) {
        return "Hide";
      }
      return "Show";
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
</style>
