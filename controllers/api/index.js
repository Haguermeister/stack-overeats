const router = require('express').Router();

const userRoutes = require('./user-routes');
const calorieOutputRoutes = require('./calorie-output-routes');

router.use('/users', userRoutes);
router.use('/calorieoutput', calorieOutputRoutes);

module.exports = router;
