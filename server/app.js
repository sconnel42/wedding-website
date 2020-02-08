const path = require('path')
const express = require('express')
const RSVP = require('./models/rsvp')
const Twilio = require('twilio')
const smsClient = new Twilio(process.env.TWILIO_API_KEY, process.env.TWILIO_API_SECRET)
const history = require('connect-history-api-fallback')
const app = express()
const Op = require('sequelize').Op
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
  if (req.path.startsWith('/api') || req.path.startsWith('/public')) {
    next()
  } else {
    historyMiddleware(req, res, next)
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

app.get('/', (req, res) => {
  res.sendFile('index.html', { root: path.join(__dirname, '../dist') })
})

// Search for a list of RSVPs based on a given key
app.get('/api/rsvp', (req, res, next) => {
  const searchKey = req.query.key

  if (!searchKey) {
    let err = new Error('Missing parameter')
    err.statusCode = 400
    return next(err)
  }

  // Find the rsvps
  RSVP.findAll({
    where: {
      searchKey: {
        [Op.like]: `%${searchKey}%`
      }
    }
  }).then(
    // eslint-disable-next-line
    rsvps => {
      let rsvpList = []
      rsvps.forEach(rsvp => {
        rsvpList.push({
          id: rsvp.id,
          name: rsvp.name,
          meal: rsvp.meal || 'Choose meal...',
          isComing: rsvp.isComing
        })
      })
      return res.json({ 'rsvps': rsvpList })
    }
  ).catch(
    err => {
      // eslint-disable-next-line
      console.error(err.message);

      let error = new Error('An error occurred when looking for RSVPs!')
      error.statusCode = 500
      return next(error)
    }
  )
})

// Update a list of RSVPs in the DB
app.post('/api/rsvp', (req, res, next) => {
  const rsvps = req.body.rsvps

  // Queue up the updates to make to the DB
  let promiseList = []
  rsvps.forEach(rsvp => {
    promiseList.push(
      RSVP.update({
        name: rsvp.name,
        email: rsvp.email,
        meal: rsvp.meal,
        isComing: rsvp.isComing
      }, {
        where: {
          id: rsvp.id
        }
      }).then(updatedRow => {
        console.log(`Updated row with id ${rsvp.id}`)
      }).catch(err => {
        console.error(err.message)
        throw new Error(err.message)
      })
    )
  })

  // Actually do all of the updates
  Promise.all(promiseList).then((results) => {
    return res.status(200).send({ 'message': 'RSVPs updated' })
  }).catch((results) => {
    let error = new Error('A RSVP failed to be updated!')
    error.statusCode = 500
    return next(error)
  })
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
