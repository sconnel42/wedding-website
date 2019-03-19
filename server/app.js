const express = require('express');
const app = express();

app.use(express.json());


// Error handling
app.use(function(err, req, res, next) {
	// Log error message in the console
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

	// TODO: Write RSVP to DB
  return res.json({"message": "RSVP accepted!\n"});
});

// Send a contact message
app.post('/contact', (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;

  if (!name || !email || !message) {
    let err = new Error('Missing parameter');
		err.statusCode = 400;
		return next(err);
  }

	// TODO: Send an email (text?) to us
  return res.json({"message": "RSVP accepted!\n"});
});


// Start server
app.listen(process.env.SERVER_PORT, () => {
  console.log(`Example app listening on port ${process.env.SERVER_PORT}!`)
});
