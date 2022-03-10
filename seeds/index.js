const sequelize = require('../config/connection');
const seedCalorieOutput = require('./calorieOutputData');
const seedCalorieIntake = require('./calorieIntakeData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedCalorieOutput();

  await seedCalorieIntake();

  process.exit(0);
};

seedAll();