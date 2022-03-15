const { CaloriesConsumed } = require('../models');

const caloriesconsumedData = [
  {
    // date: 'April 20, 2021 08:30:00',
    // meal_type: 'breakfast',
    amount: 800,
    goal: 2300,
    user_id: 1,
  },

  {
    // date: 'April 20, 2021 12:00:00',
    // meal_type: 'lunch',
    amount: 500,
    goal: 2300,
    user_id: 2,
  },

  {
    // date: 'April 20, 2021 15:00:00',
    // meal_type: 'snack',
    amount: 700,
    goal: 2300,
    user_id: 3,
  },

  {
    // date: 'April 20, 2021 18:00:00',
    // meal_type: 'dinner',
    amount: 900,
    goal: 2300,
    user_id: 4,
  },
];

const seedCaloriesConsumed = () => CaloriesConsumed.bulkCreate(caloriesconsumedData);

module.exports = seedCaloriesConsumed;
