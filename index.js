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
    mealOptions: [
      "Chicken",
      "Pork"
    ],
    imageCols: 3,
    rsvpFormUrl: 'http://localhost:9000/submit-rsvp',
    contactFormUrl: 'http://localhost:9000/send-message',
    rsvpData: {
      name: '',
      email: '',
      meal: 'Chicken',
      isComing: true
    },
    contactData: {
      name: '',
      email: '',
      message: ''
    },
    registries: [
      {
        src: 'icons/amazon.jpg',
        alt: 'Amazon',
        link: 'https://www.amazon.com'
      },
      {
        src: 'icons/ikea.png',
        alt: 'IKEA',
        link: 'https://www.ikea.com/us/en/'
      }
    ]
  },
  computed: {
    imageRows: function () {
      return Math.ceil(this.images.length/this.imageCols);
    }
  },
  methods: {
    handleRSVPSubmit() {
      if(this.rsvpData.isComing === true) {
        console.log(this.rsvpData.name, "is coming to the wedding");
        console.log(this.rsvpData.name, "will have", this.rsvpData.meal, "for dinner");
      }
      else {
        console.log(this.rsvpData.name, "is not coming to the wedding");
      }
      console.log(this.rsvpData.name, "is using this email:", this.rsvpData.email);
      console.log("Sending RSVP for", this.rsvpData.name, "to", this.rsvpFormUrl);
    },
    handleContactSubmit() {
      console.log(this.contactData.name, "is using this email:", this.contactData.email);
      console.log(this.contactData.name, "is sending this message:", this.contactData.message);
      console.log("Sending Question for", this.contactData.name, "to", this.contactFormUrl);
    }
  }
});
