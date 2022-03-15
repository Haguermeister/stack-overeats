const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class CaloriesConsumed extends Model { }

CaloriesConsumed.init(
  {
    // date: {
    //   type: DataTypes.DATE,
    //   allowNull: false,
    // },

    // meal_type: {
    //   type: DataTypes.STRING,
    //   allowNull: false
    // },

    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },

    user_id: {
      primaryKey: true,
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      }
    },

    amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    goal: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  },

  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'CaloriesConsumed',
  });

module.exports = CaloriesConsumed;
