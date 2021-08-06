const fs =  require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const config = require('../config/config');
const db = {}

const sequelize = new Sequelize (
    config.db.database,
    config.db.user,
    config.db.password,
    config.db.obtions
)

fs.readdirSync(_dirname)
  .filter((file) =>
    file !== 'index.js'
  )
  .forEach((file) => {
  //const model = sequelize.import(path.join(_dirname, file))
    const model = require(path.join(_dirname, file))(sequelize, Sequelize.DataTypes)
    db[model.name] = model;
  })

  db.sequelize = sequelize;
  db.Sequelize = sequelize;

  module.exports = db;