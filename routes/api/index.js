const router = require('express').Router();
const commentRoutes = require('./comment-routes');
const pizzaRoutes = require('./userThoughts-routes');

router.use('/comments', commentRoutes);
router.use('/usersThoughts', userRoutes);

module.exports = router;
