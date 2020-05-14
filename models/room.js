'use strict';
module.exports = (sequelize, DataTypes) => {
  class Room extends sequelize.Sequelize.Model {}

  Room.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName : "Room"
  });
  Room.associate = function(models) {
    Room.hasMany = (models.User)
  };
  return Room;
};