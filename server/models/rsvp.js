'use strict';
module.exports = (sequelize, DataTypes) => {
  const RSVP = sequelize.define('RSVP', {
    id: DataTypes.UUID,
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    meal: DataTypes.STRING,
    isComing: DataTypes.BOOLEAN
  }, {});
  RSVP.associate = function(models) {
    // associations can be defined here
  };
  return RSVP;
};