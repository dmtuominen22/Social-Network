const router = require('express').Router();
const commentRoutes = require('./comment-routes');
const pizzaRoutes = require('./thought-routes');

router.use('/comments', commentRoutes);
router.use('/thoughts', thoughtRoutes);

module.exports = router;
