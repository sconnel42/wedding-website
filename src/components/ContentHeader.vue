<template>
  <div id="content-header" class="row justify-content-center bottom-line">
    <div class="col-sm-12 text-center">
        <img class="img-fluid padded top-padded" :src="`${publicPath}imgs/IMG_20180810.jpg`">
    </div>
    <div class="col-sm-12 text-center my-auto">
        <h1 class="padded fancy-font">October 10th, 2020</h1>
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
