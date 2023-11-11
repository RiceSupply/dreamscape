const router = require('express').Router();
const userRoutes = require('./userRoutes');
const sleepRoutes = require('./sleepRoutes');

router.use('/users', userRoutes);
router.use('/sleep', sleepRoutes);

module.exports = router;
