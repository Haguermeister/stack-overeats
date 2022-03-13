const { CaloriesConsumed } = require('../models');

const caloriesconsumedData = [
  {
    // date: 'April 20, 2021 08:30:00',
    // meal_type: 'breakfast',
    amount: 2100,
    goal: 2300,
    user_id: 1,
  },

  {
    // date: 'April 20, 2021 12:00:00',
    // meal_type: 'lunch',
    amount: 2400,
    goal: 2300,
    user_id: 2,
  },

  {
    // date: 'April 20, 2021 15:00:00',
    // meal_type: 'snack',
    amount: 2500,
    goal: 2300,
    user_id: 3,
  },

  {
    // date: 'April 20, 2021 18:00:00',
    // meal_type: 'dinner',
    amount: 2200,
    goal: 2300,
    user_id: 4,
  },
];

const seedCaloriesConsumed = () => CaloriesConsumed.bulkCreate(caloriesconsumedData);

module.exports = seedCaloriesConsumed;
