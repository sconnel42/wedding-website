'use strict';
const Sequelize = require('sequelize');
const config = require('../config');
const session = config.session;
const uuid = require('uuid/v4');

const RSVP = session.define('RSVP', {
  id: {
    type: Sequelize.DataTypes.UUID,
    primaryKey: true,
    defaultValue: () => uuid()
  },
  name: Sequelize.DataTypes.STRING,
  email: Sequelize.DataTypes.STRING,
  meal: Sequelize.DataTypes.STRING,
  isComing: Sequelize.DataTypes.BOOLEAN,
  searchKey: Sequelize.DataTypes.STRING,
}, {});

module.exports = RSVP;
