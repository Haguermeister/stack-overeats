const { CaloriesConsumed } = require('../models');

const caloriesconsumedData = [
  {
    // date: 'April 20, 2021 08:30:00',
    // meal_type: 'breakfast',
    amount: '2,000',
  },

  {
    // date: 'April 20, 2021 12:00:00',
    // meal_type: 'lunch',
    amount: '2,300',
  },

  {
    // date: 'April 20, 2021 15:00:00',
    // meal_type: 'snack',
    amount: '2,500',
  },

  {
    // date: 'April 20, 2021 18:00:00',
    // meal_type: 'dinner',
    amount: '2,200',
  },

];

const seedCaloriesConsumed = () => CaloriesConsumed.bulkCreate(caloriesconsumedData);

module.exports = seedCaloriesConsumed;
