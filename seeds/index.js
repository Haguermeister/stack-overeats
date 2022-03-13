const sequelize = require('../config/connection');
const seedCaloriesBurned = require('./caloriesBurnedData');
const seedCaloriesConsumed = require('./caloriesConsumedData');
const seedUsers = require('./userData');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('sequelize');
  await seedUsers(); //has to go first bc its referenced by the CaloriesConsumed & CaloriesBurned Models!
  console.log('seedUsers');
  await seedCaloriesBurned();
  console.log('seedCaloriesBurned');
  await seedCaloriesConsumed();
  console.log('seedCaloriesConsumed');
  process.exit(0);
};
console.log();
console.log("RUNNING SEEDS FILE");
console.log();
seedAll();