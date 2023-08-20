const Booking = require('../model/Booking');
const User = require('../model/User');

const BookingController = {
    createBooking: async (req, res) => {
        try {
            const booking = await Booking.create(req.body);
            res.status(201).json(booking);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    getAllBookings: async (req, res) => {
        try {
            const bookings = await Booking.findAll({ include: User });
            res.status(200).json(bookings);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    getBookingById: async (req, res) => {
        try {
            const booking = await Booking.findByPk(req.params.id, { include: User });
            if (!booking) return res.status(404).json({ error: 'Booking not found' });
            res.status(200).json(booking);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    updateBooking: async (req, res) => {
        try {
            const updated = await Booking.update(req.body, {
                where: { id: req.params.id }
            });
            if (!updated[0]) return res.status(404).json({ error: 'Booking not found' });
            const updatedBooking = await Booking.findByPk(req.params.id);
            res.status(200).json(updatedBooking);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // DELETE a booking by ID
    deleteBooking: async (req, res) => {
        try {
            const deleted = await Booking.destroy({
                where: { id: req.params.id }
            });
            if (!deleted) return res.status(404).json({ error: 'Booking not found' });
            res.status(204).json({ message: 'Booking deleted' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = BookingController;
