const { Review } = require('../model/Review');
const User = require('../model/User');

const ReviewController = {
    createReview: async (req, res) => {
        try {
            const review = await Review.create(req.body);
            res.status(201).json(review);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    getAllReviews: async (req, res) => {
        try {
            const reviews = await Review.findAll({ include: User });
            res.status(200).json(reviews);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    getReviewById: async (req, res) => {
        try {
            const review = await Review.findByPk(req.params.id, { include: User });
            if (!review) return res.status(404).json({ error: 'Review not found' });
            res.status(200).json(review);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    updateReview: async (req, res) => {
        try {
            const updated = await Review.update(req.body, {
                where: { id: req.params.id }
            });
            if (!updated[0]) return res.status(404).json({ error: 'Review not found' });
            const updatedReview = await Review.findByPk(req.params.id);
            res.status(200).json(updatedReview);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    deleteReview: async (req, res) => {
        try {
            const deleted = await Review.destroy({
                where: { id: req.params.id }
            });
            if (!deleted) return res.status(404).json({ error: 'Review not found' });
            res.status(204).json({ message: 'Review deleted' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = ReviewController;
