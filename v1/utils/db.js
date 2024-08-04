const { Sequelize } = require('sequelize');
const path = require('path');

// Define the path to the database file
const dbPath = path.join(__dirname, '../../../database.sqlite');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: dbPath,
});

module.exports = sequelize;
