var app = new Vue({
  el: '#app',
  data: {
    images: [
      {
        src: 'imgs/IMG_20181019.jpg',
      },
      {
        src: 'imgs/IMG_20181021.jpg',
      },
      {
        src: 'imgs/IMG_20181118.jpg',
      },
      {
        src: 'imgs/IMG_20181122.jpg',
      },
      {
        src: 'imgs/IMG_20181201.jpg',
      },
      {
        src: 'imgs/IMG_20190102.jpg',
      },
    ],
    mealOptions: [
      "Chicken",
      "Pork"
    ],
    imageCols: 3,
    churchImg: {
      src: 'imgs/church.jpg',
      alt: 'St Elizabeth Seton'
    },
    venueImg: {
      src: 'imgs/venue.jpg',
      alt: 'Monte Bello Estate'
    },
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
      // Handle submit
      if(this.rsvpData.isComing === true) {
        console.log(this.rsvpData.name, "is coming to the wedding");
        console.log(this.rsvpData.name, "will have", this.rsvpData.meal, "for dinner");
      }
      else {
        console.log(this.rsvpData.name, "is not coming to the wedding");
      }
      console.log(this.rsvpData.name, "is using this email:", this.rsvpData.email);
      console.log("Sending RSVP for", this.rsvpData.name, "to", this.rsvpFormUrl);

      // Clear form
      this.rsvpData.name = "";
      this.rsvpData.email = "";
      this.rsvpData.meal = this.mealOptions[0];
    },
    handleContactSubmit() {
      // Handle submit
      console.log(this.contactData.name, "is using this email:", this.contactData.email);
      console.log(this.contactData.name, "is sending this message:", this.contactData.message);
      console.log("Sending Question for", this.contactData.name, "to", this.contactFormUrl);

      // Clear form
      this.contactData.name = "";
      this.contactData.email = "";
      this.contactData.message = "";
    }
  }
});
