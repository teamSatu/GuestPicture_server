'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idRoom: {
        type: Sequelize.INTEGER,
        references : {
          model : "Rooms",
          key : "id"
        },
        onDelete : "cascade",
        onUpdate : "cascade"
      },
      answer : {
        type : Sequelize.STRING
      },
      username: {
        type: Sequelize.STRING
      },
      score: {
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};