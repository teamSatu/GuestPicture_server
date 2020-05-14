'use strict';
module.exports = (sequelize, DataTypes) => {
  class User extends sequelize.Sequelize.Model{}
  User.init({
    idRoom: {
      type: DataTypes.INTEGER,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: 'This username already exists'
      },
      validate: {
        notNull:{
          args: true,
          msg: 'Please input your username'
        },
        notEmpty: {
          args: true,
          msg: 'Please input your username'
        }
      }
    },
    score: {
      type: DataTypes.INTEGER,
      defaultValue = 0
    },
    answer: DataTypes.STRING,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User'
  })
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};