const { CaloriesBurned } = require('../models');

const caloriesburnedData = [
  {
    // date: 'April 20, 2021 07:00:00',
    // time_spent: '30 minutes',
    // exercise_type: 'strength',
    user_id: 1,
    amount: 1600,
    goal: 2000
  },

  {
    // date: 'May 5, 2021 08:00:00',
    // time_spent: '1 hour',
    // exercise_type: 'endurance',
    user_id: 2,
    amount: 2400,
    goal: 2000
  },

  {
    // date: 'August 23, 2021 08:30:00',
    // time_spent: '30 minutes',
    // exercise_type: 'balance',
    user_id: 3,
    amount: 2000,
    goal: 2000
  },

  {
    // date: 'October 10, 2021 10:00:00',
    // time_spent: '20 minutes',
    // exercise_type: 'flexibility',
    user_id: 4,
    amount: 3000,
    goal: 2000
  },
];

const seedCaloriesBurned = () => CaloriesBurned.bulkCreate(caloriesburnedData, {individualHooks: true});

module.exports = seedCaloriesBurned;
