const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class CaloriesBurned extends Model {}
//make default values = zero, created_at, updated_at
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

    // meal_type: {
    //   type: DataTypes.STRING,
    //   allowNull: false
    // },
    
    user_id: {
      primaryKey: true,
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
    }},

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
  modelName: 'CaloriesBurned',

});

module.exports = CaloriesBurned;
