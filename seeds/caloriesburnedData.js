const { CaloriesBurned } = require('../models');

const caloriesburnedData = [
  {
    // date: 'April 20, 2021 07:00:00',
    // time_spent: '30 minutes',
    // exercise_type: 'strength',
    amount: 800,
    goal: 2000,
    user_id: 1,
  },

  {
    // date: 'May 5, 2021 08:00:00',
    // time_spent: '1 hour',
    // exercise_type: 'endurance',
    amount: 2400,
    goal: 2000,
    user_id: 2,
  },

  {
    // date: 'August 23, 2021 08:30:00',
    // time_spent: '30 minutes',
    // exercise_type: 'balance',
    amount: 2000,
    goal: 2000,
    user_id: 3,
  },

  {
    // date: 'October 10, 2021 10:00:00',
    // time_spent: '20 minutes',
    // exercise_type: 'flexibility',
    amount: 3000,
    goal: 2000,
    user_id: 4,
  },
];

const seedCaloriesBurned = () => CaloriesBurned.bulkCreate(caloriesburnedData);

module.exports = seedCaloriesBurned;
