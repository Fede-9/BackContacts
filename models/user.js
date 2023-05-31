'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {


    static associate(models) {
      
      // relacion
      user.hasMany(models.contact)
    }
  }
  user.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    pass: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};