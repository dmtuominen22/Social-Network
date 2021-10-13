const router = require('express').Router();
const commentRoutes = require('./user-routes');
const pizzaRoutes = require('./thought-routes');

router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

module.exports = router;
