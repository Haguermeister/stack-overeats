const router = require('express').Router();

const userRoutes = require('./user-routes');
const calorieOutputRoutes = require('./calorie-output-routes');
const calorieIntakeRoutes = require('./calorie-intake-routes');

router.use('/users', userRoutes);
router.use('/calorieoutput', calorieOutputRoutes);
router.use('/calorieintake', calorieIntakeRoutes);

module.exports = router;
