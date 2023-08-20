const express = require('express');
const ReviewController = require('../controllers/reviewController');

const router = express.Router();

router.post('/', ReviewController.createReview);
router.get('/', ReviewController.getAllReviews);
router.get('/:id', ReviewController.getReviewById);
router.put('/:id', ReviewController.updateReview);
router.delete('/:id', ReviewController.deleteReview);

module.exports = router;
