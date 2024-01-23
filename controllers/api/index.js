const router = require('express').Router();
const userRoutes = require('./user-routes');
const surveyRoutes = require('./surveyRoutes');

router.use('/users', userRoutes);
router.use('/surveys', surveyRoutes);

module.exports = router;
