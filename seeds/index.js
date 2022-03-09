const sequelize = require('../config/connection');
const seedCalorieOutput = require('./calorieOutputData');
// const seedPaintings = require('./paintingData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedCalorieOutput();

  // await seedPaintings();

  process.exit(0);
};

seedAll();