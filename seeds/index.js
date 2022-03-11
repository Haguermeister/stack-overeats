const sequelize = require('../config/connection');
const seedCaloriesBurned = require('./caloriesBurnedData');
const seedCaloriesConsumed = require('./caloriesConsumedData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedCaloriesBurned();

  await seedCaloriesConsumed();

  process.exit(0);
};

seedAll();