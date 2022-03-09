const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class CalorieOutput extends Model {}

CalorieOutput.init(
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

    time_spent: {
      type: DataTypes.STRING,
      allowNull: false
    },

    exercise_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'CalorieOutput',
  }
);

module.exports = CalorieOutput;
