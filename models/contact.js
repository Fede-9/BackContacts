'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class contact extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

      // relacion
      contact.belongsTo(models.user)
    }
  }
  contact.init({
    name: DataTypes.STRING,
    phone: DataTypes.STRING,
    date: DataTypes.DATE,
    favourite: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'contact',
  });
  return contact;
};