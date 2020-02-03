<template>
  <div
    id="content-header"
    class="row justify-content-center bottom-line"
  >
    <div class="text-center">
      <img
        class="img-fluid padded top-padded"
        src="https://www.dropbox.com/s/uisx7l5yhq7oc64/IMG_20180810143123.jpg?raw=1"
      >
    </div>
    <div class="col-sm-12 text-center my-auto">
      <h1 class="padded fancy-font">
        October 10th, 2020
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContentHeader',
  data: function () {
    return {
      publicPath: process.env.BASE_URL
    }
  }
}
</script>

<style scoped>
.top-padded {
    padding-top: 50px;
}
</style>
