const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class CalorieIntake extends Model {}

CalorieIntake.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },

    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },

    meal_type: {
      type: DataTypes.STRING,
      allowNull: false
    },

    calorie_amount: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'CalorieIntake',
  }
);

module.exports = CalorieIntake;
