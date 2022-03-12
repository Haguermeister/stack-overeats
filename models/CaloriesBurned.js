const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class CaloriesBurned extends Model {}

CaloriesBurned.init(
  {
    // id: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   primaryKey: true,
    //   autoIncrement: true
    // },

    // date: {
    //   type: DataTypes.DATE,
    //   allowNull: false,
    // },

    // time_spent: {
    //   type: DataTypes.STRING,
    //   allowNull: false
    // },

    // exercise_type: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // }

    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      },

    amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }
},
  
{
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: 'CaloriesBurned',

});

module.exports = CaloriesBurned;
