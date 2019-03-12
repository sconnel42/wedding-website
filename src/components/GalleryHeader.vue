<template>
  <div id="gallery" v-bind:class="{'row': true, 'bottom-line': !galleryOpen}">
    <div class="col-sm-2 flex-center">
      <div class="text-center">
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
    </div>
    <div class="col-sm-8">
      <div class="text-center">
        <h3 class="padded">Picture Gallery</h3>
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
