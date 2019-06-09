const express = require('express');
const RSVP = require('./models/rsvp');
const twilio = require('twilio');
const smsClient = twilio(process.env.TWILIO_API_KEY, process.env.TWILIO_API_SECRET);
const app = express();

app.use(express.json());


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

// Put an RSVP into the DB
app.post('/rsvp', (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;
  const meal = req.body.meal;
  const isComing = Boolean(req.body.isComing);

  if (!name || !email || !meal || !isComing) {
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
app.post('/contact', (req, res, next) => {
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
      console.log(err);
      error.statusCode = 400;
      return next(error);
    }
  );
});


// Start server
app.listen(process.env.SERVER_PORT, () => {
  // eslint-disable-next-line
  console.log(`Listening on port ${process.env.SERVER_PORT}`)
});
