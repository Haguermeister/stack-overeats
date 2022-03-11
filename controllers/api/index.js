const router = require('express').Router();

const userRoutes = require('./user-routes');
const caloriesBurnedRoutes = require('./calories-burned-routes');
const caloriesConsumedRoutes = require('./calories-consumed-routes');

router.use('/users', userRoutes);
router.use('/caloriesburned', caloriesBurnedRoutes);
router.use('/caloriesconsumed', caloriesConsumedRoutes);

module.exports = router;
