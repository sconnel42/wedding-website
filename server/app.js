const path = require('path');
const express = require('express');
const RSVP = require('./models/rsvp');
const Twilio = require('twilio');
const smsClient = new Twilio(process.env.TWILIO_API_KEY, process.env.TWILIO_API_SECRET);
const history = require('connect-history-api-fallback');
const app = express();
const staticFileMiddleware = express.static(path.join(__dirname, '../dist'));

app.use(express.json());

app.use(staticFileMiddleware);
app.use(history({
    index: '/dist/index.html'
}));
app.use(staticFileMiddleware);


// Error handling
// eslint-disable-next-line
app.use(function(err, req, res, next) {
  // eslint-disable-next-line
  console.error(err.message);

  if (!err.statusCode) {
		err.statusCode = 500;
	}
  
	res.status(err.statusCode).send(err.message);
});

app.get('/', (req, res) => {
  res.sendFile('index.html', { root: path.join(__dirname, '../dist') });
});

// Put an RSVP into the DB
app.post('/api/rsvp', (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;
  const meal = req.body.meal;
  const isComing = Boolean(req.body.isComing);

  if (!name || !email || !meal || req.body.isComing === undefined) {
    let err = new Error('Missing parameter');
		err.statusCode = 400;
		return next(err);
  }

  // Create a new rsvp
  RSVP.create({ name, email, meal, isComing }).then(
    // eslint-disable-next-line
    rsvp => {
      return res.json({"message": `RSVP created with id: ${rsvp.id}`});
    }
  ).catch(
    err => {
      // eslint-disable-next-line
      console.error(err.message);

      let error = new Error('RSVP failed to be created!');
      error.statusCode = 500;
      return next(error);
    }
  );
});

// Send a contact message
app.post('/api/contact', (req, res, next) => {
  const name = req.body.name;
  const contactMessage = req.body.message;

  if (!name || !contactMessage) {
    let err = new Error('Missing parameter');
		err.statusCode = 400;
		return next(err);
  }

  smsClient.messages.create({
    to: process.env.ADMIN_PHONE_NUMBER,
    from: process.env.TWILIO_PHONE_NUMBER,
    body: `\n${contactMessage}\n\t-${name}`
  }).then(
    (message) => {
      return res.json({"message": `Contact message sent with id ${message.sid}`});
    }
  ).catch(
    (err) => {
      let error = new Error('An error occurred while trying to send text!');

      // eslint-disable-next-line
      console.error(err);
      error.statusCode = 500;
      return next(error);
    }
  );
});

module.exports = app
