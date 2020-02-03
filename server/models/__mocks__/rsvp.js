const uuid = require('uuid/v4');

const rsvp = {
  id: uuid(),
  name: 'Guest1',
  email: 'guest1@abc.com',
  meal: 'Chicken',
  isComing: true
}

// Mocking out RSVP.update
module.exports = {
  update: (args) => {
    return new Promise(
      (resolve, reject) => {
        process.nextTick(() => {
          if (args.meal != 'bugs') {
            resolve(rsvp)
          } else {
            reject({'message': 'RSVP failed to be updated!'})
          }
        })
      }
    ); 
  }
};
