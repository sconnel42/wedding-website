const fs = require('fs')
const path = require('path')
const express = require('express')
const RSVP = require('./models/rsvp')
const Twilio = require('twilio')
const smsClient = new Twilio(process.env.TWILIO_API_KEY, process.env.TWILIO_API_SECRET)
const history = require('connect-history-api-fallback')
const app = express()
const staticFileMiddleware = express.static(path.join(__dirname, '../dist'))
const historyMiddleware = history({
  disableDotRule: true,
  verbose: true,
  index: '/dist/index.html'
})

app.use(express.json())

// Make it so that all frontend assets are served from index.html
// and everything else goes through express
app.use(staticFileMiddleware)
app.use((req, res, next) => {
  if (req.path.startsWith('/api')) {
    next();
  } else {
    historyMiddleware(req, res, next);
  }
})
app.use(staticFileMiddleware)

// Error handling
// eslint-disable-next-line
app.use(function(err, req, res, next) {
  // eslint-disable-next-line
  console.error(err.message);

  if (!err.statusCode) {
    err.statusCode = 500
  }

  res.status(err.statusCode).send(err.message)
})

app.get('/api/adventure-images', (req, res) => {
  const folderPath = 'dist/imgs2'
  var imageList = []
  fs.readdir(folderPath, (err, files) => {
    if (!err) {
      files.forEach(file => {
        imageList.push({ 'src': `imgs2/${file}` })
      })
    }
    res.json({ 'images': imageList })
  })
})

app.get('/', (req, res) => {
  res.sendFile('index.html', { root: path.join(__dirname, '../dist') })
})

// Put an RSVP into the DB
app.post('/api/rsvp', (req, res, next) => {
  console.log('Ya got me!')
  const name = req.body.name
  const email = req.body.email
  const meal = req.body.meal
  const isComing = Boolean(req.body.isComing)

  if (!name || !email || !meal || req.body.isComing === undefined) {
    let err = new Error('Missing parameter')
    err.statusCode = 400
    return next(err)
  }

  // Create a new rsvp
  RSVP.create({ name, email, meal, isComing }).then(
    // eslint-disable-next-line
    rsvp => {
      return res.json({ 'message': `RSVP created with id: ${rsvp.id}` })
    }
  ).catch(
    err => {
      // eslint-disable-next-line
      console.error(err.message);

      let error = new Error('RSVP failed to be created!')
      error.statusCode = 500
      return next(error)
    }
  )
})

// Send a contact message
app.post('/api/contact', (req, res, next) => {
  const name = req.body.name
  const contactMessage = req.body.message

  if (!name || !contactMessage) {
    let err = new Error('Missing parameter')
    err.statusCode = 400
    return next(err)
  }

  smsClient.messages.create({
    to: process.env.ADMIN_PHONE_NUMBER,
    from: process.env.TWILIO_PHONE_NUMBER,
    body: `\n${contactMessage}\n\t-${name}`
  }).then(
    (message) => {
      return res.json({ 'message': `Contact message sent with id ${message.sid}` })
    }
  ).catch(
    (err) => {
      let error = new Error('An error occurred while trying to send text!')

      // eslint-disable-next-line
      console.error(err);
      error.statusCode = 500
      return next(error)
    }
  )
})

module.exports = app
