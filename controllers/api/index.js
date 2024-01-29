const router = require('express').Router();
const userRoutes = require('./user-routes');
const surveyRoutes = require('./surveyRoutes');

// add prefix of '/users' to routes created in 'user-routes.js'
router.use('/users', userRoutes);
router.use('/surveys', surveyRoutes);

module.exports = router;
