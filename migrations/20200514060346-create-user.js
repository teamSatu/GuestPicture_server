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
        references: {
          model: "Rooms",
          key: "id"
        },
        onDelete: "cascade",
        onUpdate: "cascade"
      },
      username: {
        type: Sequelize.STRING
      },
      score: {
        type: Sequelize.INTEGER
      },
      answer: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
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