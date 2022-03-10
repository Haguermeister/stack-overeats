const { CalorieOutput } = require('../models');

const calorieoutputData = [
  {
    date: 'April 20, 2021 07:00:00',
    time_spent: '30 minutes',
    exercise_type: 'strength',
  },

  {
    date: 'May 5, 2021 08:00:00',
    time_spent: '1 hour',
    exercise_type: 'endurance',
  },

  {
    date: 'August 23, 2021 08:30:00',
    time_spent: '30 minutes',
    exercise_type: 'balance',
  },

  {
    date: 'October 10, 2021 10:00:00',
    time_spent: '20 minutes',
    exercise_type: 'flexibility',
  },
];

const seedCalorieOutput = () => CalorieOutput.bulkCreate(calorieoutputData);

module.exports = seedCalorieOutput;
