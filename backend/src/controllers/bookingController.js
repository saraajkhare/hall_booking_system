const Booking = require("../models/Booking");

exports.createBooking = async (req, res) => {
    try {
        const booking = await Booking.create(req.body);
        res.status(201).json(booking);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.getBookings = async (req, res) => {
    const bookings = await Booking.findAll();
    res.json(bookings);
};

exports.updateBooking = async (req, res) => {
    const booking = await Booking.findByPk(req.params.id);
    if (!booking) return res.status(404).json({ error: "Not found" });

    await booking.update(req.body);
    res.json(booking);
};

exports.deleteBooking = async (req, res) => {
    const booking = await Booking.findByPk(req.params.id);
    if (!booking) return res.status(404).json({ error: "Not found" });

    await booking.destroy();
    res.status(204).send();
};
