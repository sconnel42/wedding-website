function mockTwilio(apiKey, secret) {
  this.apiKey = apiKey;
  this.secret = secret;
  this.messages = {
    create: (args) => {
      return new Promise(
        (resolve, reject) => {
          process.nextTick(() => {
            if (!args.body.includes('blerg')) {
              resolve({'sid': '5678'});
            } else {
              reject({'message': 'Bad message!'});
            }
          })
        }
      )
    }
  }
}

module.exports = mockTwilio;
