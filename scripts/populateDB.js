const fs = require('fs')
const readline = require('readline')
const { google } = require('googleapis')
const RSVP = require('../server/models/rsvp')

// If modifying these scopes, delete token.json.
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly']
// The file token.json stores the user's access and refresh tokens, and is
// created automatically when the authorization flow completes for the first
// time.
const TOKEN_PATH = '~/tokens/token.json'

// Authorize and run callback
authorize(getGuestList)

/**
 * Create an OAuth2 client with the given credentials, and then execute the
 * given callback function.
 * @param {function} callback The callback to call with the authorized client.
 */
function authorize (callback) {
  const oAuth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_API_KEY,
    process.env.GOOGLE_API_SECRET,
    process.env.GOOGLE_REDIRECT_URI
  )

  // Check if we have previously stored a token.
  fs.readFile(TOKEN_PATH, (err, token) => {
    if (err) return getNewToken(oAuth2Client, callback)
    oAuth2Client.setCredentials(JSON.parse(token))
    callback(oAuth2Client)
  })
}

/**
 * Get and store new token after prompting for user authorization, and then
 * execute the given callback with the authorized OAuth2 client.
 * @param {google.auth.OAuth2} oAuth2Client The OAuth2 client to get token for.
 * @param {getEventsCallback} callback The callback for the authorized client.
 */
function getNewToken (oAuth2Client, callback) {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES
  })
  console.log('Authorize this app by visiting this url:', authUrl)
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })
  rl.question('Enter the code from that page here: ', (code) => {
    rl.close()
    oAuth2Client.getToken(code, (err, token) => {
      if (err) return console.error('Error while trying to retrieve access token', err)
      oAuth2Client.setCredentials(token)
      // Store the token to disk for later program executions
      fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
        if (err) return console.error(err)
        console.log('Token stored to', TOKEN_PATH)
      })
      callback(oAuth2Client)
    })
  })
}

/**
 * Prints the names and majors of students in a sample spreadsheet:
 * @see https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit
 * @param {google.auth.OAuth2} auth The authenticated Google OAuth client.
 */
function getGuestList (auth) {
  const sheets = google.sheets({ version: 'v4', auth })
  console.log(`SheetID: ${process.env.GOOGLE_SHEET_ID}`)
  sheets.spreadsheets.values.get({
    spreadsheetId: process.env.GOOGLE_SHEET_ID,
    range: 'Sheet1!A2:A'
  }, (err, res) => {
    if (err) return console.log('The API returned an error: ' + err)
    const rows = res.data.values
    if (rows.length) {
      let guests = []
      rows.map((row) => {
        guests.push(row[0])
      })
      console.log(guests)
      insertIntoDB(guests)
    } else {
      console.log('No data found.')
    }
  })
}

function insertIntoDB (guestList) {
  guestList.forEach((guest) => {
    RSVP.findOrCreate({
      where: {
        name: guest,
        email: 'not_set'
      }
    }).spread((rsvpResult, created) => {
      if (created) {
        console.log(`Created RSVP for ${guest}`)
      } else {
        console.log(`RSVP for ${guest} already exists`)
      }
    })
  })
}
