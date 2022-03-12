const { CaloriesBurned } = require('../models');

const caloriesburnedData = [
  {
    // date: 'April 20, 2021 07:00:00',
    // time_spent: '30 minutes',
    // exercise_type: 'strength',
    amount: '1,600'
  },

  {
    // date: 'May 5, 2021 08:00:00',
    // time_spent: '1 hour',
    // exercise_type: 'endurance',
    amount: '2,400'
  },

  {
    // date: 'August 23, 2021 08:30:00',
    // time_spent: '30 minutes',
    // exercise_type: 'balance',
    amount: '2,000'
  },

  {
    // date: 'October 10, 2021 10:00:00',
    // time_spent: '20 minutes',
    // exercise_type: 'flexibility',
    amount: '3,000'
  },
];

const seedCaloriesBurned = () => CaloriesBurned.bulkCreate(caloriesburnedData);

module.exports = seedCaloriesBurned;
