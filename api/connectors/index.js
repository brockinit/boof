'use strict';
import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';
// import env = process.env.NODE_ENV || 'development';
// var config    = require(path.join(__dirname, '..', 'config', 'config.json'))[env];
const sequelize = new Sequelize('boof', null, null, {
  host: 'localhost',
  dialect: 'postgres',
});
const db = {};

fs
  .readdirSync(__dirname)
  .filter((file) => {
    return (file.indexOf('.') !== 0) && (file !== 'index.js');
  })
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db.sequelize.models;
