const Sequelize = require('sequelize');

module.exports = {
  session: new Sequelize(`${process.env.DB_CONNECTION_STRING}`, {logging: false})
};
