var app = new Vue({
  el: '#app',
  data: {
    images: [
      {
        src: 'imgs/IMG_20181019.jpg',
        alt: 'Eyeball 2018'
      },
      {
        src: 'imgs/IMG_20181021.jpg',
        alt: 'Hiking in Garden of the Gods'
      },
      {
        src: 'imgs/IMG_20181118.jpg',
        alt: 'Backpacking in Mark Twain National Forest'
      },
      {
        src: 'imgs/IMG_20181122.jpg',
        alt: 'Thanksgiving 2018'
      },
      {
        src: 'imgs/IMG_20181201.jpg',
        alt: 'Katie & Casey\'s Wedding'
      },
      {
        src: 'imgs/IMG_20190102.jpg',
        alt: 'Skiing in Lutsen 2019'
      },
    ],
    imageCols: 3,
  },
  computed: {
    imageRows: function () {
      return Math.ceil(this.images.length/this.imageCols);
    }
  }
});
