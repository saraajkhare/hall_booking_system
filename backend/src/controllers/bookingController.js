const Booking = require("../models/Booking");

/* CREATE */
exports.createBooking = async (req, res) => {
  try {
    console.log("Incoming body:", req.body); // 🔥 DEBUG

    const booking = await Booking.create(req.body);
    res.status(201).json(booking);
  } catch (error) {
    console.error("Create error:", error);
    res.status(500).json({ error: error.message });
  }
};

/* READ */
exports.getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.findAll({
      order: [["date", "ASC"], ["startTime", "ASC"]],
    });
    res.json(bookings);
  } catch (error) {
    console.error("Fetch error:", error);
    res.status(500).json({ error: error.message });
  }
};

/* DELETE */
exports.deleteBooking = async (req, res) => {
  try {
    const booking = await Booking.findByPk(req.params.id);
    if (!booking) return res.status(404).json({ error: "Not found" });

    await booking.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
