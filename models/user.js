'use strict';
module.exports = (sequelize, DataTypes) => {
  class User extends sequelize.Sequelize.Model{}
  User.init({
    idRoom: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'ID Room is required'
        },
        notEmpty: {
          args: true,
          msg: 'ID Room is required'
        }
      }
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
  })
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};