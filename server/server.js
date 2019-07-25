const app = require('./app');

// Start server
app.listen(process.env.SERVER_PORT, () => {
  // eslint-disable-next-line
  console.log(`Listening on port ${process.env.SERVER_PORT}`)
});
