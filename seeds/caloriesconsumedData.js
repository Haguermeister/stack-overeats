const { CaloriesConsumed } = require('../models');

const caloriesconsumedData = [
  {
    // date: 'April 20, 2021 08:30:00',
    // meal_type: 'breakfast',
    user_id: 1,
    amount: 2100,
    goal: 2300
  },

  {
    // date: 'April 20, 2021 12:00:00',
    // meal_type: 'lunch',
    user_id: 2,
    amount: 2300,
    goal: 2300
  },

  {
    // date: 'April 20, 2021 15:00:00',
    // meal_type: 'snack',
    user_id: 3,
    amount: 2500,
    goal: 2300
  },

  {
    // date: 'April 20, 2021 18:00:00',
    // meal_type: 'dinner',
    user_id: 4,
    amount: 2200,
    goal: 2300
  },

];

const seedCaloriesConsumed = () => CaloriesConsumed.bulkCreate(caloriesconsumedData, {individualHooks: true});

module.exports = seedCaloriesConsumed;
