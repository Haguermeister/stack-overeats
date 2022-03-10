const { CalorieIntake } = require('../models');

const calorieintakeData = [
  {
    date: 'April 20, 2021 08:30:00',
    meal_type: 'breakfast',
    calorie_amount: '350 calories',
  },

  {
    date: 'April 20, 2021 12:00:00',
    meal_type: 'lunch',
    calorie_amount: '550 calories',
  },

  {
    date: 'April 20, 2021 15:00:00',
    meal_type: 'snack',
    calorie_amount: '200 calories',
  },

  {
    date: 'April 20, 2021 18:00:00',
    meal_type: 'dinner',
    calorie_amount: '600 calories',
  },

];

const seedCalorieIntake = () => CalorieIntake.bulkCreate(calorieintakeData);

module.exports = seedCalorieIntake;
